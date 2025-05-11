import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
// import { MobileSidebar } from '../components/MobileSidebar';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { useSelector } from 'react-redux';



export const Layout = () => {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white dark:bg-[#1f1f1f] sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      {/* <MobileSidebar /> */}

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet/>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} replace />
  );
}
