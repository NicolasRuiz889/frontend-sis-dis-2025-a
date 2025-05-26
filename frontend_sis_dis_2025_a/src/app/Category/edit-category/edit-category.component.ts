import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { Category } from '../../Modelo/Category';
import { CategoryService } from '../../Service/category.service';

@Component({
  standalone: true,
  selector: 'app-edit-category',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit {

  category : Category = new Category();
  constructor(private router:Router,
    private service:CategoryService
  ) {}

  ngOnInit(): void {
    this.editarCategory();
  }

  editarCategory() {
    const id = localStorage.getItem("id");
    if (id !== null) {
      const categoryId = Number(id);
      this.service.getCategoryId(categoryId)
        .subscribe(data => {
          this.category = data;
        });
    } else {
      console.error("ID no encontrado en localStorage.");
      // this.router.navigate(["listar"]); // <- opcional, redirige si no hay ID
    }
  }

  ActualizarCategory(category: Category): void {
    this.service.updateCategory(category).subscribe(() => {
      alert("Actualizado con éxito!");
      this.router.navigate(["listarcategory"]);
    });
  }

}
