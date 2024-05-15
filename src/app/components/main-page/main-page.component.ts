import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISong } from '../../Models/song';
import { ModalService } from '../../Services/modal.service';
import { SongsService } from '../../Services/songs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.less'
})
export class MainPageComponent implements OnInit, OnDestroy {  
  private _subscription: Subscription;
  protected playlist: ISong[] = [];
  protected durationlist: number[] = [];
  protected isLoading: boolean = false;
  
  constructor(
    private _songsService: SongsService,
    protected modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this._subscription = this._songsService.getAll().subscribe(songs => {
      this.playlist = songs;
      this.isLoading = false;
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe;
  }
}
