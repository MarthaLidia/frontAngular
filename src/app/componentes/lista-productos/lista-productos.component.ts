import { Component,OnInit } from '@angular/core';
import { ProductosService, Producto } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getAll().subscribe((data) => {
      this.productos = data;
    });
  }
}
