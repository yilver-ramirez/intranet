import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/services/login-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu: Menu[] = [];
  cssLink = '@angular/material/prebuilt-themes/indigo-pink.css';

  constructor(private _menuService: MenuService, private router: Router,
    private loginUser: LoginUserService, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;

    })
  }

  onClick() {
    this.loginUser
      .logout()
      .then(() => {
        this.success();
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }

  success() {
    this._snackBar.open('Salió con exito', 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}


