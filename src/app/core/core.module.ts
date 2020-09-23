import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrepareService, RecipesService } from "./services/index";
import { UtilService } from "./utils/index";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RecipesService, UtilService, PrepareService],
})
export class CoreModule {}
