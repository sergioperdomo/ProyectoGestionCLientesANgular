import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientesService } from './../../servicios/clientes.service';
@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit {

  // No inicializamos nuestra variable
  form: FormGroup;

  constructor(private clientesService :ClientesService, private router: Router){ }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    })
  }

  getValorJson(){
    return JSON.stringify(this.form.value);
  }

  enviarCliente(): void {
    this.clientesService.postClientes(this.form.value)
                        .subscribe({
                          next: (res: any) => {
                            // Navegación programatica
                            this.router.navigate(['/clientes']);
                          },
                          error: (err: any) => {
                            console.log(err);
                          }
                        })
  }
}
