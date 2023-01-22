import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private readonly userService: UserService ){

  }

  ngOnInit(): void {

  }

}
