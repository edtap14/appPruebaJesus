import React from 'react';
import style from './Card.module.css';

const Card = ({
	title,
	description,
	category,
	discountPercentage,
	images,
	price,
	rating,
	stock,
	thumbnail,
}) => {
	return (
		<div className={style.divCard}>
			<h2>
				Producto: <span>{title}</span>
			</h2>
			<img src={thumbnail} />
		</div>
	);
};

export default Card;
