// import React, { useState } from "react";

// const companies = ["Company A", "Company B", "Company C"];

// const LiveTrackingMap = () => {
//     const [selectedCompany, setSelectedCompany] = useState("Company A");

//     return (
//         <><h2 className="text-white text-[22px] font-semibold mb-2">Live Tracking Map</h2>
//         <div className=" rounded-xl  w-full">

//             <div className="bg-[#131060] rounded-t-md p-4">
//                 <label className="text-white text-[16px] mr-5">Monitor Shipment of</label>
//                 <select
//                     className="bg-white w-[244px] h-[56px] text-black rounded-md px-4 py-2 focus:outline-none"
//                     value={selectedCompany}
//                     onChange={(e) => setSelectedCompany(e.target.value)}
//                 >
//                     {companies.map((company) => (
//                         <option key={company} value={company}>
//                             {company}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <div className="w-full h-[500px] overflow-hidden">
//                 <iframe
//                     title="Live Tracking Map"
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 />
//             </div>
//         </div></>
//     );
// };

// export default LiveTrackingMap;
import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import apiService from "../../components/ApiController/ApiService"; // Import as per your structure

// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LiveTrackingMap = () => {
    const [shipments, setShipments] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState("");
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    // Fetch shipments with retry logic
    const fetchShipments = async (pageNum = 1) => {
        try {
            setLoading(true);
            setError(null);
            const authToken = localStorage.getItem("authToken");
            if (!authToken) {
                setError("Please log in to view shipment data.");
                setLoading(false);
                return;
            }
            const data = await apiService.getAllContainerRoutesAndMapping("", pageNum, 10, "", "");
            setShipments((prev) => (pageNum === 1 ? data.docs : [...prev, ...data.docs]));
            setHasMore(data.hasNextPage);
            // Extract unique companies
            const uniqueCompanies = [
                ...new Set(data.docs.map((shipment) => shipment.userId.fullName)),
            ];
            setCompanies(uniqueCompanies);
            if (!selectedCompany && uniqueCompanies.length > 0) {
                setSelectedCompany(uniqueCompanies[0]);
            }
            setLoading(false);
        } catch (err) {
            setError("Failed to load shipments. Retrying in 5 seconds...");
            setTimeout(() => fetchShipments(pageNum), 5000); // Retry after 5 seconds
        }
    };

    useEffect(() => {
        fetchShipments(1);
    }, []);

    // Load more shipments
    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchShipments(nextPage);
    };

    // Compute filtered shipments and map center
    const { filteredShipments, mapCenter } = useMemo(() => {
        const filtered = shipments.filter(
            (shipment) => shipment.userId.fullName === selectedCompany
        );
        const validShipments = filtered.filter(
            (shipment) =>
                shipment.currentLocation.coordinates &&
                shipment.currentLocation.coordinates.length === 2 &&
                shipment.currentLocation.coordinates[0] !== 0 &&
                shipment.currentLocation.coordinates[1] !== 0
        );
        const center = validShipments.length > 0
            ? [
                validShipments.reduce((sum, s) => sum + s.currentLocation.coordinates[1], 0) / validShipments.length,
                validShipments.reduce((sum, s) => sum + s.currentLocation.coordinates[0], 0) / validShipments.length,
            ]
            : [34.0522, -118.2437]; // Default to Los Angeles
        return { filteredShipments: filtered, mapCenter: center };
    }, [shipments, selectedCompany]);

    const defaultZoom = 5;

    return (
        <>
            <h2 className="text-white text-[22px] font-semibold mb-2">
                Live Tracking Map
            </h2>
            <div className="rounded-xl w-full z-0">
                <div className="bg-[#131060] rounded-t-md p-4 flex items-center justify-between">
                    <div>
                        <label className="text-white text-[16px] mr-5">
                            Monitor Shipment of
                        </label>
                        <select
                            className="bg-white w-[244px] h-[56px] text-black rounded-md px-4 py-2 focus:outline-none"
                            value={selectedCompany}
                            onChange={(e) => setSelectedCompany(e.target.value)}
                            disabled={loading || error || companies.length === 0}
                        >
                            {companies.map((company) => (
                                <option key={company} value={company}>
                                    {company}
                                </option>
                            ))}
                        </select>
                    </div>
                    {hasMore && (
                        <button
                            onClick={loadMore}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
                            disabled={loading}
                        >
                            Load More
                        </button>
                    )}
                </div>

                {loading && (
                    <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
                        <p className="text-black">Loading map...</p>
                    </div>
                )}
                {error && (
                    <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}
                {!loading && !error && (
                    <div className="w-full h-[500px] overflow-hidden">
                        <MapContainer
                            center={mapCenter}
                            zoom={defaultZoom}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {filteredShipments.map((shipment) => {
                                const { coordinates } = shipment.currentLocation;
                                if (
                                    coordinates &&
                                    coordinates.length === 2 &&
                                    coordinates[0] !== 0 &&
                                    coordinates[1] !== 0
                                ) {
                                    return (
                                        <Marker
                                            key={shipment._id}
                                            position={[coordinates[1], coordinates[0]]}
                                        >
                                            <Popup>
                                                <div>
                                                    <h3 className="font-bold">{shipment.userId.fullName}</h3>
                                                    <p>Container: {shipment.containerNumber}</p>
                                                    <p>Status: {shipment.status}</p>
                                                    <p>Origin: {shipment.origin}</p>
                                                    <p>Destination: {shipment.destination}</p>
                                                    <p>Commodity: {shipment.commodity}</p>
                                                    <p>
                                                        Pickup: {new Date(shipment.pickUpDate).toLocaleString()}
                                                    </p>
                                                    <p>
                                                        Dropoff: {new Date(shipment.dropOffDate).toLocaleString()}
                                                    </p>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    );
                                }
                                return null;
                            })}
                        </MapContainer>
                    </div>
                )}
            </div>
        </>
    );
};

export default LiveTrackingMap;