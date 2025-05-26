import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Campus } from '../../Modelo/Campus';
import { CampusService } from '../../Service/campus.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-campus',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './edit-campus.component.html',
  styleUrl: './edit-campus.component.css'
})
export class EditCampusComponent implements OnInit{
  campus :Campus=new Campus();
  constructor(private router:Router, private service:CampusService){}

  ngOnInit(): void {
    this.editarCampus();
      
  }

  editarCampus(){
    const id = localStorage.getItem("id");
  if (id !== null) {
    const campusId = Number(id);
    this.service.getCampusId(campusId)
      .subscribe(data => {
        this.campus = data;
      });
  } else {
    console.error("ID no encontrado en localStorage.");
    // this.router.navigate(["listar"]); // <- opcional, redirige si no hay ID
  }
  }

  ActualizarCampus(campus: Campus): void {
    this.service.updateCampus(campus).subscribe(() => {
      alert("Actualizado con éxito!");
      this.router.navigate(["listarcampus"]);
    });
  }
}
