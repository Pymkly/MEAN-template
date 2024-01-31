import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "mean-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  links: any[] = [
    {
      label: "Voiture",
      childs: [
        { label: "Ajouter", link: "/client/car/add" },
        { label: "Modifier", link: "/client/car/update" },
        { label: "Liste", link: "/client/car/list" },
      ],
    },
    {
      label: "Marque",
      childs: [{ label: "Visiter", link: "/client/car/add" }],
    },
    {
      label: "Voiture",
      childs: [
        { label: "Ajouter", link: "/client/car/add" },
        { label: "Modifier", link: "/client/car/update" },
        { label: "Liste", link: "/client/car/list" },
      ],
    },
  ];
  actu: any = {
    label: "",
    childs: [],
  };
  label: string = "";
  clicked: boolean = false;
  menuClass: string = "h-col-menu h-menu ";
  buttonClass: string =
    "d-flex gap-2 align-items-center col-12 justify-content-evenly";
  rightClass: string = "col-10  h-menu h-right";
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.links.length > 0) {
      this.add(this.links[0]);
    }
  }

  clickLabel(child: any, parent: any) {
    this.label = child.label;
    this.actu = parent;
    this.leave();
  }

  add(link) {
    this.clickLabel(link.childs[0], link);
    this.leave();
  }

  click = () => {
    this.clicked = !this.clicked;
    this.clickIt(this.clicked);
  };

  leave() {
    this.clicked = false;
    this.clickIt(this.clicked);
  }

  clickIt(clickValue: boolean) {
    this.menuClass =
      "h-col-menu h-menu " + (clickValue ? " h-col-menu-clicked" : "");
    this.buttonClass =
      "d-flex gap-2 align-items-center col-12 " +
      (clickValue ? "justify-content-between" : "justify-content-evenly");
    this.rightClass =
      "col-10  h-menu " + (clickValue ? "h-right-actif" : "h-right");
  }
}
