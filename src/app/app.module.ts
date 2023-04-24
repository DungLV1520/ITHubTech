import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreloaderComponent } from "./components/layouts/preloader/preloader.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { HomeOneComponent } from "./components/pages/home/home.component";
import { NavbarOneComponent } from "./components/layouts/navbar/navbar.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ServicesTwoComponent } from "./components/pages/services/services.component";
import { ProjectsOneComponent } from "./components/pages/projects/projects.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    NavbarOneComponent,
    AboutComponent,
    ServicesTwoComponent,
    ProjectsOneComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    ComingSoonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
