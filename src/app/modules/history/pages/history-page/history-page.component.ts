import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@shared/services/data.service';
import { MessageService } from '@shared/services/message.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {


  constructor(private dataService: DataService,
    private messageService: MessageService
  ){ }


  ngOnInit():void{

  }

  updateData(){
    this.dataService.updateData("Nuevo dato desde HistoryPageComponent");
  }

  updateMessage(){
    this.messageService.sendMessage('Hola desde HistoryComponent')
  }

}
