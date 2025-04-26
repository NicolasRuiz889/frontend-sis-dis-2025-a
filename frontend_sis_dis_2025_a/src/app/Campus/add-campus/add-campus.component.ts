import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Campus } from '../../Modelo/Campus';
import { Router } from '@angular/router';
import { CampusService } from '../../Service/campus.service';


@Component({
  selector: 'app-add-campus',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-campus.component.html',
  styleUrl: './add-campus.component.css'
})
export class AddCampusComponent implements OnInit{


  campus: Campus = {
  
    name: '',
    address: '',
    phone: '',
    status: false
  };

  constructor(private router:Router, private service:CampusService ){}

  ngOnInit(): void {
      
  }


  GuardarCampus(campus:Campus){
    if (!campus.name || !campus.address || !campus.phone) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    this.service.createCampus(campus)
      .subscribe(data => {
        alert("Se agregó con éxito.");
        this.router.navigate(["listarcampus"]);
      });

}
}
