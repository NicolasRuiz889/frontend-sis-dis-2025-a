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

  nuevoSubject(){
    this.router.navigate(["addsubject"]);
  }
  listarSubject(){
    this.router.navigate(["listarsubject"]);
  }

  nuevoGroup(){
    this.router.navigate(["addgroup"]);
  }
  listarGroup(){
    this.router.navigate(["listargroup"]);
  }

  nuevoClass(){
    this.router.navigate(["addclassorientation"]);
  }
  listarClass(){
    this.router.navigate(["listarclassorientation"]);
  }

  nuevoCategory(){
    this.router.navigate(["addcategory"]);
  }
  listarCategory(){
    this.router.navigate(["listarcategory"]);
  }


  nuevoSubcategory(){
    this.router.navigate(["addsubcategory"]);
  }
  listarSubcategory(){
    this.router.navigate(["listarsubcategory"]);
  }

  
  nuevoActivity(){
    this.router.navigate(["addactivity"]);
  }
  listarActivity(){
    this.router.navigate(["listaractivity"]);
  }

  nuevoActivityCatalog(){
    this.router.navigate(["addactivitycatalog"]);
  }
  listarActivityCatalog(){
    this.router.navigate(["listaractivitycatalog"]);
  }
}
