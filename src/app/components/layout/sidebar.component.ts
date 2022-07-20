import {ChangeDetectionStrategy, Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {LayoutState} from './store/layout.reducer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  template: `
    <div [style.width]="(expanded$ | async) ? '240px' : '24px'" class="h-full bg-[#f4f5f7] will-change-[width] transition-[width] ease-in">
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  expanded$!: Observable<boolean>
  constructor(private store: Store<{layoutState: LayoutState}>) {}
  ngOnInit() {
    this.expanded$ = this.store.select(state => state.layoutState.expandedSidebar);
  }
}

@NgModule({
  declarations: [SidebarComponent],
  imports:[CommonModule],
  exports: [SidebarComponent]
})
export class SidebarComponentModule {}
