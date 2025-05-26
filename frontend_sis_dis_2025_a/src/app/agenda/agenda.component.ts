import { Component } from '@angular/core';
import { ListarActivityComponent } from '../Activity/listar-activity/listar-activity.component';
import { ListarClassOrientationComponent } from '../ClassOrientation/listar-class-orientation/listar-class-orientation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgendaExportService } from '../Service/agenda-export.service';

@Component({
  standalone: true,
  selector: 'app-agenda',
  imports: [CommonModule,  RouterModule,ListarActivityComponent, ListarClassOrientationComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  profesorId = 1; 

  constructor(private exportService: AgendaExportService
  ) {}

  exportarExcel() {
    
this.exportService.exportarAgenda(this.profesorId).subscribe({
      next: (blob) => {
        // Crear un enlace temporal para descargar el archivo
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'agenda_profesor.xlsx'; // Nombre del archivo descargado
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error descargando el archivo', err);
      }
    });
  }

}
