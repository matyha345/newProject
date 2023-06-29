import Home from "../components/screens/Home/Home";
import AboutUs from "../components/screens/about_us/AboutUS";
import BlogPage from "../components/screens/blog_page/BlogPage";
import Project from "../components/screens/project/Project";
import ProjectSingle from "../components/screens/project_single/ProjectSingle";
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
	{
		path: '/project',
		component: Project
		// auth: false
	},
	{
		path: '/project_single',
		component: ProjectSingle
		// auth: false
	},
	{
		path: '/blog',
		component: BlogPage
		// auth: false
	},
]