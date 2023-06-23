import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-platform-container',
  templateUrl: './platform-container.component.html',
  styleUrls: ['./platform-container.component.scss']
})
export class PlatformContainerComponent {
  @Input() platforms: Array<string> = ['']
}
