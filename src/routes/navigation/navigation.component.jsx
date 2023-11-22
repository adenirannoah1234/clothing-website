import { Outlet } from 'react-router';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am navigation</h1>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigation;
