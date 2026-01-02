import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { MessageService } from '@shared/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
} = {
    defaultOptions: [],
    accessLink: []
};

customOptions: Array<any> = [];

currentData$!:Observable<string>;
currentMessage$!:Observable<string>;

constructor(private messageService: MessageService,
    private dataService: DataService
){
    this.currentData$=this.dataService.currentData;
    this.currentMessage$=this.messageService.message$;
}

ngOnInit() {
    this.mainMenu.defaultOptions = [
        {
            name: 'Home',
            icon: 'uil uil-estate',
            router: ['/', 'tracks']
        },
        {
            name: 'Buscar',
            icon: 'uil uil-search',
            router: ['/', 'history']
        },
        {
            name: 'Tu biblioteca',
            icon: 'uil uil-chart',
            router: ['/', 'favorites'],
            query: { hola: 'mundo' }
        }
    ];

    this.mainMenu.accessLink = [
    {
        name: 'Crear lista',
        icon: 'uil uil-plus-square'
    },
    {
        name: 'Canciones que te gustan',
        icon: 'uil uil-heart-medical',
    }
];

this.customOptions = [
    {
        name: 'Mi lista nº1',
        router: ['/']
    }
];



}
}
