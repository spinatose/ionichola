import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InputsPage } from './inputs.page';

import { InputsPageRoutingModule } from './inputs-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputsPageRoutingModule
  ],
  declarations: [InputsPage]
})
export class InputsPageModule {}
