// Debug script for deployment issues
console.log('=== DEPLOYMENT DEBUG INFO ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('REACT_APP_SOCKET_URL:', process.env.REACT_APP_SOCKET_URL);
console.log('Current working directory:', process.cwd());
console.log('Available files:', require('fs').readdirSync('.'));
console.log('================================');