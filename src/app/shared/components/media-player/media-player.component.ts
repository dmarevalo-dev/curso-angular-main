import { Component } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { TrackModel } from 'src/app/core/models/track.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  observerList$: Array<Subscription>=[];

  constructor(private mediaService:MediaService){ }

  ngOnInit(): void{
    const observer$=this.mediaService.callback.subscribe((track: TrackModel) =>{
      console.log('Track received in MediaPlayerComponent:', track);
    });
    this.observerList$.push(observer$);
  }

  ngOnDestroy(): void{
    console.log('MediaPlayerComponent destroyed')
    this.observerList$.forEach(sub =>sub.unsubscribe());
  }
}
