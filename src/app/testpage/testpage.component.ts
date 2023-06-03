import { Component } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent {

  files: File[] = [];
  dragging = false;

  constructor() {}

  onFileChange(event) {
    this.files = event.target.files;
    this.dragging = false;
  }

  onDragEnter(event) {
    this.dragging = true;
  }

  onDragLeave(event) {
    this.dragging = false;
  }

  onDrop(event) {
    this.dragging = false;
  }

  ngOnInit() {}
}
