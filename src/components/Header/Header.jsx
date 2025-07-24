import { Link } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <div className="fixed top-0 left-[248px] z-10 right-0 h-[98px] bg-[#4100B4] px-8 flex items-center justify-between">
      
      {/* Search */}
      <div className="relative w-[388px] h-[38px]">
        <input
          type="text"
          placeholder="Search by Company, Driver, or Order Number"
          className="w-full h-full pl-4 pr-10 rounded-full text-[14px] text-black placeholder:text-[#202224] focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#202224]">
          {/* Search Icon */}
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.1441 12.535C11.8739 11.3748 13.1464 8.22136 11.9863 5.49152C10.8261 2.76168 7.67265 1.4892 4.94281 2.64936C2.21297 3.80951 0.94049 6.96297 2.10064 9.69281C3.2608 12.4226 6.41426 13.6951 9.1441 12.535Z"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8408 11.3887L15.0062 15.5546"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Notification */}
      <NotificationDropdown/>
    

      {/* Language Dropdown */}
     <LanguageDropdown/>

      {/* Profile */}
     <ProfileDropdown />
    </div>
  );
};

export default Header;
