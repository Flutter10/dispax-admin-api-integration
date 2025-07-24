import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', activeIcon: 'sidebaricons/dashboard.svg', icon: 'sidebaricons/inactiveDashboard.svg' },
    { label: 'Manage Company', path: '/manage-company', icon: 'sidebaricons/managecompanysvg.svg', activeIcon: 'sidebaricons/activemanagecompany.svg' },
    { label: 'Order & Shipping', path: '/order-shipping', icon: 'sidebaricons/orderandshimpment.svg', activeIcon: 'sidebaricons/activeorderandshipment.svg' },
    { label: 'Invoice & Payment', path: '/invoice-payment', icon: 'sidebaricons/invoice.svg', activeIcon: 'sidebaricons/activeinvoice.svg' },
    { label: 'Reports & Data', path: '/reports-data', icon: 'sidebaricons/reportsanddata.svg', activeIcon: 'sidebaricons/activeReports.svg' },
    { label: 'Customization', path: '/customization', icon: 'sidebaricons/customization.svg', activeIcon: 'sidebaricons/activeCustomisation.svg' },
    { label: 'User & Role', path: '/user-role', icon: 'sidebaricons/userandrole.svg', activeIcon: 'sidebaricons/activeUserandRole.svg' },
    { label: 'Support', path: '/support', icon: 'sidebaricons/support.svg', activeIcon: 'sidebaricons/activeSupport.svg' },
    { label: 'Security', path: '/security', icon: 'sidebaricons/security.svg', activeIcon: 'sidebaricons/activeSecurity.svg' }
  ];

  return (
    <div className="fixed top-0 left-0 w-[248px] z-10 h-[838px] bg-[#4100B4] flex flex-col justify-between">
      {/* Center the logo */}
      <div className="flex justify-center mt-10">
        <img src="/LogoDispax.png" alt="Dispax Logo" className="w-[144px] h-[54px]" />
      </div>

      {/* Navigation */}
      <ul className="list-none p-0 m-0 ">
        {navItems.map(item => (
          <li key={item.path} className="flex justify-center mb-2 ">
            <Link
              to={item.path}
              className={`w-[240px] flex items-center text-[16px] font-medium gap-[18px] p-4 rounded transition-all duration-200 ${location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                ? 'bg-white text-[#000] font-medium rounded-[8px]'
                : 'text-white'
                }`}

            >
              <img
                src={
                  location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                    ? `/${item.activeIcon}`
                    : `/${item.icon}`
                }
                alt={`${item.label} icon`}
                className="w-[24px] h-[24px]"
              />
              <span className="text-[16px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="w-[248px]">
        <Link
          to="/login"
          className="w-[240px] h-[48px] text-[16px] font-medium gap-[32px] border border-[#FFC1C1] text-[#FFC1C1] text-center py-2 rounded-[8px] lg:mb-24 xl:mb-20 flex items-center "
        >
          <img src='sidebaricons/logout.svg' alt='logout' className="w-[24px] h-[24px] ml-5" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
