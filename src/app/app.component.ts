import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DataComponent } from "./data.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, DataComponent],
  template: `
    <h1>Live updates loading indicator PoC</h1>
    <span>As <a
      href="https://www.reddit.com/r/Angular2/comments/1ddd1o0/can_an_observable_send_null_while_it_is_executing/"> response to a Reddit post in <code>r/Angular2</code></a></span>
    <h2>👇 Live update component</h2>
    <app-data></app-data>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
}
