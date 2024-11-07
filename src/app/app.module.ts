import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos routing y appRoutingProvider en imports y providers
import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { TablamultiplicarroutingComponent } from './components/tablamultiplicarrouting/tablamultiplicarrouting.component';
import { MenutablaComponent } from './components/menutabla/menutabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent,
    TablamultiplicarroutingComponent,
    MenutablaComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
