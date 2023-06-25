import { Component, OnInit } from '@angular/core';
import { Head } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogoComponent>){}

  ngOnInit(): void {}
  confirmito(){
    this.dialogRef.close()
  }
}
