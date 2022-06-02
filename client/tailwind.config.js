module.exports = {
  content: [
  	"./src/components/Home.js",
  	"./src/components/Header.js",
  	"./src/components/Featured.js",
  	"./src/components/List.js",
  	"./src/components/ListItem.js",
    "./src/pages/Register.js",
    "./src/pages/Login.js",
    "./src/pages/Watch.js",
    "./src/pages/dashboard/Topbar.js",
    "./src/pages/dashboard/Sidebar.js",
    "./src/App.js",
    "./src/pages/dashboard/components/DashHome.js",
    "./src/pages/dashboard/components/FeaturedInfo.js",
    "./src/pages/dashboard/components/Chart.js",
  ],
  theme: {
    extend: {
      height: {
        '76': '19rem',
        '30': '7.5rem'
      }
    },
  },
  plugins: [],
}
