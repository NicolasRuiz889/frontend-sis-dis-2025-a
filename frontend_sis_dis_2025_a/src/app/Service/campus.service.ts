import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../Modelo/Campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/campuses';

  getCampuses(){
    return this.http.get<Campus[]>(this.Url);
  }
  
  createCampus(campus:Campus){
    return this.http.post<Campus>(this.Url,campus);

  }

  getCampusId(id:number){
    return this.http.get<Campus>(this.Url+"/"+id);

  }
  updateCampus(campus:Campus){
    return this.http.put<Campus>(this.Url+"/"+campus.id,campus);
  }

  deleteCampus(campus:Campus){
    return this.http.delete<Campus>(this.Url+"/"+campus.id);
  }
}
