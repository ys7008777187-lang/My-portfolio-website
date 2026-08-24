// API Configuration
// This file configures the Dashboard API URL for both local and production environments

const config = {
    // Use environment variable if available, otherwise use production URL
    dashboardApi: process.env.NEXT_PUBLIC_DASHBOARD_API || '',

    // For local development, uncomment this line:
    // dashboardApi: 'http://localhost:3001',
};

export default config;
