import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.css' ]
})

export class MainComponent {
    slides: any[] = [
        {
            src: '../assets/images/carousel-2.jpg',
            title: 'El Reino de las Almas Errantes'
        },
        {
            src: '../assets/images/carousel-1.jpg',
            title: 'Las Tres Damas'
        }
    ]
}
