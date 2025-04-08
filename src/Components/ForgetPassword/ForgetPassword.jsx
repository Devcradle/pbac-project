import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgetPassword, forgetPasswordOtp } from '../../Api';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgetPasswordOtp('forgetPasswordOtp', { email });
      setMessage('If this email is registered, an OTP has been sent.');
      setIsOtpSent(true);
      setResendTimer(60);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgetPassword('forgetpassword', { code: otp, email });
      navigate('/resetPassword', { state: { email } });
      setMessage('OTP verified successfully. You can now reset your password.');
    } catch (error) {
      setMessage('OTP mismatched');
    }
  };

  const handleResendOtp = async () => {
    try {
      await forgetPasswordOtp('forgetPasswordOtp', { email });
      setMessage('A new OTP has been sent to your email.');
      setResendTimer(60);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen
     bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-xs">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isOtpSent ? 'Verify OTP' : 'Forgot Password'}
        </h2>
        <p className="text-gray-400 text-center mb-4">
          {isOtpSent
            ? 'Enter the OTP sent to your email to verify your account.'
            : 'Enter your email address to reset your password.'}
        </p>
        <form onSubmit={isOtpSent ? handleOtpSubmit : handleEmailSubmit}>
          {!isOtpSent ? (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border
                 border-gray-600 rounded-md shadow-sm bg-gray-700
                  text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          ) : (
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-300"
              >
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border
                 border-gray-600 rounded-md shadow-sm bg-gray-700
                  text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the OTP"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
             text-white font-semibold py-2 px-4 rounded-md
              transition duration-300"
          >
            {isOtpSent ? 'Verify OTP' : 'Send Reset Link'}
          </button>
        </form>
        {isOtpSent && (
          <button
            onClick={handleResendOtp}
            disabled={resendTimer > 0}
            className={`w-full mt-4 ${
              resendTimer > 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-blue-700 text-white'
            } font-semibold py-2 px-4 rounded-md transition duration-300`}
          >
            {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
          </button>
        )}
        {message && (
          <p className="mt-4 text-green-400 text-center text-sm">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
