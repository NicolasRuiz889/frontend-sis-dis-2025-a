import { Injectable } from '@angular/core';
import { Program } from '../Modelo/Program';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/programs';

  
    getPrograms(){
      return this.http.get<Program[]>(this.Url);
    }
    
    createProgram(ProgramDto: any){
      return this.http.post<Program>(this.Url,ProgramDto);
  
    }
  
    getProgramId(id:number){
      return this.http.get<Program>(this.Url+"/"+id);
  
    }
    updateProgram(program:Program){
      return this.http.put<Program>(this.Url+"/"+program.id,program);
    }
  
    deleteProgram(program:Program){
      return this.http.delete<Program>(this.Url+"/"+program.id);
    }
}
