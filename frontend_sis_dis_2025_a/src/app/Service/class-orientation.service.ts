import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassOrientation } from '../Modelo/ClassOrientation';

@Injectable({
  providedIn: 'root'
})
export class ClassOrientationService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/class-orientations';

  getClassOrientations(){
    return this.http.get<ClassOrientation[]>(this.Url);
  }

  createClassOrientation(ClassOrientationDto: any){
    return this.http.post<ClassOrientation>(this.Url,ClassOrientationDto);
  }

  getClassOrientationId(id:number){
    return this.http.get<ClassOrientation>(this.Url+"/"+id);
  }
  updateClassOrientation(classOrientation:ClassOrientation){
    return this.http.put<ClassOrientation>(this.Url+"/"+classOrientation.id,classOrientation);
  }
  deleteClassOrientation(classOrientation:ClassOrientation){
    return this.http.delete<ClassOrientation>(this.Url+"/"+classOrientation.id);
  }
}
