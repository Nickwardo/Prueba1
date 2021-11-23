import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-regristrar-alumno',
  templateUrl: './regristrar-alumno.page.html',
  styleUrls: ['./regristrar-alumno.page.scss'],
})
export class RegristrarAlumnoPage implements OnInit {

  public nombre:string;
  constructor(private router: Router) {}
 
  goToHome(){
    this.router.navigate(['/home'])
  }
  ngOnInit() {
  }
  

}
