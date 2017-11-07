import { Component, OnInit } from '@angular/core';
import { Present } from '../models/present';
@Component({
    selector: 'app-christmas-list',
    templateUrl: './christmasList.component.html',
    styleUrls: ['./christmasList.component.css']
})
export class ChristmasListComponent implements OnInit {
    public header: string = 'Christmas List';
    public presents: Present[];

    ngOnInit(): void {
        this.presents =[
            {
                name: "Microwave",
                description: "uhhh its a microwave",
                storeLink: "https://www.amazon.co.uk/Russell-Hobbs-RHM2076B-Digital-Microwave/dp/B00GYU8SFY/ref=sr_1_1?s=kitchen-appliances&ie=UTF8&qid=1510072154&sr=1-1&keywords=microwave"
            },
            {
                name: "Sofa",
                description: "2 seat sofa",
                storeLink: "https://www.amazon.co.uk/Russell-Hobbs-RHM2076B-Digital-Microwave/dp/B00GYU8SFY/ref=sr_1_1?s=kitchen-appliances&ie=UTF8&qid=1510072154&sr=1-1&keywords=microwave"
            },
            {
                name: "TV",
                description: "40 Inch 4K",
                storeLink: "https://www.amazon.co.uk/Russell-Hobbs-RHM2076B-Digital-Microwave/dp/B00GYU8SFY/ref=sr_1_1?s=kitchen-appliances&ie=UTF8&qid=1510072154&sr=1-1&keywords=microwave"
            }
        ];
    }
    addPresent(name: string, description: string, storeLink: string): void {
        const bob = {name:name,description:description,storeLink:storeLink};
        this.presents.push(bob);
    }

}
