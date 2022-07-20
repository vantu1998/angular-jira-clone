import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LayoutComponent, LayoutComponentModule} from './components/layout/layout.component';


@NgModule({
  imports: [LayoutComponentModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: []
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
