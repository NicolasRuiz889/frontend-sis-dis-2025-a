import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Program } from '../../Modelo/Program';
import { Router, RouterModule } from '@angular/router';
import { ProgramService } from '../../Service/program.service';

@Component({
  standalone: true,
  selector: 'app-listar-program',
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-program.component.html',
  styleUrl: './listar-program.component.css'
})
export class ListarProgramComponent implements OnInit{

  
  programs:Program[] = [];
  constructor(private service:ProgramService, private router:Router){}

  ngOnInit(){
    this.service.getPrograms()
    .subscribe(data=>{
      this.programs=data;
    },
    (error) => {
      console.error('Error al cargar los programas', error);
    });


  }
  editarProgram(program:Program):void{
    if (program.id != null) {
      localStorage.setItem("id", program.id.toString());
      this.router.navigate(["editprogram"]);
    } else {
      alert("El programa no tiene un ID definido. No se puede editar.");
      console.warn("Programa sin ID:", program);
    }

  }

  deleteProgram(program:Program){
    this.service.deleteProgram(program)
    .subscribe(data=>{
      this.programs=this.programs.filter(f=>f!==program);
      alert("Programa eliminado...");
    })


  }


}
