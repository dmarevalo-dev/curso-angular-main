import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "@shared/shared.module";


@NgModule({
  declarations: [
    TrackPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TracksRoutingModule,
    SharedModule
],
exports: [
  TrackPageComponent
]
})
export class TracksModule {
}
