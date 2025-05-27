import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Program } from '../../Modelo/Program';
import { Faculty } from '../../Modelo/Faculty';
import { Campus } from '../../Modelo/Campus';
import { Group } from '../../Modelo/Group';
import { ClassOrientationService } from '../../Service/class-orientation.service';
import { SubjectService } from '../../Service/subject.service';
import { ProgramService } from '../../Service/program.service';
import { GroupService } from '../../Service/group.service';
import { CampusService } from '../../Service/campus.service';
import { Subject } from '../../Modelo/Subject';
import { ClassOrientation } from '../../Modelo/ClassOrientation';

@Component({
  standalone: true,
  selector: 'app-add-class-orientation',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-class-orientation.component.html',
  styleUrl: './add-class-orientation.component.css'
})
export class AddClassOrientationComponent implements OnInit {

  classOrientation: any = {
    subjectId: null,
    programId: null,
    groupId: null,
    campusId: null,
    weeklyHours: null,
    semesterHours: null
  }

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
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
    this.programService.getPrograms().subscribe(data => this.programs = data);
    this.groupService.getGroups().subscribe(data => this.groups = data);
    this.campusService.getCampuses().subscribe(data => this.campuses = data);
  }

  GuardarClassOrientation() {

    const classOrientation = this.classOrientation;
    if(
      !classOrientation.subjectId ||
      !classOrientation.programId ||
      !classOrientation.groupId ||
      !classOrientation.campusId ||
      !classOrientation.weeklyHours
    ){
      alert("Todos los campos son obligatorios.");
      return;
    }

    classOrientation.semesterHours = this.calculatedSemesterHours;
    
    this.classOrientationService.createClassOrientation(classOrientation)
    .subscribe(data => {
      alert("Se agregó con éxito.");
      this.router.navigate(["listaclassorientation"]);
    });

  }

  get calculatedSemesterHours(): number {
    const weekly = this.classOrientation.weeklyHours;
    return weekly ? weekly * 16 : 0;
  }

}





  
