import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  constructor(private router:Router){}

  nuevoCampus(){
    this.router.navigate(["addcampus"]);
  }

  listarCampus(){
    this.router.navigate(["listarcampus"]);
  }


  nuevoFaculty(){
    this.router.navigate(["addfaculty"]);
  }

  listarFaculty(){
    this.router.navigate(["listarfaculty"]);
  }

  nuevoProgram(){
    this.router.navigate(["addprogram"]);
  }

  listarProgram(){
    this.router.navigate(["listarprogram"]);
  }
}
