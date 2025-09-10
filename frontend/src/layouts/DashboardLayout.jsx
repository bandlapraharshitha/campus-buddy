// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import { AppSidebar } from "../components/AppSidebar";
// import { Menu, X } from "lucide-react";

// const DashboardLayout = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       setIsSidebarOpen(!mobile); // sidebar open by default on desktop, closed on mobile
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen flex w-full bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
//           ${isMobile 
//             ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") 
//             : "translate-x-0"}
//           ${isMobile ? "w-4/5 max-w-xs" : "w-64"} bg-white shadow-lg`}
//       >
//         <AppSidebar isCollapsed={false} />
//       </div>

//       {/* Dark overlay (only on mobile when sidebar open) */}
//       {isMobile && isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Content Area */}
//       <div className={`flex-1 flex flex-col ${isMobile ? "" : "ml-64"}`}>
//         {/* Header */}
//         <header className="h-14 flex items-center border-b border-gray-200 bg-white px-4 sticky top-0 z-20">
//           {/* Show toggle button only on mobile */}
//           {isMobile && (
//             <button
//               onClick={toggleSidebar}
//               className="mr-4 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
//             >
//               {isSidebarOpen ? (
//                 <X className="h-5 w-5 text-gray-600" />
//               ) : (
//                 <Menu className="h-5 w-5 text-gray-600" />
//               )}
//             </button>
//           )}
//           <h1 className="text-lg font-semibold text-gray-900">
//             Alliance University
//           </h1>
//         </header>

//         {/* Main content */}
//         <main className="flex-1 overflow-auto p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/AppSidebar";
import { Menu, X } from "lucide-react";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const isCollapsed = isMobile && !isSidebarOpen;

  return (
    <div className="min-h-screen flex w-full bg-gray-100">
      <div
        className={`
          fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
          ${isMobile
            ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full")
            : "translate-x-0"}
          ${isMobile ? "w-4/5 max-w-xs" : "w-64"}
          bg-white shadow-lg
        `}
      >
        {/* Pass toggleSidebar as a prop */}
        <AppSidebar isCollapsed={isCollapsed} toggleSidebar={isMobile ? toggleSidebar : null} />
      </div>

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isMobile ? "" : "ml-64"}`}>
        <header className="h-14 flex items-center border-b border-gray-200 bg-white px-4 sticky top-0 z-20">
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="mr-4 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {isSidebarOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          )}
          <h1 className="text-lg font-semibold text-gray-900">
            Alliance University
          </h1>
        </header>

        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;