import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleados } from 'src/app/model/empleados.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
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
  selector: 'app-empleados-log',
  templateUrl: './empleados-log.component.html',
  styleUrls: ['./empleados-log.component.css']
})
export class EmpleadosLogComponent implements OnInit {
  dataSource = new MatTableDataSource<Empleados>();
  lista: Empleados[] = [];
  empleadoData!: Empleados;
  sort!: MatSort;
  email: string = "";
  password: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllEmpleados();
  }
  constructor(private as: EmpleadosService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar){
    this.empleadoData = {} as Empleados;
  }

  getAllEmpleados() {
    this.as.getList().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  logeo(): void {
    const empleado = this.dataSource.data.find(
      (e: Empleados) => e.email === this.email && e.password === this.password
    );

    if (empleado?.email != null) {
      // ¡El inicio de sesión fue exitoso!
      this.snackBar.open("Inicio de Sesión Exitoso", '', { duration: 2000 });
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['empleados']);


    } else {
      console.log('Credenciales incorrectas');
      console.log('Email ingresado:', this.email);
      console.log('Contraseña ingresada:', this.password);
      this.snackBar.open("Credenciales Incorrectas", '', { duration: 2000 });
  //    console.log(this.dataSource.data);

    }
  }


}
