import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityDto } from '../Modelo/Activity';
import { ActivityCatalog } from '../Modelo/ActivityCatalog';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ActivityCatalogService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/activitiescatalogs';

  getActivityCatalog(){
    return this.http.get<ActivityCatalog[]>(this.baseUrl);
  }
  
  createActivityCatalog(ActivityCatalogDto: any){
    return this.http.post<ActivityCatalog>(this.baseUrl,ActivityCatalogDto);

  }

  getActivityCatalogById(id:number){
    return this.http.get<ActivityCatalog>(this.baseUrl+"/"+id);

  }
  updateActivityCatalog(activityCatalog:ActivityCatalog){
    return this.http.put<ActivityCatalog>(this.baseUrl+"/"+activityCatalog.id,activityCatalog);
  }

  deleteActivityCatalog(activityCatalog:ActivityCatalog){
    return this.http.delete<ActivityCatalog>(this.baseUrl+"/"+activityCatalog.id);
  }
}
