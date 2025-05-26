import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActivityCatalog } from '../../Modelo/ActivityCatalog';
import { ActivityCatalogService } from '../../Service/activity-catalog.service';

@Component({
  standalone: true,
  selector: 'app-listar-activity-catalog',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-activity-catalog.component.html',
  styleUrl: './listar-activity-catalog.component.css'
})
export class ListarActivityCatalogComponent implements OnInit{

  activitiescatalogs: ActivityCatalog[] = [];
  constructor(
    private router:Router,
    private service:ActivityCatalogService
  ){}

  ngOnInit(){
    this.service.getActivityCatalog()
    .subscribe(data=>{
      this.activitiescatalogs=data;
    },
    (error) => {
      console.error('Error al cargar los catalogos de actividades', error);
    });
  }

  editarActivityCatalog(activityCatalog:ActivityCatalog):void{
    if (activityCatalog.id != null) {
      localStorage.setItem("id", activityCatalog.id.toString());
      this.router.navigate(["editactivitycatalog"]);
    } else {
      alert("El catalogo de actividad no tiene un ID definido. No se puede editar.");
      console.warn("Catalogo de actividad sin ID:", activityCatalog);
    }
  }

  deleteActivityCatalog(activityCatalog:ActivityCatalog){
    this.service.deleteActivityCatalog(activityCatalog)
    .subscribe(data=>{
      this.activitiescatalogs=this.activitiescatalogs.filter(f=>f!==activityCatalog);
      alert("Catalogo de actividad eliminado...");
    })
  }

}
