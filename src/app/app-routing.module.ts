import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeOneComponent } from "./components/pages/home/home.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { TermsConditionsComponent } from "./components/pages/terms-conditions/terms-conditions.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { TeamComponent } from "./components/pages/team/team.component";
import { ProjectsOneComponent } from "./components/pages/projects/projects.component";
import { ServicesTwoComponent } from "./components/pages/services/services.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", component: HomeOneComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesTwoComponent },
  { path: "projects", component: ProjectsOneComponent },
  { path: "team", component: TeamComponent },
  { path: "pricing", component: PricingComponent },
  { path: "faq", component: FaqComponent },
  { path: "terms-conditions", component: TermsConditionsComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "error", component: ErrorComponent },
  { path: "coming-soon", component: ComingSoonComponent },
  { path: "contact", component: ContactComponent },
  // Here add new pages component

  { path: "**", component: ErrorComponent }, // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
