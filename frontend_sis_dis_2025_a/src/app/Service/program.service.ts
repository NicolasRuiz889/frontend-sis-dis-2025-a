import { Injectable } from '@angular/core';
import { Program } from '../Modelo/Program';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/programs';

  getPrograms(){
    return this.http.get<Program[]>(this.baseUrl);
  }
  
  createProgram(ProgramDto: any){
    return this.http.post<Program>(this.baseUrl,ProgramDto);

  }

  getProgramId(id:number){
    return this.http.get<Program>(this.baseUrl+"/"+id);

  }
  updateProgram(program:Program){
    return this.http.put<Program>(this.baseUrl+"/"+program.id,program);
  }

  deleteProgram(program:Program){
    return this.http.delete<Program>(this.baseUrl+"/"+program.id);
  }
}
