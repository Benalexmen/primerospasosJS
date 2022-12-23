import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";
import { ProductoDetalles } from "./Productos/ProductoDetalles";
import { Sucursales } from "./Sucursales/Sucursales";
import { Contactanos } from "./Contactanos/Contactanos";
import { Galeria } from "./Galeria/Galeria";
import { Footer } from "./Footer/Footer";

export const Paginas = () => {
	return (
		<section>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/productos" element={<ProductosLista />} />
				<Route path="producto/:id" element={<ProductoDetalles />} />
				<Route path="/productos" element={<ProductosLista />} />
				<Route path="producto/:id" element={<ProductoDetalles />} />
				<Route path="/Contactanos" element={<Contactanos />} />
				<Route path="/Sucursales" element={<Sucursales />} />
				<Route path="/Galeria" element={<Galeria />} />
				<Route path="/Footer" element={<Footer />} />

			</Routes>
		</section>
	)
}

