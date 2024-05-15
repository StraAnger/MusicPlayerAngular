import { Component, Input } from '@angular/core';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  @Input()
  currentAudio: HTMLAudioElement;

  public term:string = '';

  constructor(
    protected modalService:ModalService
  ){}
  
  stop():void {
    this.currentAudio.pause();
  }

}
