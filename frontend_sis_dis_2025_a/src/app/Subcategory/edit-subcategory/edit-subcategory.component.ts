import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { Subcategory } from '../../Modelo/Subcategory';
import { Category } from '../../Modelo/Category';
import { SubcategoryService } from '../../Service/subcategory.service';
import { CategoryService } from '../../Service/category.service';


@Component({
  standalone: true,
  selector: 'app-edit-subcategory',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-subcategory.component.html',
  styleUrl: './edit-subcategory.component.css'
})
export class EditSubcategoryComponent implements OnInit{

  subcategory: Subcategory = new Subcategory();
  categories: Category[] = [];
  constructor(private router: Router, 
    private service: SubcategoryService, 
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.editSubcategory();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
        (data) => {
          this.categories = data;  // Asignar la lista de sedes
        },
        (error) => {
          console.error('Error al cargar las categorias', error);
        }
      );
  }

  editSubcategory() {
    const id = localStorage.getItem("id");
    if (id !== null) {
      const subcategoryId = Number(id);
      this.service.getSubcategoryById(subcategoryId)
        .subscribe(data => {
          this.subcategory = data;
        });
    } else {
      console.error("ID no encontrado en localStorage.");
      
    }
  }

  ActualizarSubcategory(subcategory: Subcategory): void {
    this.service.updateSubcategory(subcategory).subscribe(() => {
      alert("Actualizado con éxito!");
      this.router.navigate(["listarsubcategory"]);
    });
  }


}
