import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../Service/category.service';
import { Category } from '../../Modelo/Category';

@Component({
  standalone: true,
  selector: 'app-add-category',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{
  category: any = {
    name: '',
    description: '',
    status: false
  };

  constructor(private router: Router,
    private service:CategoryService
  ) {}

  ngOnInit(): void {}

  GuardarCategory(category: Category) {
    if (!category.name || !category.description) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    this.service.createCategory(category)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listarcategory"]);
      });
  }

}
