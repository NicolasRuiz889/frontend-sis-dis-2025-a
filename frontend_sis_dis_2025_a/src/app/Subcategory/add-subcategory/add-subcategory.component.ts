import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../../Modelo/Category';
import { SubcategoryService } from '../../Service/subcategory.service';
import { CategoryService } from '../../Service/category.service';
import { Subcategory } from '../../Modelo/Subcategory';

@Component({
  standalone: true,
  selector: 'app-add-subcategory',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-subcategory.component.html',
  styleUrl: './add-subcategory.component.css'
})
export class AddSubcategoryComponent implements OnInit {

  subcategory: any = {
    name: '',
    description: '',
    status: false,
    categoryId: null
  };

  categories: Category[] = [];

  constructor(private router: Router,
    private service: SubcategoryService,
    private categoryService: CategoryService) { }
   
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  GuardarSubcategory(subcategory: Subcategory){
    if (!subcategory.name || !subcategory.description || !subcategory.categoryId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

  

    this.service.createSubcategory(subcategory).subscribe(data => {
      alert("Subcategoría creada con éxito!");
      this.router.navigate(["listarsubcategory"]);
    });
  }

}
