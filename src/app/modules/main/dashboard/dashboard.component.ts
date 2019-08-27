import { UserService } from './../../../core/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { ResponseModel } from 'src/app/core/models/response.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public users: UserModel[];
  public loading: boolean;
  subscription: any;

  constructor(
    private service: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.users = [];
    this.getUsers();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getUsers() {
    this.loading = true;
    this.subscription = this.service.getAll().subscribe(
      (response: ResponseModel) => {
        this.users = response.data;
        this.loading = false;
      },
      (error) => {
        this.toastr.error('Lista indisponível');
        this.loading = false;
      }
    );
  }

}
