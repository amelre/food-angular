import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PrepareService, RecipesService } from "../../core/services";

@Component({
  selector: "app-recipe-info",
  templateUrl: "./recipe-info.component.html",
  styleUrls: ["./recipe-info.component.scss"],
})
export class RecipeInfoComponent implements OnInit, OnDestroy {
  recipeSubscription: Subscription;

  id: number;
  recipe: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public _recipes: RecipesService,
    public _prepare: PrepareService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      if (!this.id) {
        this.router.navigateByUrl("/");
      }
      this.recipeSubscription = this._recipes
        .getRecipe(this.id)
        .subscribe((res) => {
          this.recipe = res;
        });
    });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

  toPrepare() {
    this._prepare.addRecipe({
      id: this.recipe.id,
      title: this.recipe.title,
      readyInMinutes: this.recipe.readyInMinutes,
      image: this.recipe.image,
    });
  }

  toDelete() {
    this._prepare.removeRecipe(this.recipe.id);
  }

  isOnList(): boolean {
    return this._prepare.recipeExists({ id: this.recipe.id });
  }
}
