import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AgendaExportService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/export/agenda-profesor'

  exportarAgenda(profesorId: number) {
    return this.http.get(`${this.baseUrl}/${profesorId}`, {
      responseType: 'blob' // importante para recibir el archivo como Excel
    });
  }
}
