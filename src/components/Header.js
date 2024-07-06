import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utilities/constants";
import { toggleGptSearch } from "../utilities/gptSlice";
import { changeLanguage } from "../utilities/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

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
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black px-6 pr-8 py-2 z-10 flex flex-col md:flex-row md:flex justify-between w-[100%]">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="h-10 md:mx-0 my-3 flex justify-between">
          {gptSearch && (
            <select
              className="bg-black text-white rounded-lg my-[4px]"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="w-20 bg-purple-600 font-bold text-sm mx-5 text-white rounded-lg my-[2px]"
            onClick={handleGptSearch}
          >
            {!gptSearch ? "Search" : "Homepage"}
          </button>
          <div className="ml-4 relative group cursor-pointer w-16">
          <img
              className="hidden md:inline-block rounded-lg w-12 h-10"
              alt="user"
              src={user?.photoURL}
            />
            <div 
                className="absolute text-white font-bold text-[12px] hidden group-hover:block text-center">
              <p className="mt-2"
                onClick={handleSignOut}
              >
                Sign Out
              </p>
            </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;
