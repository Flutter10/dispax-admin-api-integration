// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OutlinedInput = ({ label, type, placeholder, value, readOnly }) => {
//   const [inputValue, setInputValue] = useState(value || '');
//   return (
//     <div className="relative mb-6">
//       <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         readOnly={readOnly}
//         className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black bg-white placeholder:text-[#858080] focus:outline-none focus:border-purple-600"
//       />
//     </div>
//   );
// };

// const ResetPassword = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // You can add form validation here later
//     navigate('/dashboard');
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-screen "
//     style={{
//     background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)'
//   }}>
//       <img src='/LogoDispax.png' alt="Dispax Logo" className="w-[88px] h-[33px] mb-6" />
//       <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
//         <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Reset Password</h2>

//         <div className="w-[546px] flex flex-col">
//           <p className="text-center text-[#858080] mb-5">Please enter your email and password to continue</p>

//           <OutlinedInput label="Email" type="email" placeholder="Email Address" value="esteban_schiller@gmail.com" readOnly />
//           <OutlinedInput label="New Password" type="password" placeholder="Enter Password" />
//           <OutlinedInput label="Confirm Password" type="password" placeholder="Confirm Password" />

//           <button className="bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px]"
//             onClick={handleLogin}
//           >Save & Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/ApiController/AuthContext';
import apiService from '../../components/ApiController/ApiService';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const OutlinedInput = ({ label, type, placeholder, value, readOnly, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type based on showPassword state for password fields
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black bg-white placeholder:text-[#858080] focus:outline-none focus:border-purple-600"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#858080] focus:outline-none"
          >
            {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
          </button>
        )}
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const { userId, authToken, login } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // Basic validation
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all password fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!userId || !authToken) {
      setError('User authentication required');
      navigate('/');
      return;
    }

    setIsLoading(true);
    try {
      const passwordData = {
        newPassword,
        confirmPassword,
      };
      await apiService.changePassword(userId, passwordData, authToken);
      
      // After successful password change, update auth context and localStorage
      login({ userId }, authToken);
      
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to change password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen w-screen"
      style={{
        background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)'
      }}
    >
      <img src='/LogoDispax.png' alt="Dispax Logo" className="w-[88px] h-[33px] mb-6" />
      <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
        <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Reset Password</h2>

        <div className="w-[546px] flex flex-col">
          <p className="text-center text-[#858080] mb-5">Please enter your new password to continue</p>
          
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <OutlinedInput 
            label="New Password" 
            type="password" 
            placeholder="Enter Password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <OutlinedInput 
            label="Confirm Password" 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button 
            className="bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px] disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Save & Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;