import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivityDto } from '../../Modelo/Activity';
import { ActivityService } from '../../Service/activity.service';

@Component({
  standalone: true,
  selector: 'app-listar-activity',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-activity.component.html',
  styleUrl: './listar-activity.component.css'
})
export class ListarActivityComponent implements OnInit {

  activity: ActivityDto[] = [];

  constructor(private router: Router,
    private service:ActivityService
  ) { }

  ngOnInit(): void {
    this.service.getActivity().subscribe(data => {
      this.activity = data;
    }, error => {
      console.error('Error al cargar las actividades', error);
    });
  }

  editarActivity(activity: ActivityDto): void {
    if (activity.id != null) {
      localStorage.setItem("id", activity.id.toString());
      this.router.navigate(["editactivity"]);
    } else {
      alert("La actividad no tiene un ID definido. No se puede editar.");
      console.warn("Actividad sin ID:", activity);
    }
  }

  deleteActivity(activity: ActivityDto) {
    this.service.deleteActivity(activity)
      .subscribe(data => {
        this.activity = this.activity.filter(f => f !== activity);
        alert("Actividad eliminada...");
      }, error => {
        console.error('Error al eliminar la actividad', error);
      });
  }

}
