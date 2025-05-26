import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Group } from '../../Modelo/Group';
import { GroupService } from '../../Service/group.service';

@Component({
  standalone: true,
  selector: 'app-listar-group',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-group.component.html',
  styleUrl: './listar-group.component.css'
})
export class ListarGroupComponent implements OnInit{

  groups:Group[] = [];
    constructor(private service:GroupService, private router:Router){}


  ngOnInit(){

    this.service.getGroups()
    .subscribe(data=>{
      this.groups=data;
    },
    (error) => {
      console.error('Error al cargar los grupos', error);
    });
  }

  editarGroup(group:Group):void{
    if (group.id != null) {
      localStorage.setItem("id", group.id.toString());
      this.router.navigate(["editgroup"]);
    } else {
      alert("El grupo no tiene un ID definido. No se puede editar.");
      console.warn("Grupo sin ID:", group);
    }
  }
    
  deleteGroup(group:Group){
    this.service.deleteGroup(group)
    .subscribe(data=>{
      this.groups=this.groups.filter(f=>f!==group);
      alert("Grupo eliminado...");
    })
  }

}

    
