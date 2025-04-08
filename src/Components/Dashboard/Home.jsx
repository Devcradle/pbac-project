import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllItems, getAllRoles, getUser, regenerateToken } from '../../Api';
import { useDispatch } from 'react-redux';
import { getRolelist } from '../../utils/Store/RoleSlice';
import { getItemlist } from '../../utils/Store/ItemSlice';
import { getUserlist } from '../../utils/Store/UserSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCalls = async () => {
      const roleData = await getAllRoles('');
      dispatch(getRolelist(roleData?.data?.data));
      const itemData = await getAllItems('');
      dispatch(getItemlist(itemData?.data?.data));
      const userData = await getUser('');
      dispatch(getUserlist(userData?.data?.data));
    };
    apiCalls();
  }, [dispatch]);

  useEffect(() => {
    const handleToken = async () => {
      try {
        await regenerateToken('regenerateToken');
      } catch (error) {
        navigate('/login', { replace: true });
      }
    };

    const setUpInterval = () => {
      handleToken();
      const intervalId = setInterval(handleToken, 15 * 60 * 1000);
      return () => clearInterval(intervalId);
    };

    const cleanup = setUpInterval();
    return cleanup;
  }, []);

  return (
    <>
      <div
        className="bg-gradient-to-r from-gray-800 via-gray-900
      to-black text-white text-center py-10 min-h-screen px-8"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-lg mb-6">
          Explore insights, manage your tasks, and stay productive with our
          intuitive interface.
        </p>
        <p className="text-md text-gray-400">
          This dashboard is designed to provide you with real-time analytics,
          task management tools, and a seamless user experience. Stay organized
          and achieve your goals efficiently.
        </p>
        <div className="mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700
            text-white font-bold py-2 px-4 rounded mx-2"
            onClick={() => navigate('/dashboard/itemtable')}
          >
            Get Started
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700
           text-white font-bold py-2 px-4 rounded mx-2"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
