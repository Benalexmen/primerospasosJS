import React, {useContext} from 'react'
import Nike from "../../imagenes/Logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const Header = () => {
	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito] = value.carrito

	const toogleMenu = () =>{
		setMenu(!menu)
	}

	return (
		<header>
			<Link to="/">
				<div className="logo">
					<img src={Nike} alt="logo" width="150"/>
				</div>
			</Link>
			<ul>
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/productos">Tienda</Link>
				</li>
				<li>
					<Link to="/galeria">Galería</Link>
				</li>
				<li>
					<Link to="/contactanos">Contactanos</Link>
				</li>
				<li>
					<Link to="/sucursales">Sucursales</Link>
				</li>	
			</ul>
			<div className="cart" onClick={toogleMenu}>
				<box-icon name="cart"></box-icon>
				<span className="item__total">{carrito.length}</span>
			</div>
		</header>
	)
}