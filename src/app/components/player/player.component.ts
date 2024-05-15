import { Component, Input, OnInit, Output } from '@angular/core';
import { ISong } from '../../Models/song';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.less'
})
export class PlayerComponent {

  @Input()
  playlist: ISong[];

  @Input()
  isLoading: boolean;

  @Input()
  currentSong: ISong;

  @Input()
  durationList: number[];

  @Input()
  term: string;

  protected isShowPictures: boolean = false;
  public audio = new Audio();

  prev(): void {
    this.play(this.playlist[this.playlist.indexOf(this.currentSong) - 1]);
  }

  play(song: ISong): void {
    if (song) {
      this.currentSong = song;
      this.audio.src = song.link;      
      this.audio.onloadedmetadata = () => {
        this.audio.play();
      }
    }
  }

  pause(): void {
    this.audio.pause();
  }

  next(): void {
    this.play(this.playlist[this.playlist.indexOf(this.currentSong) + 1]);
  }

  showPic(){
    this.isShowPictures = !this.isShowPictures;
  }
}
