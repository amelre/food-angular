import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { AdvancedSearchComponent } from "./components/advanced-search/advanced-search.component";
import { CoreModule } from "./core/core.module";
import { InfoMessageComponent } from "./components/info-message/info-message.component";
import { RecipeInfoComponent } from "./pages/recipe-info/recipe-info.component";
import { HomeComponent } from "./pages/home/home.component";
import { ChipComponent } from "./components/chip/chip.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { ToPrepareListComponent } from './components/to-prepare-list/to-prepare-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    AdvancedSearchComponent,
    InfoMessageComponent,
    RecipeInfoComponent,
    HomeComponent,
    ChipComponent,
    NotificationComponent,
    ToPrepareListComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, APP_ROUTES, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
