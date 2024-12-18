import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const { login, isLoggingIn } = useAuthStore();

    const validateForm = () => {
        const newErrors = {};
        
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email";
        
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await login({ email, password });
        }
    };

    return (
        <div className='h-screen w-full hero-bg'>
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link to={"/"}>
                    <img src='/netflix-logo.png' alt='logo' className='w-52' />
                </Link>
            </header>

            <div className='flex justify-center items-center mt-20 mx-3'>
                <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
                    <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>

                    <form className='space-y-4' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
                                Email
                            </label>
                            <input
                                type='email'
                                className={'w-full px-3 py-2 mt-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring ' +
                                    (errors.email ? 'border-red-500' : 'border-gray-700')}
                                placeholder='you@example.com'
                                id='email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) {
                                        setErrors({...errors, email: null});
                                    }
                                }}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
                                Password
                            </label>
                            <input
                                type='password'
                                className={'w-full px-3 py-2 mt-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring ' +
                                    (errors.password ? 'border-red-500' : 'border-gray-700')}
                                placeholder='••••••••'
                                id='password'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) {
                                        setErrors({...errors, password: null});
                                    }
                                }}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type='submit'
                            disabled={isLoggingIn}
                            className='w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isLoggingIn ? "Logging in..." : "Login"}
                        </button>

                        <p className='text-gray-300 text-center'>
                            Don't have an account?{" "}
                            <Link to='/signup' className='text-red-500 hover:underline'>
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
