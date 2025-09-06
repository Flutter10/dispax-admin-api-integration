import axios from 'axios';

const API_URL = 'https://dispax-backend.vercel.app/api/v1/';

const apiService = {
   // Fetch all drivers
  getAllDriver: async (page = 1, limit = 10) => {
    try {
      const queryParams = new URLSearchParams({
        page,
        limit,
      });
      const response = await axios.get(`${API_URL}Admin/getAllDriver?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('getAllDriver API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('API Error (getAllDriver):', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}admin/registration`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}admin/signin`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Store userId and accessToken in localStorage
      const { data, accessToken } = response.data;
      if (data?.userId && accessToken) {
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('authToken', accessToken);
        
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
   changePassword: async (userId, passwordData, authToken) => {
    try {
      const response = await axios.post(`${API_URL}admin/changePassword/${userId}`, passwordData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getDashboard: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getDashboard`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getShipmentDeliveriesOverview: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getShipmentDeliveriesOverview`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data; // Return only the data array
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getRevenue: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getRevenue`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getOrderOverView: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getOrderOverView`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  // getAllCompletedShipment: async () => {
  //   try {
  //     const authToken = localStorage.getItem('authToken');
  //     const response = await axios.get(`${API_URL}Admin/getAllCompletedShipment`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     });
  //     return response.data.data.docs; // Return only the docs array
  //   } catch (error) {
  //     throw error.response?.data || error.message;
  //   }
  // },
  // getAllPendingShipment: async () => {
  //   try {
  //     const authToken = localStorage.getItem('authToken');
  //     const response = await axios.get(`${API_URL}Admin/getAllPendingShipment`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     });
  //     return response.data.data.docs; // Return only the docs array
  //   } catch (error) {
  //     throw error.response?.data || error.message;
  //   }
  // },
  getAllCompletedShipment: async (params) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(`${API_URL}Admin/getAllCompletedShipment`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        params, // Pass page and limit as query parameters
      });
      return response.data; // Return the full response object
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllPendingShipment: async (params) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(`${API_URL}Admin/getAllPendingShipment`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        params, // Pass page and limit as query parameters
      });
      return response.data; // Return the full response object
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllInTransitShipment: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getAllInTransitShipment`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data.docs; // Return only the docs array
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllDisputeResolution: async (page = 1, limit = 10) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getAllDisputeResolution?page=${page}&limit=${limit}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  //  createInvoices: async (invoiceData) => {
  //   try {
  //     const authToken = localStorage.getItem('authToken');
  //     const response = await axios.post(`${API_URL}Admin/createInvoices`, invoiceData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message;
  //   }
  // },
  createInvoices: async (invoiceData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(`${API_URL}Admin/createInvoices`, invoiceData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Error (createInvoices):', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllInvoices: async (page = 1, limit = 10, paymentMethod = '', status = '', fromDate = '', toDate = '') => {
    try {
      const authToken = localStorage.getItem('authToken');
      const queryParams = new URLSearchParams({
        page,
        limit,
        ...(paymentMethod && { paymentMethod }),
        ...(status && { status }),
        ...(fromDate && { fromDate }),
        ...(toDate && { toDate }),
      });
      const response = await axios.get(`${API_URL}Admin/getAllInvoices?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getPackage: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}static/getPackage`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getPackage API response:', response.data);
      const transformedPlans = Array.isArray(response.data.data)
        ? response.data.data.map(plan => ({
            id: plan._id, // Include _id for referencing in getPackageById
            title: plan.name.charAt(0).toUpperCase() + plan.name.slice(1),
            price: plan.isFree ? "$0" : `$${plan.price}`,
            description: plan.description.slice(0, 50) + "...",
            features: [],
            mostPopular: false,
          }))
        : [];
      return transformedPlans;
    } catch (error) {
      console.error('getPackage API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },

  getPackageById: async (packageId) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}static/package/${packageId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getPackageById API response:', response.data);
      return response.data.data; // Return the package data
    } catch (error) {
      console.error('getPackageById API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  createPackage: async (packageData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(`${API_URL}static/createPackage`, packageData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('createPackage API response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('createPackage API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
   updatePackage: async (packageId, packageData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`${API_URL}static/package/${packageId}`, packageData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('updatePackage API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('updatePackage API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  deletePackage: async (packageId) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.delete(`${API_URL}static/package/${packageId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('deletePackage API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('deletePackage API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllFaq: async () => {
    try {
      const response = await axios.get(`${API_URL}static/faq/All`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data; // Assuming the FAQ data is in response.data.data
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  addCompany: async (companyData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(`${API_URL}admin/addCompany`, companyData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('addCompany API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('addCompany API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },

  //   getCompany: async () => {
  //   try {
  //     const authToken = localStorage.getItem('authToken');
  //     const response = await axios.get(`${API_URL}admin/getCompany`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     });
  //     console.log('getCompany API response:', response.data);
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('getCompany API error:', error.response?.data || error.message);
  //     throw error.response?.data || error.message;
  //   }
  // },
  getCompany: async (params = {}) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}admin/getCompany`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        params: {
          page: params.page || 1,
          ac: params.ac || undefined, // Include ac parameter if provided
        },
      });
      console.log('getCompany API response:', response.data);
      return response.data.data; // Returns { docs: [...], totalDocs: 30, ... }
    } catch (error) {
      console.error('getCompany API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
},
  updateCompany: async (id, companyData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`${API_URL}admin/updateCompany/${id}`, companyData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('updateCompany API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('updateCompany API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  removeCompany: async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.delete(`${API_URL}admin/removeCompany/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('removeCompany API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('removeCompany API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getCompanyById: async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}admin/getCompanyById/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getCompanyById API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getCompanyById API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
   getCompanyLogActivity: async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}admin/getCompanyLogActivity/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getCompanyLogActivity API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getCompanyLogActivity API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  addPricingAndCommission: async (pricingData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(`${API_URL}PricingAndCommissionManagement/add`, pricingData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('addPricingAndCommission API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('addPricingAndCommission API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllPricingAndCommission: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}PricingAndCommissionManagement/All`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getAllPricingAndCommission API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getAllPricingAndCommission API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getPricingAndCommissionById: async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}PricingAndCommissionManagement/getById/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getPricingAndCommissionById API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getPricingAndCommissionById API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  updatePricingAndCommission: async (id, pricingData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`${API_URL}PricingAndCommissionManagement/update/${id}`, pricingData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('updatePricingAndCommission API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('updatePricingAndCommission API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  addCustomBranding: async (brandingData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const formData = new FormData();
      formData.append('companyName', brandingData.companyName);
      formData.append('brandName', brandingData.brandName);
      formData.append('primaryColor', brandingData.primaryColor);
      formData.append('secondaryColor', brandingData.secondaryColor);
      formData.append('subDomain', brandingData.subDomain);
      formData.append('typography', brandingData.typography);
      if (brandingData.image) {
        formData.append('image', brandingData.image);
      }

      const response = await axios.post(`${API_URL}CustomBrandingForCompany/add`, formData, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('addCustomBranding API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('addCustomBranding API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
    getAllCustomBranding: async () => {
    try {
      const response = await axios.get(`${API_URL}CustomBrandingForCompany/All`);
      return response.data.data.docs; // Return the docs array
    } catch (error) {
      console.error('Error fetching custom branding data:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch custom branding data');
    }
  },
  getNotificationPrivacy: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}getNotificationPrivacy`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getNotificationPrivacy API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getNotificationPrivacy API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  addRoleAccess: async (roleData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post(`${API_URL}RoleAccess/add`, roleData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('addRoleAccess API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('addRoleAccess API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllRoleAccess: async () => {
    try {
      const response = await axios.get(`${API_URL}RoleAccess/All`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('getAllRoleAccess API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getAllRoleAccess API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getRoleById: async (roleId) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}RoleAccess/getById/${roleId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getRoleById API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getRoleById API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  updateRole: async (roleId, roleData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`${API_URL}RoleAccess/update/${roleId}`, roleData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('updateRole API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('updateRole API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  deleteRole: async (roleId) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.delete(`${API_URL}RoleAccess/remove/${roleId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('deleteRole API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('deleteRole API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllContainerRoutesAndMapping: async (containerNumber = '', page = 1, limit = 10, origin = '', status = '') => {
    try {
      const authToken = localStorage.getItem('authToken');
      const queryParams = new URLSearchParams({
        containerNumber,
        page,
        limit,
        ...(origin && { origin }),
        ...(status && { status }),
      });
      const response = await axios.get(`${API_URL}Admin/getAllContainerRoutesAndMapping?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('API Error (getAllContainerRoutesAndMapping):', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllVehicleHealthAndMaintenance: async (page = 1, limit = 10, fromDate = '', toDate = '') => {
    try {
      const authToken = localStorage.getItem('authToken');
      const queryParams = new URLSearchParams({
        page,
        limit,
        ...(fromDate && { fromDate }),
        ...(toDate && { toDate }),
      });
      const response = await axios.get(`${API_URL}admin/getAllVehicleHealthAndMaintenance?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getAllVehicleHealthAndMaintenance API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getAllVehicleHealthAndMaintenance API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllTruckGpsAndRoute: async (page = 1, limit = 10, fromDate = '', toDate = '') => {
    try {
      const authToken = localStorage.getItem('authToken');
      const queryParams = new URLSearchParams({
        page,
        limit,
        ...(fromDate && { fromDate }),
        ...(toDate && { toDate }),
      });
      const response = await axios.get(`${API_URL}admin/getAllTruckGpsAndRoute?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getAllTruckGpsAndRoute API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('getAllTruckGpsAndRoute API error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  updateProfile: async (profileData) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`${API_URL}admin/update`, profileData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('updateProfile API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error (updateProfile):', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  getAllTruck: async (page = 1, limit = 10) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const queryParams = new URLSearchParams({
        page,
        limit,
      });
      const response = await axios.get(`${API_URL}admin/getAllTruck?${queryParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      console.log('getAllTruck API response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('API Error (getAllTruck):', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  addTruck: async (truckData) => {
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await axios.post(`${API_URL}admin/addTruck`, truckData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });
    console.log('addTruck API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error (addTruck):', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
  
  
},
};

export default apiService;