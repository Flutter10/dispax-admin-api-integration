import axios from 'axios';

const API_URL = 'https://dispax-backend.vercel.app/api/v1/';

const apiService = {
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
  getAllCompletedShipment: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getAllCompletedShipment`, {
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
  getAllPendingShipment: async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get(`${API_URL}Admin/getAllPendingShipment`, {
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
      console.log('getPackage API response:', response.data); // Debug log

      // Transform API response to match component's expected structure
      const transformedPlans = Array.isArray(response.data.data)
        ? response.data.data.map(plan => ({
            title: plan.name.charAt(0).toUpperCase() + plan.name.slice(1), // Capitalize name (e.g., "starter" -> "Starter")
            price: plan.isFree ? "$0" : `$${plan.price}`, // Format price as string
            description: plan.description.slice(0, 50) + "...", // Truncate description
            features: [], // Empty array since API doesn't provide features
            mostPopular: false, // False since API doesn't indicate most popular
          }))
        : [];

      return transformedPlans;
    } catch (error) {
      console.error('getPackage API error:', error.response?.data || error.message);
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
};

export default apiService;