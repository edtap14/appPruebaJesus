import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './views/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/nosotros'
					element={
						<p>
							Esta pagina deber incluir una descripcion de
							nosotros
						</p>
					}
				/>
				<Route path='/*' element={<p>Pagina no encontrada</p>} />
			</Routes>
		</div>
	);
}

export default App;
