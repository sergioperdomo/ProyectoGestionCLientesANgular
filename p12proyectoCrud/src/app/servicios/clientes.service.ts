import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endPointClientes: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(this.endPointClientes)
                    .pipe(
                      map((data: any) => {
                        return data;
                      })
                    )
  }

  // Método post
  postClientes(cliente){
    return this.http.post(this.endPointClientes, cliente)
                    .pipe(
                      map((data: any) => {
                        return data;
                      })
                    )
  }
}
