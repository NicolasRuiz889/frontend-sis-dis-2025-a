import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityDto } from '../Modelo/Activity';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/activities';

  getActivity(){
    return this.http.get<ActivityDto[]>(this.baseUrl);
  }
  
  createActivity(ActivityDto: any){
    return this.http.post<ActivityDto>(this.baseUrl,ActivityDto);

  }

  getActivityById(id:number){
    return this.http.get<ActivityDto>(this.baseUrl+"/"+id);

  }
  updateActivity(activity:ActivityDto){
    return this.http.put<ActivityDto>(this.baseUrl+"/"+activity.id,activity);
  }

  deleteActivity(activity:ActivityDto){
    return this.http.delete<ActivityDto>(this.baseUrl+"/"+activity.id);
  }
}
