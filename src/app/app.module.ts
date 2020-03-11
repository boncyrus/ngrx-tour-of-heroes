import { DashboardModule } from "@app/dashboard/dashboard.module";
import { HeroModule } from "./heroes/hero.module";
import { BaseUrlInterceptorService } from "./shared/interceptors/baseUrlInterceptor.service";
import { InMemoryService } from "@shared/services/inMemory.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "@env/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AvatarInitialPipe } from "./avatar-initial.pipe";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

@NgModule({
  declarations: [AppComponent, AvatarInitialPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HeroModule,
    DashboardModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
