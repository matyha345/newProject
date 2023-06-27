import Home from "../components/screens/Home/Home";
import AboutUs from "../components/screens/about_us/AboutUS";



export const routes = [
	{
		path: '/',
		component: Home
		// auth: false
	},
	{
		path: '/about-us',
		component: AboutUs
		// auth: false
	},
]