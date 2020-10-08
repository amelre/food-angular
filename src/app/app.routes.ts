import { Routes, RouterModule } from "@angular/router";
import { RecipeInfoComponent } from "./pages/recipe-info/recipe-info.component";
import { HomeComponent } from "./pages/home/home.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "recipe/:id", component: RecipeInfoComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
