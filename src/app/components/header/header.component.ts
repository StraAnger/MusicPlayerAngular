import { Component } from '@angular/core';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  public term:string = '';

  constructor(
    protected modalService:ModalService
  ){}
  
}
