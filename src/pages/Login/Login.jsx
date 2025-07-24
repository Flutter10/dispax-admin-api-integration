// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const OutlinedInput = ({ label, type, placeholder }) => {
//   const [value, setValue] = useState('');
//   return (
//     <div className="relative  mb-6">
//       <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder={placeholder}
//         className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black focus:outline-none focus:border-purple-600 placeholder:text-[#858080]"
//       />
//     </div>
//   );
// };

// const Login = () => {
//     const navigate = useNavigate();

//   const handleLogin = () => {
//     // You can add form validation here later
//     navigate('/dashboard');
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-screen 
//     "
//     style={{
//     background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)'
//   }}
//     >
//       <img src='/LogoDispax.png' alt="Dispax Logo" className="mb-5 w-[88px] h-[33px]" />
//       <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
//         <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Welcome Back!</h2>

//         {/* Wrap form elements in a fixed-width container */}
//         <div className="w-[546px] flex flex-col">

//           <OutlinedInput type="text" label="User Name" placeholder='Enter User Name' />
//           <OutlinedInput type="password" label="Password" placeholder='Password' />

//           <div className="flex justify-between mb-4">
//             <label className="flex items-center gap-2 text-[#6F1AFF] text-[15px] font-normal">
//               <input
//                 type="checkbox"
//                 className="peer appearance-none w-4 h-4 border-2 border-[#6F1AFF] rounded-sm checked:bg-[#6F1AFF] checked:border-[#6F1AFF] focus:outline-none relative
//           before:content-[''] before:absolute before:left-[4px] before:top-[0px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0
//           checked:before:opacity-100"
//               />
//               Remember me
//             </label>
//             <Link to="/reset-password" className="text-[#6F1AFF] text-[15px] font-normal">Forgot Password?</Link>
//           </div>

//           <p className="text-[#858080] text-[12px] mb-5 text-left">
//             By clicking Sign In, you agree with our <span className='font-bold'>Terms and Conditions</span> and <span className='font-bold'>Privacy Policy</span>
//           </p>

//           <button className="bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px]"
//           onClick={handleLogin}
//           >Sign in</button>

//           <p className="mt-4 text-[14px] text-left">
//             Don't have an account? <Link to="/signup" className="text-[#6F1AFF] text-[14px]">Sign up</Link>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import apiService from '../../components/ApiController/ApiService'; // Import the API service
import Swal from 'sweetalert2'; // Import SweetAlert2

const OutlinedInput = ({ label, type, placeholder, onChange, value, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black focus:outline-none focus:border-purple-600 placeholder:text-[#858080]"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#858080] focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="w-5 h-5" />
            ) : (
              <AiOutlineEye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const credentials = {
        email: formData.email,
        password: formData.password,
      };
      await apiService.login(credentials);
      // Show SweetAlert2 success message
      await Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have been logged in successfully.',
        confirmButtonColor: '#6F1AFF',
        customClass: {
          confirmButton: 'swal-confirm-button',
        },
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-screen"
      style={{
        background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)',
      }}
    >
      <img src="/LogoDispax.png" alt="Dispax Logo" className="mb-5 w-[88px] h-[33px]" />
      <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
        <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Welcome Back!</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="w-[546px] flex flex-col">
          <OutlinedInput
            type="email"
            label="Email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <OutlinedInput
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <div className="flex justify-between mb-4">
            <label className="flex items-center gap-2 text-[#6F1AFF] text-[15px] font-normal">
              <input
                type="checkbox"
                className="peer appearance-none w-4 h-4 border-2 border-[#6F1AFF] rounded-sm checked:bg-[#6F1AFF] checked:border-[#6F1AFF] focus:outline-none relative
                before:content-[''] before:absolute before:left-[4px] before:top-[0px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0
                checked:before:opacity-100"
              />
              Remember me
            </label>
            <Link to="/reset-password" className="text-[#6F1AFF] text-[15px] font-normal">
              Forgot Password?
            </Link>
          </div>

          <p className="text-[#858080] text-[12px] mb-5 text-left">
            By clicking Sign In, you agree with our <span className="font-bold">Terms and Conditions</span> and{' '}
            <span className="font-bold">Privacy Policy</span>
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px] ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <p className="mt-4 text-[14px] text-left">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#6F1AFF] text-[14px]">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;