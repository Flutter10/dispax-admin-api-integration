// import React, { useState } from 'react';

// const data = [
//     {
//         roleName: 'Base Rate',
//         description: 'Per/KM',
//         assignedUser: '$0.75/KM',
//         permissionSummary: 'All Companies',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Time-Based',
//         description: 'Per/KM',
//         assignedUser: '$0.75/KM',
//         permissionSummary: 'All Companies',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Commission',
//         description: 'Per/KM',
//         assignedUser: '$0.75/KM',
//         permissionSummary: 'All Companies',
//         createdOn: '23/04/2025',
//     },
//     {
//         roleName: 'Commission',
//         description: 'Per/KM',
//         assignedUser: '$0.75/KM',
//         permissionSummary: 'All Companies',
//         createdOn: '23/04/2025',
//     },
// ];

// const ToggleSwitch = ({ label, description, checked, onChange }) => (
//     <div className="mb-2">
//         <div className="flex justify-between items-center py-2 gap-5">
//             <div>
//                 <h3 className=" text-white">{label}</h3>
//                 <p className="text-gray-400 text-[12px]">{description}</p>
//             </div>
//             <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
//                 <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//             </label>
//         </div>
//     </div>
// );


// const PriceManagement = () => {
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
//     const [reminderEnabled, setReminderEnabled] = React.useState(true);

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
//             <div className="flex justify-between mb-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Pricing & Commission Management</p>
//                 <button
//                     className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
//                     onClick={openCreateRolePopup}
//                 >
//                     Add Plan
//                 </button>
//             </div>
//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Type</th>
//                             <th className="px-5">Rule/Category</th>
//                             <th className="px-5">Rate/Value</th>
//                             <th className="px-5">Applies To</th>
//                             <th className="px-5">Effective From</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.roleName}</td>
//                                 <td className="px-5">{role.description}</td>
//                                 <td className="px-5">{role.assignedUser}</td>
//                                 <td className="px-5">{role.permissionSummary}</td>
//                                 <td className="px-5">{role.createdOn}</td>
//                                 <td className="px-5 relative">
//                                     <img
//                                         src="/tableAction.svg"
//                                         alt="Action"
//                                         className="w-5 h-5 cursor-pointer"
//                                         onClick={() => handleActionClick(index)}
//                                     />
//                                     {showDropdown === index && (
//                                         <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[120px]">
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() => openEditPopup(role)}
//                                             >
//                                                 View
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() => openEditPopup(role)}
//                                             >
//                                                 Edit
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
//                         className="text-white p-6 rounded-[16px] border border-white w-[594px] h-[580px] relative bg-[#080625] flex flex-col"
//                     >
//                         {/* Close Button */}
//                         <button
//                             className="absolute top-4 right-4"
//                             onClick={closeCreateRolePopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>

//                         {/* Title */}
//                         <h2 className="text-[22px] font-semibold mb-2">Base Rate</h2>
//                         <p className="text-[15px] font-medium mb-4">Basic Info</p>

//                         {/* First Row */}
//                         <div className="flex gap-4 mb-4">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rule Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Basic"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rule Type</label>
//                                 <div className="relative">
//                                     <select
//                                         className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg appearance-none"
//                                         defaultValue="Base Rate"
//                                     >
//                                         <option className="bg-[#080625] text-white">Base Rate</option>
//                                         <option className="bg-[#080625] text-white">Other</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
//                                         ▼
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Row */}
//                         <div className="flex gap-4 mb-4">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rate Type</label>
//                                 <input
//                                     type="text"
//                                     placeholder="12%"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Amount</label>
//                                 <input
//                                     type="text"
//                                     placeholder="$49"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                         </div>

//                         <p className="text-[15px] font-medium mb-4">Basic Info</p>

//                         {/* Third Row */}
//                         <div className="flex gap-4 mb-4">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Applies to</label>
//                                 <div className="relative">
//                                     <select
//                                         className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg appearance-none"
//                                         defaultValue="Company"
//                                     >
//                                         <option className="bg-[#080625] text-white">Company</option>
//                                         <option className="bg-[#080625] text-white">User</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
//                                         ▼
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Effective date</label>
//                                 <div className="relative">
//                                     <input
//                                         type="date"
//                                         className="w-[263px] h-[48px] pl-10 pr-4 bg-transparent text-white border border-white rounded-lg focus:outline-none appearance-none"
//                                     />
//                                     <img
//                                         src="/dateIcons.svg"
//                                         alt="calendar"
//                                         className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Status */}
//                         <div className="flex items-center gap-4 ">
//                             <div>
//                                 <label className="text-sm text-gray-400  block">Status</label>
//                                 <div className="flex items-center gap-2">
//                                     <ToggleSwitch
//                                         label='Active'
//                                         checked={reminderEnabled}
//                                         onChange={() => setReminderEnabled(!reminderEnabled)}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Buttons */}
//                         <div className="flex justify-end gap-4 mt-auto pt-6">
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
//                                 Save Plan
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
//                             height: '600px',
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
//                         <h2 className="text-[22px] font-semibold mb-1">Base Rate</h2>
//                         <p className="text-[15px] font-medium mb-2">Basic Info</p>

//                         {/* First Row */}
//                         <div className="flex gap-4 mb-2">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rule Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Basic"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rule Type</label>
//                                 <div className="relative">
//                                     <select
//                                         className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg appearance-none"
//                                         defaultValue="Base Rate"
//                                     >
//                                         <option className="bg-[#080625] text-white">Base Rate</option>
//                                         <option className="bg-[#080625] text-white">Other</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
//                                         ▼
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Row */}
//                         <div className="flex gap-4 mb-2">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Rate Type</label>
//                                 <input
//                                     type="text"
//                                     placeholder="12%"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Amount</label>
//                                 <input
//                                     type="text"
//                                     placeholder="$49"
//                                     className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                         </div>

//                         <p className="text-[15px] font-medium mb-2">Basic Info</p>

//                         {/* Third Row */}
//                         <div className="flex gap-4 mb-2">
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Applies to</label>
//                                 <div className="relative">
//                                     <select
//                                         className="w-[263px] h-[48px] px-4 bg-transparent text-white border border-white rounded-lg appearance-none"
//                                         defaultValue="Company"
//                                     >
//                                         <option className="bg-[#080625] text-white">Company</option>
//                                         <option className="bg-[#080625] text-white">User</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
//                                         ▼
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="text-sm text-gray-400 mb-1 block">Effective date</label>
//                                 <div className="relative">
//                                     <input
//                                         type="date"
//                                         className="w-[263px] h-[48px] pl-10 pr-4 bg-transparent text-white border border-white rounded-lg focus:outline-none appearance-none"
//                                     />
//                                     <img
//                                         src="/dateIcons.svg"
//                                         alt="calendar"
//                                         className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Status */}
//                         <div className="flex items-center gap-4 ">
//                             <div>
//                                 <label className="text-sm text-gray-400  block">Status</label>
//                                 <div className="flex items-center gap-2">
//                                     <ToggleSwitch
//                                         label='Active'
//                                         checked={reminderEnabled}
//                                         onChange={() => setReminderEnabled(!reminderEnabled)}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Buttons */}
//                         <div className="flex justify-end gap-4 mt-auto pt-6">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeEditPopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={closeEditPopup}
//                             >
//                                 Save Plan
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default PriceManagement;
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import apiService from '../ApiController/ApiService'; // Assuming apiService is in the specified directory

const ToggleSwitch = ({ label, checked, onChange, disabled = false }) => (
  <div className="mb-2">
    <div className="flex justify-between items-center py-2 gap-5">
      <div>
        <h3 className="text-white">{label}</h3>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div
          className={`w-11 h-6 bg-gray-600 rounded-full peer ${
            disabled ? 'opacity-50' : 'peer-checked:bg-green-500'
          } peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all`}
        ></div>
      </label>
    </div>
  </div>
);

const PriceManagement = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [createRolePopup, setCreateRolePopup] = useState(false);
  const [editPopup, setEditPopup] = useState({ open: false, mode: 'view', planId: null });
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ruleName, setRuleName] = useState('');
  const [ruleType, setRuleType] = useState('');
  const [rateType, setRateType] = useState('');
  const [amount, setAmount] = useState('');
  const [appliedTo, setAppliedTo] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [status, setStatus] = useState(true);
  const [editRuleName, setEditRuleName] = useState('');
  const [editRuleType, setEditRuleType] = useState('');
  const [editRateType, setEditRateType] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editAppliedTo, setEditAppliedTo] = useState('');
  const [editEffectiveDate, setEditEffectiveDate] = useState('');
  const [editStatus, setEditStatus] = useState(true);

  // Fetch all pricing plans on component mount
  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        setLoading(true);
        const response = await apiService.getAllPricingAndCommission();
        console.log('API Response:', response); // Debug log
        const data = response?.docs || []; // Access docs array
        const transformedPlans = Array.isArray(data)
          ? data.map(plan => ({
              id: plan._id,
              roleName: plan.ruleName || 'Unnamed Rule',
              description: plan.rateType || 'N/A',
              assignedUser: plan.amount != null ? (plan.amount.toString().startsWith('$') ? plan.amount : `$${plan.amount}`) : 'N/A',
              permissionSummary: plan.appliedTo || 'N/A',
              createdOn: plan.effectiveDate
                ? new Date(plan.effectiveDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : 'N/A',
            }))
          : [];
        setPricingPlans(transformedPlans);
      } catch (error) {
        console.error('Error fetching pricing plans:', error); // Debug log
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch pricing plans. Please try again.',
        });
        setPricingPlans([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPricingPlans();
  }, []);

  const handleActionClick = (index) => {
    setShowDropdown((prev) => (prev === index ? null : index));
  };

  const openCreateRolePopup = () => {
    console.log('Opening Create Role popup');
    setCreateRolePopup(true);
    // Reset form states
    setRuleName('');
    setRuleType('');
    setRateType('');
    setAmount('');
    setAppliedTo('');
    setEffectiveDate('');
    setStatus(true);
  };

  const closeCreateRolePopup = () => {
    console.log('Closing Create Role popup');
    setCreateRolePopup(false);
  };

  const openViewPopup = async (planId) => {
    try {
      const plan = await apiService.getPricingAndCommissionById(planId);
      console.log('View Plan Data:', plan); // Debug log
      setEditRuleName(plan.ruleName || '');
      setEditRuleType(plan.ruleType || '');
      setEditRateType(plan.rateType || '');
      setEditAmount(plan.amount != null ? `$${plan.amount}` : '');
      setEditAppliedTo(plan.appliedTo || '');
      setEditEffectiveDate(plan.effectiveDate ? plan.effectiveDate.split('T')[0] : '');
      setEditStatus(plan.status || false);
      setEditPopup({ open: true, mode: 'view', planId });
      setShowDropdown(null);
    } catch (error) {
      console.error('Error fetching plan details:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch plan details. Please try again.',
      });
    }
  };

  const openEditPopup = async (planId) => {
    try {
      const plan = await apiService.getPricingAndCommissionById(planId);
      console.log('Edit Plan Data:', plan); // Debug log
      setEditRuleName(plan.ruleName || '');
      setEditRuleType(plan.ruleType || '');
      setEditRateType(plan.rateType || '');
      setEditAmount(plan.amount != null ? `$${plan.amount}` : '');
      setEditAppliedTo(plan.appliedTo || '');
      setEditEffectiveDate(plan.effectiveDate ? plan.effectiveDate.split('T')[0] : '');
      setEditStatus(plan.status || false);
      setEditPopup({ open: true, mode: 'edit', planId });
      setShowDropdown(null);
    } catch (error) {
      console.error('Error fetching plan details for edit:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch plan details. Please try again.',
      });
    }
  };

  const closeEditPopup = () => {
    setEditPopup({ open: false, mode: 'view', planId: null });
  };

  const handleCreateRole = async () => {
    // Validate all fields
    if (!ruleName || !ruleType || !rateType || !amount || !appliedTo || !effectiveDate) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
      });
      return;
    }

    try {
      const pricingData = {
        ruleName,
        ruleType,
        rateType,
        amount: amount.replace('$', ''),
        appliedTo,
        effectiveDate,
        status,
      };
      await apiService.addPricingAndCommission(pricingData);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Pricing plan created successfully!',
      });
      // Refresh pricing plans
      const response = await apiService.getAllPricingAndCommission();
      console.log('Refresh API Response:', response); // Debug log
      const data = response?.docs || [];
      const transformedPlans = Array.isArray(data)
        ? data.map(plan => ({
            id: plan._id,
            roleName: plan.ruleName || 'Unnamed Rule',
            description: plan.rateType || 'N/A',
            assignedUser: plan.amount != null ? (plan.amount.toString().startsWith('$') ? plan.amount : `$${plan.amount}`) : 'N/A',
            permissionSummary: plan.appliedTo || 'N/A',
            createdOn: plan.effectiveDate
              ? new Date(plan.effectiveDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
              : 'N/A',
          }))
        : [];
      setPricingPlans(transformedPlans);
      closeCreateRolePopup();
    } catch (error) {
      console.error('Error creating pricing plan:', error); // Debug log
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to create pricing plan. Please try again.',
      });
    }
  };

  const handleUpdatePlan = async () => {
    // Validate all fields
    if (!editRuleName || !editRuleType || !editRateType || !editAmount || !editAppliedTo || !editEffectiveDate) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
      });
      return;
    }

    try {
      const pricingData = {
        ruleName: editRuleName,
        ruleType: editRuleType,
        rateType: editRateType,
        amount: editAmount.replace('$', ''),
        appliedTo: editAppliedTo,
        effectiveDate: editEffectiveDate,
        status: editStatus,
      };
      await apiService.updatePricingAndCommission(editPopup.planId, pricingData);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Pricing plan updated successfully!',
      });
      // Refresh pricing plans
      const response = await apiService.getAllPricingAndCommission();
      console.log('Refresh API Response:', response); // Debug log
      const data = response?.docs || [];
      const transformedPlans = Array.isArray(data)
        ? data.map(plan => ({
            id: plan._id,
            roleName: plan.ruleName || 'Unnamed Rule',
            description: plan.rateType || 'N/A',
            assignedUser: plan.amount != null ? (plan.amount.toString().startsWith('$') ? plan.amount : `$${plan.amount}`) : 'N/A',
            permissionSummary: plan.appliedTo || 'N/A',
            createdOn: plan.effectiveDate
              ? new Date(plan.effectiveDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
              : 'N/A',
          }))
        : [];
      setPricingPlans(transformedPlans);
      closeEditPopup();
    } catch (error) {
      console.error('Error updating pricing plan:', error); // Debug log
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update pricing plan. Please try again.',
      });
    }
  };

  return (
    <>
      {/* Custom CSS for react-datepicker to match dark theme */}
      <style>
        {`
          .react-datepicker {
            background-color: #080625;
            border: 1px solid #FFFFFF;
            border-radius: 8px;
            color: #FFFFFF;
          }
          .react-datepicker__header {
            background-color: #080625;
            border-bottom: 1px solid #FFFFFF;
            color: #FFFFFF;
          }
          .react-datepicker__current-month,
          .react-datepicker__day-name,
          .react-datepicker__day {
            color: #FFFFFF;
          }
          .react-datepicker__day:hover {
            background-color: #1A1850;
          }
          .react-datepicker__day--selected,
          .react-datepicker__day--keyboard-selected {
            background-color: #6F1AFF;
            color: #FFFFFF;
          }
          .react-datepicker__triangle {
            display: none; /* Hide triangle for cleaner look */
          }
          .react-datepicker__navigation-icon::before {
            border-color: #FFFFFF;
          }
          .react-datepicker__month-container {
            background-color: #080625;
          }
        `}
      </style>

      <div className="flex justify-between mb-2">
        <p className="text-[#fff] text-[22px] font-semibold py-3">Pricing & Commission Management</p>
        <button
          className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
          onClick={openCreateRolePopup}
        >
          Add Plan
        </button>
      </div>
      <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
        <table className="min-w-[1000px] w-full text-left">
          <thead>
            <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
              <th className="px-5">Type</th>
              <th className="px-5">Rule/Category</th>
              <th className="px-5">Rate/Value</th>
              <th className="px-5">Applies To</th>
              <th className="px-5">Effective From</th>
              <th className="px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center text-white py-4">Loading...</td>
              </tr>
            ) : pricingPlans.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-white py-4">No pricing plans found</td>
              </tr>
            ) : (
              pricingPlans.map((role, index) => (
                <tr
                  key={role.id}
                  className={`bg-[#131060] text-white h-[90px] ${index !== pricingPlans.length - 1 ? 'border-b border-[#fff]' : ''}`}
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
                      <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[120px]">
                        <div
                          className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                          onClick={() => openViewPopup(role.id)}
                        >
                          View
                        </div>
                        <div
                          className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                          onClick={() => openEditPopup(role.id)}
                        >
                          Edit
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Create Role Popup */}
      {createRolePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-[16px] border border-white w-[594px] h-[580px] relative bg-[#080625] flex flex-col"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={closeCreateRolePopup}
            >
              <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
            </button>

            {/* Title */}
            <h2 className="text-[22px] font-semibold mb-2">Add Pricing Plan</h2>
            <p className="text-[15px] font-medium mb-4">Basic Info</p>

            {/* First Row */}
            <div className="flex gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rule Name</label>
                <input
                  type="text"
                  placeholder="Enter rule name"
                  className="w-[263px] h-[48px] px-4 bg-[#080625] text-white border border-white rounded-lg focus:outline-none"
                  value={ruleName}
                  onChange={(e) => setRuleName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rule Type</label>
                <div className="relative">
                  <select
                    className="w-[263px] h-[48px] px-4 bg-[#080625] text-white border border-white rounded-lg"
                    value={ruleType}
                    onChange={(e) => setRuleType(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select rule type</option>
                    <option className="bg-[#080625] text-white">Base Rate</option>
                    <option className="bg-[#080625] text-white">Time-Based</option>
                    <option className="bg-[#080625] text-white">Commission</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rate Type</label>
                <input
                  type="text"
                  placeholder="Enter rate type (e.g., 12%)"
                  className="w-[263px] h-[48px] px-4 bg-[#080625] text-white border border-white rounded-lg focus:outline-none"
                  value={rateType}
                  onChange={(e) => setRateType(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Amount</label>
                <input
                  type="text"
                  placeholder="Enter amount (e.g., $49)"
                  className="w-[263px] h-[48px] px-4 bg-[#080625] text-white border border-white rounded-lg focus:outline-none"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className="text-[15px] font-medium mb-4">Basic Info</p>

            {/* Third Row */}
            <div className="flex gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Applies to</label>
                <div className="relative">
                  <select
                    className="w-[263px] h-[48px] px-4 bg-[#080625] text-white border border-white rounded-lg"
                    value={appliedTo}
                    onChange={(e) => setAppliedTo(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select applies to</option>
                    <option className="bg-[#080625] text-white">Company</option>
                    <option className="bg-[#080625] text-white">User</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    ▼
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Effective date</label>
                <div className="relative">
                  <DatePicker
                    selected={effectiveDate ? new Date(effectiveDate) : null}
                    onChange={(date) => setEffectiveDate(date ? date.toISOString().split('T')[0] : '')}
                    className="w-[263px] h-[48px] px-8 bg-[#080625] text-white border border-white rounded-lg focus:outline-none"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="YYYY-MM-DD"
                    required
                  />
                  <img
                    src="/dateIcons.svg"
                    alt="calendar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <div>
                <label className="text-sm text-gray-400 block">Status</label>
                <div className="flex items-center gap-2">
                  <ToggleSwitch
                    label="Active"
                    checked={status}
                    onChange={() => setStatus(!status)}
                  />
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-auto pt-6">
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
                Save Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View/Edit Role Popup */}
      {editPopup.open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
            style={{
              width: '594px',
              height: '600px',
              background: '#131060',
              border: '1px solid #FFFFFF',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={closeEditPopup}
            >
              <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
            </button>

            {/* Title */}
            <h2 className="text-[22px] font-semibold mb-1">
              {editPopup.mode === 'view' ? 'View Pricing Plan' : 'Edit Pricing Plan'}
            </h2>
            <p className="text-[15px] font-medium mb-2">Basic Info</p>

            {/* First Row */}
            <div className="flex gap-4 mb-2">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rule Name</label>
                <input
                  type="text"
                  placeholder="Enter rule name"
                  className="w-[263px] h-[48px] px-4 bg-[#131060] text-white border border-white rounded-lg focus:outline-none"
                  value={editRuleName}
                  onChange={(e) => setEditRuleName(e.target.value)}
                  disabled={editPopup.mode === 'view'}
                  required={editPopup.mode === 'edit'}
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rule Type</label>
                <div className="relative">
                  <select
                    className="w-[263px] h-[48px] px-4 bg-[#131060] text-white border border-white rounded-lg"
                    value={editRuleType}
                    onChange={(e) => setEditRuleType(e.target.value)}
                    disabled={editPopup.mode === 'view'}
                    required={editPopup.mode === 'edit'}
                  >
                    <option value="" disabled>Select rule type</option>
                    <option className="bg-[#131060] text-white">Base Rate</option>
                    <option className="bg-[#131060] text-white">Time-Based</option>
                    <option className="bg-[#131060] text-white">Commission</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-4 mb-2">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Rate Type</label>
                <input
                  type="text"
                  placeholder="Enter rate type (e.g., 12%)"
                  className="w-[263px] h-[48px] px-4 bg-[#131060] text-white border border-white rounded-lg focus:outline-none"
                  value={editRateType}
                  onChange={(e) => setEditRateType(e.target.value)}
                  disabled={editPopup.mode === 'view'}
                  required={editPopup.mode === 'edit'}
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Amount</label>
                <input
                  type="text"
                  placeholder="Enter amount (e.g., $49)"
                  className="w-[263px] h-[48px] px-4 bg-[#131060] text-white border border-white rounded-lg focus:outline-none"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  disabled={editPopup.mode === 'view'}
                  required={editPopup.mode === 'edit'}
                />
              </div>
            </div>

            <p className="text-[15px] font-medium mb-2">Basic Info</p>

            {/* Third Row */}
            <div className="flex gap-4 mb-2">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Applies to</label>
                <div className="relative">
                  <select
                    className="w-[263px] h-[48px] px-4 bg-[#131060] text-white border border-white rounded-lg"
                    value={editAppliedTo}
                    onChange={(e) => setEditAppliedTo(e.target.value)}
                    disabled={editPopup.mode === 'view'}
                    required={editPopup.mode === 'edit'}
                  >
                    <option value="" disabled>Select applies to</option>
                    <option className="bg-[#131060] text-white">Company</option>
                    <option className="bg-[#131060] text-white">User</option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    ▼
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Effective date</label>
                <div className="relative">
                  <DatePicker
                    selected={editEffectiveDate ? new Date(editEffectiveDate) : null}
                    onChange={(date) => setEditEffectiveDate(date ? date.toISOString().split('T')[0] : '')}
                    className="w-[263px] h-[48px] px-8 bg-[#131060] text-white border border-white rounded-lg focus:outline-none"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="YYYY-MM-DD"
                    disabled={editPopup.mode === 'view'}
                    required={editPopup.mode === 'edit'}
                  />
                  <img
                    src="/dateIcons.svg"
                    alt="calendar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <div>
                <label className="text-sm text-gray-400 block">Status</label>
                <div className="flex items-center gap-2">
                  <ToggleSwitch
                    label="Active"
                    checked={editStatus}
                    onChange={() => setEditStatus(!editStatus)}
                    disabled={editPopup.mode === 'view'}
                  />
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-auto pt-6">
              <button
                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                onClick={closeEditPopup}
              >
                Cancel
              </button>
              {editPopup.mode === 'edit' && (
                <button
                  className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                  onClick={handleUpdatePlan}
                >
                  Save Plan
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceManagement;