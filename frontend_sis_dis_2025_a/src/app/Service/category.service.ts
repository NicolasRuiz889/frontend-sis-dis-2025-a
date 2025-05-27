import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Modelo/Category';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl + '/categories';
  
  getCategories(){
    return this.http.get<Category[]>(this.baseUrl);
  }
  
  createCategory(CategoryDto: any){
    return this.http.post<Category>(this.baseUrl,CategoryDto);

  }

  getCategoryId(id:number){
    return this.http.get<Category>(this.baseUrl+"/"+id);

  }
  updateCategory(category:Category){
    return this.http.put<Category>(this.baseUrl+"/"+category.id,category);
  }

  deleteCategory(category:Category){
    return this.http.delete<Category>(this.baseUrl+"/"+category.id);
  }


}
