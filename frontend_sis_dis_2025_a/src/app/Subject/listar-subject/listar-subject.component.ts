import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../Service/subject.service';
import { Subject } from '../../Modelo/Subject';

@Component({
  standalone: true,
  selector: 'app-listar-subject',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-subject.component.html',
  styleUrl: './listar-subject.component.css'
})
export class ListarSubjectComponent implements OnInit{

  subjects:Subject[] = [];
  constructor(private service:SubjectService, private router:Router){}

  ngOnInit(){
    this.service.getSubjects()
    .subscribe(data=>{
      this.subjects=data;
    },
    (error) => {
      console.error('Error al cargar las asignaturas', error);
    });


  }
  editarSubject(subject:Subject):void{
    if (subject.id != null) {
      localStorage.setItem("id", subject.id.toString());
      this.router.navigate(["editsubject"]);
    } else {
      alert("La Asignatura no tiene un ID definido. No se puede editar.");
      console.warn("Asignatura sin ID:", subject);
    }
  } 

  deleteSubject(subject:Subject){
    this.service.deleteSubject(subject)
    .subscribe(data=>{
      this.subjects=this.subjects.filter(f=>f!==subject);
      alert("Asignatura eliminada...");
    })
    
  }
}
