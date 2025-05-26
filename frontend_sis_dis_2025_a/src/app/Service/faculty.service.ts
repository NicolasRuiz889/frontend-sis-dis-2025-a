import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from '../Modelo/Faculty';


@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/faculties';

  getFaculties(){
    return this.http.get<Faculty[]>(this.Url);
  }
  
  createFaculy(FacultyDto: any){
    return this.http.post<Faculty>(this.Url,FacultyDto);

  }

  getFacultyId(id:number){
    return this.http.get<Faculty>(this.Url+"/"+id);

  }
  updateFaculty(faculty:Faculty){
    return this.http.put<Faculty>(this.Url+"/"+faculty.id,faculty);
  }

  deleteFaculty(faculty:Faculty){
    return this.http.delete<Faculty>(this.Url+"/"+faculty.id);
  }

}
