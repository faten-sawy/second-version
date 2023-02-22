 module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plan-b-eg.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
    env:{
      customEnv : "TEST"
    }
  } 

  //const nextConfig = {
   /// reactStrictMode: false,
 // };