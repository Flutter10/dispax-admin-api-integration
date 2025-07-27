// import React from "react";

// const plans = [
//   {
//     title: "Standard",
//     price: "$89",
//     description: "Basic management for small fleet.",
//     features: [
//       "Up to 10 Vehicle",
//       "Basic dispatch features",
//       "Email support",
//       "24/7 system monitoring",
//       "Standard report",
//     ],
//   },
//   {
//     title: "Premium",
//     price: "$189",
//     description: "Advanced features for growing companies",
//     mostPopular: true,
//     features: [
//       "Up to 50 Vehicle",
//       "Basic dispatch features",
//       "Email support",
//       "24/7 system monitoring",
//       "Standard report",
//       "Performance analytics",
//     ],
//   },
//   {
//     title: "Basic",
//     price: "$289",
//     description: "Basic management for small fleet.",
//     features: [
//       "Up to 10 Vehicle",
//       "Basic dispatch features",
//       "Email support",
//       "24/7 system monitoring",
//     ],
//   },
// ];

// const TickIcon = () => (
//   <svg
//     width="18"
//     height="14"
//     viewBox="0 0 18 14"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1 7.66667L6.67742 13L17 1"
//       stroke="#14AE5C"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const PlanCards = () => {
//   return (
//     <div className="flex gap-6 h-[416px]">
//       {plans.map((plan, i) => (
//         <div
//           key={i}
//           className={`relative bg-[#131060] text-white rounded-xl p-6 w-full shadow-lg flex flex-col justify-between ${
//             plan.mostPopular ? "border-2 border-white" : ""
//           }`}
//         >
//           {plan.mostPopular && (
//             <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
//               Most Popular
//             </span>
//           )}

//           <div>
//             <h2 className="text-[22px] font-semibold leading-[33px] mb-4">
//               {plan.title} {plan.price}
//             </h2>
//             <p className="text-[12px]  mb-4 text-[#B2B2B2]">{plan.description}</p>
//             <ul className="space-y-2 mb-6 text-sm">
//               {plan.features.map((feat, idx) => (
//                 <li key={idx} className="flex items-center gap-2">
//                   <TickIcon />
//                   <span className="text-[16px] leading-[24px]">{feat}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <button className="w-full py-2 bg-[#6F1AFF] rounded-lg font-semibold">
//             Edit Plan
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlanCards;
// import React, { useState, useEffect } from "react";
// import apiService from "../../ApiController/ApiService";

// const PlanCards = () => {
//   const [plans, setPlans] = useState([]); // Initialize with empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const data = await apiService.getPackage();
//         console.log('Fetched plans:', data); // Debug log
//         setPlans(data); // Set plans directly (already transformed)
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching plans:', err);
//         setError("Failed to fetch plans.");
//         setLoading(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   if (loading) {
//     return <div className="text-white">Loading plans...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   // Check if plans is an array and not empty
//   if (!Array.isArray(plans) || plans.length === 0) {
//     return <div className="text-white">No plans available.</div>;
//   }

//   return (
//     <div className="flex gap-6">
//       {plans.map((plan, i) => (
//         <div
//           key={i}
//           className="relative bg-[#131060] text-white rounded-xl p-6 w-full shadow-lg flex flex-col justify-between"
//         >
//           <div>
//             <h2 className="text-[22px] font-semibold leading-[33px] mb-4">
//               {plan.title} {plan.price}
//             </h2>
//             <p className="text-[12px] mb-4 text-[#B2B2B2]">{plan.description}</p>
//           </div>
//           <button           onClick={() => setShowModal(true)}
//  className="w-full py-2 bg-[#6F1AFF] rounded-lg font-semibold">
//             Edit Plan
//           </button>
//           {showModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-[#0A032B] text-white rounded-xl p-8 w-full max-w-xl relative shadow-lg">
//               {/* Close Button */}
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setFormError(null);
//                   setName("");
//                   setDescription("");
//                   setPrice("");
//                   setIsFree(false);
//                 }}
//                 className="absolute top-4 right-4 text-white text-2xl"
//               >
//                 ×
//               </button>

//               {/* Modal Heading */}
//               <h2 className="text-2xl font-bold mb-6">Create Package</h2>

//               {/* Form Fields */}
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Enter Package Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Description</label>
//                   <textarea
//                     placeholder="Enter Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
//                     rows={5}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Price</label>
//                   <input
//                     type="number"
//                     placeholder="Enter Price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     disabled={isFree} // Disable price input if isFree is checked
//                     className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none disabled:opacity-50"
//                   />
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={isFree}
//                     onChange={() => setIsFree(!isFree)}
//                     className="form-checkbox h-4 w-4 text-blue-500"
//                   />
//                   <label className="text-sm">Is Free</label>
//                 </div>

//                 {/* Error Message */}
//                 {formError && (
//                   <div className="text-red-500 text-sm">{formError}</div>
//                 )}
//               </div>

//               {/* Save Button */}
//               <div className="mt-6 text-right">
//                 <button
//                   className="bg-[#6F1AFF] text-white text-[16px] font-medium rounded-lg py-2 px-6"
//                   onClick={handleCreatePackage}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlanCards;
// import React, { useState, useEffect } from "react";
// import apiService from "../../ApiController/ApiService";

// const PlanCards = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPackageId, setSelectedPackageId] = useState(null);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [isFree, setIsFree] = useState(false);
//   const [formError, setFormError] = useState(null);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const data = await apiService.getPackage();
//         console.log('Fetched plans:', data);
//         setPlans(data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching plans:', err);
//         setError("Failed to fetch plans.");
//         setLoading(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   const handleEditPlan = async (packageId) => {
//     setSelectedPackageId(packageId);
//     try {
//       const packageData = await apiService.getPackageById(packageId);
//       setName(packageData.name);
//       setDescription(packageData.description);
//       setPrice(packageData.isFree ? "" : packageData.price);
//       setIsFree(packageData.isFree);
//       setShowModal(true);
//     } catch (err) {
//       console.error('Error fetching package details:', err);
//       setFormError("Failed to load package details.");
//     }
//   };

//   const handleCreateOrUpdatePackage = async () => {
//     if (!name || !description || (!isFree && !price)) {
//       setFormError("Please fill in all required fields.");
//       return;
//     }

//     const packageData = {
//       name,
//       description,
//       price: isFree ? 0 : parseFloat(price),
//       isFree,
//     };

//     try {
//       if (selectedPackageId) {
//         // Update existing package (assuming an updatePackage API exists)
//         await apiService.updatePackage(selectedPackageId, packageData);
//       } else {
//         // Create new package
//         await apiService.createPackage(packageData);
//       }
//       // Refresh plans after update/create
//       const updatedPlans = await apiService.getPackage();
//       setPlans(updatedPlans);
//       setShowModal(false);
//       setName("");
//       setDescription("");
//       setPrice("");
//       setIsFree(false);
//       setFormError(null);
//       setSelectedPackageId(null);
//     } catch (err) {
//       console.error('Error saving package:', err);
//       setFormError("Failed to save package.");
//     }
//   };

//   if (loading) {
//     return <div className="text-white">Loading plans...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!Array.isArray(plans) || plans.length === 0) {
//     return <div className="text-white">No plans available.</div>;
//   }

//   return (
//     <div className="flex gap-6">
//       {plans.map((plan, i) => (
//         <div
//           key={plan.id || i} // Use plan.id if available
//           className="relative bg-[#131060] text-white rounded-xl p-6 w-full shadow-lg flex flex-col justify-between"
//         >
//           <div>
//             <h2 className="text-[22px] font-semibold leading-[33px] mb-4">
//               {plan.title} {plan.price}
//             </h2>
//             <p className="text-[12px] mb-4 text-[#B2B2B2]">{plan.description}</p>
//           </div>
//           <button
//             onClick={() => handleEditPlan(plan.id)}
//             className="w-full py-2 bg-[#6F1AFF] rounded-lg font-semibold"
//           >
//             Edit Plan
//           </button>
//         </div>
//       ))}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-[#0A032B] text-white rounded-xl p-8 w-full max-w-xl relative shadow-lg">
//             <button
//               onClick={() => {
//                 setShowModal(false);
//                 setFormError(null);
//                 setName("");
//                 setDescription("");
//                 setPrice("");
//                 setIsFree(false);
//                 setSelectedPackageId(null);
//               }}
//               className="absolute top-4 right-4 text-white text-2xl"
//             >
//               ×
//             </button>
//             <h2 className="text-2xl font-bold mb-6">
//               {selectedPackageId ? "Edit Package" : "Create Package"}
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Package Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Description</label>
//                 <textarea
//                   placeholder="Enter Description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
//                   rows={5}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Price</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   disabled={isFree}
//                   className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none disabled:opacity-50"
//                 />
//               </div>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={isFree}
//                   onChange={() => setIsFree(!isFree)}
//                   className="form-checkbox h-4 w-4 text-blue-500"
//                 />
//                 <label className="text-sm">Is Free</label>
//               </div>
//               {formError && (
//                 <div className="text-red-500 text-sm">{formError}</div>
//               )}
//             </div>
//             <div className="mt-6 text-right">
//               <button
//                 className="bg-[#6F1AFF] text-white text-[16px] font-medium rounded-lg py-2 px-6"
//                 onClick={handleCreateOrUpdatePackage}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlanCards;
import React, { useState, useEffect } from "react";
import apiService from "../../ApiController/ApiService";

const PlanCards = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await apiService.getPackage();
        console.log('Fetched plans:', data);
        setPlans(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching plans:', err);
        setError("Failed to fetch plans.");
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handleEditPlan = async (packageId) => {
    setSelectedPackageId(packageId);
    try {
      const packageData = await apiService.getPackageById(packageId);
      setName(packageData.name);
      setDescription(packageData.description);
      setPrice(packageData.isFree ? "" : packageData.price);
      setIsFree(packageData.isFree);
      setShowModal(true);
      setFormError(null);
    } catch (err) {
      console.error('Error fetching package details:', err);
      setFormError("Failed to load package details.");
    }
  };

  const handleCreateOrUpdatePackage = async () => {
    if (!name || !description || (!isFree && !price)) {
      setFormError("Please fill in all required fields.");
      return;
    }

    const packageData = {
      name,
      description,
      price: isFree ? 0 : parseFloat(price),
      isFree,
    };

    try {
      if (selectedPackageId) {
        await apiService.updatePackage(selectedPackageId, packageData);
      } else {
        await apiService.createPackage(packageData);
      }
      const updatedPlans = await apiService.getPackage();
      setPlans(updatedPlans);
      setShowModal(false);
      setName("");
      setDescription("");
      setPrice("");
      setIsFree(false);
      setFormError(null);
      setSelectedPackageId(null);
    } catch (err) {
      console.error('Error saving package:', err);
      setFormError(err.message || "Failed to save package.");
    }
  };

  if (loading) {
    return <div className="text-white">Loading plans...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!Array.isArray(plans) || plans.length === 0) {
    return <div className="text-white">No plans available.</div>;
  }

  return (
    <div className="flex gap-6">
      {plans.map((plan, i) => (
        <div
          key={plan.id || i}
          className="relative bg-[#131060] text-white rounded-xl p-6 w-full shadow-lg flex flex-col justify-between"
        >
          <div>
            <h2 className="text-[22px] font-semibold leading-[33px] mb-4">
              {plan.title} {plan.price}
            </h2>
            <p className="text-[12px] mb-4 text-[#B2B2B2]">{plan.description}</p>
          </div>
          <button
            onClick={() => handleEditPlan(plan.id)}
            className="w-full py-2 bg-[#6F1AFF] rounded-lg font-semibold"
          >
            Edit Plan
          </button>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0A032B] text-white rounded-xl p-8 w-full max-w-xl relative shadow-lg">
            <button
              onClick={() => {
                setShowModal(false);
                setFormError(null);
                setName("");
                setDescription("");
                setPrice("");
                setIsFree(false);
                setSelectedPackageId(null);
              }}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6">
              {selectedPackageId ? "Edit Package" : "Create Package"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter Package Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none"
                  rows={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={isFree}
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none disabled:opacity-50"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={() => setIsFree(!isFree)}
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <label className="text-sm">Is Free</label>
              </div>
              {formError && (
                <div className="text-red-500 text-sm">{formError}</div>
              )}
            </div>
            <div className="mt-6 text-right">
              <button
                className="bg-[#6F1AFF] text-white text-[16px] font-medium rounded-lg py-2 px-6"
                onClick={handleCreateOrUpdatePackage}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCards;