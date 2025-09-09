import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { MyContext } from '../../context/UserContext';
import Header from './Header';

function Admin({ children }) {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (user?.isAdmin !== 1) {
  //       navigate("/");
  //     }
  //   }, [user, navigate]);

  return (
    <div className="max-w-[1420px] mx-auto px-4 py-6">
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        {/* Sidebar */}
        
          <Header />
        
        {/* Main content */}
        <div className="container mx-auto">
          {children}
        </div>

      </div>
    </div>

  );
}

export default Admin;