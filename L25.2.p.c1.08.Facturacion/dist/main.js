/**
FACTURACIÓN 
Por cada artículo vendido se conoce su nombre, precio y cantidad. De desea conocer: a) 
subtotal de cada artículo, b) subtotal de la factura, c) 16% de IVA y total de la factura al aplicarlo. 
Al ser consultada por la forma como desean que se presente la salida, el peaje cardenal 
suministra el siguiente formato, sobre la base de los siguientes datos: 
(nombre, precio, cantidad) 
(Harina, 40, 2) (Arroz, 45, 4) (Azúcar, 45, 2) (Pasta, 47.5, 3) */
import Cl_producto from "./Cl_producto.js";
import Cl_factura from "./Cl_factura.js";
const producto1 = new Cl_producto ("Harina", 40, 2);
const producto2 = new Cl_producto("Arroz", 45, 4);
const producto3 = new Cl_producto("Azucar", 45, 2);
const producto4 = new Cl_producto("Pasta", 47.5, 3);

const factura = new Cl_factura();
factura.procesarProducto(producto1);
factura.procesarProducto(producto2);
factura.procesarProducto(producto3);
empresa.procesarProducto(producto4);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `Sub total de la factura:${factura.subTotalF()}Bs`
 + `<br>Monto a pagar por IVA 16%:${factura.iva()}Bs`
        + `<br>Total de la factura:${factura.totalFactura()}Bs`;
    ;
}
else
    console.error("No se pudo encontrar el elemento con el id 'salida'.");