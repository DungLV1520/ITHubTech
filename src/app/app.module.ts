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
import { ServicesDetailsComponent } from "./components/pages/services-details/services-details.component";
import { ProjectsOneComponent } from "./components/pages/projects/projects.component";
import { ProjectsDetailsComponent } from "./components/pages/projects-details/projects-details.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { BlogGridComponent } from "./components/pages/blog-grid/blog-grid.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { TeamComponent } from "./components/pages/team/team.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { TermsConditionsComponent } from "./components/pages/terms-conditions/terms-conditions.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    NavbarOneComponent,
    AboutComponent,
    ServicesTwoComponent,
    ServicesDetailsComponent,
    ProjectsOneComponent,
    ProjectsDetailsComponent,
    ContactComponent,
    BlogGridComponent,
    BlogDetailsComponent,
    PricingComponent,
    TeamComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ErrorComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
