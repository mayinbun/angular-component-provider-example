import { Component, Inject } from "@angular/core";
import { UsersStartingWithC } from "./users.provider";
import { PROVIDE_USERS_STARTING_WITH_C } from "./users.provider";

@Component({
  selector: "users",
  templateUrl: "users.component.html",
  providers: [PROVIDE_USERS_STARTING_WITH_C]
})
export class UsersComponent {
  constructor(@Inject(UsersStartingWithC) public users$) {
    console.log(this.users$);
  }
}
