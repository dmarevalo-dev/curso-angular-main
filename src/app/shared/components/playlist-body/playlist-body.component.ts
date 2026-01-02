import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent {

  tracksBetter: Array<TrackModel> = [];
  constructor(private tracksService: TracksService){}
  tracks:Array<TrackModel>=[];
  sortDirection: 'asc' | 'desc' | ''='';

  ngOnInit(): void {

    this.tracksService.getAllTracks$().subscribe(tracks =>{
      console.log(tracks);
      this.tracksBetter = tracks;
    })

  }

  sortByName():void{
    this.sortDirection =
    this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.tracks.sort((a,b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if(nameA < nameB) return this.sortDirection === 'asc' ? -1:1;
      if(nameA > nameB) return this.sortDirection == 'asc' ? 1:-1;
      return 0;
    });
  }

}
