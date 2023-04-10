import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeOneComponent } from "./components/pages/home/home.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { ProjectsOneComponent } from "./components/pages/projects/projects.component";
import { ServicesTwoComponent } from "./components/pages/services/services.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", component: HomeOneComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesTwoComponent },
  { path: "projects", component: ProjectsOneComponent },
  { path: "faq", component: FaqComponent },
  { path: "error", component: ErrorComponent },
  { path: "coming-soon", component: ComingSoonComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
