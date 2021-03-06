import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() onOpenModal = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  toggleModal() {
    this.onOpenModal.emit();
  }
}
