import Header from './Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Dashboard;
