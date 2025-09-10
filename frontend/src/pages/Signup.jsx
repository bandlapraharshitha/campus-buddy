// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { User, Mail, Lock, BookOpen, Briefcase } from "lucide-react";
// import AllianceLogo from "../components/AllianceLogo";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "student",
//     course: "",
//     year: "",
//     department: "",
//   });

//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: -10, scale: 0.95 },
//   };

//   const fieldAnimation = {
//     hidden: { opacity: 0, y: 15 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.4 },
//     }),
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
//       {/* Left Section */}
//       <motion.div
//         className="flex-1 flex flex-col p-8 bg-indigo-600 relative overflow-hidden"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-600 opacity-90"></div>

//         {/* Logo */}
//         <motion.div
//           className="relative z-10 mb-12"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <AllianceLogo />
//         </motion.div>

//         {/* Branding */}
//         <motion.div
//           className="relative z-10 flex flex-col items-start justify-center flex-1 px-4"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h1 className="text-5xl font-extrabold mb-4 text-white">
//             Join Alliance University
//           </h1>
//           <p className="text-lg text-indigo-200 max-w-md">
//             Begin your academic journey with us. Create your account and unlock
//             access to world-class education and opportunities.
//           </p>
//         </motion.div>

//         {/* Background image */}
//         <motion.div
//           className="absolute inset-0 opacity-30 pointer-events-none"
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.35 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         >
//           <img
//             src="https://education.indianexpress.com/_next/image?url=https%3A%2F%2Feducation.indianexpress.com%2Fstorage%2Fimages%2Falliance-universityheader_1716448288.jpg&w=2048&q=75"
//             alt="Alliance University Campus"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Right Section - Bigger Form */}
//       <motion.div
//         className="flex-1 flex items-center justify-center p-10 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//       >
//         <motion.div
//           className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-lg space-y-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Create Your Account
//             </h2>
//             <p className="text-gray-600 text-base">
//               Fill in your details to sign up
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Username */}
//             <motion.div
//               custom={0}
//               initial="hidden"
//               animate="visible"
//               variants={fieldAnimation}
//             >
//               <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                 <User className="w-5 h-5 text-gray-400 mr-3" />
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent outline-none text-base"
//                   placeholder="Username"
//                 />
//               </div>
//             </motion.div>

//             {/* Email */}
//             <motion.div
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={fieldAnimation}
//             >
//               <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                 <Mail className="w-5 h-5 text-gray-400 mr-3" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent outline-none text-base"
//                   placeholder="Email"
//                 />
//               </div>
//             </motion.div>

//             {/* Passwords */}
//             <motion.div
//               custom={2}
//               initial="hidden"
//               animate="visible"
//               variants={fieldAnimation}
//               className="grid grid-cols-2 gap-4"
//             >
//               <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                 <Lock className="w-5 h-5 text-gray-400 mr-3" />
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent outline-none text-base"
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                 <Lock className="w-5 h-5 text-gray-400 mr-3" />
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent outline-none text-base"
//                   placeholder="Confirm"
//                 />
//               </div>
//             </motion.div>

//             {/* Role Dropdown */}
//             <motion.div
//               custom={3}
//               initial="hidden"
//               animate="visible"
//               variants={fieldAnimation}
//               className="relative"
//             >
//               <div
//                 className="flex items-center border rounded-lg px-4 py-3 shadow-sm cursor-pointer bg-white focus-within:ring-2 focus-within:ring-indigo-500"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === "role" ? null : "role")
//                 }
//               >
//                 <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
//                 <span className="text-base text-gray-700">
//                   {formData.role === "student" ? "Student" : "Teacher"}
//                 </span>
//               </div>
//               <AnimatePresence>
//                 {openDropdown === "role" && (
//                   <motion.ul
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={dropdownVariants}
//                     transition={{ duration: 0.2 }}
//                     className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-20"
//                   >
//                     {["student", "teacher"].map((option) => (
//                       <li
//                         key={option}
//                         className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-base"
//                         onClick={() => {
//                           setFormData({ ...formData, role: option });
//                           setOpenDropdown(null);
//                         }}
//                       >
//                         {option.charAt(0).toUpperCase() + option.slice(1)}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Conditional Fields */}
//             {formData.role === "student" && (
//               <motion.div
//                 custom={4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fieldAnimation}
//                 className="grid grid-cols-2 gap-4"
//               >
//                 <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                   <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
//                   <input
//                     type="text"
//                     name="course"
//                     value={formData.course}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-transparent outline-none text-base"
//                     placeholder="Course"
//                   />
//                 </div>
//                 <div className="relative">
//                   <div
//                     className="flex items-center border rounded-lg px-4 py-3 shadow-sm cursor-pointer bg-white focus-within:ring-2 focus-within:ring-indigo-500"
//                     onClick={() =>
//                       setOpenDropdown(openDropdown === "year" ? null : "year")
//                     }
//                   >
//                     <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
//                     <span className="text-base text-gray-700">
//                       {formData.year || "Select Year"}
//                     </span>
//                   </div>
//                   <AnimatePresence>
//                     {openDropdown === "year" && (
//                       <motion.ul
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         variants={dropdownVariants}
//                         transition={{ duration: 0.2 }}
//                         className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-20"
//                       >
//                         {["1st", "2nd", "3rd", "4th"].map((option) => (
//                           <li
//                             key={option}
//                             className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-base"
//                             onClick={() => {
//                               setFormData({ ...formData, year: option });
//                               setOpenDropdown(null);
//                             }}
//                           >
//                             {option} Year
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             )}

//             {formData.role === "teacher" && (
//               <motion.div
//                 custom={5}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fieldAnimation}
//               >
//                 <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
//                   <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
//                   <input
//                     type="text"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-transparent outline-none text-base"
//                     placeholder="Department"
//                   />
//                 </div>
//               </motion.div>
//             )}

//             {/* Submit */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-indigo-600 text-white text-lg font-semibold shadow-md hover:bg-indigo-700 transition"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Sign Up
//             </motion.button>
//           </form>

//           {/* Switch to Login */}
//           <p className="text-center text-gray-600 text-base">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-indigo-600 font-semibold hover:underline"
//             >
//               Login here
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default SignUp;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, BookOpen, Briefcase } from "lucide-react";
import AllianceLogo from "../components/AllianceLogo";
import { useAuthStore } from "../store/authStore";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    course: "",
    year: "",
    department: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user, signup, error } = useAuthStore();
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      // Remove confirmPassword before sending
      const { confirmPassword, ...dataToSend } = formData;

      const success = await signup(dataToSend);

      if (success) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Signup failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const fieldAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col p-8 bg-indigo-600 relative overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-600 opacity-90"></div>

        {/* Logo */}
        <motion.div
          className="relative z-10 mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AllianceLogo />
        </motion.div>

        {/* Branding */}
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center flex-1 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Join Alliance University
          </h1>
          <p className="text-lg text-indigo-200 max-w-md">
            Begin your academic journey with us. Create your account and unlock
            access to world-class education and opportunities.
          </p>
        </motion.div>

        {/* Background image */}
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="https://education.indianexpress.com/_next/image?url=https%3A%2F%2Feducation.indianexpress.com%2Fstorage%2Fimages%2Falliance-universityheader_1716448288.jpg&w=2048&q=75"
            alt="Alliance University Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex items-center justify-center p-10 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-lg space-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-base">
              Fill in your details to sign up
            </p>
          </div>

          {/* Show error if signup fails */}
          {error && (
            <div className="p-3 text-red-600 bg-red-100 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
            >
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-base"
                  placeholder="Username"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
            >
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-base"
                  placeholder="Email"
                />
              </div>
            </motion.div>

            {/* Passwords */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <Lock className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-base"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <Lock className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-base"
                  placeholder="Confirm"
                />
              </div>
            </motion.div>

            {/* Role Dropdown */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
              className="relative"
            >
              <div
                className="flex items-center border rounded-lg px-4 py-3 shadow-sm cursor-pointer bg-white focus-within:ring-2 focus-within:ring-indigo-500"
                onClick={() =>
                  setOpenDropdown(openDropdown === "role" ? null : "role")
                }
              >
                <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-base text-gray-700">
                  {formData.role === "student" ? "Student" : "Teacher"}
                </span>
              </div>
              <AnimatePresence>
                {openDropdown === "role" && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-20"
                  >
                    {["student", "teacher"].map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-base"
                        onClick={() => {
                          setFormData({ ...formData, role: option });
                          setOpenDropdown(null);
                        }}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Conditional Fields */}
            {formData.role === "student" && (
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fieldAnimation}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                  <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none text-base"
                    placeholder="Course"
                  />
                </div>
                <div className="relative">
                  <div
                    className="flex items-center border rounded-lg px-4 py-3 shadow-sm cursor-pointer bg-white focus-within:ring-2 focus-within:ring-indigo-500"
                    onClick={() =>
                      setOpenDropdown(openDropdown === "year" ? null : "year")
                    }
                  >
                    <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-base text-gray-700">
                      {formData.year || "Select Year"}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openDropdown === "year" && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-20"
                      >
                        {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((option) => (
                          <li
                            key={option}
                            className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-base"
                            onClick={() => {
                              setFormData({ ...formData, year: option });
                              setOpenDropdown(null);
                            }}
                          >
                            {option} Year
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {formData.role === "teacher" && (
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fieldAnimation}
              >
                <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none text-base"
                    placeholder="Department"
                  />
                </div>
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white text-lg font-semibold shadow-md transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </motion.button>
          </form>

          {/* Switch to Login */}
          <p className="text-center text-gray-600 text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
