import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registe-r',
  templateUrl: './registe-r.component.html',
  styleUrls: ['./registe-r.component.css'],
})
export class RegisteRComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    pass: '',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  addrUser() {
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe();
    this.router.navigate(['/login']);
  }
}
