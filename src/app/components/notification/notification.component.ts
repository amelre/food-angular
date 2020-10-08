import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { PrepareService } from "../../core/services/prepare.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 0, opacity: 0 }),
        animate("0.5s ease-out", style({ height: 300, opacity: 1 })),
      ]),
      transition(":leave", [
        style({ height: 300, opacity: 1 }),
        animate("0.5s ease-in", style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  constructor(public _prepare: PrepareService) {}

  ngOnInit() {}
}
