import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppSidebarService } from 'src/app/app-sidebar/services/app-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // TODO: Why?
})
export class AppSidebarComponent implements OnInit {
  sidebarCollapsed$ = this.appSidebarService.sidebarCollapsed$;
  searchType$ = this.appSidebarService.searchType$;


  constructor(private appSidebarService: AppSidebarService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.appSidebarService.toggleSidebar();
  }
}
