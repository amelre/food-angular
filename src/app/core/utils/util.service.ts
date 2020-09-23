import { Injectable } from "@angular/core";
import { ParamsArray } from "../../constants/params-array";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  transformToQuery(ParamsArray) {
    let params = {};

    for (let param of ParamsArray) {
      if (param.value.length > 0) {
        params[param.name] = param.value.join();
      }
    }
    return params;
  }
}
