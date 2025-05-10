import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject } from '../../Modelo/Subject';
import { Program } from '../../Modelo/Program';
import { SubjectService } from '../../Service/subject.service';
import { ProgramService } from '../../Service/program.service';

@Component({
  standalone: true,
  selector: 'app-edit-subject',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-subject.component.html',
  styleUrl: './edit-subject.component.css'
})
export class EditSubjectComponent implements OnInit{

  subject: Subject=new Subject();
  programs: Program[] = [];
  constructor(private router:Router, 
    private service:SubjectService,
    private programService: ProgramService ){}

  ngOnInit(): void {
    this.loadPrograms();
    this.editSubject();

}

  loadPrograms() {
    this.programService.getPrograms().subscribe(data => {
      this.programs = data;
    });
  }

  editSubject(){
    let id=localStorage.getItem("id");
    if(id!=null){
      this.service.getSubjectId(+id)
      .subscribe(data=>{
        this.subject=data;
      })
    }
    else{
      alert("Error al cargar el ID del Subject");
      this.router.navigate(["listarsubject"]);
    }
  }

  ActualizarSubject(subject:Subject): void {
    this.service.updateSubject(subject)
      .subscribe(() => {
        alert("Actualizado con éxito!");
        this.router.navigate(["listarsubject"]);
      });
  }}
