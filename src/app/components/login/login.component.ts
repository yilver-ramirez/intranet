import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  image: string;
  loginForm: FormGroup;
  hide = true;
  loading = false;

  constructor(
    private storage: Storage,
    private _snackBar: MatSnackBar,
    private router: Router,
    private loginUser: LoginUserService
  ) {
    this.image = '';
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    const imageRef = ref(this.storage, 'images/login.png');

    getDownloadURL(imageRef)
      .then((url) => {
        console.log(url);
        this.image = url;
      })
      .catch((error) => console.log(error));
  }

  getErrorMessage(campo: string) {
    const control = this.loginForm.get(campo);
    if (control!.hasError('required')) {
      return 'Este campo es requerido';
    }

    return control!.hasError('email') ? 'No es un email válido' : '';
  }

  ingresar() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log(`Email: ${email}, Password: ${password}`);

      this.loginUser.login(this.loginForm.value)
        .then(Response => {
          this.fakeLoading();
        })
        .catch(error => {
          console.log(error);
          this.error();
          this.loginForm.reset()
        });

    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña inválido', 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
      this._snackBar.open('Inicion sesión correctamente', 'X', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }, 800);
  }

  loginWithGoogle(){
    this.loginUser.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.fakeLoading();
      })
      .catch(error => console.log(error));
  }
}
