import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EmptyScreenComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
