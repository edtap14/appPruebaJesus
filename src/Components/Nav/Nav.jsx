import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
	return (
		<div className={style.divGeneral}>
			<p className={style.links}>Productos</p>
			<p className={style.links}>Busqueda</p>
		</div>
	);
};

export default Nav;
