const Fallback = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen
     bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <div
        className="text-center p-8 bg-gray-800
      rounded-lg shadow-lg max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          An Unexpected Error Occurred
        </h1>
        <p className="text-gray-300 mb-6">
          We apologize for the inconvenience. It seems there was an issue
          loading the page. Please try logging in again or check back later.
        </p>
        <button
          onClick={() => (window.location.href = '/login')}
          className="px-6 py-3 bg-blue-600 text-white
           font-semibold rounded-lg shadow-md hover:bg-blue-700
            transition duration-300"
        >
          Go to Login
        </button>
        <div className="mt-6">
          <p className="text-sm text-gray-400">
            If the issue persists, please contact our support team at{' '}
            <a
              href="mailto:support@example.com"
              className="text-blue-400 underline hover:text-blue-500"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
