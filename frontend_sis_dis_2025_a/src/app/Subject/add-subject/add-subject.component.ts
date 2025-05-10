import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SubjectService } from '../../Service/subject.service';
import { ProgramService } from '../../Service/program.service';
import { Subject } from '../../Modelo/Subject';


@Component({
  selector: 'app-add-subject',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.css'
})
export class AddSubjectComponent implements OnInit{

  subject: any =  {
    
    code: '',
    name: '',
    credits: null,
    status: false,
    description: '',
    programId: null
   
  };

  programs: any[] = [];
  constructor(private router:Router, 
    private service:SubjectService,
    private programService: ProgramService ){}

    ngOnInit(): void {
      this.programService.getPrograms().subscribe(data => {
        this.programs = data;
      });
    }

  GuardarSubject(subject:Subject){
    if (!subject.code || !subject.name || !subject.credits || !subject.description || !subject.programId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    subject.credits = Number(subject.credits);

    // Creamos el DTO solo con los campos necesarios
    const SubjectDto = {
      code: subject.code,
      name: subject.name,
      credits: subject.credits,
      status: subject.status,
      description: subject.description,
      programId: subject.programId // Solo enviamos el id del programa
    };
  
    this.service.createSubject(subject)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listarsubject"]);
      },
      (error) => {
        console.error('Error al crear la asignatura', error);
        alert("Error al crear la asignatura.");
      });


  
    }
}
