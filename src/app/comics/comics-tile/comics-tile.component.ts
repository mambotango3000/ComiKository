import { Component, Input } from '@angular/core';
import { IComic } from '../shared/comics.model';

@Component({
  selector: 'app-comics-tile',
  templateUrl: './comics-tile.component.html',
  styleUrls: ['./comics-tile.component.css', '../../../styles2.css']
})
export class ComicsTileComponent {
  @Input() comic: IComic;
}
