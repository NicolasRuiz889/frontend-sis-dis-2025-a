import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../Modelo/Group';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/groups';

  getGroups(){
    return this.http.get<Group[]>(this.baseUrl);
  }
  
  createGroup(GroupDto: any){
    return this.http.post<Group>(this.baseUrl,GroupDto);

  }

  getGroupId(id:number){
    return this.http.get<Group>(this.baseUrl+"/"+id);

  }
  updateGroup(group:Group){
    return this.http.put<Group>(this.baseUrl+"/"+group.id,group);
  }

  deleteGroup(group:Group){
    return this.http.delete<Group>(this.baseUrl+"/"+group.id);
  }
}
