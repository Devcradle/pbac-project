import { useState } from 'react';

const Auth = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    if (otp === '123456') {
      setMessage('Signup successful!');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center
     justify-center bg-gray-900 text-white"
    >
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Verify Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-lg font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              className="w-full p-2 border border-gray-700
               rounded bg-gray-900 text-white focus:outline-none
                focus:border-blue-500"
              placeholder="123456"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700
             rounded text-white font-semibold transition duration-200"
          >
            Verify OTP
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-lg text-orange-600 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
