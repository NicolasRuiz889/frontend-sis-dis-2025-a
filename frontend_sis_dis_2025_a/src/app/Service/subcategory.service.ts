import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from '../Modelo/Subcategory';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/subcategories';

  getSubcategory(){
    return this.http.get<Subcategory[]>(this.baseUrl);
  }
  
  createSubcategory(SubcategoryDto: any){
    return this.http.post<Subcategory>(this.baseUrl,SubcategoryDto);

  }

  getSubcategoryById(id:number){
    return this.http.get<Subcategory>(this.baseUrl+"/"+id);

  }
  updateSubcategory(subcategory:Subcategory){
    return this.http.put<Subcategory>(this.baseUrl+"/"+subcategory.id,subcategory);
  }

  deleteSubcategory(subcategory:Subcategory){
    return this.http.delete<Subcategory>(this.baseUrl+"/"+subcategory.id);
  }
}
