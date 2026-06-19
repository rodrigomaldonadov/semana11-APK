import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { ResumenAppComponent } from '../components/resumen-app/resumen-app.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule
  ],
  declarations: [DetallePage, ResumenAppComponent, SelectorTipoComponent]
})
export class DetallePageModule {}
