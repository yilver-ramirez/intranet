import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
}) 
export class NavbarComponent {
  menu: Menu[] = [];
  botonEstado = 'clic';
  datosCargados = false;
  constructor(private _menuService: MenuService){}

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data=>{
      this.menu = data;
      this.datosCargados = true;
    })
  }
  
  onClick() {
  //   this.servicioLogin
  //     .logout()
  //     .then(() => {
  //       Swal.fire({
  //         position: 'top',
  //         icon: 'error',
  //         title: 'Sesión finalizada Exitosamente',
  //         showConfirmButton: false,
  //         timer: 2000
  //       })  
  //       this.router.navigate(['/login']);
  //     })
  //     .catch((error) => console.log(error));
   }
}
export const botonEstado = state('normal', style({
  transform: 'scale(1)',
  backgroundColor: '#fff'
}));

export const botonTransicion = transition('normal <=> clic', [
  animate('0.2s ease-in-out')
]);

