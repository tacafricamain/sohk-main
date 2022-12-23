import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import dynamic from "next/dynamic";
import {
    auth,
    // provider
} from '../firebaseConfig';
// import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react';

import { useRouter } from 'next/router';

let message = ''


const signUp = async ( email, password , setMessage) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password); 
        setMessage('success')
        
    } catch (error) {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            setMessage('this user exists, please sign in instead')
        } else {
            setMessage('an error occurred! please try after sometime')
        }
    }

};

const signIn = async ( email, password, setMessage ) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('Success!')

    } catch (error) {
        if (error.message == 'Firebase: Error (auth/user-not-found).') {
            setMessage('this user does not exist! please signUp')
        } else {
            setMessage(`an error occurred! please try after sometime ${error.message}`)
            
        }
    }
};

// const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).catch((error) => alert(error.message));
// };

const logout = () => {
    signOut(auth);
};

const CurrentUser = () => {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [showSelectedAuth, setshowSelectedAuth] = useState(true)
    const [ popUpmessage, setPopUpMessage ] = useState('')


    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        // e.preventDefault
        setValue((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    if (loading) {
        return (
                <div className='pt-28'>
                    <p>Initialising User...</p>
                </div>
        );
    }
    if (error) {
        return (
                <div className='pt-28'>
                    <p>Error: {error}</p>
                </div>
        );
    }
    if (user) {
        router.push('/registrationForm');
        console.log(user)
        return (
                <div className='pt-28'>
                    <p>Current User: {
                        user.email
                    }</p>
                    <button onClick={logout}>Log out</button>
                </div>
        );
    }


    return (

            <div className="flex justify-center items-center min-h-screen bg-indigo-700">
                <div className="card transition-all h-auto p-4 w-96 relative bg-white rounded-lg">
                    <div className="user h-full w-full flex">
                        {
                        showSelectedAuth ? (
                            <div className="signup w-full transition-all">
                                {/* <p className="text-xl font-serif">Sign up</p>
                                <button className="font-semibold text-sm border border-gray-600 rounded-lg w-full h-12 mt-3 outline-none">
                                    <i className="mr-2 text-gray-600 fa fa-google"></i>Sign Up With Google</button> */}
                                    {/* <hr className="mt-5" /> */}
                                    {/* <div className="relative"> <input className="text-sm border border-indigo-100 px-2 rounded-lg w-full h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="text" placeholder="Leslie Alexander" /> <span className="text-gray-800 text-sm absolute top-2 left-0">Name</span> </div> */}
                                <div className="relative">
                                    <input className="text-sm border border-indigo-100 px-2 rounded-lg w-full h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="text" name='email' value={value.email} placeholder="example@mail.com" onChange={ handleValueChange } />
                                    <span className="text-gray-800 text-sm absolute top-2 left-0" >Email</span>
                                </div>
                                <div className="relative">
                                    <input className="signup_pass text-sm border border-indigo-100 px-2 rounded-lg w-full pr-12 h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="password" name='password' value={value.password} onChange={ handleValueChange } placeholder="at least 8 characters"/>
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">Password</span>
                                    <span className=" text-gray-800 h-6 cursor-pointer bg-gray-100 flex justify-center items-center absolute right-3 top-10 w-6 border border-gray-400 rounded-full ">
                                        <i className="signup_eye fa fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className=" mt-5 flex gap-2">
                                    {/* <span className="click_signup h-5 w-5 border flex justify-center items-center rounded cursor-pointer border-gray-300">
                                        <i className="fa fa-check text-white"></i>
                                    </span> */}
                                        <p className='text-red-600'>{ popUpmessage }</p>
                                    {/* <p className="text-sm text-gray-700">I agree with
                                        <a className="text-blue-500" href="#">Terms</a>
                                        and
                                        <a className="text-blue-500" href="#">Privacy</a>.</p> */}
                                </div>
                                <button className="signup_btn mt-5 h-12 w-full outline-none bg-blue-500 rounded-lg text-sm text-white hover:bg-blue-600 transition-all"
                                    onClick={() => signUp( value.email, value.password, setPopUpMessage )} >Sign up</button>
                                <hr className="mt-5"/>
                                <p className="text-sm text-center text-gray-800 mt-6">Already have an account?
                                    <br/>
                                    <a className="login_page text-blue-600 cursor-pointer"
                                        onClick={
                                            () => setshowSelectedAuth(!showSelectedAuth)
                                    }>Log in</a>
                                </p>
                            </div>
                        ) : (
                            <div className="signin w-full transition-all">
                                {/* <p className="text-xl font-serif">Log in</p>
                                <button className="font-semibold text-sm border border-gray-600 rounded-lg w-full h-12 mt-3 outline-none">
                                    <i className="mr-2 text-gray-600 fa fa-google"></i>Log in With Google</button>
                                <hr className="mt-5"/> */}
                                <div className="relative">
                                            <input className="text-sm border border-indigo-100 px-2 rounded-lg w-full h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="text" placeholder="example@mail.com" name='email' value={value.email} onChange={ handleValueChange } />
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">
                                        Email</span>
                                </div>
                                <div className="relative">
                                    <input className="login_pass text-sm border border-indigo-100 px-2 rounded-lg w-full pr-12 h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="password" placeholder="at least 8 characters" name='password' value={value.password} onChange={ handleValueChange }/>
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">Password</span>
                                    <span className="text-gray-800 h-6 cursor-pointer bg-gray-100 flex justify-center items-center absolute right-3 top-10 w-6 border border-gray-400 rounded-full ">
                                        <i className="login_eye fa fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className=" mt-5 flex gap-2">
                                    {/* <span className="click_login h-5 w-5 border flex justify-center items-center rounded cursor-pointer border-gray-300">
                                        <i className="fa fa-check text-white"></i>
                                    </span> */}
                                            <p className='text-red-600'>{ popUpmessage}</p>
                                    {/* <p className="text-sm text-gray-700">Remember Me</p> */} </div>
                                <button className="signin_btn mt-5 h-12 w-full outline-none bg-blue-500 rounded-lg text-sm text-white hover:bg-blue-600 transition-all"
                                    onClick={() => signIn( value.email, value.password, setPopUpMessage )} >Log in</button>
                                {/* <p className="mt-4 text-center text-blue-500">Forgot Password?</p> */}
                                <hr className="mt-5"/>
                                <p className="text-sm text-center text-gray-800 mt-6">
                                    {`Don't have an account? `}<br/>
                                    <a className="signup_page text-blue-600 cursor-pointer"
                                        onClick={
                                            () => setshowSelectedAuth(!showSelectedAuth)
                                    }>Sign up</a>
                                </p>
                            </div>
                        )
                    } </div>
                </div>
            </div>

    );
};
export default dynamic(() => Promise.resolve(CurrentUser), {
    ssr: false,
  });
// export default CurrentUser

