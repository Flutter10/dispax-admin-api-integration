// import React, { useState } from 'react';

// const data = [
//     {
//         roleName: 'Admin',
//         description: 'Full Access',
//         assignedUser: 'John Doe',
//         permissionSummary: 'All Permissions',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Editor',
//         description: 'Edit Content',
//         assignedUser: 'Jane Smith',
//         permissionSummary: 'Edit, Delete',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Viewer',
//         description: 'View Only',
//         assignedUser: 'Alex Brown',
//         permissionSummary: 'View',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Moderator',
//         description: 'Moderate Content',
//         assignedUser: 'Emily Davis',
//         permissionSummary: 'Moderate, Delete',
//         createdOn: '23/04/2025',
//     },
// ];

// const CreateandAssignTable = () => {
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

//     const openEditPopup = (role) => {
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

//     return (
//         <>
//             <div className="flex justify-between mb-2 p-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Create & Assign Role</p>
//                 <button
//                     className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
//                     onClick={openCreateRolePopup}
//                 >
//                     Create Role
//                 </button>
//             </div>
//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 {console.log('Data in table:', data)}
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Role Name</th>
//                             <th className="px-5">Description</th>
//                             <th className="px-5">Assigned User</th>
//                             <th className="px-5">Permission Summary</th>
//                             <th className="px-5">Created On</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data && data.length > 0 ? (
//                             data.map((role, index) => (
//                                 <tr
//                                     key={index}
//                                     className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                                 >
//                                     <td className="px-5">{role.roleName}</td>
//                                     <td className="px-5">{role.description}</td>
//                                     <td className="px-5">{role.assignedUser}</td>
//                                     <td className="px-5">{role.permissionSummary}</td>
//                                     <td className="px-5">{role.createdOn}</td>
//                                     <td className="px-5 relative">
//                                         <img
//                                             src="/tableAction.svg"
//                                             alt="Action"
//                                             className="w-5 h-5 cursor-pointer"
//                                             onClick={() => handleActionClick(index)}
//                                         />
//                                         {showDropdown === index && (
//                                             <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-24">
//                                                 <div
//                                                     className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                     onClick={() => openEditPopup(role)}
//                                                 >
//                                                     Edit
//                                                 </div>
//                                                 <div
//                                                     className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
//                                                     onClick={() => handleDelete(role.roleName)}
//                                                 >
//                                                     Delete
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6" className="px-5 py-4 text-white text-center">
//                                     No roles available
//                                 </td>
//                             </tr>
//                         )}
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
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeCreateRolePopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter role name"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter short description"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <select
//                                     name=""
//                                     id=""
//                                     className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                                     placeholder="Select"
//                                 >
//                                     <option value="">Select</option>
//                                 </select>
//                                 <div className="">
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input type="checkbox" className="sr-only peer" />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeCreateRolePopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleCreateRole}
//                             >
//                                 Create Role
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Role Popup */}
//             {editPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#131060',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeEditPopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.roleName}</h2>
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <select
//                                     name=""
//                                     id=""
//                                     className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                                     placeholder="Select"
//                                 >
//                                     <option value="">Select</option>
//                                 </select>
//                                 <div className="">
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input type="checkbox" className="sr-only peer" />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeEditPopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleSaveChanges}
//                             >
//                                 Save Changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default CreateandAssignTable;
// import React, { useState, useEffect, useRef } from 'react';
// import apiService from '../ApiController/ApiService'; // Adjust the path to your apiService file

// const CreateandAssignTable = () => {
//     const [showDropdown, setShowDropdown] = useState(null);
//     const [createRolePopup, setCreateRolePopup] = useState(false);
//     const [editPopup, setEditPopup] = useState({ open: false, role: null });
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
//     const [users, setUsers] = useState([]);
//     const [selectedUsers, setSelectedUsers] = useState([]);
//     const [status, setStatus] = useState(false);
//     const [roles, setRoles] = useState([]);
//     const [error, setError] = useState(null);
//     const [userDropdownOpen, setUserDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Fetch roles and users from API
//     useEffect(() => {
//         const fetchRolesAndUsers = async () => {
//             try {
//                 const result = await apiService.getAllRoleAccess();
//                 if (result.docs && result.docs.length > 0) {
//                     const transformedRoles = result.docs.map((role) => ({
//                         roleName: role.name,
//                         description: role.description,
//                         assignedUser: role.user.map((u) => u.fullName).join(', '),
//                         permissionSummary: [
//                             role.createPermission && 'Create',
//                             role.readPermission && 'View',
//                             role.updatePermission && 'Edit',
//                             role.deletePermission && 'Delete',
//                         ]
//                             .filter(Boolean)
//                             .join(', ') || 'None',
//                         createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
//                     }));
//                     setRoles(transformedRoles);
//                     const allUsers = result.docs.flatMap((role) => role.user);
//                     setUsers(allUsers);
//                 } else {
//                     setRoles([]);
//                     setUsers([]);
//                     setError('No roles or users found');
//                 }
//             } catch (error) {
//                 setError('Error fetching roles and users: ' + error.message);
//             }
//         };
//         fetchRolesAndUsers();
//     }, []);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setUserDropdownOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleActionClick = (index) => {
//         setShowDropdown((prev) => (prev === index ? null : index));
//     };

//     const openCreateRolePopup = () => {
//         console.log('Opening Create Role popup');
//         setCreateRolePopup(true);
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
//         setSelectedUsers([]);
//         setStatus(false);
//         setError(null);
//     };

//     const closeCreateRolePopup = () => {
//         console.log('Closing Create Role popup');
//         setCreateRolePopup(false);
//     };

//     const handleCreateRole = async () => {
//         const roleData = {
//             name: roleName,
//             description,
//             shipment: permissions.Shipment,
//             billing: permissions.Billing,
//             userAccess: permissions.Users,
//             company: permissions.Company,
//             createPermission: permissions.Create,
//             readPermission: permissions.View,
//             updatePermission: permissions.Edit,
//             deletePermission: permissions.Delete,
//             user: selectedUsers,
//             status,
//         };

//         try {
//             const result = await apiService.addRoleAccess(roleData);
//             console.log('Role created successfully:', result);
//             const updatedRoles = await apiService.getAllRoleAccess();
//             const transformedRoles = updatedRoles.docs.map((role) => ({
//                 roleName: role.name,
//                 description: role.description,
//                 assignedUser: role.user.map((u) => u.fullName).join(', '),
//                 permissionSummary: [
//                     role.createPermission && 'Create',
//                     role.readPermission && 'View',
//                     role.updatePermission && 'Edit',
//                     role.deletePermission && 'Delete',
//                 ]
//                     .filter(Boolean)
//                     .join(', ') || 'None',
//                 createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
//             }));
//             setRoles(transformedRoles);
//             closeCreateRolePopup();
//         } catch (error) {
//             setError('Error creating role: ' + error.message);
//         }
//     };

//     const openEditPopup = (role) => {
//         console.log('Opening Edit popup for role:', role.roleName);
//         setEditPopup({ open: true, role });
//         setRoleName(role.roleName);
//         setDescription(role.description);
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

//     const handleUserChange = (userId) => {
//         setSelectedUsers((prev) =>
//             prev.includes(userId)
//                 ? prev.filter((id) => id !== userId)
//                 : [...prev, userId]
//         );
//     };

//     return (
//         <>
//             <div className="flex justify-between mb-2 p-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Create & Assign Role</p>
//                 <button
//                     className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
//                     onClick={openCreateRolePopup}
//                 >
//                     Create Role
//                 </button>
//             </div>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Role Name</th>
//                             <th className="px-5">Description</th>
//                             <th className="px-5">Assigned User</th>
//                             <th className="px-5">Permission Summary</th>
//                             <th className="px-5">Created On</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {roles && roles.length > 0 ? (
//                             roles.map((role, index) => (
//                                 <tr
//                                     key={index}
//                                     className={`bg-[#131060] text-white h-[90px] ${index !== roles.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                                 >
//                                     <td className="px-5">{role.roleName}</td>
//                                     <td className="px-5">{role.description}</td>
//                                     <td className="px-5">{role.assignedUser}</td>
//                                     <td className="px-5">{role.permissionSummary}</td>
//                                     <td className="px-5">{role.createdOn}</td>
//                                     <td className="px-5 relative">
//                                         <img
//                                             src="/tableAction.svg"
//                                             alt="Action"
//                                             className="w-5 h-5 cursor-pointer"
//                                             onClick={() => handleActionClick(index)}
//                                         />
//                                         {showDropdown === index && (
//                                             <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-24">
//                                                 <div
//                                                     className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                     onClick={() => openEditPopup(role)}
//                                                 >
//                                                     Edit
//                                                 </div>
//                                                 <div
//                                                     className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
//                                                     onClick={() => handleDelete(role.roleName)}
//                                                 >
//                                                     Delete
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6" className="px-5 py-4 text-white text-center">
//                                     No roles available
//                                 </td>
//                             </tr>
//                         )}
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
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeCreateRolePopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
//                         {error && <p className="text-red-500 mb-4">{error}</p>}
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter role name"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter short description"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <div className="relative w-[263px]" ref={dropdownRef}>
//                                     <button
//                                         className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none text-left flex items-center justify-between"
//                                         onClick={() => setUserDropdownOpen(!userDropdownOpen)}
//                                     >
//                                         <span>
//                                             {selectedUsers.length > 0
//                                                 ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
//                                                 : 'Select Users'}
//                                         </span>
//                                         <svg
//                                             className={`w-5 h-5 transform ${userDropdownOpen ? 'rotate-180' : ''}`}
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M19 9l-7 7-7-7"
//                                             />
//                                         </svg>
//                                     </button>
//                                     {userDropdownOpen && (
//                                         <div className="absolute z-50 w-full mt-1 bg-[#080625] border border-[#FFFFFF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                                             {users.length > 0 ? (
//                                                 users.map((user) => (
//                                                     <label
//                                                         key={user._id}
//                                                         className="flex items-center px-4 py-2 hover:bg-[#1A1850] cursor-pointer"
//                                                     >
//                                                         <input
//                                                             type="checkbox"
//                                                             checked={selectedUsers.includes(user._id)}
//                                                             onChange={() => handleUserChange(user._id)}
//                                                             className="hidden"
//                                                         />
//                                                         <span
//                                                             className="w-5 h-5 mr-2 flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                                         >
//                                                             <span
//                                                                 className={`w-4 h-4 bg-[#65558F] rounded-sm ${selectedUsers.includes(user._id) ? 'opacity-100' : 'opacity-0'} transition-opacity`}
//                                                             >
//                                                                 <svg
//                                                                     className="w-full h-full text-white"
//                                                                     fill="none"
//                                                                     stroke="currentColor"
//                                                                     viewBox="0 0 24 24"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                 >
//                                                                     <path
//                                                                         strokeLinecap="round"
//                                                                         strokeLinejoin="round"
//                                                                         strokeWidth="2"
//                                                                         d="M5 13l4 4L19 7"
//                                                                     />
//                                                                 </svg>
//                                                             </span>
//                                                         </span>
//                                                         <span className="text-white text-sm">{user.fullName}</span>
//                                                     </label>
//                                                 ))
//                                             ) : (
//                                                 <div className="px-4 py-2 text-white text-sm">No users available</div>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             className="sr-only peer"
//                                             checked={status}
//                                             onChange={() => setStatus(!status)}
//                                         />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeCreateRolePopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleCreateRole}
//                             >
//                                 Create Role
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Role Popup */}
//             {editPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#131060',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeEditPopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.roleName}</h2>
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name={perm}
//                                             id={perm}
//                                             className="hidden"
//                                             checked={permissions[perm]}
//                                             onChange={(e) => {
//                                                 handlePermissionChange(perm);
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <div className="relative w-[263px]" ref={dropdownRef}>
//                                     <button
//                                         className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none text-left flex items-center justify-between"
//                                         onClick={() => setUserDropdownOpen(!userDropdownOpen)}
//                                     >
//                                         <span>
//                                             {selectedUsers.length > 0
//                                                 ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
//                                                 : 'Select Users'}
//                                         </span>
//                                         <svg
//                                             className={`w-5 h-5 transform ${userDropdownOpen ? 'rotate-180' : ''}`}
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M19 9l-7 7-7-7"
//                                             />
//                                         </svg>
//                                     </button>
//                                     {userDropdownOpen && (
//                                         <div className="absolute z-50 w-full mt-1 bg-[#080625] border border-[#FFFFFF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                                             {users.length > 0 ? (
//                                                 users.map((user) => (
//                                                     <label
//                                                         key={user._id}
//                                                         className="flex items-center px-4 py-2 hover:bg-[#1A1850] cursor-pointer"
//                                                     >
//                                                         <input
//                                                             type="checkbox"
//                                                             checked={selectedUsers.includes(user._id)}
//                                                             onChange={() => handleUserChange(user._id)}
//                                                             className="hidden"
//                                                         />
//                                                         <span
//                                                             className="w-5 h-5 mr-2 flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                                         >
//                                                             <span
//                                                                 className={`w-4 h-4 bg-[#65558F] rounded-sm ${selectedUsers.includes(user._id) ? 'opacity-100' : 'opacity-0'} transition-opacity`}
//                                                             >
//                                                                 <svg
//                                                                     className="w-full h-full text-white"
//                                                                     fill="none"
//                                                                     stroke="currentColor"
//                                                                     viewBox="0 0 24 24"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                 >
//                                                                     <path
//                                                                         strokeLinecap="round"
//                                                                         strokeLinejoin="round"
//                                                                         strokeWidth="2"
//                                                                         d="M5 13l4 4L19 7"
//                                                                     />
//                                                                 </svg>
//                                                             </span>
//                                                         </span>
//                                                         <span className="text-white text-sm">{user.fullName}</span>
//                                                     </label>
//                                                 ))
//                                             ) : (
//                                                 <div className="px-4 py-2 text-white text-sm">No users available</div>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             className="sr-only peer"
//                                             checked={status}
//                                             onChange={() => setStatus(!status)}
//                                         />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeEditPopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleSaveChanges}
//                             >
//                                 Save Changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default CreateandAssignTable;
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import apiService from '../ApiController/ApiService'; // Adjust the path to your apiService file

const CreateandAssignTable = () => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [createRolePopup, setCreateRolePopup] = useState(false);
    const [editPopup, setEditPopup] = useState({ open: false, role: null });
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [permissions, setPermissions] = useState({
        Shipment: false,
        Billing: false,
        Users: false,
        Company: false,
        Create: false,
        Edit: false,
        Delete: false,
        View: false,
        Moderate: false,
    });
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [status, setStatus] = useState(false);
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [editUserDropdownOpen, setEditUserDropdownOpen] = useState(false);
    const createDropdownRef = useRef(null);
    const editDropdownRef = useRef(null);

    // Fetch roles and users from API
    useEffect(() => {
        const fetchRolesAndUsers = async () => {
            try {
                const result = await apiService.getAllRoleAccess();
                if (result.docs && result.docs.length > 0) {
                    const transformedRoles = result.docs.map((role) => ({
                        id: role._id,
                        roleName: role.name,
                        description: role.description,
                        assignedUser: role.user.map((u) => u.fullName).join(', '),
                        permissionSummary: [
                            role.createPermission && 'Create',
                            role.readPermission && 'View',
                            role.updatePermission && 'Edit',
                            role.deletePermission && 'Delete',
                        ]
                            .filter(Boolean)
                            .join(', ') || 'None',
                        createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
                    }));
                    setRoles(transformedRoles);
                    const allUsers = result.docs.flatMap((role) => role.user);
                    setUsers(allUsers);
                } else {
                    setRoles([]);
                    setUsers([]);
                    setError('No roles or users found');
                }
            } catch (error) {
                setError('Error fetching roles and users: ' + error.message);
            }
        };
        fetchRolesAndUsers();
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (createDropdownRef.current && !createDropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
            if (editDropdownRef.current && !editDropdownRef.current.contains(event.target)) {
                setEditUserDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleActionClick = (index) => {
        setShowDropdown((prev) => (prev === index ? null : index));
    };

    const openCreateRolePopup = () => {
        console.log('Opening Create Role popup');
        setCreateRolePopup(true);
        setRoleName('');
        setDescription('');
        setPermissions({
            Shipment: false,
            Billing: false,
            Users: false,
            Company: false,
            Create: false,
            Edit: false,
            Delete: false,
            View: false,
            Moderate: false,
        });
        setSelectedUsers([]);
        setStatus(false);
        setError(null);
    };

    const closeCreateRolePopup = () => {
        console.log('Closing Create Role popup');
        setCreateRolePopup(false);
    };

    const handleCreateRole = async () => {
        const roleData = {
            name: roleName,
            description,
            shipment: permissions.Shipment,
            billing: permissions.Billing,
            userAccess: permissions.Users,
            company: permissions.Company,
            createPermission: permissions.Create,
            readPermission: permissions.View,
            updatePermission: permissions.Edit,
            deletePermission: permissions.Delete,
            user: selectedUsers,
            status,
        };

        try {
            const result = await apiService.addRoleAccess(roleData);
            console.log('Role created successfully:', result);
            const updatedRoles = await apiService.getAllRoleAccess();
            const transformedRoles = updatedRoles.docs.map((role) => ({
                id: role._id,
                roleName: role.name,
                description: role.description,
                assignedUser: role.user.map((u) => u.fullName).join(', '),
                permissionSummary: [
                    role.createPermission && 'Create',
                    role.readPermission && 'View',
                    role.updatePermission && 'Edit',
                    role.deletePermission && 'Delete',
                ]
                    .filter(Boolean)
                    .join(', ') || 'None',
                createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
            }));
            setRoles(transformedRoles);
            closeCreateRolePopup();
        } catch (error) {
            setError('Error creating role: ' + error.message);
        }
    };

    const openEditPopup = async (role) => {
        console.log('Opening Edit popup for role:', role.roleName);
        try {
            const roleData = await apiService.getRoleById(role.id);
            setEditPopup({ open: true, role: { ...role, id: roleData._id } });
            setRoleName(roleData.name);
            setDescription(roleData.description);
            setPermissions({
                Shipment: !!roleData.shipment,
                Billing: !!roleData.billing,
                Users: !!roleData.userAccess,
                Company: !!roleData.company,
                Create: !!roleData.createPermission,
                Edit: !!roleData.updatePermission,
                Delete: !!roleData.deletePermission,
                View: !!roleData.readPermission,
                Moderate: false, // Not in API response
            });
            setSelectedUsers(roleData.user.map((u) => u._id));
            setStatus(!!roleData.status);
            setError(null);
        } catch (error) {
            setError('Error fetching role details: ' + error.message);
        }
        setShowDropdown(null);
    };

    const closeEditPopup = () => {
        console.log('Closing Edit popup');
        setEditPopup({ open: false, role: null });
    };

    const handleSaveChanges = async () => {
        const roleData = {
            name: roleName,
            description,
            shipment: permissions.Shipment,
            billing: permissions.Billing,
            userAccess: permissions.Users,
            company: permissions.Company,
            createPermission: permissions.Create,
            readPermission: permissions.View,
            updatePermission: permissions.Edit,
            deletePermission: permissions.Delete,
            user: selectedUsers,
            status,
        };

        try {
            const result = await apiService.updateRole(editPopup.role.id, roleData);
            console.log('Role updated successfully:', result);
            const updatedRoles = await apiService.getAllRoleAccess();
            const transformedRoles = updatedRoles.docs.map((role) => ({
                id: role._id,
                roleName: role.name,
                description: role.description,
                assignedUser: role.user.map((u) => u.fullName).join(', '),
                permissionSummary: [
                    role.createPermission && 'Create',
                    role.readPermission && 'View',
                    role.updatePermission && 'Edit',
                    role.deletePermission && 'Delete',
                ]
                    .filter(Boolean)
                    .join(', ') || 'None',
                createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
            }));
            setRoles(transformedRoles);
            closeEditPopup();
        } catch (error) {
            setError('Error updating role: ' + error.message);
        }
    };

    const handleDelete = async (roleId, roleName) => {
        try {
            const result = await apiService.deleteRole(roleId);
            console.log('Role deleted successfully:', result);
            const updatedRoles = await apiService.getAllRoleAccess();
            const transformedRoles = updatedRoles.docs.map((role) => ({
                id: role._id,
                roleName: role.name,
                description: role.description,
                assignedUser: role.user.map((u) => u.fullName).join(', '),
                permissionSummary: [
                    role.createPermission && 'Create',
                    role.readPermission && 'View',
                    role.updatePermission && 'Edit',
                    role.deletePermission && 'Delete',
                ]
                    .filter(Boolean)
                    .join(', ') || 'None',
                createdOn: new Date(role.createdAt).toLocaleDateString('en-GB'),
            }));
            setRoles(transformedRoles);
            setShowDropdown(null);
            Swal.fire({
                title: 'Success!',
                text: `Role "${roleName}" deleted successfully.`,
                icon: 'success',
                confirmButtonColor: '#6F1AFF',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            setError('Error deleting role: ' + error.message);
        }
    };

    const handlePermissionChange = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    const handleUserChange = (userId) => {
        setSelectedUsers((prev) =>
            prev.includes(userId)
                ? prev.filter((id) => id !== userId)
                : [...prev, userId]
        );
    };

    return (
        <>
            <div className="flex justify-between mb-2 p-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Create & Assign Role</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openCreateRolePopup}
                >
                    Create Role
                </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Role Name</th>
                            <th className="px-5">Description</th>
                            <th className="px-5">Assigned User</th>
                            <th className="px-5">Permission Summary</th>
                            <th className="px-5">Created On</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles && roles.length > 0 ? (
                            roles.map((role, index) => (
                                <tr
                                    key={index}
                                    className={`bg-[#131060] text-white h-[90px] ${index !== roles.length - 1 ? 'border-b border-[#fff]' : ''}`}
                                >
                                    <td className="px-5">{role.roleName}</td>
                                    <td className="px-5">{role.description}</td>
                                    <td className="px-5">{role.assignedUser}</td>
                                    <td className="px-5">{role.permissionSummary}</td>
                                    <td className="px-5">{role.createdOn}</td>
                                    <td className="px-5 relative">
                                        <img
                                            src="/tableAction.svg"
                                            alt="Action"
                                            className="w-5 h-5 cursor-pointer"
                                            onClick={() => handleActionClick(index)}
                                        />
                                        {showDropdown === index && (
                                            <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-24">
                                                <div
                                                    className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                                                    onClick={() => openEditPopup(role)}
                                                >
                                                    Edit
                                                </div>
                                                <div
                                                    className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                    onClick={() => handleDelete(role.id, role.roleName)}
                                                >
                                                    Delete
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-5 py-4 text-white text-center">
                                    No roles available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Create Role Popup */}
            {createRolePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#080625',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeCreateRolePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter role name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter short description"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span
                                            className={`w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] ${permissions[perm] ? 'bg-opacity-100' : 'bg-opacity-30'} rounded-md transition-all duration-200 relative`}
                                        >
                                            <span className={`w-[16px] h-[16px] bg-[#65558F] rounded-sm ${permissions[perm] ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View'].map((perm) => ( // Removed 'Moderate' as it's not in API
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span
                                            className={`w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] ${permissions[perm] ? 'bg-opacity-100' : 'bg-opacity-30'} rounded-md transition-all duration-200 relative`}
                                        >
                                            <span className={`w-[16px] h-[16px] bg-[#65558F] rounded-sm ${permissions[perm] ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign User</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="relative w-[263px]" ref={createDropdownRef}>
                                    <button
                                        className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none text-left flex items-center justify-between"
                                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                    >
                                        <span>
                                            {selectedUsers.length > 0
                                                ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
                                                : 'Select Users'}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 transform ${userDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {userDropdownOpen && (
                                        <div className="absolute z-50 w-full mt-1 bg-[#080625] border border-[#FFFFFF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {users.length > 0 ? (
                                                users.map((user) => (
                                                    <label
                                                        key={user._id}
                                                        className="flex items-center px-4 py-2 hover:bg-[#1A1850] cursor-pointer"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedUsers.includes(user._id)}
                                                            onChange={() => handleUserChange(user._id)}
                                                            className="hidden"
                                                        />
                                                        <span
                                                            className="w-5 h-5 mr-2 flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                                        >
                                                            <span
                                                                className={`w-4 h-4 bg-[#65558F] rounded-sm ${selectedUsers.includes(user._id) ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                                                            >
                                                                <svg
                                                                    className="w-full h-full text-white"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-white text-sm">{user.fullName}</span>
                                                    </label>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-white text-sm">No users available</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={status}
                                            onChange={() => setStatus(!status)}
                                        />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeCreateRolePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleCreateRole}
                            >
                                Create Role
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Role Popup */}
            {editPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeEditPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.roleName}</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter role name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter short description"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span
                                            className={`w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] ${permissions[perm] ? 'bg-opacity-100' : 'bg-opacity-30'} rounded-md transition-all duration-200 relative`}
                                        >
                                            <span className={`w-[16px] h-[16px] bg-[#65558F] rounded-sm ${permissions[perm] ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span
                                            className={`w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] ${permissions[perm] ? 'bg-opacity-100' : 'bg-opacity-30'} rounded-md transition-all duration-200 relative`}
                                        >
                                            <span className={`w-[16px] h-[16px] bg-[#65558F] rounded-sm ${permissions[perm] ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign User</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="relative w-[263px]" ref={editDropdownRef}>
                                    <button
                                        className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none text-left flex items-center justify-between"
                                        onClick={() => setEditUserDropdownOpen(!editUserDropdownOpen)}
                                    >
                                        <span>
                                            {selectedUsers.length > 0
                                                ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
                                                : 'Select Users'}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 transform ${editUserDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {editUserDropdownOpen && (
                                        <div className="absolute z-50 w-full mt-1 bg-[#080625] border border-[#FFFFFF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {users.length > 0 ? (
                                                users.map((user) => (
                                                    <label
                                                        key={user._id}
                                                        className="flex items-center px-4 py-2 hover:bg-[#1A1850] cursor-pointer"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedUsers.includes(user._id)}
                                                            onChange={() => handleUserChange(user._id)}
                                                            className="hidden"
                                                        />
                                                        <span
                                                            className="w-5 h-5 mr-2 flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                                        >
                                                            <span
                                                                className={`w-4 h-4 bg-[#65558F] rounded-sm ${selectedUsers.includes(user._id) ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                                                            >
                                                                <svg
                                                                    className="w-full h-full text-white"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-white text-sm">{user.fullName}</span>
                                                    </label>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-white text-sm">No users available</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={status}
                                            onChange={() => setStatus(!status)}
                                        />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeEditPopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateandAssignTable;