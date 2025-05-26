import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Faculty } from '../../Modelo/Faculty';
import { Router, RouterModule } from '@angular/router';
import { FacultyService } from '../../Service/faculty.service';
import { Campus } from '../../Modelo/Campus';
import { CampusService } from '../../Service/campus.service';

@Component({
  selector: 'app-edit-faculty',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-faculty.component.html',
  styleUrl: './edit-faculty.component.css'
})
export class EditFacultyComponent implements OnInit{


  faculty :Faculty=new Faculty();
  campuses: Campus[] = [];
  constructor(
    private router:Router,
    private service:FacultyService,
    private campusService: CampusService){}

  ngOnInit(): void {
    this.loadCampuses();
    this.editarFaculty();
    
      
  }

  // Método para cargar las sedes desde la API
  loadCampuses(): void {
    this.campusService.getCampuses().subscribe(
      (data) => {
        this.campuses = data;  // Asignar la lista de sedes
      },
      (error) => {
        console.error('Error al cargar las sedes', error);
      }
    );
  }



  editarFaculty(){
    const id = localStorage.getItem("id");
  if (id !== null) {
    const facultyid = Number(id);
    this.service.getFacultyId(facultyid)
      .subscribe(data => {
        this.faculty = data;
      });
  } else {
    console.error("ID no encontrado en localStorage.");
    // this.router.navigate(["listar"]); // <- opcional, redirige si no hay ID
  }
  }

  ActualizarFaculty(faculty: Faculty): void {
    this.service.updateFaculty(faculty).subscribe(() => {
      alert("Actualizado con éxito!");
      this.router.navigate(["listarfaculty"]);
    });
  }

}
