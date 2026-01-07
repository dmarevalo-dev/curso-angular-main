import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  tracksBetter: Array<TrackModel> = [];
  tracksElectronic: Array<TrackModel> = [];

  constructor(private tracksService: TracksService){}

  ngOnInit(): void {

    this.tracksService.getAllTracks$().subscribe(tracks =>{
      //console.log(tracks);
      this.tracksBetter = tracks;
      this.tracksElectronic = tracks;
    })

    this.tracksService.getAllElectronics$().subscribe(tracks =>{
      //console.log(tracks);
      this.tracksElectronic = tracks;
    })
  }

  ngOnDestroy():void{
  }

}
