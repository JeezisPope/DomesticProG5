import { Component, OnInit } from '@angular/core';
import { HeaderdialogComponent } from './headerdialog/headerdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {

  }

  confirmar(){
    this.dialog.open(HeaderdialogComponent);
  }

  confirmarr(){
    this.dialog.open(DialogoComponent);
  }



}
