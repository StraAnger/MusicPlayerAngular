import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { FilterSongsPipe } from './pipes/filter-songs.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SetLeadingZeroPipe } from './pipes/set-leading-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    FooterComponent,
    ModalComponent,
    FilterSongsPipe,
    ProfileComponent,
    UnderConstructionComponent,
    MainPageComponent,
    SetLeadingZeroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
