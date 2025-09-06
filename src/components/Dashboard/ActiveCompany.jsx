// import { useNavigate } from 'react-router-dom';

// const companies = [
//     {
//         name: 'Stream Logistics',
//         plan: 'Premium Plan',
//         employees: 245,
//         shipments: 1856,
//         color: 'bg-[#FF6B00]',
//         initials: 'SL',
//     },
//     {
//         name: 'Global Express',
//         plan: 'Standard Plan',
//         employees: 546,
//         shipments: 3256,
//         color: 'bg-[#00B2FF]',
//         initials: 'GE',
//     },
//     {
//         name: 'Swift Delivery',
//         plan: 'Basic Plan',
//         employees: 123,
//         shipments: 756,
//         color: 'bg-[#B1B1B1]',
//         initials: 'SD',
//     },
//     {
//         name: 'Stream Logistics',
//         plan: 'Premium Plan',
//         employees: 245,
//         shipments: 1856,
//         color: 'bg-[#FF6B00]',
//         initials: 'SL',
//     },
//     {
//         name: 'Global Express',
//         plan: 'Standard Plan',
//         employees: 546,
//         shipments: 3256,
//         color: 'bg-[#00B2FF]',
//         initials: 'GE',
//     },
//     {
//         name: 'Swift Delivery',
//         plan: 'Basic Plan',
//         employees: 123,
//         shipments: 756,
//         color: 'bg-[#B1B1B1]',
//         initials: 'SD',
//     },
// ];

// const ActiveCompany = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="p-4 lg:p-8 min-h-screen text-white">
//             {/* Header */}
//             <div className="flex items-center gap-6 mb-8">
//                 <button
//                     onClick={() => navigate('/dashboard')}
//                     className="w-[42px] h-[42px] rounded-full bg-transparent hover:opacity-80 transition"
//                 >
//                     <img src="/dashboardicons/backbutton.svg" alt="Back" className="w-full h-full" />
//                 </button>
//                 <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Active Company</h1>
//             </div>

//             {/* Company Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {companies.map((company, index) => (
//                     <div
//                         key={index}
//                         className="w-full bg-[#131060] border border-[#1C1889] rounded-[12px] p-6 flex flex-col gap-4"
//                     >
//                         {/* Header: Initials and Name */}
//                         <div className="flex items-center gap-3">
//                             <div className={`w-[44px] h-[44px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold ${company.color}`}>
//                                 {company.initials}
//                             </div>
//                             <div>
//                                 <div className="text-[16px] font-medium leading-[24px]">{company.name}</div>
//                                 <div className="text-[#CACACA] text-[12px] font-normal leading-[18px]">{company.plan}</div>
//                             </div>
//                         </div>

//                         {/* Employee & Shipment section (icons and numbers aligned properly) */}
//                         <div className="flex flex-col gap-2 w-full">
//                             {/* Top row with labels + icons */}
//                             <div className="flex justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <img src="/dashboardicons/employee.svg" alt="employee" className="w-[24px] h-[24px]" />
//                                     <span className="text-[12px] font-normal leading-[18px]">Employee</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <img src="/dashboardicons/shipment.svg" alt="shipment" className="w-[24px] h-[24px]" />
//                                     <span className="text-[12px] font-normal leading-[18px]">Shipment</span>
//                                 </div>
//                             </div>

//                             {/* Bottom row with numbers */}
//                             <div className="flex justify-between">
//                                 <span className="text-[14px] font-medium">{company.employees}</span>
//                                 <span className="text-[14px] font-medium">{company.shipments}</span>
//                             </div>
//                         </div>


//                         {/* Divider */}
//                         <div className="w-full border-t border-[#8B8B8B] my-2"></div>

//                         {/* Order Details */}
//                         <div className="flex flex-col gap-3">
//                             <span className="text-[16px] font-medium">Order Details</span>
//                             <div className="space-y-2">
//                                 <div>
//                                     <div className="text-[12px] mb-1">Pending</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div className="h-full bg-yellow-400 w-[40%]"></div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="text-[12px] mb-1">In Progress</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div className="h-full bg-[#1CA4FF] w-[60%]"></div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="text-[12px] mb-1">Completed</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div className="h-full bg-[#00D471] w-[80%]"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ActiveCompany;


// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import apiService from '../ApiController/ApiService'; // Adjust the path to your apiService file

// const ActiveCompany = () => {
//     const navigate = useNavigate();
//     const [companies, setCompanies] = useState([]);
//     const [error, setError] = useState(null);

//     // Colors and initials for display
//     const colorOptions = [
//         'bg-[#FF6B00]',
//         'bg-[#00B2FF]',
//         'bg-[#B1B1B1]',
//         'bg-[#FF4D4F]',
//         'bg-[#52C41A]',
//     ];

//     useEffect(() => {
//         const fetchCompanies = async () => {
//             try {
//                 const response = await apiService.getCompany();
//                 // Map API data to component's expected format
//                 const mappedCompanies = response.docs.map((company, index) => ({
//                     name: company.fullName,
//                     plan: company.isPackageExpired ? 'Basic Plan' : 'Premium Plan', // Simple logic for plan
//                     employees: company.totalDriver,
//                     shipments: company.totalShipment,
//                     color: colorOptions[index % colorOptions.length], // Cycle through colors
//                     initials: company.fullName
//                         .split(' ')
//                         .map(word => word[0])
//                         .join('')
//                         .slice(0, 2)
//                         .toUpperCase(),
//                     pending: company.totalPendingShipment,
//                     inProgress: company.totalInProcessShipment,
//                     completed: company.totalCompletedShipment,
//                 }));
//                 setCompanies(mappedCompanies);
//             } catch (error) {
//                 console.error('Error fetching companies:', error);
//                 setError(error.message || 'Failed to fetch companies');
//             }
//         };

//         fetchCompanies();
//     }, []);

//     if (error) {
//         return <div className="p-4 lg:p-8 min-h-screen text-white">Error: {error}</div>;
//     }

//     return (
//         <div className="p-4 lg:p-8 min-h-screen text-white">
//             {/* Header */}
//             <div className="flex items-center gap-6 mb-8">
//                 <button
//                     onClick={() => navigate('/dashboard')}
//                     className="w-[42px] h-[42px] rounded-full bg-transparent hover:opacity-80 transition"
//                 >
//                     <img src="/dashboardicons/backbutton.svg" alt="Back" className="w-full h-full" />
//                 </button>
//                 <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Active Company</h1>
//             </div>

//             {/* Company Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {companies.map((company, index) => (
//                     <div
//                         key={index}
//                         className="w-full bg-[#131060] border border-[#1C1889] rounded-[12px] p-6 flex flex-col gap-4"
//                     >
//                         {/* Header: Initials and Name */}
//                         <div className="flex items-center gap-3">
//                             <div className={`w-[44px] h-[44px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold ${company.color}`}>
//                                 {company.initials}
//                             </div>
//                             <div>
//                                 <div className="text-[16px] font-medium leading-[24px]">{company.name}</div>
//                                 <div className="text-[#CACACA] text-[12px] font-normal leading-[18px]">{company.plan}</div>
//                             </div>
//                         </div>

//                         {/* Employee & Shipment section */}
//                         <div className="flex flex-col gap-2 w-full">
//                             {/* Top row with labels + icons */}
//                             <div className="flex justify-between">
//                                 <div className="flex items-center gap-2">
//                                     <img src="/dashboardicons/employee.svg" alt="employee" className="w-[24px] h-[24px]" />
//                                     <span className="text-[12px] font-normal leading-[18px]">Employee</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <img src="/dashboardicons/shipment.svg" alt="shipment" className="w-[24px] h-[24px]" />
//                                     <span className="text-[12px] font-normal leading-[18px]">Shipment</span>
//                                 </div>
//                             </div>

//                             {/* Bottom row with numbers */}
//                             <div className="flex justify-between">
//                                 <span className="text-[14px] font-medium">{company.employees}</span>
//                                 <span className="text-[14px] font-medium">{company.shipments}</span>
//                             </div>
//                         </div>

//                         {/* Divider */}
//                         <div className="w-full border-t border-[#8B8B8B] my-2"></div>

//                         {/* Order Details */}
//                         <div className="flex flex-col gap-3">
//                             <span className="text-[16px] font-medium">Order Details</span>
//                             <div className="space-y-2">
//                                 <div>
//                                     <div className="text-[12px] mb-1">Pending</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full bg-yellow-400"
//                                             style={{ width: `${(company.pending / (company.shipments || 1)) * 100}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="text-[12px] mb-1">In Progress</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full bg-[#1CA4FF]"
//                                             style={{ width: `${(company.inProgress / (company.shipments || 1)) * 100}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className="text-[12px] mb-1">Completed</div>
//                                     <div className="w-full h-2 bg-white rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full bg-[#00D471]"
//                                             style={{ width: `${(company.completed / (company.shipments || 1)) * 100}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ActiveCompany;
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiService from '../ApiController/ApiService'; // Adjust the path to your apiService file

const ActiveCompany = () => {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    // Colors and initials for display
    const colorOptions = [
        'bg-[#FF6B00]',
        'bg-[#00B2FF]',
        'bg-[#B1B1B1]',
        'bg-[#FF4D4F]',
        'bg-[#52C41A]',
    ];

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await apiService.getCompany({ page: currentPage, ac: true });
                // Check if response and response.docs exist
                if (!response || !Array.isArray(response.docs)) {
                    throw new Error('Invalid API response structure');
                }

                // Map API data to component's expected format
                const mappedCompanies = response.docs.map((company, index) => ({
                    name: company.fullName || 'Unknown', // Fallback for missing fullName
                    plan: company.isPackageExpired ? 'Basic Plan' : 'Premium Plan',
                    employees: company.totalDriver || 0, // Fallback for missing totalDriver
                    shipments: company.totalShipment || 0, // Fallback for missing totalShipment
                    color: colorOptions[index % colorOptions.length],
                    initials: (company.fullName || '')
                        .split(' ')
                        .map(word => word[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase() || 'NA', // Fallback for missing initials
                    pending: company.totalPendingShipment || 0, // Fallback for missing totalPendingShipment
                    inProgress: company.totalInProcessShipment || 0, // Fallback for missing totalInProcessShipment
                    completed: company.totalCompletedShipment || 0, // Fallback for missing totalCompletedShipment
                }));
                setCompanies(mappedCompanies);
                setTotalPages(response.totalPages || 1); // Fallback for missing totalPages
                setHasPrevPage(response.hasPrevPage || false); // Fallback for missing hasPrevPage
                setHasNextPage(response.hasNextPage || false); // Fallback for missing hasNextPage
            } catch (error) {
                console.error('Error fetching companies:', error);
                setError(error.message || 'Failed to fetch companies');
                setCompanies([]); // Reset companies to avoid stale data
            }
        };

        fetchCompanies();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (error) {
        return <div className="p-4 lg:p-8 min-h-screen text-white">Error: {error}</div>;
    }

    return (
        <div className="p-4 lg:p-8 min-h-screen text-white">
            {/* Header */}
            <div className="flex items-center gap-6 mb-8">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-[42px] h-[42px] rounded-full bg-transparent hover:opacity-80 transition"
                >
                    <img src="/dashboardicons/backbutton.svg" alt="Back" className="w-full h-full" />
                </button>
                <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Active Company</h1>
            </div>

            {/* Company Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.length > 0 ? (
                    companies.map((company, index) => (
                        <div
                            key={index}
                            className="w-full bg-[#131060] border border-[#1C1889] rounded-[12px] p-6 flex flex-col gap-4"
                        >
                            {/* Header: Initials and Name */}
                            <div className="flex items-center gap-3">
                                <div className={`w-[44px] h-[44px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold ${company.color}`}>
                                    {company.initials}
                                </div>
                                <div>
                                    <div className="text-[16px] font-medium leading-[24px]">{company.name}</div>
                                    <div className="text-[#CACACA] text-[12px] font-normal leading-[18px]">{company.plan}</div>
                                </div>
                            </div>

                            {/* Employee & Shipment section */}
                            <div className="flex flex-col gap-2 w-full">
                                {/* Top row with labels + icons */}
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src="/dashboardicons/employee.svg" alt="employee" className="w-[24px] h-[24px]" />
                                        <span className="text-[12px] font-normal leading-[18px]">Employee</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="/dashboardicons/shipment.svg" alt="shipment" className="w-[24px] h-[24px]" />
                                        <span className="text-[12px] font-normal leading-[18px]">Shipment</span>
                                    </div>
                                </div>

                                {/* Bottom row with numbers */}
                                <div className="flex justify-between">
                                    <span className="text-[14px] font-medium">{company.employees}</span>
                                    <span className="text-[14px] font-medium">{company.shipments}</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full border-t border-[#8B8B8B] my-2"></div>

                            {/* Order Details */}
                            <div className="flex flex-col gap-3">
                                <span className="text-[16px] font-medium">Order Details</span>
                                <div className="space-y-2">
                                    <div>
                                        <div className="text-[12px] mb-1">Pending</div>
                                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-yellow-400"
                                                style={{ width: `${(company.pending / (company.shipments || 1)) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[12px] mb-1">In Progress</div>
                                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#1CA4FF]"
                                                style={{ width: `${(company.inProgress / (company.shipments || 1)) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[12px] mb-1">Completed</div>
                                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#00D471]"
                                                style={{ width: `${(company.completed / (company.shipments || 1)) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-full text-[16px]">No companies found</div>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!hasPrevPage}
                    className={`px-4 py-2 rounded bg-[#1C1889] text-white ${!hasPrevPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2a27b3]'}`}
                >
                    Previous
                </button>
                <span className="text-[14px]">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className={`px-4 py-2 rounded bg-[#1C1889] text-white ${!hasNextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2a27b3]'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ActiveCompany;