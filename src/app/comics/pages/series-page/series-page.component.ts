import { Component } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';
import { Series } from '../../core/comics-interface';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.scss']
})
export class SeriesPageComponent {
  title = 'Comics';
  public listSeries: any;
  public results: any[] = [];
  public loading = true;
  public searchText: any;
  public resultsId: any[] = [];

  constructor(private SeriesMarvel: MovieServiceService, private dialog: MatDialog) {
    this.getSeries();
  }



  getSeries() {
    this.SeriesMarvel.getSeries().subscribe((data: any) => {
      this.listSeries = data.data;
      this.results = this.listSeries.results;
      this.results.sort((a, b) => a.title.localeCompare(b.title));
      setTimeout(() => {
        this.loading = false;
      }, 1000);

    })
  }

  cargar(id: number) {
    this.SeriesMarvel.getSeriesId(id).subscribe((data: any) => {
      this.resultsId = data.data.results;
    })
  }

  AbrirPop(id: number): void {

    if (!id) throw Error("Se necesita el id")

    this.SeriesMarvel.getSeriesId(id).subscribe((data: any) => {

      this.resultsId = data.data.results;
    })

    const dialogRef = this.dialog.open(PopupComponent, {
      data: this.resultsId,
    });

    dialogRef.afterClosed().subscribe(resultsId => {
      this.resultsId;
    });
  }
}
