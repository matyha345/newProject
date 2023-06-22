import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import NotFound from '../components/screens/not-found/NotFound'
import { routes } from './routes.data'
import ScrollToTop from '../components/utils/scrollToTop'



const Router = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				{routes.map(screens => {
					return (
						<Route
							key={screens.path}
							path={screens.path}
							element={<screens.component />}
						/>
					)
				})}
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default Router