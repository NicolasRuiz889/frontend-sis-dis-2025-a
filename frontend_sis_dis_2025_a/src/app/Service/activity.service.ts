import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityDto } from '../Modelo/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

   Url = 'http://localhost:9000/agendaprofesoral/api/activities';

   getActivity(){
         return this.http.get<ActivityDto[]>(this.Url);
       }
       
       createActivity(ActivityDto: any){
         return this.http.post<ActivityDto>(this.Url,ActivityDto);
     
       }
     
       getActivityById(id:number){
         return this.http.get<ActivityDto>(this.Url+"/"+id);
     
       }
       updateActivity(activity:ActivityDto){
         return this.http.put<ActivityDto>(this.Url+"/"+activity.id,activity);
       }
     
       deleteActivity(activity:ActivityDto){
         return this.http.delete<ActivityDto>(this.Url+"/"+activity.id);
       }
}
