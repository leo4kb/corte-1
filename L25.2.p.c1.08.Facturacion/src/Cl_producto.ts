export default class Cl_producto {
  private _nombre: string = "";
  private _precio: number = 0;
 private _cantidad: number = 0;
  constructor(nombre: string, precio: number,cantidad: number) {
    this.nombre = nombre;
    this.precio = precio;
this.cantidad = cantidad;
  }
  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }
  set precio(p: number) {
    this._nota = +p;
  }
  get precio(): number {
    return this._precio;
  }
set cantidad(c: cantidad) {
    this._cantidad = +c;
  }
  get cantidad(): number {
    return this._cantidad;
  }

subTotalProducto(){
  return this.precio * this.cantidad;}}