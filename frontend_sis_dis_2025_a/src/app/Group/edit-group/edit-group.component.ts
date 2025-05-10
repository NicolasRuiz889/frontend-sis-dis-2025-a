import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Group } from '../../Modelo/Group';
import { SubjectService } from '../../Service/subject.service';
import { GroupService } from '../../Service/group.service';
import { Subject } from '../../Modelo/Subject';

@Component({
  standalone: true,
  selector: 'app-edit-group',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-group.component.html',
  styleUrl: './edit-group.component.css'
})
export class EditGroupComponent implements OnInit {

  group: Group = new Group();
  subjects: Subject[] = [];

  constructor(private router: Router,
    private service: GroupService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.loadSubject();
    this.editarGroup();
  }

  // Método para cargar los asignatura desde la API
  loadSubject(): void {
    this.subjectService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;  // Asignar la lista de asignaturas
      },
      (error) => {
        console.error('Error al cargar las asignaturas', error);
      }
    );
  }

  editarGroup() {
    const id = localStorage.getItem("id");
    if (id !== null) {
      const groupid = Number(id);
      this.service.getGroupId(groupid)
        .subscribe(data => {
          this.group = data;
        });
    } else {
      console.error("ID no encontrado en localStorage.");
      // this.router.navigate(["listar"]); // <- opcional, redirige si no hay ID
    }
  }

  ActualizarGroup(group: Group): void {
    this.service.updateGroup(group)
      .subscribe(() => {
        alert("Actualizado con éxito!");
        this.router.navigate(["listargroup"]);
      });

  }

}
