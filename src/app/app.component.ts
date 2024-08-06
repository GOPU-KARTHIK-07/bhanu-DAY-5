import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ChildComponent } from "./components/child/child.component";
import { StateComponent } from "./components/state/state.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ChildComponent, StateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj7';
  constructor(){
    console.log("Compo of homee")
  }
 
  ngOnInit(){
    console.log("nginit called")
 
  }
 
  ngOnChange(){
    console.log("ngOnchange called")
 
  }
 
  ngDoCheck(){
    console.log("ngdocheck called")
   
  }
 
  ngAfterContentInit(){
    console.log("ngaftercontentinit called")
  }
 
  ngAfterViewInit(){
    console.log("ngafterviewinit called")
  }
 
  ngAfterContentChecked(){
    console.log("ngcontentafterchecked called")
 
  }
 
  ngAfterViewChecked(){
    console.log("ngafterviewchecked called")
  }
 
  ngOnDestroy(){
    console.log("ngdestory called")
 
  }
 

}
