import { Pipe, PipeTransform } from '@angular/core';
import { ISong } from '../Models/song';

@Pipe({
  name: 'filterSongs'
})
export class FilterSongsPipe implements PipeTransform {

  transform(songs: ISong[], search: string): ISong[] {
    if (search.length === 0 ) return songs;
    return songs.filter(song => song.title.toLowerCase().includes(search.toLowerCase().trim()));
  }

}
