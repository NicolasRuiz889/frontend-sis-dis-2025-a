import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaExportService {

  constructor(private http:HttpClient) { }


  Url = 'http://localhost:9000/agendaprofesoral/api/export/agenda-profesor';

  exportarAgenda(profesorId: number) {
    return this.http.get(`${this.Url}/${profesorId}`, {
      responseType: 'blob' // importante para recibir el archivo como Excel
    });
  }
}
