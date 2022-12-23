import React, {useContext} from 'react'
import { DataContext } from "../../context/DataProvider";
import  GALERIA  from "../../imagenes/localgaleria.jpg";
import  METROCENTRO  from "../../imagenes/localmetro.jpg";
import  SANBENITO  from "../../imagenes/localsanbenito.jpg";
export const Sucursales = () => {

	
	return (
		<>
		<div className="sucursales">
		<h1 className="title">SUCURSALES</h1>
		<br />

		<a target="_blank" href="https://goo.gl/maps/ev3ZU7tLB8iZcj2AA">
		<h2 >Galerias: Primera etapa local N°22</h2>
		<br />
		<center><img id="localesimagenes" src= {GALERIA} alt="inicio"  width="600" /></center>
		</a>

		< br />
		<br />

		<a target="_blank" href="https://goo.gl/maps/VffSryvDQ1ykA3Gf6">
		<h2>Metro Centro: Octava etapa 3° nivel </h2>
		<br />
		<center><img id="localesimagenes" src= {METROCENTRO} alt="inicio" /></center>
		
		</a>

		< br />
		<br />

		<a target="_blank" href="https://goo.gl/maps/GwpiLWzSApUge45h8">
		<h2>San Benito: Avenida La Revolucion #159 a colonia San Benito </h2>
		<br />
		<center><img id="localesimagenes" src= {SANBENITO} alt="inicio" width="600" /></center>
		</a>




			</div>
		</>
	)
}