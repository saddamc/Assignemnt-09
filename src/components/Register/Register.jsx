import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        const terms = form.get('terms')
        console.log(name, email, photo, password, terms);

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters !');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Must have an Uppercase letter in the password');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Must have an Lowercase letter in the password');
            return;
        }


        setRegisterError('');
        setSuccess('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('User Created Successfully !')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                className="input input-bordered" type="text" name="name"
                                placeholder="Your Name" id="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            <br />
                            <div className="flex gap-2">
                                <input type="checkbox" name="terms" id="terms" required />
                                <label htmlFor="terms">Accept our Terms & Condition</label>
                            </div>
                        </div>
                        <div className="form-control mt-1">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Link className="mx-auto mt-1 " to="/login"><p>Already have account? Please <button className="border-b border-blue-600 text-blue-600 font-bold">Login</button> </p></Link>
                    </form>
                    {
                        registerError && <p className="text-red-700 mx-auto mb-2">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 mx-auto mb-2">{success}</p>
                    }

                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;