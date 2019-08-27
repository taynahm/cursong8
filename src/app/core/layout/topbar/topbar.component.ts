import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../modules/access-control/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.service.logout();
    this.toastr.info('Você saiu do sistema');
    this.router.navigate(['login']);
  }

}
