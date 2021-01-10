import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <h3>Extension ngClass</h3>
  <h4>Agrandissez ou réduisez la fenêtre </h4>
  <div 
      fxLayout="row"
      fxLayoutAlign="center center"
      class="container">
    <div class="red-block"
         ngClass.xs="red-block border">
    </div>
</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: grey;
      height: 400px;
      width: 100%;
    }
    
    .red-block {
      background-color: red;
      height: 50px;
      width: 50px;
    }
    
    .border {
      border: 5px solid blue;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}