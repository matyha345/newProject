import Home from "../components/screens/Home/Home";
import AboutUs from "../components/screens/about_us/AboutUS";
import Service from "../components/screens/service/Service";
import ServiceSingle from "../components/screens/service_single/ServiceSingle";



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
	{
		path: '/services',
		component: Service
		// auth: false
	},
	{
		path: '/single',
		component: ServiceSingle
		// auth: false
	},
]