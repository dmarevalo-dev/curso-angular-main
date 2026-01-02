import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { RouterModule } from '@angular/router';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImageBrokenDirective } from './directives/image-broken.directive';



@NgModule({
  declarations: [
    SectionGenericComponent,
    CardPlayerComponent,
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImageBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SectionGenericComponent,
    CardPlayerComponent,
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    FormsModule,
    OrderListPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
