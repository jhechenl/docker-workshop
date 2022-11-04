import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, merge, Observable, startWith, switchMap } from 'rxjs';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'age', 'breed', 'createdAt', 'updatedAt'];  
  
  data: any;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  constructor(private catsService: CatsService) {}

  ngAfterViewInit() {
    
    this.catsService.findAll().subscribe((data) => {
      this.isLoadingResults = false;
      this.data = data;
    });
  }

}



/** An example database that the data source uses to retrieve data for the table. */
