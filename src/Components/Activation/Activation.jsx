import { useState, useEffect } from 'react';
import { activateUser } from '../../Api';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Activation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?._id;
  const otpSentMessage = location.state?.otpSentMessage;
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (otpSentMessage) {
      setMessage(otpSentMessage);
    }
  }, [otpSentMessage]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await activateUser('activate', { code: otp, _id: id });
      if (response?.data?.data.isActivated) {
        setIsActivated(true);
        setMessage('Your account has been successfully activated!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage('Activation failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center
     justify-center bg-gray-900 text-white"
    >
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Account Activation
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              className="w-full p-2 border border-gray-700
               rounded bg-gray-700 text-white
               focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600
             hover:bg-blue-700 rounded text-white font-semibold"
          >
            Activate
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-2 rounded 
                text-center ${isActivated ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Activation;
