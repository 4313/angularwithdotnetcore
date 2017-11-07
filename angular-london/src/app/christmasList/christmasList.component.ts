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
                price: 79.99,
                storeLink: "https://www.currys.co.uk/gbuk/household-appliances/cooking/microwaves/kenwood-k23cm13-combination-microwave-mirror-finish-19394353-pdt.html",
                imageLink: "https://brain-images-ssl.cdn.dixons.com/3/5/19394353/l_19394353.jpg",
                isTaken:false
            },
            {
                name: "Sofa",
                price: 799,
                storeLink: "https://www.fishpools.co.uk/jacob-medium-sofa/p45635",
                imageLink: "https://www.fishpools.co.uk/images/products/medium/45635.jpg",
                isTaken:false
            },
            {
                name: "TV",
                price: 399,
                storeLink: "https://www.currys.co.uk/gbuk/tv-and-home-entertainment/televisions/televisions/samsung-ue40mu6120-40-smart-4k-ultra-hd-hdr-led-tv-10169112-pdt.html",
                imageLink: "https://brain-images-ssl.cdn.dixons.com/2/1/10169112/m_10169112.jpg",
                isTaken:false
            }
        ];
    }
    addPresent(name: string, price: number, storeLink: string, imageLink:string): void {
        const bob = {name:name,price:price,storeLink:storeLink,imageLink:imageLink,isTaken:false};
        this.presents.push(bob);
    }

}
