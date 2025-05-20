import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActivityCatalogService } from '../../Service/activity-catalog.service';

@Component({
  standalone: true,
  selector: 'app-add-activity-catalog',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-activity-catalog.component.html',
  styleUrl: './add-activity-catalog.component.css'
})
export class AddActivityCatalogComponent implements OnInit{

  activityCatalog: any ={
    name:''
  };

  constructor(private router: Router,
    private service:ActivityCatalogService
  ) {}

  ngOnInit(): void {
  }

  GuardarActivityCatalog(activityCatalog: any) {
    if (!activityCatalog.name) {
      alert("El campo nombre es obligatorio.");
      return;
    }

    this.service.createActivityCatalog(activityCatalog)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listaractivitycatalog"]);
      });
  }
}
