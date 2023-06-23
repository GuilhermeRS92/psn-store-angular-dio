import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-container',
  templateUrl: './price-container.component.html',
  styleUrls: ['./price-container.component.scss']
})
export class PriceContainerComponent {
  @Input() name: string = ''
  @Input() information: string = ''
  @Input() price: string = ''
}
