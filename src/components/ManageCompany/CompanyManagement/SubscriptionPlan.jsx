import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TabSwitcher from "./SubscriptionTabs";
import PlanCards from "./subscriptionPlanCards";
import RenewableTable from "./renewableTable";
import CancellationTable from "./cancellationTable";
import apiService from "../../ApiController/ApiService";

const Subscription = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState("Plans");
  const [plans, setPlans] = useState([]); // Initialize with empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [formError, setFormError] = useState(null);

  // Handle searchParams for tab switching
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setCurrentTab(tab);
  }, [searchParams]);

  // Fetch plans on mount
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await apiService.getPackage();
        console.log('Fetched plans:', data); // Debug log
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

  const handleCreatePackage = async () => {
    try {
      // Validate form data
      if (!name || !description || (!isFree && !price)) {
        setFormError("Please fill in all required fields.");
        return;
      }

      const packageData = {
        name: name.toLowerCase(), // Match API format (e.g., "pro")
        description,
        price: isFree ? 0 : parseFloat(price), // Convert to number, 0 if free
        isFree,
      };

      await apiService.createPackage(packageData);
      
      // Refresh plans after successful creation
      const updatedPlans = await apiService.getPackage();
      setPlans(updatedPlans);
      
      // Reset form and close modal
      setName("");
      setDescription("");
      setPrice("");
      setIsFree(false);
      setFormError(null);
      setShowModal(false);
    } catch (err) {
      setFormError(err.message || "Failed to create package.");
    }
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setSearchParams({ tab });
  };

  if (loading) {
    return <div className="text-white">Loading plans...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Check if plans is an array and not empty
  if (!Array.isArray(plans) || plans.length === 0) {
    return <div className="text-white">No plans available.</div>;
  }

  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="text-[#fff] text-[22px] font-semibold py-3">Subscription & Plan</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
        >
          Add Plan
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#0A032B] text-white rounded-xl p-8 w-full max-w-xl relative shadow-lg">
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowModal(false);
                  setFormError(null);
                  setName("");
                  setDescription("");
                  setPrice("");
                  setIsFree(false);
                }}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ×
              </button>

              {/* Modal Heading */}
              <h2 className="text-2xl font-bold mb-6">Create Package</h2>

              {/* Form Fields */}
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
                    disabled={isFree} // Disable price input if isFree is checked
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

                {/* Error Message */}
                {formError && (
                  <div className="text-red-500 text-sm">{formError}</div>
                )}
              </div>

              {/* Save Button */}
              <div className="mt-6 text-right">
                <button
                  className="bg-[#6F1AFF] text-white text-[16px] font-medium rounded-lg py-2 px-6"
                  onClick={handleCreatePackage}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <TabSwitcher currentTab={currentTab} setTab={handleTabChange} />

      {currentTab === "Plans" && <PlanCards />}
      {currentTab === "Renewable" && <RenewableTable title="Renewable" />}
      {currentTab === "Cancellation" && <CancellationTable title="Cancellation" />}
    </div>
  );
};

export default Subscription;