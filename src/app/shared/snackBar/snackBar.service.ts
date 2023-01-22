
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar){

  }


  public openSnackBar(message: string,
    action: string, panelClass: string,
    duration: number = 4000,
    hzPosition: MatSnackBarHorizontalPosition = "right" ,
    vtPosition: MatSnackBarVerticalPosition = "top"  ) {
    this._snackBar.open(message, action, {
        duration: duration,
        horizontalPosition: hzPosition,
        verticalPosition: vtPosition,
        panelClass: panelClass,
    });
  }


}
