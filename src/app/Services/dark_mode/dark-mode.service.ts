import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  switchTheme = new FormControl(false)
  @HostBinding('class') className=""
  darkClass="dark"
  lightClass="light"
  overlay: any;

  constructor() { overlay: OverlayContainer}

 DarkMode(){
  this.switchTheme.valueChanges.subscribe((currentTheme) => {
    this.className = currentTheme ? this.darkClass : this.lightClass
    if(currentTheme){
      this.overlay.getContainerElement().classList.add(this.darkClass)
    }else{
      this.overlay.getContainerElement().classList.remove(this.darkClass)
    }
  })
}
}
