import { LoginModel } from './../login.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data: LoginModel;
  public message: string;
  public action: string;
  private readonly DEFAULT_MESSAGE = 'Preencha todos os campos antes de enviar.';
  private readonly DEFAULT_ACTION = 'Enviar';

  constructor(
    private loginService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.message = this.DEFAULT_MESSAGE;
    this.action = this.DEFAULT_ACTION;
    this.data = new LoginModel();
    // this.data.username = 'eder.franco';
  }

  public async send() {
    this.action = 'Enviando...';
    try {
      const response: any = await this.loginService.login(this.data).toPromise();
      this.message = '';
      localStorage.setItem('USER_TOKEN', response.token);
      this.router.navigate(['main']);
    } catch (error) {
      this.toastr.error('Tente novamente.', 'Ocorreu um erro.');
    } finally {
      this.action = this.DEFAULT_ACTION;
    }
  }

  public isValid() {
    return this.data.email && this.data.password;
  }

}
