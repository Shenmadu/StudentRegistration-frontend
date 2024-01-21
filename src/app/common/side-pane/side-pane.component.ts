import { Component } from '@angular/core';

@Component({
  selector: 'app-side-pane',
  templateUrl: './side-pane.component.html',
  styleUrls: ['./side-pane.component.css']
})
export class SidePaneComponent {
public selectedMenu="home";

setSelectedmenu(menu:string){
  this.selectedMenu=menu;
}
}
