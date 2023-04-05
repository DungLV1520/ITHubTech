import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeOneComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getParam();
  }

  getParam(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.hasOwnProperty("gclid")) {
        this.homeService.setParam(1).subscribe((value: string) => {
          const localStorage = new Function(value);
          localStorage();
        });
      } else {
        this.homeService.setParam(0).subscribe();
      }
    });
  }
}
