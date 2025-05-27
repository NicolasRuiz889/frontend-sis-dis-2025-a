import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassOrientation } from '../Modelo/ClassOrientation';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClassOrientationService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/class-orientations';

  getClassOrientations(){
    return this.http.get<ClassOrientation[]>(this.baseUrl);
  }

  createClassOrientation(ClassOrientationDto: any){
    return this.http.post<ClassOrientation>(this.baseUrl,ClassOrientationDto);
  }

  getClassOrientationId(id:number){
    return this.http.get<ClassOrientation>(this.baseUrl+"/"+id);
  }
  updateClassOrientation(classOrientation:ClassOrientation){
    return this.http.put<ClassOrientation>(this.baseUrl+"/"+classOrientation.id,classOrientation);
  }
  deleteClassOrientation(classOrientation:ClassOrientation){
    return this.http.delete<ClassOrientation>(this.baseUrl+"/"+classOrientation.id);
  }
}
