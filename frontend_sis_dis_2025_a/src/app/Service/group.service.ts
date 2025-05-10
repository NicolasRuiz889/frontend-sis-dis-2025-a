import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../Modelo/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }


  Url = 'http://localhost:9000/agendaprofesoral/api/groups';
  
    getGroups(){
          return this.http.get<Group[]>(this.Url);
        }
        
        createGroup(GroupDto: any){
          return this.http.post<Group>(this.Url,GroupDto);
      
        }
      
        getGroupId(id:number){
          return this.http.get<Group>(this.Url+"/"+id);
      
        }
        updateGroup(group:Group){
          return this.http.put<Group>(this.Url+"/"+group.id,group);
        }
      
        deleteGroup(group:Group){
          return this.http.delete<Group>(this.Url+"/"+group.id);
        }
}
