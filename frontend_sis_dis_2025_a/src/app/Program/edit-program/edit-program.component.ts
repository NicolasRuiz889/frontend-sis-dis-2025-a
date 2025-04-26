import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Program } from '../../Modelo/Program';
import { Faculty } from '../../Modelo/Faculty';
import { ProgramService } from '../../Service/program.service';
import { FacultyService } from '../../Service/faculty.service';

@Component({
  selector: 'app-edit-program',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-program.component.html',
  styleUrl: './edit-program.component.css'
})
export class EditProgramComponent implements OnInit {

  
    program :Program=new Program();
    faculties: Faculty[] = [];
    constructor(
      private router:Router,
      private service:ProgramService,
      private facultyService: FacultyService){}
  
    ngOnInit(): void {
      this.loadFaculties();
      this.editarProgram();
      
        
    }
  
    // Método para cargar las sedes desde la API
    loadFaculties(): void {
      this.facultyService.getFaculties().subscribe(
        (data) => {
          this.faculties = data;  // Asignar la lista de sedes
        },
        (error) => {
          console.error('Error al cargar las sedes', error);
        }
      );
    }
  
  
  
    editarProgram(){
      const id = localStorage.getItem("id");
    if (id !== null) {
      const programid = Number(id);
      this.service.getProgramId(programid)
        .subscribe(data => {
          this.program = data;
        });
    } else {
      console.error("ID no encontrado en localStorage.");
      // this.router.navigate(["listar"]); // <- opcional, redirige si no hay ID
    }
    }
  
    ActualizarProgram(program: Program): void {
      this.service.updateProgram(program).subscribe(() => {
        alert("Actualizado con éxito!");
        this.router.navigate(["listarprogram"]);
      });
    }
  

}
