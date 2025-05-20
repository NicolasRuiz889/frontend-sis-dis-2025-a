import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActivityDto, ProductDto } from '../../Modelo/Activity';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from '../../Modelo/Subcategory';
import { SubcategoryService } from '../../Service/subcategory.service';
import { ActivityService } from '../../Service/activity.service';
import { ActivityCatalog } from '../../Modelo/ActivityCatalog';
import { ActivityCatalogService } from '../../Service/activity-catalog.service';

@Component({
  standalone: true,
  selector: 'app-add-activity',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-activity.component.html',
  styleUrl: './add-activity.component.css'
})
export class AddActivityComponent implements OnInit {


  activity: ActivityDto = {
    activityCatalogId: 1,
    weeklyHours: 0,
    semesterHours: 0,
    description: '',
    product: [],
    status: true,
    subcategoryId: 1
  };

  newProduct: ProductDto = {
    name: ''
  };
  activityCatalog: ActivityCatalog[] = [];

  subcategories: Subcategory[] = [];

  constructor(private http: HttpClient,
    private router: Router,
    private service: ActivityService,
    private subCategoryService: SubcategoryService,
    private activityCatalogService: ActivityCatalogService
  ) { }


  ngOnInit(): void { 
    this.subCategoryService.getSubcategory().subscribe(data => {
    this.subcategories = data;
    
    });

    this.activityCatalogService.getActivityCatalog().subscribe(data => {
  this.activityCatalog = data;
});
  }

  addProduct(): void {
    if (this.newProduct.name.trim() !== '') {
      this.activity.product.push({ ...this.newProduct });
      this.newProduct.name = '';
    }
  }

  removeProduct(index: number): void {
    this.activity.product.splice(index, 1);
  }

  GuardarActivity(activity: ActivityDto) {

    activity.semesterHours = this.calculatedSemesterHours;
    if (!activity.activityCatalogId || !activity.weeklyHours ||  !activity.description || !activity.subcategoryId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    


   this.service.createActivity(activity)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listaractivity"]);
      });
  }

  get calculatedSemesterHours(): number {
    const weekly = this.activity.weeklyHours;
    return weekly ? weekly * 16 : 0;
  }
 


}
