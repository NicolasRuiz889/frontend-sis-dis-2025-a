import { RouterModule, Routes } from '@angular/router';
import { ListarCampusComponent } from './Campus/listar-campus/listar-campus.component';
import { AddCampusComponent } from './Campus/add-campus/add-campus.component';
import { EditCampusComponent } from './Campus/edit-campus/edit-campus.component';
import { NgModule } from '@angular/core';
import { ListarFacultyComponent } from './Faculty/listar-faculty/listar-faculty.component';
import { EditFacultyComponent } from './Faculty/edit-faculty/edit-faculty.component';
import { AddFacultyComponent } from './Faculty/add-faculty/add-faculty.component';
import { ListarProgramComponent } from './Program/listar-program/listar-program.component';
import { AddProgramComponent } from './Program/add-program/add-program.component';
import { EditProgramComponent } from './Program/edit-program/edit-program.component';


export const routes: Routes = [

    //Campus
    {path: 'listarcampus', component:ListarCampusComponent},
    {path: 'addcampus', component:AddCampusComponent},
    {path: 'editcampus', component:EditCampusComponent},

    //Faculty
    {path: 'listarfaculty', component:ListarFacultyComponent},
    {path: 'addfaculty', component:AddFacultyComponent},
    {path: 'editfaculty', component:EditFacultyComponent},

    //Program
    {path: 'listarprogram', component:ListarProgramComponent},
    {path: 'addprogram', component:AddProgramComponent},
    {path:'editprogram', component:EditProgramComponent}


];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


