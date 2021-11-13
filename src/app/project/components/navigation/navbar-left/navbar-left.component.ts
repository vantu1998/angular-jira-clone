import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import {SearchOutline, PlusOutline} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items.push(new NavItem(SearchOutline, 'Search issues', ''));
    this.items.push(new NavItem(PlusOutline, 'Create issue', ''));
  }

}

class NavItem {
  constructor(public icon: IconDefinition, public tooltip: string, public action: string){}
}

type action = () => void;
