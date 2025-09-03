// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const data = [
//     {
//         id: '1', // Unique ID
//         company: 'Bluedart Logistics',
//         Location: 'Chicago, IL',
//         fleetsize: '15 Trucks 28 Drivers',
//         Status: 'Active',
//         Subscription: 'Basic',
//         Revenue: '$45,256',
//         LastActive: '10 min ago',
//     },
//     {
//         id: '2',
//         company: 'Bluedart Logistics',
//         Location: 'Chicago, IL',
//         fleetsize: '15 Trucks 28 Drivers',
//         Status: 'Inactive',
//         Subscription: 'Standard',
//         Revenue: '$45,256',
//         LastActive: '10 min ago',
//     },
//     {
//         id: '3',
//         company: 'Bluedart Logistics',
//         Location: 'Chicago, IL',
//         fleetsize: '15 Trucks 28 Drivers',
//         Status: 'Active',
//         Subscription: 'Premium',
//         Revenue: '$45,256',
//         LastActive: '10 min ago',
//     },
//     {
//         id: '4',
//         company: 'Bluedart Logistics',
//         Location: 'Chicago, IL',
//         fleetsize: '15 Trucks 28 Drivers',
//         Status: 'Active',
//         Subscription: 'Basic',
//         Revenue: '$45,256',
//         LastActive: '10 min ago',
//     },
// ];

// const OutlinedSelect = ({ label, options }) => {
//     const [value, setValue] = useState('');

//     return (
//         <div className="relative mb-6 w-full">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
//                 {label}
//             </label>
//             <select
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] appearance-none"
//             >
//                 <option value="" disabled>Select Subscription</option>
//                 {options.map((opt, i) => (
//                     <option key={i} value={opt} className="text-black">
//                         {opt}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// const OutlinedInput = ({ label, type, placeholder }) => {
//     const [value, setValue] = useState('');

//     return (
//         <div className="relative mb-6 w-full">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
//                 {label}
//             </label>
//             <input
//                 type={type}
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 placeholder={placeholder}
//                 className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
//             />
//         </div>
//     );
// };

// const DispatchingCompanyTable = () => {
//     const [showDropdown, setShowDropdown] = useState(null);
//     const [createRolePopup, setCreateRolePopup] = useState(false);
//     const [editPopup, setEditPopup] = useState({ open: false, role: null });
//     const [enabled, setEnabled] = useState(false);
//     const [roleName, setRoleName] = useState('');
//     const [description, setDescription] = useState('');
//     const [permissions, setPermissions] = useState({
//         Shipment: false,
//         Billing: false,
//         Users: false,
//         Company: false,
//         Create: false,
//         Edit: false,
//         Delete: false,
//         View: false,
//         Moderate: false,
//     });

//     const handleActionClick = (index) => {
//         setShowDropdown((prev) => (prev === index ? null : index));
//     };

//     const openCreateRolePopup = () => {
//         console.log('Opening Create Role popup');
//         setCreateRolePopup(true);
//         // Reset form states
//         setRoleName('');
//         setDescription('');
//         setPermissions({
//             Shipment: false,
//             Billing: false,
//             Users: false,
//             Company: false,
//             Create: false,
//             Edit: false,
//             Delete: false,
//             View: false,
//             Moderate: false,
//         });
//     };

//     const closeCreateRolePopup = () => {
//         console.log('Closing Create Role popup');
//         setCreateRolePopup(false);
//     };

//     const handleCreateRole = () => {
//         console.log('Creating role:', {
//             roleName,
//             description,
//             permissions,
//         });
//         closeCreateRolePopup();
//     };


//     const handleDelete = (roleName) => {
//         console.log('Deleting role:', roleName);
//         setShowDropdown(null);
//     };

//     const handlePermissionChange = (perm) => {
//         setPermissions((prev) => ({
//             ...prev,
//             [perm]: !prev[perm],
//         }));
//     };

//      const openEditPopup = (role) => {
//         console.log('Opening Edit popup for role:', role.roleName);
//         setEditPopup({ open: true, role });
//         setRoleName(role.roleName);
//         setDescription(role.description);
//         // Parse permissionSummary to set checkboxes for Action Permission
//         const perms = role.permissionSummary.split(', ').reduce((acc, perm) => {
//             acc[perm] = true;
//             return acc;
//         }, {
//             Shipment: false,
//             Billing: false,
//             Users: false,
//             Company: false,
//             Create: false,
//             Edit: false,
//             Delete: false,
//             View: false,
//             Moderate: false,
//         });
//         if (role.permissionSummary === 'All Permissions') {
//             perms.Create = true;
//             perms.Edit = true;
//             perms.Delete = true;
//             perms.View = true;
//             perms.Moderate = true;
//         }
//         setPermissions(perms);
//         setShowDropdown(null);
//     };

//     const closeEditPopup = () => {
//         console.log('Closing Edit popup');
//         setEditPopup({ open: false, role: null });
//     };

//     const handleSaveChanges = () => {
//         console.log('Saving changes for role:', {
//             roleName,
//             description,
//             permissions,
//         });
//         closeEditPopup();
//     };


//     return (
//         <>
//             <div className="flex justify-between mb-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Dispatching Company</p>
//                 <button
//                     className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
//                     onClick={openCreateRolePopup}
//                 >
//                     Add Company
//                 </button>
//             </div>
//             <div className="overflow-x-auto custom-scrollbar w-full  rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1200px] table-auto text-left w-full">
//                     <thead>
//                         <tr className="bg-[#131060] h-[40px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Company</th>
//                             <th className="px-5">Location</th>
//                             <th className="px-5">Fleet Size</th>
//                             <th className="px-5">Status</th>
//                             <th className="px-5">Subscription</th>
//                             <th className="px-5">Revenue</th>
//                             <th className="px-5">Last Active</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.company}</td>
//                                 <td className="px-5">{role.Location}</td>
//                                 <td className="px-5">{role.fleetsize}</td>
//                                 <td className="px-5">
//                                     <span className={`px-[12px] py-[12px] text-[#151515] rounded-[24px] text-[12px] ${role.Status === 'Active' ? 'bg-[#EFEFEF] ' : 'bg-[#595959]'}`}>
//                                         {role.Status}
//                                     </span>
//                                 </td>
//                                 <td className="px-5">
//                                     <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.Subscription === 'Basic' ? 'bg-[#6763F1]' :
//                                         role.Subscription === 'Premium' ? 'bg-[#F1AA63]' :
//                                             role.Subscription === 'Standard' ? 'bg-[#F163EC]' : 'bg-[#EC221F]'}`}>
//                                         {role.Subscription}
//                                     </span>
//                                 </td>
//                                 <td className="px-5">{role.Revenue}</td>
//                                 <td className="px-5">{role.LastActive}</td>
//                                 <td className="px-5 relative">
//                                     <img
//                                         src="/tableAction.svg"
//                                         alt="Action"
//                                         className="w-5 h-5 cursor-pointer"
//                                         onClick={() => handleActionClick(index)}
//                                     />
//                                     {showDropdown === index && (
//                                         <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[250px]">
//                                             <Link
//                                                 to={`/manage-company/performance/${role.id}`}
//                                                 className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b text-[16px] block"
//                                             >
//                                                 Performance Analytics
//                                             </Link>
//                                             <Link
//                                                 to={`/manage-company/activity-logs/${role.id}`}
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850] text-[16px] block"
//                                             >
//                                                 View Activity Logs
//                                             </Link>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850] text-[16px]"
//                                                 onClick={() => openEditPopup(role)} // Assuming you still want to handle Edit locally
//                                             >
//                                                 Edit Company
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2  cursor-pointer hover:bg-[#1A1850] text-[16px]"
//                                                 onClick={() => handleDelete(role.id)} // Update to use id
//                                             >
//                                                 Delete Company
//                                             </div>
//                                         </div>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Create Role Popup */}
//             {createRolePopup && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#080625',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <div className="flex mb-6">
//                             <p className='text-[22px] font-semibold'>Create Company</p>
//                             <button
//                                 className="absolute top-4 right-4 text-white text-xl mb-4"
//                                 onClick={closeCreateRolePopup}
//                             >
//                                 <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                             </button>
//                         </div>
//                         <OutlinedInput type="text" label="Name" placeholder='Enter Company Name' />
//                         <OutlinedInput type="text" label="Location" placeholder='City,State' />
//                         <OutlinedInput type="text" label="Fleet Size" placeholder='Trucks,Drivers' />
//                         <OutlinedSelect
//                             label="Subscription"
//                             options={[
//                                 "15 Trucks, 28 Drivers",
//                                 "10 Trucks, 15 Drivers",
//                                 "20 Trucks, 40 Drivers"
//                             ]}
//                         />
//                     </div>
//                 </div>
//             )}

//   {/* Edit Role Popup */}
//             {editPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#080625',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <div className="flex mb-6">
//                             <p className='text-[22px] font-semibold'>Global Shipment Co.</p>
//                             <button
//                                 className="absolute top-4 right-4 text-white text-xl mb-4"
//                                 onClick={closeEditPopup}
//                             >
//                                 <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                             </button>
//                         </div>
//                         <OutlinedInput type="text" label="Company" placeholder='Bluedart Logistics' />
//                         <OutlinedInput type="text" label="Location" placeholder='Chicago, IL' />
//                         <OutlinedInput type="text" label="Fleet Size" placeholder='15 Trucks, 28 Drivers' />
//                         <div className="flex gap-10">
//                             <div className="flex flex-col mb-4">
//                             <p className='text-[16px]'>Status</p>
//                             <p className='bg-[#EFEFEF] text-black px-4 py-2 rounded-[24px] w-[80px] mt-5'>Active</p>
//                         </div>
//                          <div className="flex flex-col mb-4 ">
//                             <p className='text-[16px]'>Subscription</p>
//                             <p className='bg-[#6763F1] text-white px-4 py-2 rounded-[24px]  w-[80px] mt-5'>Basic</p>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default DispatchingCompanyTable;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiService from '../../ApiController/ApiService';

const OutlinedSelect = ({ label, options, value, onChange, required }) => {
  return (
    <div className="relative mb-6 w-full">
      <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] appearance-none"
      >
        <option value="" disabled>Select {label}</option>
        {options.map((opt) => (
          <option key={opt.id || opt} value={opt.id || opt} className="text-black">
            {opt.title || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

const OutlinedInput = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="relative mb-6 w-full">
      <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
      />
    </div>
  );
};

const DispatchingCompanyTable = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [createRolePopup, setCreateRolePopup] = useState(false);
  const [editPopup, setEditPopup] = useState({ open: false, role: null });
  const [packages, setPackages] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [companyData, setCompanyData] = useState({
    mobileNumber: '',
    email: '',
    fullName: '',
    fleetSizeDriver: '',
    fleetSizeTruck: '',
    packageId: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [packageData, companyResponse] = await Promise.all([
          apiService.getPackage(),
          apiService.getCompany(),
        ]);
        setPackages(packageData);

        const packageMap = packageData.reduce((map, pkg) => {
          map[pkg.id] = pkg.title;
          return map;
        }, {});

        const transformedCompanies = companyResponse.docs.map((company) => ({
          id: company._id,
          company: company.fullName,
          Location: company.location || 'Unknown',
          fleetsize: `${company.fleetSizeTruck || 0} Trucks ${company.fleetSizeDriver || 0} Drivers`,
          Status: company.userStatus || 'Unknown',
          Subscription: packageMap[company.packageId] || 'Unknown',
          Revenue: company.wallet ? `$${company.wallet.toLocaleString()}` : '$0',
          LastActive: company.updatedAt ? new Date(company.updatedAt).toLocaleString() : 'Unknown',
        }));
        setCompanies(transformedCompanies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleActionClick = (index) => {
    setShowDropdown((prev) => (prev === index ? null : index));
  };

  const openCreateRolePopup = () => {
    console.log('Opening Create Role popup');
    setCreateRolePopup(true);
    setCompanyData({
      mobileNumber: '',
      email: '',
      fullName: '',
      fleetSizeDriver: '',
      fleetSizeTruck: '',
      packageId: '',
    });
  };

  const closeCreateRolePopup = () => {
    console.log('Closing Create Role popup');
    setCreateRolePopup(false);
  };

  const handleCreateCompany = async () => {
    const { mobileNumber, email, fullName, fleetSizeDriver, fleetSizeTruck, packageId } = companyData;
    if (!mobileNumber || !email || !fullName || !fleetSizeDriver || !fleetSizeTruck || !packageId) {
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      return;
    }

    try {
      const response = await apiService.addCompany(companyData);
      console.log('Company created:', response);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company added successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const packageMap = packages.reduce((map, pkg) => {
        map[pkg.id] = pkg.title;
        return map;
      }, {});
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName,
        Location: company.location || 'Unknown',
        fleetsize: `${company.fleetSizeTruck || 0} Trucks ${company.fleetSizeDriver || 0} Drivers`,
        Status: company.userStatus || 'Unknown',
        Subscription: packageMap[company.packageId] || 'Unknown',
        Revenue: company.wallet ? `$${company.wallet.toLocaleString()}` : '$0',
        LastActive: company.updatedAt ? new Date(company.updatedAt).toLocaleString() : 'Unknown',
      }));
      setCompanies(transformedCompanies);
      closeCreateRolePopup();
    } catch (error) {
      console.error('Error creating company:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to add company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const handleDelete = async (roleId) => {
    try {
      await apiService.removeCompany(roleId);
      console.log('Company deleted:', roleId);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company deleted successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const packageMap = packages.reduce((map, pkg) => {
        map[pkg.id] = pkg.title;
        return map;
      }, {});
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName,
        Location: company.location || 'Unknown',
        fleetsize: `${company.fleetSizeTruck || 0} Trucks ${company.fleetSizeDriver || 0} Drivers`,
        Status: company.userStatus || 'Unknown',
        Subscription: packageMap[company.packageId] || 'Unknown',
        Revenue: company.wallet ? `$${company.wallet.toLocaleString()}` : '$0',
        LastActive: company.updatedAt ? new Date(company.updatedAt).toLocaleString() : 'Unknown',
      }));
      setCompanies(transformedCompanies);
      setShowDropdown(null);
    } catch (error) {
      console.error('Error deleting company:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to delete company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const openEditPopup = async (role) => {
    console.log('Opening Edit popup for role:', role.company);
    try {
      const company = await apiService.getCompanyById(role.id);
      setCompanyData({
        mobileNumber: company.mobileNumber || '',
        email: company.email || '',
        fullName: company.fullName || '',
        fleetSizeDriver: company.fleetSizeDriver || '',
        fleetSizeTruck: company.fleetSizeTruck || '',
        packageId: company.packageId || '',
      });
      setEditPopup({ open: true, role });
    } catch (error) {
      console.error('Error fetching company data:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to load company data. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const closeEditPopup = () => {
    console.log('Closing Edit popup');
    setEditPopup({ open: false, role: null });
  };

  const handleSaveChanges = async () => {
    const { mobileNumber, email, fullName, fleetSizeDriver, fleetSizeTruck, packageId } = companyData;
    if (!mobileNumber || !email || !fullName || !fleetSizeDriver || !fleetSizeTruck || !packageId) {
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      return;
    }

    try {
      await apiService.updateCompany(editPopup.role.id, companyData);
      console.log('Company updated:', companyData);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company updated successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const packageMap = packages.reduce((map, pkg) => {
        map[pkg.id] = pkg.title;
        return map;
      }, {});
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName,
        Location: company.location || 'Unknown',
        fleetsize: `${company.fleetSizeTruck || 0} Trucks ${company.fleetSizeDriver || 0} Drivers`,
        Status: company.userStatus || 'Unknown',
        Subscription: packageMap[company.packageId] || 'Unknown',
        Revenue: company.wallet ? `$${company.wallet.toLocaleString()}` : '$0',
        LastActive: company.updatedAt ? new Date(company.updatedAt).toLocaleString() : 'Unknown',
      }));
      setCompanies(transformedCompanies);
      closeEditPopup();
    } catch (error) {
      console.error('Error updating company:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to update company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const handleInputChange = (field, value) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <p className="text-[#fff] text-[22px] font-semibold py-3">Dispatching Company</p>
        <button
          className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
          onClick={openCreateRolePopup}
        >
          Add Company
        </button>
      </div>
      <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
        <table className="min-w-[1200px] table-auto text-left w-full">
          <thead>
            <tr className="bg-[#131060] h-[40px] text-white text-sm border-b border-[#fff]">
              <th className="px-5">Company</th>
              <th className="px-5">Location</th>
              <th className="px-5">Fleet Size</th>
              <th className="px-5">Status</th>
              <th className="px-5">Subscription</th>
              <th className="px-5">Revenue</th>
              <th className="px-5">Last Active</th>
              <th className="px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((role, index) => (
              <tr
                key={index}
                className={`bg-[#131060] text-white h-[90px] ${index !== companies.length - 1 ? 'border-b border-[#fff]' : ''}`}
              >
                <td className="px-5">{role.company}</td>
                <td className="px-5">{role.Location}</td>
                <td className="px-5">{role.fleetsize}</td>
                <td className="px-5">
                  <span className={`px-[12px] py-[12px] text-[#151515] rounded-[24px] text-[12px] ${role.Status === 'Active' ? 'bg-[#EFEFEF]' : 'bg-[#595959]'}`}>
                    {role.Status}
                  </span>
                </td>
                <td className="px-5">
                  <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.Subscription === 'Basic' ? 'bg-[#6763F1]' :
                    role.Subscription === 'Premium' ? 'bg-[#F1AA63]' :
                      role.Subscription === 'Standard' ? 'bg-[#F163EC]' : 'bg-[#EC221F]'}`}>
                    {role.Subscription}
                  </span>
                </td>
                <td className="px-5">{role.Revenue}</td>
                <td className="px-5">{role.LastActive}</td>
                <td className="px-5 relative">
                  <img
                    src="/tableAction.svg"
                    alt="Action"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleActionClick(index)}
                  />
                  {showDropdown === index && (
                    <div
                      className="absolute bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[250px]"
                      style={{
                        top: '30px',
                        right: '20px',
                      }}
                    >
                      {/* <Link
                        to={`/manage-company/performance/${role.id}`}
                        className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b text-[16px] block"
                      >
                        Performance Analytics
                      </Link> */}
                      <Link
                        to={`/manage-company/activity-logs/${role.id}`}
                        className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850] text-[16px] block"
                      >
                        View Activity Logs
                      </Link>
                      <div
                        className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850] text-[16px]"
                        onClick={() => openEditPopup(role)}
                      >
                        Edit Company
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] text-[16px]"
                        onClick={() => handleDelete(role.id)}
                      >
                        Delete Company
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {createRolePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px] overflow-y-auto hide-scrollbar custom-scrollbar"
            style={{
              width: '594px',
              maxHeight: '80vh',
              background: '#080625',
              border: '1px solid #FFFFFF',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div className="flex mb-6">
              <p className="text-[22px] font-semibold">Create Company</p>
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeCreateRolePopup}
              >
                <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>
            <OutlinedInput
              type="text"
              label="Company Name"
              placeholder="Enter Company Name"
              value={companyData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
            <OutlinedInput
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={companyData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <OutlinedInput
              type="text"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              value={companyData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Trucks)"
              placeholder="Enter Number of Trucks"
              value={companyData.fleetSizeTruck}
              onChange={(e) => handleInputChange('fleetSizeTruck', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Drivers)"
              placeholder="Enter Number of Drivers"
              value={companyData.fleetSizeDriver}
              onChange={(e) => handleInputChange('fleetSizeDriver', e.target.value)}
              required
            />
            <OutlinedSelect
              label="Subscription Package"
              options={packages}
              value={companyData.packageId}
              onChange={(e) => handleInputChange('packageId', e.target.value)}
              required
            />
            <button
              className="bg-[#6F1AFF] text-[#fff] text-[18px] font-semibold rounded-lg py-[12px] px-[20px] mt-4"
              onClick={handleCreateCompany}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {editPopup.open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px] hide-scrollbar overflow-y-auto custom-scrollbar"
            style={{
              width: '594px',
              maxHeight: '80vh',
              background: '#080625',
              border: '1px solid #FFFFFF',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div className="flex mb-6">
              <p className="text-[22px] font-semibold">Edit Company</p>
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeEditPopup}
              >
                <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>
            <OutlinedInput
              type="text"
              label="Company Name"
              placeholder="Enter Company Name"
              value={companyData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
            <OutlinedInput
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={companyData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <OutlinedInput
              type="text"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              value={companyData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Trucks)"
              placeholder="Enter Number of Trucks"
              value={companyData.fleetSizeTruck}
              onChange={(e) => handleInputChange('fleetSizeTruck', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Drivers)"
              placeholder="Enter Number of Drivers"
              value={companyData.fleetSizeDriver}
              onChange={(e) => handleInputChange('fleetSizeDriver', e.target.value)}
              required
            />
            <OutlinedSelect
              label="Subscription Package"
              options={packages}
              value={companyData.packageId}
              onChange={(e) => handleInputChange('packageId', e.target.value)}
              required
            />
            <button
              className="bg-[#6F1AFF] text-[#fff] text-[18px] font-semibold rounded-lg py-[12px] px-[20px] mt-4"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DispatchingCompanyTable;