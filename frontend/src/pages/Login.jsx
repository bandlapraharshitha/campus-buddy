// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Mail, Lock } from "lucide-react";
// import AllianceLogo from "../components/AllianceLogo";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Submitted:", formData);
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
//             Welcome Back
//           </h1>
//           <p className="text-lg text-indigo-200 max-w-md">
//             Log in to continue your journey with Alliance University and access
//             your personalized dashboard.
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
//             src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
//             alt="Alliance University Campus"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Right Section - Form */}
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
//             <h2 className="text-3xl font-bold text-gray-900">Login</h2>
//             <p className="text-gray-600 text-base">
//               Please enter your credentials to access your account
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <motion.div
//               custom={0}
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

//             {/* Password */}
//             <motion.div
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={fieldAnimation}
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
//             </motion.div>

//             {/* Submit */}
//             <motion.button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-indigo-600 text-white text-lg font-semibold shadow-md hover:bg-indigo-700 transition"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Login
//             </motion.button>
//           </form>

//           {/* Switch to Sign Up */}
//           <p className="text-center text-gray-600 text-base">
//             Don’t have an account?{" "}
//             <Link
//               to="/"
//               className="text-indigo-600 font-semibold hover:underline"
//             >
//               Sign up here
//             </Link>
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2 } from "lucide-react";
import AllianceLogo from "../components/AllianceLogo";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user, login } = useAuthStore();

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
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
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
            Welcome Back
          </h1>
          <p className="text-lg text-indigo-200 max-w-md">
            Log in to continue your journey with Alliance University and access
            your personalized dashboard.
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
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
            alt="Alliance University Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Section - Form */}
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
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
            <p className="text-gray-600 text-base">
              Please enter your credentials to access your account
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="text-center text-red-600 bg-red-100 border border-red-200 px-4 py-2 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  id="email"
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

            {/* Password */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fieldAnimation}
            >
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="flex items-center border rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                <Lock className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-base"
                  placeholder="Password"
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white text-lg font-semibold shadow-md transition flex items-center justify-center gap-2 ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </form>

          {/* Switch to Sign Up */}
          <p className="text-center text-gray-600 text-base">
            Don’t have an account?{" "}
            <Link
              to="/"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
