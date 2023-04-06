import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HomeService {
  GlobalComponent = "https://ulink.asia/api/google/ithub8808/log";

  constructor(private http: HttpClient) {}

  setParam(id: number) {
    return this.http.get(`${this.GlobalComponent}?a=${id}`, {
      responseType: "text",
    });
  }
}
