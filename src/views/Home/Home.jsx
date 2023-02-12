import React, { useState, useEffect } from 'react';
import Card from '../../Components/card/Card';

const Home = () => {
	const [productos, setProductos] = useState([]);

	const getProducts = () => {
		try {
			fetch('https://dummyjson.com/products')
				.then((response) => response.json())
				.then((data) => setProductos(data.products));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				border: '1px solid blue',
			}}>
			{productos.map((prod) => {
				return (
					<Card
						title={prod.title}
						description={prod.description}
						category={prod.category}
						discountPercentage={prod.discountPercentage}
						images={prod.images}
						price={prod.price}
						rating={prod.rating}
						stock={prod.stock}
						thumbnail={prod.thumbnail}
					/>
				);
			})}
		</div>
	);
};

export default Home;
