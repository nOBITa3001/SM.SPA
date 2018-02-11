import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatchdaysComponent } from './matchdays/matchdays.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { MatchdayService } from './_services/matchday.service';
import { MatchdayListResolver } from './_resolvers/matchday-list.resolver';

export function getAccessToken(): string {
  return localStorage.getItem('token');
}

export const jwtConfig = {
  tokenGetter: getAccessToken,
  whiteListedDomains: ['localhost:5000']
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MatchdaysComponent,
    LeaderboardsComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    JwtModule.forRoot({
      config: jwtConfig
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    MatchdayService,
    MatchdayListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
