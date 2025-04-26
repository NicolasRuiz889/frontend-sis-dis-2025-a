import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Faculty } from '../../Modelo/Faculty';
import { FacultyService } from '../../Service/faculty.service';
import { ProgramService } from '../../Service/program.service';
import { Program } from '../../Modelo/Program';

@Component({
  selector: 'app-add-program',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.css'
})
export class AddProgramComponent implements OnInit{

  
  program: any =  {
    
    code: '',
    name: '',
    modality: '',
    schedule:'',
    duration:'',
    degreeAwarded:'',
    status: false,
    facultyId: null
  };

  faculties: Faculty[] = [];

  constructor(private router:Router, 
    private service:ProgramService,
    private facultyService: FacultyService ){}

  ngOnInit(): void {

    this.facultyService.getFaculties().subscribe(data => {
      this.faculties = data;
    });
      
  }


  GuardarProgram(program:Program){
    if (!program.code || !program.name || !program.modality || !program.schedule || !program.duration || !program.degreeAwarded || !program.facultyId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Creamos el DTO solo con los campos necesarios
    const FacultyDto = {
      code: program.code,
      name: program.name,
      modality: program.modality,
      schedule: program.schedule,
      duration: program.duration,
      degreeAwarded: program.degreeAwarded,
      
      status: program.status,
      campusId: program.facultyId // Solo enviamos el id del campus
    };
  
    this.service.createProgram(program)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listarprogram"]);
      });

}


}
