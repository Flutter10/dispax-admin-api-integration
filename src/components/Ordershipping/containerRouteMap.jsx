// import React, { useState } from 'react';

// // Status icons as React components
// const CheckIcon = () => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="12" fill="#009951" />
//         <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />
//     </svg>
// );

// const NearDestinationIcon = () => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="12" fill="white" />
//         <circle cx="12" cy="12" r="6" fill="black" />
//     </svg>
// );

// // Status steps and their order
// const statusSteps = [
//     { label: 'Dispatched from origin', key: 'dispatched' },
//     { label: 'Arrived at hub', key: 'arrived' },
//     { label: 'Near Destination', key: 'near' },
//     { label: 'Delivered', key: 'delivered' },
// ];

// // Example status (could be dynamic)
// const currentStep = 1; // 0-based index: 0=Dispatched, 1=Arrived, 2=Near, 3=Delivered

// const initialData = [
//     { module: 'Container 456' },
//     { module: 'Company B' },
//     { module: 'Company C' },
//     { module: 'Company D' },
// ];

// const ContainerRouteMap = () => {
//     const [data] = useState(initialData);
//     const [selectedModule, setSelectedModule] = useState('Container 456');

//     return (
//         <div className="flex flex-col items-center py-8">
//             <div className="w-full rounded-2xl shadow-lg">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3 mb-2">Container Route & ETA Tracking</p>
//                 <div className="flex gap-3 items-center mb-6">
//                     <p className='text-[16px] font-medium text-white'>Track Container</p>
//                     <select
//                         value={selectedModule}
//                         onChange={(e) => setSelectedModule(e.target.value)}
//                         className="w-[200px] h-[56px] px-3 py-2 bg-[#fff] text-[#000] border border-[#FFFFFF] rounded-lg focus:outline-none"
//                     >
//                         {data.map((item) => (
//                             <option key={item.module} value={item.module}>
//                                 {item.module}
//                             </option>
//                         ))}
//                     </select>
//                 </div>



//                 <div className="flex h-[589px] border border-[#fff] rounded-2xl">
//                     {/* Left: Status Timeline */}
//                     <div className="w-1/3 bg-[#080625] rounded-2xl p-6 flex flex-col ">
//                         <h1 className='text-[22px] font-semibold mb-4'>Container 456</h1>
//                         <div className="flex justify-between mb-2">
//                             <p className='text-[14px] text-[#B7B7B7]'>Status</p>
//                             <p className='text-[14px] text-[#B7B7B7]'>Last Updated</p>
//                         </div>
//                         <div className="flex justify-between mb-4">
//                             <p className='text-[16px] text-[#FFFFFF]'>In Transit</p>
//                             <p className='text-[16px] text-[#FFFFFF]'>Apr 19,</p>
//                         </div>

//                         <div className="border border-[#fff]  mb-6 px-5 py-5 rounded-xl">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <img
//                                     src="https://randomuser.me/api/portraits/men/1.jpg"
//                                     alt="driver"
//                                     className="w-[32px] h-[32px] rounded-2xl border-2 border-[#009951]"
//                                 />
//                                 <div>
//                                     <p className="text-white font-medium text-[16px]">John Smith</p>
//                                     <p className="text-white text-[16px] font-medium">TRK-8521</p>

//                                 </div>
//                             </div>
//                             <div className="">
//                                 <p className="text-[#FFFFFF] text-[12px] mt-2">Total Deliveries - 256  </p>
//                                 <p className="text-[#FFFFFF] text-[12px] mt-2">On Time Deliveries - 210</p>
//                                 <p className="text-[#FFFFFF] text-[12px] mt-2">Reviews - <span className="text-yellow-400">4.5★</span></p>
//                             </div>
//                         </div>


//                         <div className="mb-4">
//                             <div className="flex justify-between items-center mb-2">
//                                 <span className="text-[#B7B7B7] text-sm">Remaining Distance</span>
//                                 <span className="text-[#B7B7B7] text-sm">Status</span>
                                
//                             </div>
//                             <div className="flex justify-between items-center mb-2">
//                                 <span className="text-white font-semibold">120 KM</span>
//                                 <span className="text-[#fff] font-semibold">On Time</span>
//                             </div>
//                         </div>
//                         {/* Status Steps */}
//                         <div className="flex flex-col gap-4 mt-2">
//                             {statusSteps.map((step, idx) => (
//                                 <div key={step.key} className="flex items-center gap-3">
//                                     <span>
//                                         {idx < currentStep ? (
//                                             <CheckIcon />
//                                         ) : idx === currentStep ? (
//                                             <NearDestinationIcon />
//                                         ) : (
//                                             <span className="w-6 h-6 inline-block"></span>
//                                         )}
//                                     </span>
//                                     <span className={`text-white ${idx === currentStep && 'font-semibold'}`}>
//                                         {step.label}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Right: Map Placeholder */}
//                     <div className="flex-1  overflow-hidden relative">
//                         {/* Map Placeholder (replace with mapbox or embed as needed) */}
//                         <div >
//                             <iframe
//                                 title="Live Tracking Map"
//                                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                                 className="w-full h-[589px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
//                             />            </div>
//                         {/* Overlay: Route line and markers can be added here if integrating with a real map */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContainerRouteMap;
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import apiService from "../../components/ApiController/ApiService"; // Adjust path as needed

// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Status icons as React components
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#009951" />
        <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />
    </svg>
);

const NearDestinationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" />
        <circle cx="12" cy="12" r="6" fill="black" />
    </svg>
);

// Status steps and their order
const statusSteps = [
    { label: 'Dispatched from origin', key: 'dispatched' },
    { label: 'Arrived at hub', key: 'arrived' },
    { label: 'Near Destination', key: 'near' },
    { label: 'Delivered', key: 'delivered' },
];

const statusToStep = {
  'Pending': 0,
  'In Transit': 2,
  'Delivered': 3,
};

const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dlat = (lat2 - lat1) * Math.PI / 180;
  const dlon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c); // Return rounded distance in km
};

const ContainerRouteMap = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getAllContainerRoutesAndMapping('', 1, 10, '', '');
        setShipments(data.docs);
        if (data.docs.length > 0) {
          setSelectedContainer(data.docs[0].containerNumber);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load shipment data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const selectedShipment = shipments.find(shipment => shipment.containerNumber === selectedContainer) || {};

  const currentStep = statusToStep[selectedShipment.status] || 0;

  const currentCoords = selectedShipment.currentLocation?.coordinates || [0, 0];
  const destCoords = selectedShipment.destinationLocation?.coordinates || [0, 0];
  const remainingDistance = haversine(currentCoords[1], currentCoords[0], destCoords[1], destCoords[0]);

  const mapCenter = currentCoords[0] !== 0 && currentCoords[1] !== 0 ? [currentCoords[1], currentCoords[0]] : [34.0522, -118.2437];
  const polylinePositions = [
    [currentCoords[1], currentCoords[0]],
    [destCoords[1], destCoords[0]],
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-full rounded-2xl shadow-lg">
        <p className="text-[#fff] text-[22px] font-semibold py-3 mb-2">Container Route & ETA Tracking</p>
        <div className="flex gap-3 items-center mb-6">
          <p className='text-[16px] font-medium text-white'>Track Container</p>
          <select
            value={selectedContainer}
            onChange={(e) => setSelectedContainer(e.target.value)}
            className="w-[200px] h-[56px] px-3 py-2 bg-[#fff] text-[#000] border border-[#FFFFFF] rounded-lg focus:outline-none"
          >
            {shipments.map((item) => (
              <option key={item._id} value={item.containerNumber}>
                {item.containerNumber}
              </option>
            ))}
          </select>
        </div>

        <div className="flex h-[589px] border border-[#fff] rounded-2xl">
          {/* Left: Status Timeline */}
          <div className="w-1/3 bg-[#080625] rounded-2xl p-6 flex flex-col ">
            <h1 className='text-[22px] font-semibold mb-4'>{selectedShipment.containerNumber || 'Container'}</h1>
            <div className="flex justify-between mb-2">
              <p className='text-[14px] text-[#B7B7B7]'>Status</p>
              <p className='text-[14px] text-[#B7B7B7]'>Last Updated</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className='text-[16px] text-[#FFFFFF]'>{selectedShipment.status || 'In Transit'}</p>
              <p className='text-[16px] text-[#FFFFFF]'>{new Date(selectedShipment.updatedAt).toLocaleDateString() || 'Apr 19,'}</p>
            </div>

            <div className="border border-[#fff] mb-6 px-5 py-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="driver"
                  className="w-[32px] h-[32px] rounded-2xl border-2 border-[#009951]"
                />
                <div>
                  <p className="text-white font-medium text-[16px]">Driver</p>
                  <p className="text-white text-[16px] font-medium">{selectedShipment.vehicleNumber || 'TRK-8521'}</p>
                </div>
              </div>
              <div className="">
                <p className="text-[#FFFFFF] text-[12px] mt-2">Total Deliveries - {selectedShipment.userId?.totalTrip || 256}</p>
                <p className="text-[#FFFFFF] text-[12px] mt-2">On Time Deliveries - {Math.round(selectedShipment.userId?.onTimeDeliveryRate * selectedShipment.userId?.totalTrip / 100) || 210}</p>
                <p className="text-[#FFFFFF] text-[12px] mt-2">Reviews - <span className="text-yellow-400">{selectedShipment.userId?.rating || 4.5}★</span></p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#B7B7B7] text-sm">Remaining Distance</span>
                <span className="text-[#B7B7B7] text-sm">Status</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{remainingDistance} KM</span>
                <span className="text-[#fff] font-semibold">On Time</span>
              </div>
            </div>
            {/* Status Steps */}
            <div className="flex flex-col gap-4 mt-2">
              {statusSteps.map((step, idx) => (
                <div key={step.key} className="flex items-center gap-3">
                  <span>
                    {idx < currentStep ? (
                      <CheckIcon />
                    ) : idx === currentStep ? (
                      <NearDestinationIcon />
                    ) : (
                      <span className="w-6 h-6 inline-block"></span>
                    )}
                  </span>
                  <span className={`text-white ${idx === currentStep && 'font-semibold'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex-1 z-0 overflow-hidden relative">
            <MapContainer center={mapCenter} zoom={5} style={{ height: '589px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {currentCoords[0] !== 0 && currentCoords[1] !== 0 && (
                <Marker position={[currentCoords[1], currentCoords[0]]}>
                  <Popup>Current Location: {selectedShipment.origin}</Popup>
                </Marker>
              )}
              {destCoords[0] !== 0 && destCoords[1] !== 0 && (
                <Marker position={[destCoords[1], destCoords[0]]}>
                  <Popup>Destination: {selectedShipment.destination}</Popup>
                </Marker>
              )}
              {currentCoords[0] !== 0 && destCoords[0] !== 0 && (
                <Polyline positions={polylinePositions} color="blue" />
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerRouteMap;