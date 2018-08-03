import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSidebarService {
  idebarCollapsed$ = this.store.select(getSidebarCollapsed);
  searchType$ = this.store.select(PlayerSearch.getSearchType);

  constructor(
    private store: Store<EchoesState>,
    private appApi: AppApi) { }

  toggleSidebar() {
    this.appApi.toggleSidebar();
  }
}