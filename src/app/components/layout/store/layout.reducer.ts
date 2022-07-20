import {createReducer, on} from '@ngrx/store';
import * as layoutAction from './layout.action';
export interface LayoutState {
  expandedSidebar: boolean;
}
const initialState: LayoutState = {
  expandedSidebar: true
};

export const layoutReducer = createReducer(
  initialState,
  on(layoutAction.expandSidebar, (state) => {
    debugger
    return {...state,expandedSidebar: true};
  }),
  on(layoutAction.narrowSidebar, (state) => {
    debugger
    return {...state,expandedSidebar: false};
  })
)
