import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SSTComponent } from './sst/sst.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { FormatosComponent } from './procesos/formatos/formatos.component';
import { InstructivosComponent } from './procesos/instructivos/instructivos.component';
import { MacroProcesosComponent } from './procesos/macro-procesos/macro-procesos.component';
import { EventosComponent } from './galeria/eventos/eventos.component';
import { LogrosComponent } from './galeria/logros/logros.component';
import { AnunciosComponent } from './galeria/anuncios/anuncios.component';
import { VisionComponent } from './quienes-somos/vision/vision.component';
import { MisionComponent } from './quienes-somos/mision/mision.component';
import { ValoresComponent } from './quienes-somos/valores/valores.component';
import { UsoCorreoComponent } from './quienes-somos/uso-correo/uso-correo.component';
import { ReglamentoComponent } from './quienes-somos/reglamento/reglamento.component';
import { ContactenosComponent } from './quienes-somos/contactenos/contactenos.component';
import { NuestrosProductosComponent } from './quienes-somos/nuestros-productos/nuestros-productos.component';
import { NosDiferenciaComponent } from './quienes-somos/nos-diferencia/nos-diferencia.component';
import { BeneficiosComponent } from './quienes-somos/beneficios/beneficios.component';
import { ComiteComponent } from './sst/comite/comite.component';
import { PoliticasComponent } from './sst/politicas/politicas.component';
import { EventosCapacitacionesComponent } from './sst/eventos-capacitaciones/eventos-capacitaciones.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    SSTComponent,
    GaleriaComponent,
    QuienesSomosComponent,
    ProcesosComponent,
    FormatosComponent,
    InstructivosComponent,
    MacroProcesosComponent,
    EventosComponent,
    LogrosComponent,
    AnunciosComponent,
    VisionComponent,
    MisionComponent,
    ValoresComponent,
    UsoCorreoComponent,
    ReglamentoComponent,
    ContactenosComponent,
    NuestrosProductosComponent,
    NosDiferenciaComponent,
    BeneficiosComponent,
    ComiteComponent,
    PoliticasComponent,
    EventosCapacitacionesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
