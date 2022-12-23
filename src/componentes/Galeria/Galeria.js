import React, {useContext} from 'react'
import { DataContext } from "../../context/DataProvider";
import Img01 from "../../imagenes/img01.jpg"
import Img02 from "../../imagenes/img02.jpg"
import Img03 from "../../imagenes/img03.jpg"
import Img04 from "../../imagenes/img04.jpg"
import Img05 from "../../imagenes/img05.jpg"
import Img06 from "../../imagenes/img06.jpg"
import Img07 from "../../imagenes/img07.jpg"
import Img08 from "../../imagenes/img08.jpg"
import Img09 from "../../imagenes/img09.jpg"
import Img10 from "../../imagenes/img10.jpg"



export const Galeria = () => {
	return (
		<>
		<div className="galeria">
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
			<table id="tablaimagenes" width="150" height="150">
	
		
			<tr>
				<td><img src={Img01} alt="inicio"  width="300" /></td>
				<td><img src={Img02} alt="inicio"  width="300" /></td>
				<td><img src={Img03} alt="inicio"  width="300" /></td>
				
			</tr>
			<tr>
				<td><img src={Img04} alt="inicio"  width="300" /></td>
				<td><img src={Img05} alt="inicio"  width="300" /></td>
				<td><img src={Img06} alt="inicio"  width="300" /></td>
			</tr>
				
			<tr>
				<td><img src={Img07} alt="inicio"  width="300" /></td>
				<td><img src={Img08} alt="inicio"  width="300" /></td>
				<td><img src={Img09} alt="inicio"  width="300" height="375" /></td>
				
			</tr>
			</table>
		</div>
		</>
	)
}

