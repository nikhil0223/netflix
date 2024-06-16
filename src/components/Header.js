import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO_URL } from "../utilities/constants";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-6 pr-8 py-2 z-10 flex w-screen justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="h-10 w-10 mx-6 my-3 flex">
          <img className="rounded-lg" alt="user" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-sm px-1"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
