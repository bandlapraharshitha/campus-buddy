// import {
//   Home,
//   Calendar,
//   MessageCircle,
//   Users,
//   Bell,
//   User,
//   Settings,
// } from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom";

// const items = [
//   { title: "Home", url: "/dashboard", icon: Home },
//   { title: "Events", url: "/dashboard/events", icon: Calendar },
//   { title: "Chats", url: "/dashboard/chats", icon: MessageCircle },
//   { title: "Groups", url: "/dashboard/groups", icon: Users },
//   { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
//   { title: "Profile", url: "/dashboard/profile", icon: User },
//   { title: "Settings", url: "/dashboard/settings", icon: Settings },
// ];

// export function AppSidebar() {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   // Simulate collapsed state without useSidebar hook
//   const isCollapsed = window.innerWidth < 768; // Example: collapse on small screens

//   const isActive = (path) => {
//     if (path === "/dashboard") {
//       return currentPath === "/dashboard" || currentPath === "/dashboard/";
//     }
//     return currentPath.startsWith(path);
//   };

//   return (
//     <div
//       className={`
//         ${isCollapsed ? "w-14" : "w-64"}
//         h-screen bg-gray-800 text-gray-100 border-r border-gray-700
//         flex flex-col transition-all duration-300
//       `}
//     >
//       <div className="p-4 flex-1">
//         <div className="mb-4">
//           <h3
//             className={`
//               text-xs font-semibold uppercase tracking-wider
//               ${isCollapsed ? "hidden" : "block"}
//               text-gray-400
//             `}
//           >
//             Navigation
//           </h3>
//         </div>
//         <nav className="space-y-1">
//           {items.map((item) => (
//             <NavLink
//               key={item.title}
//               to={item.url}
//               end={item.url === "/dashboard"}
//               className={({ isActive: active }) =>
//                 `
//                 flex items-center p-2 rounded-md
//                 text-sm font-medium
//                 hover:bg-gray-700 hover:text-white
//                 ${active ? "bg-gray-700 text-white" : "text-gray-300"}
//                 ${isCollapsed ? "justify-center" : ""}
//               `
//               }
//             >
//               <item.icon className="h-5 w-5" />
//               {!isCollapsed && <span className="ml-3">{item.title}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }



// import {
//   Home,
//   Calendar,
//   MessageCircle,
//   Users,
//   Bell,
//   User,
//   Settings,
// } from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom";

// const items = [
//   { title: "Home", url: "/dashboard", icon: Home },
//   { title: "Events", url: "/dashboard/events", icon: Calendar },
//   { title: "Chats", url: "/dashboard/chats", icon: MessageCircle },
//   { title: "Groups", url: "/dashboard/groups", icon: Users },
//   { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
//   { title: "Profile", url: "/dashboard/profile", icon: User },
//   { title: "Settings", url: "/dashboard/settings", icon: Settings },
// ];

// export function AppSidebar({ isCollapsed }) { // Accept isCollapsed as a prop
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const isActive = (path) => {
//     if (path === "/dashboard") {
//       return currentPath === "/dashboard" || currentPath === "/dashboard/";
//     }
//     return currentPath.startsWith(path);
//   };

//   return (
//     <div
//       className={`
//         ${isCollapsed ? "w-14" : "w-64"}
//         h-screen bg-gray-800 text-gray-100 border-r border-gray-700
//         flex flex-col transition-all duration-300
//       `}
//     >
//       <div className="p-4 flex-1">
//         <div className="mb-4">
//           <h3
//             className={`
//               text-xs font-semibold uppercase tracking-wider
//               ${isCollapsed ? "hidden" : "block"}
//               text-gray-400
//             `}
//           >
//             Navigation
//           </h3>
//         </div>
//         <nav className="space-y-1">
//           {items.map((item) => (
//             <NavLink
//               key={item.title}
//               to={item.url}
//               end={item.url === "/dashboard"}
//               className={({ isActive: active }) =>
//                 `
//                 flex items-center p-2 rounded-md
//                 text-sm font-medium
//                 hover:bg-gray-700 hover:text-white
//                 ${active ? "bg-gray-700 text-white" : "text-gray-300"}
//                 ${isCollapsed ? "justify-center" : ""}
//               `
//               }
//             >
//               <item.icon className="h-5 w-5" />
//               {!isCollapsed && <span className="ml-3">{item.title}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }


import {
  Home,
  Calendar,
  MessageCircle,
  Users,
  Bell,
  User,
  Settings,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Events", url: "/dashboard/events", icon: Calendar },
  { title: "Chats", url: "/dashboard/chats", icon: MessageCircle },
  { title: "Groups", url: "/dashboard/groups", icon: Users },
  { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar({ isCollapsed, toggleSidebar }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`
        ${isCollapsed ? "w-14" : "w-64"}
        h-screen bg-gray-800 text-gray-100 border-r border-gray-700
        flex flex-col transition-all duration-300
      `}
    >
      <div className="p-4 flex-1">
        <div className="mb-4">
          <h3
            className={`
              text-xs font-semibold uppercase tracking-wider
              ${isCollapsed ? "hidden" : "block"}
              text-gray-400
            `}
          >
            Navigation
          </h3>
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end={item.url === "/dashboard"}
              onClick={toggleSidebar} // Add onClick handler here
              className={({ isActive: active }) =>
                `
                flex items-center p-2 rounded-md
                text-sm font-medium
                hover:bg-gray-700 hover:text-white
                ${active ? "bg-gray-700 text-white" : "text-gray-300"}
                ${isCollapsed ? "justify-center" : ""}
              `
              }
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}