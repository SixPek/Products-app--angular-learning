import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-description',
  templateUrl: './image-description.component.html',
  styleUrls: ['./image-description.component.css']
})
export class ImageDescriptionComponent implements OnInit {
  alt: string;
  imgPath: string;
  description: string;
  imageThenText: boolean; 

  @Input() inputAlt: string;
  @Input() inputImagePath: string;
  @Input() inputDescription: string;
  @Input() inputImageThenText: boolean;

  constructor() { }

  ngOnInit() {
    this.alt = this.inputAlt;
    this.imgPath = this.inputImagePath;
    this.description = this.inputDescription;
    this.imageThenText = true;
    this.imageThenText = this.inputImageThenText;

    console.log(this.inputImageThenText);
  }

}
