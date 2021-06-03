import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) { }

  graficoProyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/informe/estado');
  }//obtenerFicheros

}