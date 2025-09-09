export default class Cl_factura {
constructor(){
  this.acSubTotal = 0;
  }
  procesarProducto(p) {this.acSubTotal = this.acSubTotal + p.subTotalProducto();
     }
  
get subTotalF(){
  return this.acSubtotal;
}

get iva(){
return this.acSubTotal * 0.16;}

get totalFactura(){
  return this.iva() + this.acSubTotal;
}
}