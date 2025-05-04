import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Faculty } from '../../Modelo/Faculty';
import { FacultyService } from '../../Service/faculty.service';
import { Campus } from '../../Modelo/Campus';
import { CampusService } from '../../Service/campus.service';

@Component({
  selector: 'app-add-faculty',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent implements OnInit{


  
    faculty: any =  {
    
      name: '',
      description: '',
      status: false,
      campusId: null
    };

    campuses: Campus[] = [];
  
    constructor(private router:Router, 
      private service:FacultyService,
      private campusService: CampusService ){}
  
    ngOnInit(): void {

      this.campusService.getCampuses().subscribe(data => {
        this.campuses = data;
      });
        
    }
  
  
    GuardarFaculty(faculty:Faculty){
      if (!faculty.name || !faculty.description || !faculty.campusId) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      // Creamos el DTO solo con los campos necesarios
      const FacultyDto = {
        name: faculty.name,
        description: faculty.description,
        status: faculty.status,
        campusId: faculty.campusId // Solo enviamos el id del campus
      };
    
      this.service.createFaculy(faculty)
        .subscribe(data => {
          alert("Se agregó con éxito.");
          this.router.navigate(["listarfaculty"]);
        });
  
  }



}
