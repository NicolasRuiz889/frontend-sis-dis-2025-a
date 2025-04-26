
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampusService } from '../../Service/campus.service';
import { Campus } from '../../Modelo/Campus';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-listar-campus',
  imports: [CommonModule],
  templateUrl: './listar-campus.component.html',
  styleUrls: ['./listar-campus.component.css']
})
export class ListarCampusComponent implements OnInit{

  campuses:Campus[] = [];
  constructor(private service:CampusService, private router:Router){}

  ngOnInit(){
    this.service.getCampuses()
    .subscribe(data=>{
      this.campuses=data;
    });


  }
  editarCampus(campus:Campus):void{
    if (campus.id != null) {
      localStorage.setItem("id", campus.id.toString());
      this.router.navigate(["editcampus"]);
    } else {
      alert("El campus no tiene un ID definido. No se puede editar.");
      console.warn("Campus sin ID:", campus);
    }

  }

  deleteCampus(campus:Campus){
    this.service.deleteCampus(campus)
    .subscribe(data=>{
      this.campuses=this.campuses.filter(c=>c!==campus);
      alert("Sede eliminada...");
    })


  }


}
