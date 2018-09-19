import { Component, Input } from "@angular/core";
import { MovieFavory } from "../../../shared/models/movie-favory";

@Component({
    selector: 'app-movie-favory-summary',
    templateUrl: './movie-favory-summary.component.html',
    styleUrls: ['./movie-favory-summary.component.css']
})
export class MovieFavorySummaryComponent {
    @Input('favory') favory: MovieFavory;
}