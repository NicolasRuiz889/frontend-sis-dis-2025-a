import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_sis_dis_2025_a';

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
