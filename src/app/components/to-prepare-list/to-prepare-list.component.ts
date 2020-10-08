import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { PrepareService } from "../../core/services/prepare.service";

@Component({
  selector: "app-to-prepare-list",
  templateUrl: "./to-prepare-list.component.html",
  styleUrls: ["./to-prepare-list.component.scss"],
})
export class ToPrepareListComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  recipes: Recipe[] = this._prepare.recipesToPrepare;

  constructor(public _prepare: PrepareService) {}

  ngOnInit() {}

  closeModal() {
    this.onClose.emit();
  }
}
