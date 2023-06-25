import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleadores } from 'src/app/model/empleadores.model';
import { EmpleadoresService } from 'src/app/services/empleadores.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatSlider } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/component/landing/header/header.component';
import { FormBuilder, Validators  } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-empleadores-log',
  templateUrl: './empleadores-log.component.html',
  styleUrls: ['./empleadores-log.component.css']
})
export class EmpleadoresLogComponent implements OnInit {
  lista: Empleadores[]= []
  dataSource: MatTableDataSource <Empleadores> = new MatTableDataSource();
  email: string = "";
  dni: number = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';


  constructor(private as: EmpleadoresService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.as.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
    this.as.getList().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data)
    })
  }

    logeo(): void {
    const empleadores = this.dataSource.data.find(
      (e: Empleadores) => e.email === this.email && e.dni === this.dni
    );

    if (empleadores?.email != null) {
      // ¡El inicio de sesión fue exitoso!
      this.snackBar.open("Inicio de Sesión Exitoso", '', { duration: 2000 });
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['empleados']);


    } else {
      console.log('Credenciales incorrectas');
      console.log('Email ingresado:', this.email);
      console.log('Contraseña ingresada:', this.dni);
      this.snackBar.open("Credenciales Incorrectas", '', { duration: 2000 });
//      console.log(this.dataSource.data);

    }
  }


}
