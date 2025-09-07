// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import manageIcon from "../../../public/headericons/manageaccount.svg";
// import passwordIcon from "../../../public/headericons/changepassword.svg";

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showResetPopup, setShowResetPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleResetOpen = () => {
//     setIsOpen(false);
//     setShowResetPopup(true);
//   };

//   return (
//     <>
//       {(isOpen || showResetPopup) && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-10"
//           onClick={() => {
//             setIsOpen(false);
//             setShowResetPopup(false);
//           }}
//         />
//       )}

//       <div className="relative z-20">
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
//         >
//           <img
//             src="headericons/man.png"
//             alt="Admin"
//             className="w-[44px] h-[44px] rounded-full object-cover"
//           />
//           <div className="text-white text-sm leading-tight">
//             <div className="font-bold text-[14px]">Admin Name</div>
//             <div className="text-[12px] font-semibold">Admin</div>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className="absolute right-0 top-12 w-[205px] rounded-[14px] z-30 p-2 flex flex-col justify-around"
//             style={{
//               background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
//               boxShadow: "0px 4px 40px 0px #FFFFFF40",
//             }}
//           >
//             <div className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer">
//               <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
//               Manage Account
//             </div>
//             <div
//               onClick={handleResetOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
//               Change Password
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Reset Password Popup */}
//       {showResetPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="relative w-[630px] h-[735px] rounded-lg shadow-2xl px-10 py-12"
//             style={{
//             background: 'radial-gradient(50% 50% at 50% 50%, #1D2461 0%, #080625 100%)'
//           }}

//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowResetPopup(false)}
//             >
//               ✕
//             </button>

//             <h2
//               className="text-white font-extrabold text-[32px] leading-[44px] tracking-[-0.11px] text-center mb-4"
//             >
//               Reset Password
//             </h2>

//             <p
//               className="text-white opacity-80 text-[18px] font-semibold leading-[25px] tracking-[-0.06px] text-center mb-10"
//               style={{ width: "403px", margin: "0 auto" }}
//             >
//               Please enter your email and password to continue
//             </p>

//             <form className="flex flex-col gap-6">
//               <div>
//                 <label className="text-white text-[16px] mb-2 block">Email</label>
//                 <input
//                   type="email"
//                   value="esteban_schiller@gmail.com"
//                   readOnly
//                   className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-[16px] mb-2 block">New Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-[16px] mb-2 block">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
//                 />
//               </div>

//               <button
//                 type="button"
//                 className="w-[418px] h-[56px] mt-6 bg-[#6F1AFF] text-white text-[18px] font-bold rounded-[8px] opacity-90 mx-auto"
//                 onClick={() => {
//                   navigate("/dashboard");
//                 }}
//               >
//                 Save & Login
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfileDropdown;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import apiService from "../ApiController/ApiService"; // Adjust path based on your project structure
// import manageIcon from "../../../public/headericons/manageaccount.svg";
// import passwordIcon from "../../../public/headericons/changepassword.svg";

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showResetPopup, setShowResetPopup] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleResetOpen = () => {
//     setIsOpen(false);
//     setShowResetPopup(true);
//     setError(null);
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (newPassword.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     try {
//       setLoading(true);
//       const userId = localStorage.getItem("userId");
//       const authToken = localStorage.getItem("authToken");
      
//       if (!userId || !authToken) {
//         setError("Please log in again");
//         setLoading(false);
//         return;
//       }

//       await apiService.changePassword(userId, { newPassword }, authToken);
//       setLoading(false);
//       setShowResetPopup(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Failed to change password");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {(isOpen || showResetPopup) && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-10"
//           onClick={() => {
//             setIsOpen(false);
//             setShowResetPopup(false);
//             setError(null);
//           }}
//         />
//       )}

//       <div className="relative z-20">
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
//         >
//           <img
//             src="headericons/man.png"
//             alt="Admin"
//             className="w-[44px] h-[44px] rounded-full object-cover"
//           />
//           <div className="text-white text-sm leading-tight">
//             <div className="font-bold text-[14px]">Admin Name</div>
//             <div className="text-[12px] font-semibold">Admin</div>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className="absolute right-0 top-12 w-[205px] rounded-[14px] z-30 p-2 flex flex-col justify-around"
//             style={{
//               background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
//               boxShadow: "0px 4px 40px 0px #FFFFFF40",
//             }}
//           >
//             <div className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer">
//               <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
//               Manage Account
//             </div>
//             <div
//               onClick={handleResetOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
//               Change Password
//             </div>
//           </div>
//         )}
//       </div>

//       {showResetPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="relative w-[630px] h-[500px] rounded-lg shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625]"
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowResetPopup(false)}
//             >
//               ✕
//             </button>

//             <h2
//               className="text-white font-extrabold text-3xl leading-10 text-center mb-4"
//             >
//               Reset Password
//             </h2>

//             <p
//               className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto"
//             >
//               Please enter your email and password to continue
//             </p>

//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              
//               <div>
//                 <label className="text-white text-base mb-2 block">New Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm text-center mt-2">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
//                   loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save & Login"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfileDropdown;
////////////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import apiService from "../ApiController/ApiService"; // Adjust path based on your project structure
// import manageIcon from "../../../public/headericons/manageaccount.svg";
// import passwordIcon from "../../../public/headericons/changepassword.svg";

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showResetPopup, setShowResetPopup] = useState(false);
//   const [showManagePopup, setShowManagePopup] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [managePassword, setManagePassword] = useState("");
//   const [manageConfirmPassword, setManageConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleResetOpen = () => {
//     setIsOpen(false);
//     setShowResetPopup(true);
//     setError(null);
//     setNewPassword("");
//     setConfirmPassword("");
//   };

//   const handleManageOpen = () => {
//     setIsOpen(false);
//     setShowManagePopup(true);
//     setError(null);
//     setFirstName("");
//     setLastName("");
//     setFullName("");
//     setPhone("");
//     setEmail("");
//     setManagePassword("");
//     setManageConfirmPassword("");
//   };

//   const handleResetSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (newPassword.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     try {
//       setLoading(true);
//       const userId = localStorage.getItem("userId");
//       const authToken = localStorage.getItem("authToken");
      
//       if (!userId || !authToken) {
//         setError("Please log in again");
//         setLoading(false);
//         return;
//       }

//       await apiService.changePassword(userId, { newPassword }, authToken);
//       setLoading(false);
//       setShowResetPopup(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Failed to change password");
//       setLoading(false);
//     }
//   };

//   const handleManageSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!firstName || !lastName || !fullName || !phone || !email) {
//       setError("All fields except password are required");
//       return;
//     }

//     if (managePassword && managePassword !== manageConfirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (managePassword && managePassword.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     const profileData = {
//       fullName,
//       firstName,
//       lastName,
//       phone,
//       email,
//     };

//     if (managePassword) {
//       profileData.password = managePassword;
//     }

//     try {
//       setLoading(true);
//       const authToken = localStorage.getItem("authToken");
//       if (!authToken) {
//         setError("Please log in again");
//         setLoading(false);
//         return;
//       }

//       await apiService.updateProfile(profileData);
//       setLoading(false);
//       setShowManagePopup(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Failed to update profile");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setFullName(`${firstName} ${lastName}`.trim());
//   }, [firstName, lastName]);

//   return (
//     <>
//       {(isOpen || showResetPopup || showManagePopup) && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-10"
//           onClick={() => {
//             setIsOpen(false);
//             setShowResetPopup(false);
//             setShowManagePopup(false);
//             setError(null);
//           }}
//         />
//       )}

//       <div className="relative z-20">
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
//         >
//           <img
//             src="headericons/man.png"
//             alt="Admin"
//             className="w-[44px] h-[44px] rounded-full object-cover"
//           />
//           <div className="text-white text-sm leading-tight">
//             <div className="font-bold text-[14px]">Admin Name</div>
//             <div className="text-[12px] font-semibold">Admin</div>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className="absolute right-0 top-12 w-[205px] rounded-[14px] z-30 p-2 flex flex-col justify-around"
//             style={{
//               background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
//               boxShadow: "0px 4px 40px 0px #FFFFFF40",
//             }}
//           >
//             <div
//               onClick={handleManageOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
//               Manage Account
//             </div>
//             <div
//               onClick={handleResetOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
//               Change Password
//             </div>
//           </div>
//         )}
//       </div>

//       {showResetPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="relative w-[630px] h-[500px] rounded-lg shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625]"
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowResetPopup(false)}
//             >
//               ✕
//             </button>

//             <h2
//               className="text-white font-extrabold text-3xl leading-10 text-center mb-4"
//             >
//               Reset Password
//             </h2>

//             <p
//               className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto"
//             >
//               Please enter your new password to continue
//             </p>

//             <form className="flex flex-col gap-4" onSubmit={handleResetSubmit}>
//               <div>
//                 <label className="text-white text-base mb-2 block">New Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm text-center mt-2">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
//                   loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save & Login"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {showManagePopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="relative w-[630px] h-[600px] rounded-lg hide-scrollbar shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625] overflow-y-auto"
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowManagePopup(false)}
//             >
//               ✕
//             </button>

//             <h2
//               className="text-white font-extrabold text-3xl leading-10 text-center mb-4"
//             >
//               Manage Account
//             </h2>

//             <p
//               className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto"
//             >
//               Update your profile information
//             </p>

//             <form className="flex flex-col gap-4" onSubmit={handleManageSubmit}>
//               <div>
//                 <label className="text-white text-base mb-2 block">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Full Name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Phone</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               {/* <div>
//                 <label className="text-white text-base mb-2 block">New Password (optional)</label>
//                 <input
//                   type="password"
//                   placeholder="Enter New Password"
//                   value={managePassword}
//                   onChange={(e) => setManagePassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={manageConfirmPassword}
//                   onChange={(e) => setManageConfirmPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//               </div> */}

//               {error && (
//                 <div className="text-red-500 text-sm text-center mt-2">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
//                   loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save Changes"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfileDropdown;
/////////////////////////////////final
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import apiService from "../ApiController/ApiService";
// import manageIcon from "../../../public/headericons/manageaccount.svg";
// import passwordIcon from "../../../public/headericons/changepassword.svg";

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showResetPopup, setShowResetPopup] = useState(false);
//   const [showManagePopup, setShowManagePopup] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [managePassword, setManagePassword] = useState("");
//   const [manageConfirmPassword, setManageConfirmPassword] = useState("");
//   const [showManagePassword, setShowManagePassword] = useState(false);
//   const [showManageConfirmPassword, setShowManageConfirmPassword] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleResetOpen = () => {
//     setIsOpen(false);
//     setShowResetPopup(true);
//     setError(null);
//     setNewPassword("");
//     setConfirmPassword("");
//     setShowNewPassword(false);
//     setShowConfirmPassword(false);
//   };

//   const handleManageOpen = () => {
//     setIsOpen(false);
//     setShowManagePopup(true);
//     setError(null);
//     setFirstName("");
//     setLastName("");
//     setFullName("");
//     setPhone("");
//     setEmail("");
//     setManagePassword("");
//     setManageConfirmPassword("");
//     setShowManagePassword(false);
//     setShowManageConfirmPassword(false);
//   };

//   const handleResetSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     // Trim passwords to avoid whitespace issues
//     const trimmedNewPassword = newPassword.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();

//     if (trimmedNewPassword.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     try {
//       setLoading(true);
//       const userId = localStorage.getItem("userId");
//       const authToken = localStorage.getItem("authToken");

//       if (!userId || !authToken) {
//         setError("Please log in again");
//         setLoading(false);
//         return;
//       }

//       // Send both newPassword and confirmPassword to match backend expectation
//       await apiService.changePassword(userId, {
//         newPassword: trimmedNewPassword,
//         confirmPassword: trimmedConfirmPassword,
//       }, authToken);

//       // Show SweetAlert2 success message
//       await Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "Password updated successfully.",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#6F1AFF",
//       });

//       setLoading(false);
//       setShowResetPopup(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Failed to change password");
//       setLoading(false);
//     }
//   };

//   const handleManageSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!firstName || !lastName || !fullName || !phone || !email) {
//       setError("All fields except password are required");
//       return;
//     }

//     // Trim password for manage account
//     const trimmedManagePassword = managePassword.trim();

//     if (trimmedManagePassword && trimmedManagePassword.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     const profileData = {
//       fullName,
//       firstName,
//       lastName,
//       phone,
//       email,
//     };

//     if (trimmedManagePassword) {
//       profileData.password = trimmedManagePassword;
//       profileData.confirmPassword = manageConfirmPassword.trim();
//     }

//     try {
//       setLoading(true);
//       const authToken = localStorage.getItem("authToken");
//       if (!authToken) {
//         setError("Please log in again");
//         setLoading(false);
//         return;
//       }

//       await apiService.updateProfile(profileData);
//       setLoading(false);
//       setShowManagePopup(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message || "Failed to update profile");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setFullName(`${firstName} ${lastName}`.trim());
//   }, [firstName, lastName]);

//   return (
//     <>
//       {(isOpen || showResetPopup || showManagePopup) && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-10"
//           onClick={() => {
//             setIsOpen(false);
//             setShowResetPopup(false);
//             setShowManagePopup(false);
//             setError(null);
//           }}
//         />
//       )}

//       <div className="relative z-20">
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
//         >
//           <img
//             src="headericons/man.png"
//             alt="Admin"
//             className="w-[44px] h-[44px] rounded-full object-cover"
//           />
//           <div className="text-white text-sm leading-tight">
//             <div className="font-bold text-[14px]">Admin Name</div>
//             <div className="text-[12px] font-semibold">Admin</div>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className="absolute right-0 top-12 w-[205px] rounded-[14px] z-30 p-2 flex flex-col justify-around"
//             style={{
//               background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
//               boxShadow: "0px 4px 40px 0px #FFFFFF40",
//             }}
//           >
//             <div
//               onClick={handleManageOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
//               Manage Account
//             </div>
//             <div
//               onClick={handleResetOpen}
//               className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
//             >
//               <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
//               Change Password
//             </div>
//           </div>
//         )}
//       </div>

//       {showResetPopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="relative w-[630px] h-[500px] rounded-lg shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625]">
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowResetPopup(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-white font-extrabold text-3xl leading-10 text-center mb-4">
//               Reset Password
//             </h2>

//             <p className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto">
//               Please enter your new password to continue
//             </p>

//             <form className="flex flex-col gap-4" onSubmit={handleResetSubmit}>
//               <div className="relative">
//                 <label className="text-white text-base mb-2 block">New Password</label>
//                 <input
//                   type={showNewPassword ? "text" : "password"}
//                   placeholder="Enter Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-[48px] text-gray-600"
//                   onClick={() => setShowNewPassword(!showNewPassword)}
//                 >
//                   {showNewPassword ? "🙈" : "👁️"}
//                 </button>
//               </div>
//               <div className="relative">
//                 <label className="text-white text-base mb-2 block">Confirm Password</label>
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-[48px] text-gray-600"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? "🙈" : "👁️"}
//                 </button>
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm text-center mt-2">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
//                   loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save & Login"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {showManagePopup && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="relative w-[630px] h-[600px] rounded-lg hide-scrollbar shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625] overflow-y-auto">
//             <button
//               className="absolute top-4 right-4 text-white text-xl font-bold"
//               onClick={() => setShowManagePopup(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-white font-extrabold text-3xl leading-10 text-center mb-4">
//               Manage Account
//             </h2>

//             <p className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto">
//               Update your profile information
//             </p>

//             <form className="flex flex-col gap-4" onSubmit={handleManageSubmit}>
//               <div>
//                 <label className="text-white text-base mb-2 block">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Full Name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Phone</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-white text-base mb-2 block">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label className="text-white text-base mb-2 block">New Password (optional)</label>
//                 <input
//                   type={showManagePassword ? "text" : "password"}
//                   placeholder="Enter New Password"
//                   value={managePassword}
//                   onChange={(e) => setManagePassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-[48px] text-gray-600"
//                   onClick={() => setShowManagePassword(!showManagePassword)}
//                 >
//                   {showManagePassword ? "🙈" : "👁️"}
//                 </button>
//               </div>
//               <div className="relative">
//                 <label className="text-white text-base mb-2 block">Confirm Password</label>
//                 <input
//                   type={showManageConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   value={manageConfirmPassword}
//                   onChange={(e) => setManageConfirmPassword(e.target.value)}
//                   className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-[48px] text-gray-600"
//                   onClick={() => setShowManageConfirmPassword(!showManageConfirmPassword)}
//                 >
//                   {showManageConfirmPassword ? "🙈" : "👁️"}
//                 </button>
//               </div>

//               {error && (
//                 <div className="text-red-500 text-sm text-center mt-2">{error}</div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
//                   loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save Changes"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfileDropdown;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiService from "../ApiController/ApiService";
import manageIcon from "../../../public/headericons/manageaccount.svg";
import passwordIcon from "../../../public/headericons/changepassword.svg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [showManagePopup, setShowManagePopup] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetOpen = () => {
    setIsOpen(false);
    setShowResetPopup(true);
    setError(null);
    setNewPassword("");
    setConfirmPassword("");
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const handleManageOpen = async () => {
    setIsOpen(false);
    setShowManagePopup(true);
    setError(null);
    setLoading(true);
    try {
      const profileData = await apiService.getProfile();
      setFirstName(profileData.firstName || "");
      setLastName(profileData.lastName || "");
      setFullName(profileData.fullName || `${profileData.firstName || ""} ${profileData.lastName || ""}`.trim());
      setPhone(profileData.phone || "");
      setEmail(profileData.email || "");
    } catch (err) {
      setError(err.message || "Failed to fetch profile data");
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (trimmedNewPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      setLoading(true);
      const userId = localStorage.getItem("userId");
      const authToken = localStorage.getItem("authToken");

      if (!userId || !authToken) {
        setError("Please log in again");
        setLoading(false);
        return;
      }

      await apiService.changePassword(userId, {
        newPassword: trimmedNewPassword,
        confirmPassword: trimmedConfirmPassword,
      }, authToken);

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Password updated successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#6F1AFF",
      });

      setLoading(false);
      setShowResetPopup(false);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to change password");
      setLoading(false);
    }
  };

  const handleManageSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const profileData = {
      firstName,
      lastName,
      fullName,
      phone,
      email,
    };

    try {
      setLoading(true);
      await apiService.updateProfile(profileData);

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile updated successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#6F1AFF",
      });

      setLoading(false);
      setShowManagePopup(false);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to update profile");
      setLoading(false);
    }
  };

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`.trim());
  }, [firstName, lastName]);

  return (
    <>
      {(isOpen || showResetPopup || showManagePopup) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => {
            setIsOpen(false);
            setShowResetPopup(false);
            setShowManagePopup(false);
            setError(null);
          }}
        />
      )}

      <div className="relative z-20">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
        >
          <img
            src="headericons/man.png"
            alt="Admin"
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
          <div className="text-white text-sm leading-tight">
            <div className="font-bold text-[14px]">{fullName || "Admin Name"}</div>
            <div className="text-[12px] font-semibold">Admin</div>
          </div>
        </div>

        {isOpen && (
          <div
            className="absolute right-0 top-12 w-[205px] rounded-[14px] z-30 p-2 flex flex-col justify-around"
            style={{
              background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
              boxShadow: "0px 4px 40px 0px #FFFFFF40",
            }}
          >
            <div
              onClick={handleManageOpen}
              className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
            >
              <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
              Manage Account
            </div>
            <div
              onClick={handleResetOpen}
              className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer"
            >
              <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
              Change Password
            </div>
          </div>
        )}
      </div>

      {showResetPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-[630px] h-[500px] rounded-lg shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625]">
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={() => setShowResetPopup(false)}
            >
              ✕
            </button>

            <h2 className="text-white font-extrabold text-3xl leading-10 text-center mb-4">
              Reset Password
            </h2>

            <p className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto">
              Please enter your new password to continue
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleResetSubmit}>
              <div className="relative">
                <label className="text-white text-base mb-2 block">New Password</label>
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-[48px] text-gray-600"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <div className="relative">
                <label className="text-white text-base mb-2 block">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-[48px] text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center mt-2">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
                }`}
              >
                {loading ? "Saving..." : "Save & Login"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showManagePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-[630px] h-[550px] rounded-lg hide-scrollbar shadow-2xl px-10 py-12 bg-gradient-to-br from-[#1D2461] to-[#080625] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={() => setShowManagePopup(false)}
            >
              ✕
            </button>

            <h2 className="text-white font-extrabold text-3xl leading-10 text-center mb-4">
              Manage Account
            </h2>

            <p className="text-white opacity-80 text-lg font-semibold leading-6 text-center mb-8 max-w-[403px] mx-auto">
              Update your profile information
            </p>

            {loading && (
              <div className="text-white text-center">Loading profile data...</div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleManageSubmit}>
              <div>
                <label className="text-white text-base mb-2 block">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-white text-base mb-2 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-white text-base mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
              </div>
             
              <div>
                <label className="text-white text-base mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-md focus:outline-none"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center mt-2">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-[418px] h-12 mt-6 bg-[#6F1AFF] text-white text-lg font-bold rounded-lg opacity-90 mx-auto transition-opacity ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"
                }`}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;