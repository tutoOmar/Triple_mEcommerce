import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService , User} from 'src/app/SERVICE/auth.service';
import { DataserviceService } from 'src/app/SERVICE/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = {
    name:'',
    email:'',
    pass: ''
  }
  validation:string="";
  state_login!:boolean;
  constructor(
    private authService:AuthService,
    private router:Router,
    private dataService:DataserviceService) { }

  ngOnInit(): void {

  }
  askLogin(){
    console.log(this.state_login);
    if(this.state_login == true){

      this.router.navigate(['/cart']);
    }
  }

  login(){
    delete this.user.name;
    this.authService.signin(this.user).subscribe((res:any)=>{
      this.validation=res;
      localStorage.setItem('token',res.token);
      this.state_login = true;
      console.log(this.state_login);
      this.dataService.userName = "Hola "+ (res.rows[0].name[0].toUpperCase())+(res.rows[0].name.substring(1));
      this.router.navigate(['/cart']);
    })
  }


}
