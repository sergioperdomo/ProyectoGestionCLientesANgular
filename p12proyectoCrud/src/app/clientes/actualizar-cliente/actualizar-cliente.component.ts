import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent implements OnInit {

  cif: string;


  constructor(private route: ActivatedRoute, private clienteService: ClientesService){}

  ngOnInit(): void {
    this.cif = this.route.snapshot.params['cif'];
    this.clienteService.getCliente(this.cif)
                        .subscribe({
                          next: (res: any) => {
                            // this.cif = res;
                            console.log(res);
                          },
                          error: (err: any) => {
                            console.log(err);}
                        })
  }

}
