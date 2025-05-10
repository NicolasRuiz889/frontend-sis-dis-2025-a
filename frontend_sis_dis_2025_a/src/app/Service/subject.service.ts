import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../Modelo/Subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/subjects';

  getSubjects(){
        return this.http.get<Subject[]>(this.Url);
      }
      
      createSubject(SubjectDto: any){
        return this.http.post<Subject>(this.Url,SubjectDto);
    
      }
    
      getSubjectId(id:number){
        return this.http.get<Subject>(this.Url+"/"+id);
    
      }
      updateSubject(subject:Subject){
        return this.http.put<Subject>(this.Url+"/"+subject.id,subject);
      }
    
      deleteSubject(subject:Subject){
        return this.http.delete<Subject>(this.Url+"/"+subject.id);
      }
}
