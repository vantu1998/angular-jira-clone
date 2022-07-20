import {ChangeDetectionStrategy, Component, NgModule, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {LayoutState} from './store/layout.reducer';
import {CommonModule} from '@angular/common';
import {expandSidebar, narrowSidebar} from './store/layout.action';

@Component({
  selector: 'app-resizer',
  template: `
    <div (click)="toggle()"
         class="w-6 relative h-full border-l-2 border-[#dfd3d3] border-solid hover:border-blue-600 hover:cursor-ew-resize ">
      <div class="absolute top-8 left-[-14px] border border-solid rounded-full overflow-hidden">
        <button class="w-[24px] h-[24px] flex items-center justify-center bg-white hover:bg-blue-500 hover:text-white">
          <mat-icon
            class="text-[20px] w-auto h-auto">{{(expanded$ | async) ? 'chevron_left' : 'chevron_right'}}</mat-icon>
        </button>
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizerComponent implements OnInit {
  expanded$!: Observable<boolean>;
  expanded!: boolean;

  constructor(private store: Store<{ layoutState: LayoutState }>) {
  }

  toggle() {
    if (!this.expanded) {
      this.store.dispatch(expandSidebar());
    } else {
      this.store.dispatch(narrowSidebar());
    }
  }

  ngOnInit() {
    this.handleResizer();
    this.expanded$ = this.store.select(state => state.layoutState.expandedSidebar).pipe(tap(expanded => {
      this.expanded = expanded;
    }));
  }

  handleResizer() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
    });
  }
}

@NgModule({
  declarations: [ResizerComponent],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [ResizerComponent]
})
export class ResizerComponentModule {
}
