import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { ActivityCatalog } from '../../Modelo/ActivityCatalog';
import { ActivityCatalogService } from '../../Service/activity-catalog.service';

@Component({
  standalone: true,
  selector: 'app-edit-activity-catalog',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-activity-catalog.component.html',
  styleUrl: './edit-activity-catalog.component.css'
})
export class EditActivityCatalogComponent implements OnInit {

  activityCatalog: ActivityCatalog = new ActivityCatalog();
  constructor(private router:Router,
    private service:ActivityCatalogService
  ) {}

  ngOnInit(): void {
    this.editarActivityCatalog();
  }

  editarActivityCatalog() {
    const id = localStorage.getItem("id");
    if (id !== null) {
      const activityCatalogId = Number(id);
      this.service.getActivityCatalogById(activityCatalogId)
        .subscribe(data => {
          this.activityCatalog = data;
        });
    } else {
      console.error("ID no encontrado en localStorage.");
      
    }
  }

  ActualizarActivityCatalog(activityCatalog: ActivityCatalog): void {
    this.service.updateActivityCatalog(activityCatalog).subscribe(() => {
      alert("Actualizado con éxito!");
      this.router.navigate(["listaractivitycatalog"]);
    });
  }

}
