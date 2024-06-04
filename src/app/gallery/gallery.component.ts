import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  textGallery: string = 'Gallery';
  textAmneities: string = 'Amneities';
  textPakages: string = 'Packages';
}
