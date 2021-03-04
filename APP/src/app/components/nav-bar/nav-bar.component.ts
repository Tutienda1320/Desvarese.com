import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { BuscarItemsService } from '../../services/buscar-items.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewChecked {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    private router: Router,
    private buscarItemsService: BuscarItemsService
  ) {}
    
  ngAfterViewChecked(){
    
  }

  ngOnInit() {
    let profileJson :string;
    if(this.auth.isAuthenticated$){
      this.auth.user$.subscribe(
       (profile) => {
     
          this.buscarItemsService.loginAPI(profile.sub, profile.nickname).subscribe(resp=>{
            console.log(resp);    
          });
        });
   
    }
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  buscarItem(texto:string){
    // console.log(texto);

    texto = texto.trim();
    if(texto.length == 0){return;}
    else{
      this.router.navigate(['/buscar',texto])
    }
    

  }
}
