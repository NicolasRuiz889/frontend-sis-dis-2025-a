import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject } from '../../Modelo/Subject';
import { GroupService } from '../../Service/group.service';
import { SubjectService } from '../../Service/subject.service';
import { Group } from '../../Modelo/Group';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css'
})
export class AddGroupComponent implements OnInit {

  group: any = {

    code:'',
    period:'',
    status: false,
    subjectId: null

  };

  subjects: Subject[] = [];
  constructor(private router: Router,
    private service: GroupService,
    private subjectService: SubjectService) { }


  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

  GuardarGroup(group:Group) {
    if (!group.code || !group.period || !group.subjectId) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Creamos el DTO solo con los campos necesarios
    const groupDto = {
      code: group.code,
      period: group.period,
      status: group.status,
      subjectId: group.subjectId
    };

    this.service.createGroup(group)
      .subscribe(data => {
        alert("Grupo creado con éxito!");
        this.router.navigate(["listargroup"]);
      });

}
}
