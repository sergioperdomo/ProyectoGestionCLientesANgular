import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent implements OnInit{

  clientes: any;

  constructor (private clienteService: ClientesService) { }

  ngOnInit(): void {
      this.clienteService.getClientes()
                          .subscribe({
                            next: (clientes: any) => {
                              this.clientes = clientes;
                            },
                            error: (err: any) => {
                              console.log(err);}
                          })
                        }
}

