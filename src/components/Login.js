import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilities/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const password = useRef();
  const email = useRef();
  const name = useRef();

  const dispatch= useDispatch();

  const handleValidation = () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
    if (message !== null) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://media.licdn.com/dms/image/D5635AQFsN8dtKR2mww/profile-framedphoto-shrink_400_400/0/1711261850529?e=1719046800&v=beta&t=y-BOJs4GLKqSayrihV0JR1bWAh-YdocG_OCdyWwfCE8"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    console.log(errorMessage);
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute bg-fixed">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[26rem] absolute p-10 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="py-4 text-white font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600 focus-within: text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 focus-within: text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 focus-within: text-white"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-2 text-white bg-red-700 w-full rounded-lg"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white my-2 py-4 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : "Already have an account? LogIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
