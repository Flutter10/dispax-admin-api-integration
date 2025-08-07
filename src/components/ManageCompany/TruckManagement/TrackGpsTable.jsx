// import React, { useEffect, useRef, useState } from 'react';

// const data = [
//     {
//         TruckID: 'TRK 8521',
//         DriverName: 'John Smith',
//         StartDate: '2025/05/05',
//         StartEndLocation: 'Chicago',
//         DistanceCovered: '1120 mi',
//         Duration: '12 Hours',
//         RouteStatus: 'Completed',
//     },
//     {
//         TruckID: 'TRK 8521',
//         DriverName: 'John Smith',
//         StartDate: '2025/05/05',
//         StartEndLocation: 'Chicago',
//         DistanceCovered: '1120 mi',
//         Duration: '12 Hours',
//         RouteStatus: 'In Progress',
//     },
//     {
//         TruckID: 'TRK 8521',
//         DriverName: 'John Smith',
//         StartDate: '2025/05/05',
//         StartEndLocation: 'Chicago',
//         DistanceCovered: '1120 mi',
//         Duration: '12 Hours',
//         RouteStatus: 'Interrupted',
//     },
//     {
//         TruckID: 'TRK 8521',
//         DriverName: 'John Smith',
//         StartDate: '2025/05/05',
//         StartEndLocation: 'Chicago',
//         DistanceCovered: '1120 mi',
//         Duration: '12 Hours',
//         RouteStatus: 'Completed',
//     },
//     {
//         TruckID: 'TRK 8521',
//         DriverName: 'John Smith',
//         StartDate: '2025/05/05',
//         StartEndLocation: 'Chicago',
//         DistanceCovered: '1120 mi',
//         Duration: '12 Hours',
//         RouteStatus: 'Completed',
//     },
// ];



// const TrackGpsTable = () => {

//     const [trackPopup, setTrackPopup] = useState({ open: false, role: null });
//     const trackPopupRef = useRef(null);

//     const openTrackPopup = (role) => {
//         console.log('Opening Track popup for role:', role.TruckID);
//         setTrackPopup({ open: true, role });
//     };

//     const closeTrackPopup = () => {
//         console.log('Closing Track popup');
//         setTrackPopup({ open: false, role: null });
//     };

//     // Handle click outside for both popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (trackPopupRef.current && !trackPopupRef.current.contains(event.target)) {
//                 closeTrackPopup();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);



//     return (
//         <>
//             <div className="flex justify-between mb-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Truck GPS and Route History</p>
//             </div>

//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Truck ID</th>
//                             <th className="px-5">Driver Name</th>
//                             <th className="px-5">Start Date</th>
//                             <th className="px-5">Start & End Location</th>
//                             <th className="px-5">Distance Covered</th>
//                             <th className="px-5">Duration</th>
//                             <th className="px-5">Route Status</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.TruckID}</td>
//                                 <td className="px-5">{role.DriverName}</td>
//                                 <td className="px-5">{role.StartDate}</td>
//                                 <td className="px-5">{role.StartEndLocation}</td>
//                                 <td className="px-5">{role.DistanceCovered}</td>
//                                 <td className="px-5">{role.Duration}</td>
//                                 <td className="px-5">
//                                     <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
//                                         role.RouteStatus === 'In Progress' ? 'bg-[#E8B931] w-[125px]' :
//                                             role.RouteStatus === 'Completed' ? 'bg-[#14AE5C]' : 'bg-[#EC221F] w-[110px]'}`}>
//                                         {role.RouteStatus}
//                                     </span>

//                                 </td>
//                                 <td className="px-5 relative" >
//                                     <span className='flex gap-2 cursor-pointer' onClick={() => openTrackPopup(role)}>
//                                         <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M10.25 0C15.4966 0 19.7499 4.22748 19.75 9.44238C19.75 14.6574 14.6042 20.0656 10.25 24C6.6875 20.0656 0.75 14.6574 0.75 9.44238C0.750131 4.22748 5.00338 1.28075e-07 10.25 0ZM10.25 5C8.86929 5 7.75 6.11929 7.75 7.5C7.75 8.88071 8.86929 10 10.25 10C11.6307 10 12.75 8.88071 12.75 7.5C12.75 6.11929 11.6307 5 10.25 5Z" fill="white" />
//                                         </svg>
//                                         <span>Tracking</span>
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>


//             {/* Track Location Popup */}
//             {trackPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         ref={trackPopupRef}
//                         className="flex gap-4 w-[90%] lg:w-[70%] max-h-[80vh] lg:max-h-[500px] border border-[#fff] rounded-2xl text-white bg-[#131060] overflow-hidden"
//                     >
//                         {/* Left: Status Timeline */}
//                         {/* Left: Updated UI as per screenshot */}
                        
//                         <div className="w-full lg:w-[40%] bg-[#131060] rounded-l-2xl p-4 lg:p-6 flex flex-col">
                           
//                             <h1 className="text-[20px] font-semibold text-white mb-4">TRK 8521</h1>

//                             {/* SIP Number and Status */}
//                             <div className="mb-3">
//                                 <div className="flex justify-between text-[#B7B7B7] text-[13px] mb-1">
//                                     <p>Current Location</p>
//                                     <p>Start Date</p>
//                                 </div>
//                                 <div className="flex justify-between text-white text-[15px] font-medium">
//                                     <p>Detroit, CA</p>
//                                     <p>2025/05/05</p>
//                                 </div>
//                             </div>


//                             {/* Driver Details */}
//                             <p className="text-[16px] text-white font-medium mb-3">Driver Details</p>

//                             <div className="border border-[#fff] rounded-xl px-4 py-4 mb-5">
//                                 <div className="flex items-center gap-3 mb-3">
//                                     <img
//                                         src="https://randomuser.me/api/portraits/men/1.jpg"
//                                         alt="driver"
//                                         className="w-[34px] h-[34px] rounded-full border-2 border-[#009951]"
//                                     />
//                                     <div>
//                                         <p className="text-white text-[15px] font-medium">{trackPopup.role.TruckID}</p>
//                                         <p className="text-white text-[15px] font-medium">{trackPopup.role.DriverName}</p>
//                                     </div>
//                                 </div>

//                                 <div className="text-[#FFFFFF] text-[12px] space-y-1">
//                                     <p>Total Deliveries - 256</p>
//                                     <p>On Time Deliveries - 210</p>
//                                     <p>
//                                         Reviews - <span className="text-yellow-400">4.5★</span>
//                                     </p>
//                                 </div>

//                             </div>
//                             <div className="flex justify-between mb-1">
//                                 <p className='text-[#B7B7B7] text-[14px]'>Start Location</p>
//                                 <p className='text-[#B7B7B7] text-[14px]'>End Location</p>
//                             </div>
//                             <div className="flex justify-between mb-4">
//                                 <p className='text-[16px] font-medium'>Chicago, IL</p>
//                                 <p className='text-[16px] font-medium'>Newyork, NY</p>
//                             </div>
//                             <div className="flex justify-between mb-1">
//                                 <p className='text-[#B7B7B7] text-[14px]'>Duration</p>
//                                 <p className='text-[#B7B7B7] text-[14px]'>Route Status</p>
//                             </div>
//                             <div className="flex justify-between mb-4">
//                                 <p className='text-[16px] font-medium'>12 Hours</p>
//                                 <p className='text-[16px] font-medium'>In Progress</p>
//                             </div>
//                         </div>

//                         {/* Right: Map Placeholder */}
//                         <div className="flex-1 overflow-hidden relative">
//                             <iframe
//                                 title="Live Tracking Map"
//                                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                                 className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TrackGpsTable;
import React, { useEffect, useRef, useState } from 'react';
import apiService from '../../ApiController/ApiService'; // Adjust the path as needed

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 p-4">
          <p>Something went wrong: {this.state.error?.message || 'Unknown error'}</p>
          <p>Please check the console for details and try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const TrackGpsTable = () => {
  const [trackPopup, setTrackPopup] = useState({ open: false, role: null });
  const [truckData, setTruckData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    fromDate: '',
    toDate: '',
  });
  const trackPopupRef = useRef(null);

  const openTrackPopup = (role) => {
    console.log('Opening Track popup for role:', role?.truckId?.truckNumber || 'N/A', role);
    setTrackPopup({ open: true, role });
  };

  const closeTrackPopup = () => {
    console.log('Closing Track popup');
    setTrackPopup({ open: false, role: null });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (trackPopupRef.current && !trackPopupRef.current.contains(event.target)) {
        closeTrackPopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchTruckData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.getAllTruckGpsAndRoute(
        filters.page,
        filters.limit,
        filters.fromDate,
        filters.toDate
      );
      console.log('getAllTruckGpsAndRoute response:', response);
      if (!response?.docs || !Array.isArray(response.docs)) {
        throw new Error('Invalid API response: docs is not an array');
      }
      console.log('Coordinates for each truck:', response.docs.map(doc => ({
        truckNumber: doc.truckId?.truckNumber,
        coordinates: doc.startLocation?.coordinates
      })));
      setTruckData(response.docs);
      setLoading(false);
    } catch (error) {
      console.error('fetchTruckData error:', error);
      setError(error.message || 'Failed to fetch truck data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTruckData();
  }, [filters]);

  useEffect(() => {
    console.log('truckData state updated:', truckData);
  }, [truckData]);

  const getMapUrl = (coordinates) => {
    console.log('Generating map URL for coordinates:', coordinates);
    if (
      !coordinates ||
      !Array.isArray(coordinates) ||
      coordinates.length !== 2 ||
      isNaN(coordinates[0]) ||
      isNaN(coordinates[1])
    ) {
      console.log('Invalid coordinates, using fallback map');
      return 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca';
    }
    const [lat, lng] = coordinates;
    // Simplified Embed API URL with marker at coordinates
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(`${lat},${lng}`)}!2s${encodeURIComponent(`${lat},${lng}`)}!5e0!3m2!1sen!2sus!4v${Date.now()}`;
    console.log('Generated map URL with marker:', mapUrl);
    return mapUrl;
  };

  return (
    <ErrorBoundary>
      <div className=" bg-[#080625]">
        <div className="flex justify-between mb-2">
          <p className="text-[#fff] text-[22px] font-semibold py-3">Truck GPS and Route History</p>
        </div>

        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && truckData.length === 0 && (
          <p className="text-white">No truck data available.</p>
        )}

        {truckData.length > 0 && (
          <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
            <table className="min-w-[1000px] w-full text-left">
              <thead>
                <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                  <th className="px-5">Truck ID</th>
                  <th className="px-5">Driver Name</th>
                  <th className="px-5">Start Date</th>
                  <th className="px-5">Start & End Location</th>
                  <th className="px-5">Distance Covered</th>
                  <th className="px-5">Duration</th>
                  <th className="px-5">Route Status</th>
                  <th className="px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {truckData.map((role, index) => (
                  <tr
                    key={role._id || index}
                    className={`bg-[#131060] text-white h-[90px] ${index !== truckData.length - 1 ? 'border-b border-[#fff]' : ''}`}
                  >
                    <td className="px-5">{role.truckId?.truckNumber || 'N/A'}</td>
                    <td className="px-5">{role.driverName || 'N/A'}</td>
                    <td className="px-5">{role.startDate ? new Date(role.startDate).toLocaleDateString() : 'N/A'}</td>
                    <td className="px-5">
                      {(role.startLocation?.address || 'N/A')} - {(role.endLocation?.address || 'N/A')}
                    </td>
                    <td className="px-5">{role.distanceCovered || 'N/A'}</td>
                    <td className="px-5">{role.duration || 'N/A'}</td>
                    <td className="px-5">
                      <span
                        className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                          role.routeStatus === 'Completed' ? 'bg-[#14AE5C] w-[90px]' :
                          role.routeStatus === 'In Progress' ? 'bg-[#E8B931] w-[125px]' :
                          role.routeStatus === 'Interrupted' ? 'bg-[#EC221F] w-[110px]' : 'bg-[#EC221F] w-[110px]'
                        }`}
                      >
                        {role.routeStatus || 'N/A'}
                      </span>
                    </td>
                    <td className="px-5 relative">
                      <span className="flex gap-2 cursor-pointer" onClick={() => openTrackPopup(role)}>
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.25 0C15.4966 0 19.7499 4.22748 19.75 9.44238C19.75 14.6574 14.6042 20.0656 10.25 24C6.6875 20.0656 0.75 14.6574 0.75 9.44238C0.750131 4.22748 5.00338 1.28075e-07 10.25 0ZM10.25 5C8.86929 5 7.75 6.11929 7.75 7.5C7.75 8.88071 8.86929 10 10.25 10C11.6307 10 12.75 8.88071 12.75 7.5C12.75 6.11929 11.6307 5 10.25 5Z"
                            fill="white"
                          />
                        </svg>
                        <span>Tracking</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {trackPopup.open && trackPopup.role && (
          <ErrorBoundary>
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div
                ref={trackPopupRef}
                className="flex gap-4 w-[90%] lg:w-[70%] max-h-[80vh] lg:max-h-[500px] border border-[#fff] rounded-2xl text-white bg-[#131060] overflow-hidden"
              >
                <div className="w-full lg:w-[40%] bg-[#131060] rounded-l-2xl p-4 lg:p-6 flex flex-col">
                  <h1 className="text-[20px] font-semibold text-white mb-4">
                    {trackPopup.role.truckId?.truckNumber || 'N/A'}
                  </h1>

                  <div className="mb-3">
                    <div className="flex justify-between text-[#B7B7B7] text-[13px] mb-1">
                      <p>Current Location</p>
                      <p>Start Date</p>
                    </div>
                    <div className="flex justify-between text-white text-[15px] font-medium">
                      <p>{trackPopup.role.startLocation?.address || 'N/A'}</p>
                      <p>{trackPopup.role.startDate ? new Date(trackPopup.role.startDate).toLocaleDateString() : 'N/A'}</p>
                    </div>
                  </div>

                  <p className="text-[16px] text-white font-medium mb-3">Driver Details</p>

                  <div className="border border-[#fff] rounded-xl px-4 py-4 mb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="driver"
                        className="w-[34px] h-[34px] rounded-full border-2 border-[#009951]"
                      />
                      <div>
                        <p className="text-white text-[15px] font-medium">
                          {trackPopup.role.truckId?.truckNumber || 'N/A'}
                        </p>
                        <p className="text-white text-[15px] font-medium">{trackPopup.role.driverName || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="text-[#FFFFFF] text-[12px] space-y-1">
                      <p>Total Deliveries - {trackPopup.role.totalDeliveries || 256}</p>
                      <p>On Time Deliveries - {trackPopup.role.onTimeDeliveries || 210}</p>
                      <p>
                        Reviews - <span className="text-yellow-400">{trackPopup.role.reviews || '4.5'}★</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mb-1">
                    <p className="text-[#B7B7B7] text-[14px]">Start Location</p>
                    <p className="text-[#B7B7B7] text-[14px]">End Location</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-[16px] font-medium">{trackPopup.role.startLocation?.address || 'N/A'}</p>
                    <p className="text-[16px] font-medium">{trackPopup.role.endLocation?.address || 'N/A'}</p>
                  </div>
                  <div className="flex justify-between mb-1">
                    <p className="text-[#B7B7B7] text-[14px]">Duration</p>
                    <p className="text-[#B7B7B7] text-[14px]">Route Status</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-[16px] font-medium">{trackPopup.role.duration || 'N/A'}</p>
                    <p className="text-[16px] font-medium">{trackPopup.role.routeStatus || 'N/A'}</p>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden relative">
                  <iframe
                    title="Live Tracking Map"
                    src={getMapUrl(trackPopup.role.startLocation?.coordinates)}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
                  />
                </div>
              </div>
            </div>
          </ErrorBoundary>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default TrackGpsTable;