import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActivityDto } from '../../Modelo/Activity';
import { ActivityCatalog } from '../../Modelo/ActivityCatalog';
import { Subcategory } from '../../Modelo/Subcategory';
import { ActivityService } from '../../Service/activity.service';
import { ActivityCatalogService } from '../../Service/activity-catalog.service';
import { SubcategoryService } from '../../Service/subcategory.service';

@Component({
  standalone: true,
  selector: 'app-edit-activity',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-activity.component.html',
  styleUrl: './edit-activity.component.css'
})
export class EditActivityComponent implements OnInit {

  activity: ActivityDto = {
    activityCatalogId: 0,
    description: '',
    weeklyHours: 0,
    semesterHours: 0,
    status: false,
    subcategoryId: 0,
    product: []
  };

  newProduct = { name: '' };

  activityCatalog: ActivityCatalog[] = [];
  subcategory: Subcategory[] = [];

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private activityCatalogService: ActivityCatalogService,
    private subcategoryService: SubcategoryService,
  ) { }

  ngOnInit(): void {
    this.loadActivityCatalog();
    this.loadSubcategory();
    this.editActivity();
  }

  loadActivityCatalog(): void {
    this.activityCatalogService.getActivityCatalog().subscribe(data => {
      this.activityCatalog = data;
    });
  }

  loadSubcategory(): void {
    this.subcategoryService.getSubcategory().subscribe(data => {
      this.subcategory = data;
    });
  }

  editActivity(): void {
    let id = localStorage.getItem("id");
    if (id != null) {
      this.activityService.getActivityById(+id).subscribe(data => {
        this.activity = data;
      });
    } else {
      alert("Error: No se pudo obtener el ID de la actividad.");
      this.router.navigate(["agenda"]);
    }
  }


  ActualizarActivity(activity: ActivityDto): void {

     activity.semesterHours = this.calculatedSemesterHours;

    this.activityService.updateActivity(activity)
      .subscribe(() => {

        alert("Actividad actualizada correctamente.");
        this.router.navigate(["agenda"]);

      });

  }

  get calculatedSemesterHours(): number {
    const weekly = this.activity.weeklyHours;
    return weekly ? weekly * 16 : 0;
  }


  addProduct(): void {
    if (this.newProduct.name.trim() !== '') {
      this.activity.product.push({ name: this.newProduct.name });
      this.newProduct.name = '';
    }
  }

  removeProduct(index: number): void {
    this.activity.product.splice(index, 1);
  }
}
