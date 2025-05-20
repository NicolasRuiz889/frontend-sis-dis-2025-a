import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from '../Modelo/Subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/subcategories';
  
    
      getSubcategory(){
        return this.http.get<Subcategory[]>(this.Url);
      }
      
      createSubcategory(SubcategoryDto: any){
        return this.http.post<Subcategory>(this.Url,SubcategoryDto);
    
      }
    
      getSubcategoryById(id:number){
        return this.http.get<Subcategory>(this.Url+"/"+id);
    
      }
      updateSubcategory(subcategory:Subcategory){
        return this.http.put<Subcategory>(this.Url+"/"+subcategory.id,subcategory);
      }
    
      deleteSubcategory(subcategory:Subcategory){
        return this.http.delete<Subcategory>(this.Url+"/"+subcategory.id);
      }
}
