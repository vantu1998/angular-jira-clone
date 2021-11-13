import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { NavbarLeftComponent } from './components/navigation/navbar-left/navbar-left.component';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {SearchOutline, PlusOutline} from '@ant-design/icons-angular/icons';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const icons: IconDefinition[] = [SearchOutline, PlusOutline];
@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    NavbarLeftComponent,
    ResizerComponent,
  ],
  imports: [
    CommonModule,
    NzIconModule.forChild(icons),
    NzToolTipModule
  ],
  exports: [
    NavigationComponent,
    SidebarComponent,
    NavbarLeftComponent,
    ResizerComponent,
  ]
})
export class ProjectModule { }
