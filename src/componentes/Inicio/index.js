import React from 'react'
import Portada from "../../imagenes/inicio.jpg";
import { Link } from "react-router-dom";
import MerchInicio from "../../imagenes/MerchPortada.png";
import Ubicaciones from "../../imagenes/Ubicaciones.jpg";
import Camisas from "../../imagenes/Camisas.jpg"
import Gorras from "../../imagenes/Gorras.jpg"

export const Inicio = () => {
	return (
		<div className="inicio">
			<Link to="/">
				<h1 className="title">Inicio</h1>
			<img src={MerchInicio} alt="inicio" />
			</Link>
			<br />

			<Link to="productos">
				<h1 className="title">Tienda</h1>
			<img src={Camisas} alt="inicio" />
			</Link>
			<br />

			<Link to="galeria">
				<h1 className="title">Galería</h1>
			<img src={Gorras} alt="inicio" />
			</Link>
			<br />

			<Link to="sucursales">
				<h1 className="title">Sucursales</h1>
			<img src={Ubicaciones} alt="inicio" />
			</Link>
			
		</div>
	)
}