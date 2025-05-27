import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../Modelo/Subject';
import { environment } from '../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/subjects';

  getSubjects(){
    return this.http.get<Subject[]>(this.baseUrl);
  }
  
  createSubject(SubjectDto: any){
    return this.http.post<Subject>(this.baseUrl,SubjectDto);

  }

  getSubjectId(id:number){
    return this.http.get<Subject>(this.baseUrl+"/"+id);

  }
  updateSubject(subject:Subject){
    return this.http.put<Subject>(this.baseUrl+"/"+subject.id,subject);
  }

  deleteSubject(subject:Subject){
    return this.http.delete<Subject>(this.baseUrl+"/"+subject.id);
  }
}
