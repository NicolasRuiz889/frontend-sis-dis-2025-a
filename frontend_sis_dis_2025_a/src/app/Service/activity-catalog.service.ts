import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityDto } from '../Modelo/Activity';
import { ActivityCatalog } from '../Modelo/ActivityCatalog';

@Injectable({
  providedIn: 'root'
})
export class ActivityCatalogService {

  constructor(private http:HttpClient) { }


  Url = 'http://localhost:9000/agendaprofesoral/api/activitiescatalogs';

   getActivityCatalog(){
         return this.http.get<ActivityCatalog[]>(this.Url);
       }
       
       createActivityCatalog(ActivityCatalogDto: any){
         return this.http.post<ActivityCatalog>(this.Url,ActivityCatalogDto);
     
       }
     
       getActivityCatalogById(id:number){
         return this.http.get<ActivityCatalog>(this.Url+"/"+id);
     
       }
       updateActivityCatalog(activityCatalog:ActivityCatalog){
         return this.http.put<ActivityCatalog>(this.Url+"/"+activityCatalog.id,activityCatalog);
       }
     
       deleteActivityCatalog(activityCatalog:ActivityCatalog){
         return this.http.delete<ActivityCatalog>(this.Url+"/"+activityCatalog.id);
       }
}
