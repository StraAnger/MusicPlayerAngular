import { Component, Input } from '@angular/core';
import { ISong } from '../../Models/song';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

  @Input()
  playlist: ISong[];

  @Input()
  currentSong: ISong;

  @Input()
  currentAudio: HTMLAudioElement;

  constructor(
    public modalService: ModalService
  ) {

  }

  protected value: number = 0;

  timeSetSlider(event: any): void {
    this.currentAudio.currentTime = event.target.value;
  }

  setValue(): void {
    setInterval(() => this.value = this.currentAudio.currentTime, 100);
  }

  currentDurationFormated(audio: HTMLAudioElement): string {
    this.setValue();
    return `${Math.floor(audio.duration / 60)} : ${Math.floor(audio.duration % 60) < 10 ? `0` + Math.floor(audio.duration % 60) : Math.floor(audio.duration % 60)}`;
  }

  currentTimeFormated(audio: HTMLAudioElement): string {
    return `${Math.floor(audio.currentTime / 60)} : ${Math.floor(audio.currentTime % 60) < 10 ? `0` + Math.floor(audio.currentTime % 60) : Math.floor(audio.currentTime % 60)}`;
  }

  mute(): void {
    this.currentAudio.muted = !this.currentAudio.muted;
  }

}
