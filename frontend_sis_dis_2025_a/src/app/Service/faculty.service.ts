import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from '../Modelo/Faculty';
import { environment } from '../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/faculties';

  getFaculties(){
    return this.http.get<Faculty[]>(this.baseUrl);
  }
  
  createFaculy(FacultyDto: any){
    return this.http.post<Faculty>(this.baseUrl,FacultyDto);

  }

  getFacultyId(id:number){
    return this.http.get<Faculty>(this.baseUrl+"/"+id);

  }
  updateFaculty(faculty:Faculty){
    return this.http.put<Faculty>(this.baseUrl+"/"+faculty.id,faculty);
  }

  deleteFaculty(faculty:Faculty){
    return this.http.delete<Faculty>(this.baseUrl+"/"+faculty.id);
  }

}
