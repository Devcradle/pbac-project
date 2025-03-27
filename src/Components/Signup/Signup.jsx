import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import icon from '../../assets/nik-781AooDi4H0-unsplash.jpg';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
            <div className="flex flex-col items-center justify-center w-full max-w-xs p-6 bg-gray-800 rounded-md shadow-md">
                <div className='flex flex-row items-center w-full justify-around mb-8'>
                    <img src={icon} alt="Signup icon" className='w-12 h-12 rounded-lg'/>
                    <h2 className="text-3xl font-semibold text-center font-mono">Sign Up</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <input
                            type="text"
                            placeholder="Username"
                            {...register('username', { required: true })}
                            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.username && <span className="text-red-500">Username is required</span>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: true })}
                            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-red-500">Password is required</span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
