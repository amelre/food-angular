import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ParamsArray } from "../../constants/params-array";

@Component({
  selector: "app-advanced-search",
  templateUrl: "./advanced-search.component.html",
  styleUrls: ["./advanced-search.component.scss"],
})
export class AdvancedSearchComponent implements OnInit {
  @Output() onSelect = new EventEmitter<any>();

  cousines = ParamsArray.COUSINES;

  diets = ParamsArray.DIETS;

  intolerances = ParamsArray.INTOLERANCES;

  types = ParamsArray.TYPES;

  filters = [
    { name: "cuisine", value: [] },
    { name: "diet", value: [] },
    { name: "intolerances", value: [] },
    { name: "type", value: [] },
  ];
  constructor() {}

  ngOnInit() {}

  selectFilter(param: String, name: String): void {
    const index = this.filters.findIndex((f) => f.name === param);
    if (this.isSelected(param, name)) {
      this.filters[index].value = this.filters[index].value.filter(
        (v) => v !== name
      );
    } else {
      this.filters[index].value.push(name);
    }
    this.onSelect.emit(this.filters);
  }

  clean(): void {
    this.filters = this.filters.map((f) => {
      f.value = [];
      return f;
    });
    this.onSelect.emit(this.filters);
  }

  isSelected(param: String, name: String): boolean {
    const index = this.filters.findIndex((f) => f.name === param);

    return this.filters[index].value.find((f) => f === name) !== undefined;
  }
}
