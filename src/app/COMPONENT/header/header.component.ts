import { Component, OnInit } from '@angular/core'
import { DataserviceService } from 'src/app/SERVICE/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nav_bar_class!: string;
  state_bar: boolean = false;
  userLogin:string ="login";

  constructor(public dataService:DataserviceService) { }

  ngOnInit(): void {
  }


  // Esta función lo que hace es cambiar el estado del navegador
  nav_expand(){

    this.state_bar=!this.state_bar
    if(this.state_bar){
      this.nav_bar_class = "mostrar"
      console.log("Dio clic");
    }
    else{
      this.nav_bar_class ="main_nav"
    }
  }
}
