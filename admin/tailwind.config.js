module.exports = {
  content: [
    "./src/App.js",
    "./src/dashboard/pages/Login.js",
    "./src/dashboard/Topbar.js",
    "./src/dashboard/Sidebar.js",
    "./src/dashboard/components/DashHome.js",
    "./src/dashboard/components/FeaturedInfo.js",
    "./src/dashboard/components/Chart.js",
    "./src/dashboard/components/LatestTransactions.js",
    "./src/dashboard/components/LatestUser.js",
    "./src/dashboard/components/UserList.js",
    "./src/dashboard/components/NewUser.js",
    "./src/dashboard/components/User.js",
    "./src/dashboard/components/NewProduct.js",
    "./src/dashboard/components/Product.js",
    "./src/dashboard/components/ProductList.js"
    ],
  theme: {
    extend: {
      height: {
        '76': '19rem',
        '30': '7.5rem'
      }
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
