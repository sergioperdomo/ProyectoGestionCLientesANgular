import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent implements OnInit {

  cif: string;
  form: FormGroup;
  cliente: any;


  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClientesService){}

  ngOnInit(): void {
    this.cif = this.route.snapshot.params['cif'];
    this.clienteService.getCliente(this.cif).subscribe((cliente) => {
      this.form.patchValue(cliente);
    })
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    })
  }

  modificarCliente(){
    this.clienteService.putClientes(this.form.value, this.cif)
                        .subscribe({
                          next: () => {
                            this.router.navigate(['/clientes']);
                          },
                          error: (err: any) => {
                            console.log(err);}
                        })
  }

}
