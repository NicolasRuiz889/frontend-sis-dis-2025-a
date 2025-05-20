import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subcategory } from '../../Modelo/Subcategory';
import { SubcategoryService } from '../../Service/subcategory.service';

@Component({
  standalone: true,
  selector: 'app-listar-subcategory',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-subcategory.component.html',
  styleUrl: './listar-subcategory.component.css'
})
export class ListarSubcategoryComponent implements OnInit {

  subcategories: Subcategory[] = [];
  constructor(
    private router: Router, 
    private service: SubcategoryService
  ) { }


  ngOnInit() {
    this.service.getSubcategory()
      .subscribe(data => {
        this.subcategories = data;
      },
        (error) => {
          console.error('Error al cargar las subcategorías', error);
        });
  }

  editarSubcategory(subcategory: Subcategory): void {
    if (subcategory.id != null) {
      localStorage.setItem("id", subcategory.id.toString());
      this.router.navigate(["editsubcategory"]);
    } else {
      alert("La subcategoría no tiene un ID definido. No se puede editar.");
      console.warn("Subcategoría sin ID:", subcategory);
    }
  }

  deleteSubcategory(subcategory: Subcategory) {
    this.service.deleteSubcategory(subcategory)
      .subscribe(data => {
        this.subcategories = this.subcategories.filter(f => f !== subcategory);
        alert("Subcategoría eliminada...");
      })
  }



}
