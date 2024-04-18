import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


const Login = () => {
    const { signIn, signInWithGoogle, githubLogin } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location login', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegisterError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successfully !')
                e.target.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    // const handleForgetPassword = () => {
    //     const email = emailRef.current.value;
    //     if (!email) {
    //         console.log('send reset email', emailRef.current.value)
    //         return;
    //     }
    //     else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //         console.log('please Write a valid email')
    //         return;
    //     }
    //     // send validatin email
    //     sendPasswordResetEmail(auth, email)
    //         .then(() => {
    //             alert('Please check your email')
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })


    // }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                // ref={emailRef}
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                <span className="absolute mt-4 ml-1" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                            </div>
                            {/* <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>


                    </form>
                    {
                        registerError && <p className="text-red-700 mx-auto mb-2">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 mx-auto mb-2">{success}</p>
                    }
                    <hr></hr>
                    <p className="text-sm font-bold text-center justify-center ">Continue with</p>
                    <div className=" bg-slate-500 min-w-[255px] min-h-[45px] items-center pt-2 rounded-md mx-auto mb-4 space-y-2 justify-center text-center">

                        <div className="flex gap-4 justify-center">
                            <div>
                                <button onClick={handleGoogleSignIn} className="bg-yellow-700 px-2 py-1 font-semibold text-white rounded-md flex items-center">
                                    <FcGoogle></FcGoogle>
                                    <span className="ml-1">Google</span></button>
                            </div>
                            <div>
                                <button onClick={handleGithubSignIn} className="bg-slate-600 px-2 py-1 font-semibold text-white rounded-md flex items-center">
                                    <FaGithub></FaGithub>
                                    <span className="ml-1">GitHub</span></button>
                            </div>
                        </div>
                    </div>
                    <Link className="mx-auto font-bold shadow-md shadow-black text-white bg-black px-8 py-1 rounded-md mb-4" to="/register"><p>Create New Account</p></Link>




                </div>


            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;