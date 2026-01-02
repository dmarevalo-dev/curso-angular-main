import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { MessageService } from '@shared/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent {

  private subscription: Subscription = new Subscription();
  private messageSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService,
    private messageService: MessageService
  ){

  }

  ngOnInit():void{

    this.subscription=this.dataService.currentData.subscribe(data =>{
      console.log("Data de estado: ", data);
    });

    this.messageSubscription=this.messageService.message$.subscribe(message =>{
      console.log("Mensaje recibido: ", message);
    })

  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
    //this.messageSubscription.unsubscribe();

  }

}
