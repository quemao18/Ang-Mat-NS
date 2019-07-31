import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  username: string;
  password: string;
  error: string | null;
 

    ngOnInit() {
    }

    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["user"]);
      }else {
        // alert("Invalid credentials");
        //this.error = 'Error';
        this._snackBar.open('Error credentials', 'Close', {
          duration: 3000
        });

      }
      
    }

}
