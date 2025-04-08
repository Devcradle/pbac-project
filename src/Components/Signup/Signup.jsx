import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import icon from '../../assets/nik-781AooDi4H0-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import { activateOtp, signUp } from '../../Api';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const [, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async (data) => {
    try {
      const userData = await signUp('', data);
      await activateOtp('actOtp', { _id: userData?.data?.data._id });
      navigate('/activate', {
        state: {
          _id: userData?.data?.data._id,
          otpSentMessage: 'Otp sent successfully'
        }
      });
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const getErrorMessage = () => {
    if (errors.username) return 'Username is required';
    if (errors.email) return 'Email is required';
    if (errors.password) return 'Password is required';
    return null;
  };

  return (
    <div
      className="min-h-screen flex items-center
     justify-center bg-gray-900 text-white p-4"
    >
      <div
        className="flex flex-col items-center
       justify-center w-full max-w-xs p-6 bg-gray-800 rounded-md shadow-md"
      >
        <div className="flex flex-row items-center w-full justify-around mb-8">
          <img src={icon} alt="Signup icon" className="w-12 h-12 rounded-lg" />
          <h2 className="text-3xl font-semibold text-center font-mono">
            Sign Up
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center"
        >
          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder="Username"
              {...register('username', { required: true })}
              className="w-full p-3 bg-gray-700
              text-white rounded-md focus:outline-none
               focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="w-full p-3 bg-gray-700 text-white
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="w-full p-3 bg-gray-700 text-white
               rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {getErrorMessage() && (
            <span className="text-red-500 mb-4 w-full text-center">
              {getErrorMessage()}
            </span>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600
             text-white font-semibold py-3 px-4 rounded-md
              transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
