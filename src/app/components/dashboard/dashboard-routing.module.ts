import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { SSTComponent } from './sst/sst.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FormatosComponent } from './procesos/formatos/formatos.component';
import { InstructivosComponent } from './procesos/instructivos/instructivos.component';
import { MacroProcesosComponent } from './procesos/macro-procesos/macro-procesos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'procesos', component: ProcesosComponent },
    { path: 'procesos/formatos', component: FormatosComponent },
    { path: 'procesos/instructivos', component: InstructivosComponent },
    { path: 'procesos/macro-procesos', component: MacroProcesosComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'sst', component: SSTComponent },
    { path: 'galeria', component: GaleriaComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
