import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [UsersComponent, UserComponent],
  providers: [UsersService],
  exports: [UsersComponent, UserComponent]
})
export class UsersModule {}
