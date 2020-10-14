import { InjectionToken, Provider } from "@angular/core";
import { map } from "rxjs/operators";
import { UsersService } from "./users.service";

export const UsersStartingWithC = new InjectionToken("UsersStartingWithC");

export const PROVIDE_USERS_STARTING_WITH_C: Provider = {
  provide: UsersStartingWithC,
  useFactory: getUsersStartingWithC,
  deps: [UsersService]
};

const filterByStartingLetterC = user => {
  return user.name.charAt(0) === "C";
};

function getUsersStartingWithC(service: UsersService) {
  return service
    .getUsers()
    .pipe(map((users: any) => users.filter(filterByStartingLetterC)));
}
