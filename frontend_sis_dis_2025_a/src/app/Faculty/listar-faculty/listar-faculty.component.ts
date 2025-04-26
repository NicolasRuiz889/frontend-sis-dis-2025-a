import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Faculty } from '../../Modelo/Faculty';
import { FacultyService } from '../../Service/faculty.service';

@Component({
  standalone: true,
  selector: 'app-listar-faculty',
  imports: [CommonModule],
  templateUrl: './listar-faculty.component.html',
  styleUrl: './listar-faculty.component.css'
})
export class ListarFacultyComponent implements OnInit{


  faculties:Faculty[] = [];
  constructor(private service:FacultyService, private router:Router){}

  ngOnInit(){
    this.service.getFaculties()
    .subscribe(data=>{
      this.faculties=data;
    },
    (error) => {
      console.error('Error al cargar las facultades', error);
    });


  }
  editarFaculty(faculty:Faculty):void{
    if (faculty.id != null) {
      localStorage.setItem("id", faculty.id.toString());
      this.router.navigate(["editfaculty"]);
    } else {
      alert("El campus no tiene un ID definido. No se puede editar.");
      console.warn("Campus sin ID:", faculty);
    }

  }

  deleteFaculty(faculty:Faculty){
    this.service.deleteFaculty(faculty)
    .subscribe(data=>{
      this.faculties=this.faculties.filter(f=>f!==faculty);
      alert("Sede eliminada...");
    })


  }

}
