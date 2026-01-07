import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="layout">
        <Sidebar isOpen={sidebarOpen} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
