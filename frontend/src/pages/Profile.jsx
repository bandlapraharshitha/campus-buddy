

// import { useState } from "react";

// const Profile = ({ role = "student" }) => {
//   const [profile, setProfile] = useState({
//     name: "Alex Johnson",
//     email: "alex.johnson@alliance.edu",
//     course: role === "student" ? "Computer Science" : "",
//     year: role === "student" ? "3rd Year" : "",
//     department: role === "teacher" ? "Computer Science Department" : "",
//     phone: "",
//     avatar: ""
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfile({ ...profile, avatar: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveAvatar = () => {
//     setProfile({ ...profile, avatar: "" });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
//       <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-12">
//         {/* Avatar */}
//         <div className="flex flex-col items-center mb-10">
//           <label htmlFor="avatarUpload" className="cursor-pointer">
//             <img
//               src={profile.avatar || "https://via.placeholder.com/150"}
//               alt="avatar"
//               className="w-40 h-40 rounded-full border-4 border-black object-cover hover:opacity-80 transition"
//             />
//           </label>
//           <input
//             type="file"
//             id="avatarUpload"
//             accept="image/*"
//             className="hidden"
//             onChange={handleAvatarChange}
//           />

//           {/* Remove button */}
//           {profile.avatar && (
//             <button
//               onClick={handleRemoveAvatar}
//               className="mt-3 text-sm text-gray-600 underline hover:text-black transition"
//             >
//               Remove Photo
//             </button>
//           )}

//           <h1 className="text-3xl font-bold mt-5">Profile</h1>
//           <p className="text-sm text-gray-500">Update your details below</p>
//         </div>

//         {/* Form in 2-column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//             />
//           </div>

//           {role === "student" ? (
//             <>
//               {/* Course */}
//               <div>
//                 <label className="block text-sm font-medium mb-1">Course</label>
//                 <input
//                   type="text"
//                   name="course"
//                   value={profile.course}
//                   onChange={handleChange}
//                   className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//                 />
//               </div>

//               {/* Year */}
//               <div>
//                 <label className="block text-sm font-medium mb-1">Year</label>
//                 <input
//                   type="text"
//                   name="year"
//                   value={profile.year}
//                   onChange={handleChange}
//                   className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//                 />
//               </div>
//             </>
//           ) : (
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Department</label>
//               <input
//                 type="text"
//                 name="department"
//                 value={profile.department}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//               />
//             </div>
//           )}

//           {/* Phone */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Phone (optional)</label>
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               onChange={handleChange}
//               placeholder="Enter phone number"
//               className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="mt-10">
//           <button className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition text-lg shadow">
//             Save Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";

const Profile = () => {
  const { user } = useAuthStore(); // ✅ get logged-in user from Zustand

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
    department: "",
    phone: "",
    avatar: ""
  });

  // ✅ Load user data when component mounts
  useEffect(() => {
    if (user) {
      setProfile({
        name: user.username || "",
        email: user.email || "",
        course: user.role === "student" ? user.course || "" : "",
        year: user.role === "student" ? user.year || "" : "",
        department: user.role === "teacher" ? user.department || "" : "",
        phone: user.phone || "",
        avatar: user.avatar || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setProfile({ ...profile, avatar: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-12">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-10">
          <label htmlFor="avatarUpload" className="cursor-pointer">
            <img
              src={profile.avatar || "https://via.placeholder.com/150"}
              alt="avatar"
              className="w-40 h-40 rounded-full border-4 border-black object-cover hover:opacity-80 transition"
            />
          </label>
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />

          {/* Remove button */}
          {profile.avatar && (
            <button
              onClick={handleRemoveAvatar}
              className="mt-3 text-sm text-gray-600 underline hover:text-black transition"
            >
              Remove Photo
            </button>
          )}

          <h1 className="text-3xl font-bold mt-5">Profile</h1>
          <p className="text-sm text-gray-500">Update your details below</p>
        </div>

        {/* Form in 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
            />
          </div>

          {user?.role === "student" ? (
            <>
              {/* Course */}
              <div>
                <label className="block text-sm font-medium mb-1">Course</label>
                <input
                  type="text"
                  name="course"
                  value={profile.course}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="text"
                  name="year"
                  value={profile.year}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
                />
              </div>
            </>
          ) : (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
              />
            </div>
          )}

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Phone (optional)</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none p-2 bg-transparent"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-10">
          <button className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition text-lg shadow">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
