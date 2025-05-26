import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../../Modelo/Category';
import { CategoryService } from '../../Service/category.service';

@Component({
  standalone: true,
  selector: 'app-listar-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-category.component.html',
  styleUrl: './listar-category.component.css'
})
export class ListarCategoryComponent implements OnInit{

  categories:Category[] = [];
  constructor(private router:Router,
    private service:CategoryService
  ){}

  ngOnInit(){
    this.service.getCategories()
    .subscribe(data=>{
      this.categories=data;
    },
    (error) => {
      console.error('Error al cargar las categorias', error);
    });
  }

  editarCategory(category:Category):void{
    if (category.id != null) {
      localStorage.setItem("id", category.id.toString());
      this.router.navigate(["editcategory"]);
    } else {
      alert("La categoria no tiene un ID definido. No se puede editar.");
      console.warn("Categoria sin ID:", category);
    }
  }

  deleteCategory(category:Category){
    this.service.deleteCategory(category)
    .subscribe(data=>{
      this.categories=this.categories.filter(f=>f!==category);
      alert("Categoria eliminada...");
    })
  }

}
