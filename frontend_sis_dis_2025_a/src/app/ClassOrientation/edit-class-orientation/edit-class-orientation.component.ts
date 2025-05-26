import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ClassOrientation } from '../../Modelo/ClassOrientation';
import { Program } from '../../Modelo/Program';
import { Subject } from '../../Modelo/Subject';
import { Campus } from '../../Modelo/Campus';
import { Group } from '../../Modelo/Group';
import { ClassOrientationService } from '../../Service/class-orientation.service';
import { SubjectService } from '../../Service/subject.service';
import { ProgramService } from '../../Service/program.service';
import { GroupService } from '../../Service/group.service';
import { CampusService } from '../../Service/campus.service';

@Component({
  standalone: true,
  selector: 'app-edit-class-orientation',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-class-orientation.component.html',
  styleUrl: './edit-class-orientation.component.css'
})
export class EditClassOrientationComponent implements OnInit {

  classOrientation: ClassOrientation = new ClassOrientation();
  programs: Program[] = [];
  subjects: Subject[] = [];
  campuses: Campus[] = [];
  groups: Group[] = [];

  constructor(
    private router: Router,
    private classOrientationService: ClassOrientationService,
    private subjectService: SubjectService,
    private programService: ProgramService,
    private groupService: GroupService,
    private campusService: CampusService,
  ) {}

  ngOnInit(): void {
    this.loadPrograms();
    this.loadSubjects();
    this.loadGroups();
    this.loadCampuses();
    this.editClassOrientation();
  }

  loadPrograms(): void{
    this.programService.getPrograms().subscribe(data => {
      this.programs = data;
    });
  }

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
  loadGroups(): void {
    this.groupService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }
  loadCampuses(): void {
    this.campusService.getCampuses().subscribe(data => {
      this.campuses = data;
    });
  }
  editClassOrientation(): void {
    let id = localStorage.getItem("id");
    if (id != null) {
      this.classOrientationService.getClassOrientationId(+id)
        .subscribe(data => {
          this.classOrientation = data;
        })
    } else {
      alert("Error al cargar el ID de la Clase de Orientación");
      this.router.navigate(["agenda"]);
    }
  }

  ActualizarClassOrientation(classOrientation: ClassOrientation): void {

     // Asignar manualmente el valor calculado
  classOrientation.semesterHours = this.calculatedSemesterHours;
  
    this.classOrientationService.updateClassOrientation(classOrientation)
      .subscribe(() => {
        alert("Actualizado con éxito!");
        this.router.navigate(["agenda"]);
      });

    }

    
  get calculatedSemesterHours(): number {
    const weekly = this.classOrientation.weeklyHours;
    return weekly ? weekly * 16 : 0;
  }


}
