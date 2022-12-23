import React, {useContext} from 'react'
import { DataContext } from "../../context/DataProvider"; 
import CON from "../../imagenes/contactanos.jpeg"
export const Contactanos = () => {

	
	return (
		<>
	
	<div className="con">
	<br />
	<br />
	<br />
	<br />

	

	

	<table id="tablacontactanos" width="1000" height="150">
	<tr> 
	
	<td>
	<h2>¿Quieres hacer tus T-shirt con nosotros?</h2><br />
	<h2 id= "contactanos">Comunicate con nosotros en <a target="_blank" href="https://api.whatsapp.com/send?phone=50360261779&text=%C2%A1Hola!%20Quisiera%20cotizar%20algunos%20productos%20con%20ustedes%20%F0%9F%99%8F">WhatssAp</a></h2><br />
	<h2 id= "contactanos">O siguenos en <a target="_blank" href="https://www.instagram.com/merchstudio/">Instagram</a></h2>
	</td>

	<td>
	<img id="contactanos" src={CON} alt="inicio" width="500" height="500"/>
	</td>
	
	</tr>
	</table>
</div>



	</>
	)
}
