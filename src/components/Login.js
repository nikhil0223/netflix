import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignInForm,setIsSignInForm] =useState(true);
    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="bgImage"
                />
            </div>
            <form className="w-[26rem] absolute p-10 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
                <h1 className="py-4 text-white font-bold text-3xl">{isSignInForm?  "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&(<input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-600 border"/>)}
                <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600 border"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <button type="submit" className="p-4 my-2 text-white bg-red-700 w-full rounded-lg">{isSignInForm?  "Sign In" : "Sign Up"}</button>
                <p className="text-white my-2 py-4 cursor-pointer" onClick={toggleSignIn}
                >{isSignInForm ? "New to Netflix? SignUp Now" :  "Already have an account? LogIn Now"}</p>

            </form>
        </div>
    )
};

export default Login;