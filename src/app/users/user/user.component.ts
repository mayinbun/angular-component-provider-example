import { Component, Input } from "@angular/core";

@Component({
  selector: "user",
  template: `
    <div>{{ firstname }} - {{ lastname }}</div>
  `
})
export class UserComponent {
  @Input() firstname: string;
  @Input() lastname: string;
}
