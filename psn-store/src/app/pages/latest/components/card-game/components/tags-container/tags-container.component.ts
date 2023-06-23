import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.scss']
})
export class TagsContainerComponent {
  @Input() tags: Array<string> = ['']
}
