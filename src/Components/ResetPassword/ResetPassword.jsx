import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../Api';

const ResetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await resetPassword('resetPassword', { password, email });
        setMessage('Password reset successful!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div
      className="flex flex-col items-center
    justify-center min-h-screen bg-gray-900 text-white"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border
               border-gray-700 rounded bg-gray-700
                text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border
               border-gray-700 rounded bg-gray-700
                text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600
             text-white font-medium py-2 px-4 rounded
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center
                ${
                  message.includes('successful')
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
