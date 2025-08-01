// import React, { useState } from 'react';

// const data = [
//     {
//         roleName: '#INV-852164',
//         description: 'Bluedart Logistics',
//         assignedUser: '10/04/2025',
//         permissionSummary: '15/04/2025',
//         createdOn: 'Pending',
//         Amount: '$2134',
//     },
//     {
//         roleName: '#INV-852164',
//         description: 'Bluedart Logistics',
//         assignedUser: '10/04/2025',
//         permissionSummary: '15/04/2025',
//         createdOn: 'Pending',
//         Amount: '$2134',
//     },
//     {
//         roleName: '#INV-852164',
//         description: 'Bluedart Logistics',
//         assignedUser: '10/04/2025',
//         permissionSummary: '15/04/2025',
//         createdOn: 'Overdue',
//         Amount: '$2134',
//     },
//     {
//         roleName: '#INV-852164',
//         description: 'Bluedart Logistics',
//         assignedUser: '10/04/2025',
//         permissionSummary: '15/04/2025',
//         createdOn: 'Pending',
//         Amount: '$2134',
//     },
//     {
//         roleName: '#INV-852164',
//         description: 'Bluedart Logistics',
//         assignedUser: '10/04/2025',
//         permissionSummary: '15/04/2025',
//         createdOn: 'Paid',
//         Amount: '$2134',
//     },
// ];

// const OutlinedInput = ({ label, type, placeholder }) => {
//     const [value, setValue] = useState('');

//     return (
//         <div className="relative mb-6 w-full">
//             <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#131060]">
//                 {label}
//             </label>

//             <div className="relative">
//                 <input
//                     type={type}
//                     value={value}
//                     onChange={(e) => setValue(e.target.value)}
//                     placeholder={placeholder}
//                     className={`w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] ${
//                         type === 'date' ? 'pr-12' : ''
//                     }`}
//                 />

//                 {/* Custom calendar icon for date input */}
//                 {type === 'date' && (
//                     <img
//                         src="/dateIcons.svg"
//                         alt="Calendar Icon"
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// const Invoices = () => {
//     const [createRolePopup, setCreateRolePopup] = useState(false);
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



//     const handlePermissionChange = (perm) => {
//         setPermissions((prev) => ({
//             ...prev,
//             [perm]: !prev[perm],
//         }));
//     };

//     return (
//         <>
//             <div className="flex justify-between mb-2 p-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Invoices</p>
//                 <button
//                     className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
//                     onClick={openCreateRolePopup}
//                 >
//                     Generate Invoice
//                 </button>
//             </div>
//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Invoice</th>
//                             <th className="px-5">Company</th>
//                             <th className="px-5">Issue Date</th>
//                             <th className="px-5">Due Date</th>
//                             <th className="px-5">Status</th>
//                             <th className="px-5">Amount</th>
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
//                                 <td className="px-5">
//                                     <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[72px] h-[32px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
//                                         role.createdOn === 'Pending' ? 'bg-[#E8B931]' :
//                                             role.createdOn === 'Paid' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'}`}>
//                                         {role.createdOn}
//                                     </span>
//                                 </td>
//                                 <td className="px-5">{role.Amount}</td>

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
//                             height: '625px',
//                             background: '#131060',
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
//                         <h2 className="text-[22px] font-semibold mb-2">Create Invoice</h2>
//                         <OutlinedInput type="text" label="Company" placeholder='Enter Company Name' />
//                         <OutlinedInput type="text" label="Invoice No." placeholder='#INV-0283' />
//                         <OutlinedInput type="date" label="Due Date" placeholder='Trucks,Drivers' />
//                         <OutlinedInput type="date" label="Due Date" placeholder='Trucks,Drivers' />
//                         <OutlinedInput type="text" label="Amount." placeholder='Enter Total Amount' />

//                         <div className="flex justify-end mb-2">
//                             <button className='text-[22px] bg-[#6F1AFF] px-4 py-2 rounded-xl'>Generate</button>
//                         </div>

//                     </div>
//                 </div>
//             )}

//         </>
//     );
// };

// export default Invoices;
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { format, parse } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import apiService from '../ApiController/ApiService';

const OutlinedInput = ({ label, type, placeholder, value, onChange, required }) => {
    return (
        <div className="relative mb-4 w-full">
            <label className="absolute -top-2 left-3 px-1 text-sm text-white bg-[#131060] z-10">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full h-[48px] bg-transparent border border-[#858080] rounded-lg px-3 py-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
                />
            </div>
        </div>
    );
};

const DatePickerInput = ({ label, value, onChange, required }) => {
    const parsedDate = value ? parse(value, 'yyyy-MM-dd', new Date()) : null;

    return (
        <div className="relative mb-4 w-full">
            <label className="absolute -top-2 left-3 px-1 text-sm text-white bg-[#131060] z-10">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <DatePicker
                    selected={parsedDate}
                    onChange={(date) => onChange(date ? format(date, 'yyyy-MM-dd') : '')}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select Date"
                    className="w-full h-[48px] bg-transparent border border-[#858080] rounded-lg px-3 py-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
                    wrapperClassName="w-full"
                    popperClassName="z-50 bg-[#131060] border border-[#858080] rounded-lg text-white"
                    calendarClassName="bg-[#131060] text-white"
                    dayClassName={() => 'text-white hover:bg-[#6F1AFF]'}
                    required={required}
                />
            </div>
        </div>
    );
};

const Invoices = () => {
    const [createRolePopup, setCreateRolePopup] = useState(false);
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [total, setTotal] = useState('');
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAllInvoices();
                console.log('API Response (invoices):', data);
                setInvoices(data.docs.map(item => ({
                    roleName: item.invoiceNumber || '#INV-852164',
                    description: item.description || 'Bluedart Logistics',
                    assignedUser: item.invoiceDate ? format(new Date(item.invoiceDate), 'dd/MM/yyyy') : '10/04/2025',
                    permissionSummary: item.dueDate ? format(new Date(item.dueDate), 'dd/MM/yyyy') : '15/04/2025',
                    createdOn: item.paymentStatus || 'Pending',
                    Amount: item.total ? `$${item.total}` : '$2134',
                })));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching invoices:', err);
                setError(err.message);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch invoices: ' + err.message,
                    confirmButtonColor: '#6F1AFF',
                });
            }
        };
        fetchInvoices();
    }, []);

    const openCreateRolePopup = () => {
        console.log('Opening Create Invoice popup');
        setCreateRolePopup(true);
        setInvoiceNumber('');
        setIssueDate('');
        setDueDate('');
        setTotal('');
    };

    const closeCreateRolePopup = () => {
        console.log('Closing Create Invoice popup');
        setCreateRolePopup(false);
    };

    const handleCreateRole = async () => {
        if (!invoiceNumber || !issueDate || !dueDate || !total) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill in all required fields: Invoice Number, Issue Date, Due Date, and Total',
                confirmButtonColor: '#6F1AFF',
            });
            return;
        }

        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                throw new Error('User ID not found in localStorage');
            }
            const invoiceData = {
                userId,
                invoiceNumber,
                issueDate,
                dueDate,
                total: parseFloat(total) || 0,
            };
            console.log('Creating invoice with data:', invoiceData);
            const response = await apiService.createInvoices(invoiceData);
            console.log('Create invoice response:', response);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Invoice created successfully!',
                confirmButtonColor: '#6F1AFF',
            });
            closeCreateRolePopup();
            const data = await apiService.getAllInvoices();
            setInvoices(data.docs.map(item => ({
                roleName: item.invoiceNumber || '#INV-852164',
                description: item.description || 'Bluedart Logistics',
                assignedUser: item.invoiceDate ? format(new Date(item.invoiceDate), 'dd/MM/yyyy') : '10/04/2025',
                permissionSummary: item.dueDate ? format(new Date(item.dueDate), 'dd/MM/yyyy') : '15/04/2025',
                createdOn: item.paymentStatus || 'Pending',
                Amount: item.total ? `$${item.total}` : '$2134',
            })));
        } catch (error) {
            console.error('Error creating invoice:', error.response || error);
            const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Failed to create invoice: ${errorMessage}`,
                confirmButtonColor: '#6F1AFF',
            });
        }
    };

    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-red-400 text-center">Error: {error}</div>;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-white text-2xl font-semibold">Invoices</h1>
                <button
                    className="bg-[#6F1AFF] text-white text-lg font-semibold rounded-lg py-3 px-6 hover:bg-[#5a14cc] transition-colors"
                    onClick={openCreateRolePopup}
                >
                    Generate Invoice
                </button>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Invoice</th>
                            <th className="px-5">Company</th>
                            <th className="px-5">Issue Date</th>
                            <th className="px-5">Due Date</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((role, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[70px] ${index !== invoices.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{role.roleName}</td>
                                <td className="px-5">{role.description}</td>
                                <td className="px-5">{role.assignedUser}</td>
                                <td className="px-5">{role.permissionSummary}</td>
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-sm inline-flex items-center justify-center w-[72px] h-[32px] rounded-[24px] py-1 px-3 ${
                                        role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.createdOn === 'Pending' ? 'bg-[#E8B931]' :
                                        role.createdOn === 'Paid' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'
                                    }`}>
                                        {role.createdOn}
                                    </span>
                                </td>
                                <td className="px-5">{role.Amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {createRolePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white rounded-lg relative flex flex-col gap-4 overflow-y-auto"
                        style={{
                            width: '600px',
                            height: '80vh',
                            maxHeight: '800px',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={closeCreateRolePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Create Invoice</h2>

                        <div className="space-y-2">
                            <h3 className="text-lg font-medium text-white">Invoice Details</h3>
                            <OutlinedInput
                                type="text"
                                label="Invoice No."
                                placeholder="#INV-0283"
                                value={invoiceNumber}
                                onChange={(e) => setInvoiceNumber(e.target.value)}
                                required
                            />
                            <DatePickerInput
                                label="Issue Date"
                                value={issueDate}
                                onChange={setIssueDate}
                                required
                            />
                            <DatePickerInput
                                label="Due Date"
                                value={dueDate}
                                onChange={setDueDate}
                                required
                            />
                            <OutlinedInput
                                type="number"
                                label="Total"
                                placeholder="Enter Total Amount"
                                value={total}
                                onChange={(e) => setTotal(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                className="text-lg bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                onClick={closeCreateRolePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-lg bg-[#6F1AFF] text-white px-4 py-2 rounded-lg hover:bg-[#5a14cc] transition-colors"
                                onClick={handleCreateRole}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Invoices;