import { Component, OnInit } from '@angular/core';
import { ClassOrientationService } from '../../Service/class-orientation.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassOrientation } from '../../Modelo/ClassOrientation';
import { ProgramService } from '../../Service/program.service';
import { ListarActivityComponent } from "../../Activity/listar-activity/listar-activity.component";

@Component({
  standalone: true,
  selector: 'app-listar-class-orientation',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-class-orientation.component.html',
  styleUrl: './listar-class-orientation.component.css'
})
export class ListarClassOrientationComponent implements OnInit {

  classOrientations: ClassOrientation[] = [];

  constructor(private service:ClassOrientationService, private router:Router) {}

  ngOnInit() {
      this.service.getClassOrientations()
      .subscribe(data => {
        this.classOrientations = data;
      },
      (error) => {
        console.error('Error al cargar las orientaciones de clase', error);
      });
  }

  editarClassOrientation(classOrientation: ClassOrientation): void {
    if (classOrientation.id != null) {
      localStorage.setItem("id", classOrientation.id.toString());
      this.router.navigate(["editclassorientation"]);
    } else {
      alert("La orientación de clase no tiene un ID definido. No se puede editar.");
      console.warn("Orientación de clase sin ID:", classOrientation);
    }
  }

  deleteClassOrientation(classOrientation: ClassOrientation) {
    this.service.deleteClassOrientation(classOrientation)
    .subscribe(data => {
      this.classOrientations = this.classOrientations.filter(f => f !== classOrientation);
      alert("Orientación de clase eliminada...");
    })


  } 

}
