import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../Modelo/Campus';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/campuses';

  getCampuses(){
    return this.http.get<Campus[]>(this.baseUrl);
  }
  
  createCampus(campus:Campus){
    return this.http.post<Campus>(this.baseUrl,campus);

  }

  getCampusId(id:number){
    return this.http.get<Campus>(this.baseUrl+"/"+id);

  }
  updateCampus(campus:Campus){
    return this.http.put<Campus>(this.baseUrl+"/"+campus.id,campus);
  }

  deleteCampus(campus:Campus){
    return this.http.delete<Campus>(this.baseUrl+"/"+campus.id);
  }
}
