import React, {useContext} from 'react'
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
import Facebook from "../../imagenes/Facebook.png";
import Instagram from "../../imagenes/Instagram.png";
import Twiter from "../../imagenes/Twitter.png";

export const Footer = () => {
	return (
		<>
		<div id="pie">
		<footer>
		
			<div id="redes">
			<a target="_blank" href="https://es-la.facebook.com/merchstudio/">
				<img src={Facebook} alt="logo" width="50" height="50"/>
			</a>
			<a target="_blank" href="https://www.instagram.com/merchstudio/?hl=es">
			<img src={Instagram} alt="logo" width="50" height="50"/>
			</a>
			<a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">
			<img src={Twiter} alt="logo" width="50" height="50"/>
			</a>
			</div>
			<div id="notas" />
			<p>Este es un ejemplo creado para la catedra de Front End Itexsal 2022</p>


			</footer>
		</div>
		</>
	)
}

