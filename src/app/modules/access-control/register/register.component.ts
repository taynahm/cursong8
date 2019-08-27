import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginModel } from './../login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public data: LoginModel;
  public message: string;
  public req: Subscription;
  public action = 'Enviar';

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.data = new LoginModel();
  }

  ngOnDestroy(): void {
    if (this.req) {
      this.req.unsubscribe();
    }
  }

  // public async register() {
  //   this.action = 'Enviando...';
  //   try {
  //     const response: any = await this.service.register(this.data).toPromise();
  //     this.message = 'Usuário cadastrado com sucesso!';
  //     this.action = 'Enviar';
  //   } catch (error) {
  //     this.message = 'Ocorreu um erro!';
  //     this.action = 'Enviar';
  //     console.error(error);
  //   }
  // }

  register() {
    this.action = 'Enviando...';
    this.req = this.service.register(this.data)
      .subscribe(
        () => {
          this.message = 'Usuário cadastrado com sucesso!';
          this.action = 'Enviar';
        },
        (error) => {
          this.message = 'Ocorreu um erro!';
          this.action = 'Enviar';
          console.error(error);
        }
      );
  }

  public isValid() {
    return this.data.email && this.data.password;
  }

}
