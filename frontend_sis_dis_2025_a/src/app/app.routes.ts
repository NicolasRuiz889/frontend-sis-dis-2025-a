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
import { MenuComponent } from './menu/menu.component';
import { ListarSubjectComponent } from './Subject/listar-subject/listar-subject.component';
import { AddSubjectComponent } from './Subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './Subject/edit-subject/edit-subject.component';
import { ListarGroupComponent } from './Group/listar-group/listar-group.component';
import { AddGroupComponent } from './Group/add-group/add-group.component';
import { EditGroupComponent } from './Group/edit-group/edit-group.component';
import { ListarClassOrientationComponent } from './ClassOrientation/listar-class-orientation/listar-class-orientation.component';
import { AddClassOrientationComponent } from './ClassOrientation/add-class-orientation/add-class-orientation.component';
import { EditClassOrientationComponent } from './ClassOrientation/edit-class-orientation/edit-class-orientation.component';
import { ListarCategoryComponent } from './Category/listar-category/listar-category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';


export const routes: Routes = [

    { path: '', component: MenuComponent },

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
    {path:'editprogram', component:EditProgramComponent},

    //Subject
    {path: 'listarsubject', component:ListarSubjectComponent},
    {path: 'addsubject', component:AddSubjectComponent},
    {path:'editsubject', component:EditSubjectComponent},

    //Group
    {path: 'listargroup', component:ListarGroupComponent},
    {path: 'addgroup', component:AddGroupComponent},
    {path:'editgroup', component:EditGroupComponent},

    //ClassOrientation
    {path: 'listarclassorientation', component:ListarClassOrientationComponent},
    {path: 'addclassorientation', component:AddClassOrientationComponent},
    {path:'editclassorientation', component:EditClassOrientationComponent},

    //Category
    {path: 'listarcategory', component:ListarCategoryComponent},
    {path: 'addcategory', component:AddCategoryComponent},
    {path:'editcategory', component:EditCategoryComponent},
    



];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


