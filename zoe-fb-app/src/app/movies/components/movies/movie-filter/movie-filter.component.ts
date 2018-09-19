import { Input, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();


  }

  ngOnInit() {
    this.log('Init...');
  }
  private log(obst: any) {

    console.log(JSON.stringify(obst, null, 3));
  }
}
