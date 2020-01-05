import { Component } from '@angular/core';

declare var ExternalJSFileFunction;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor() { }

  CallExternalJSFileFunction()
  {
    ExternalJSFileFunction();
  }

}
