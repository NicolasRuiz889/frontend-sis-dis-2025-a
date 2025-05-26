import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Modelo/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9000/agendaprofesoral/api/categories';

getCategories(){
      return this.http.get<Category[]>(this.Url);
    }
    
    createCategory(CategoryDto: any){
      return this.http.post<Category>(this.Url,CategoryDto);
  
    }
  
    getCategoryId(id:number){
      return this.http.get<Category>(this.Url+"/"+id);
  
    }
    updateCategory(category:Category){
      return this.http.put<Category>(this.Url+"/"+category.id,category);
    }
  
    deleteCategory(category:Category){
      return this.http.delete<Category>(this.Url+"/"+category.id);
    }


}
