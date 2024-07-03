import { Component, OnInit, ViewChild } from '@angular/core';

import { Comment } from './comment';
import { CommentService } from '../comment.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from '../angular-material/material/material.module';



@Component({
  selector: 'app-pregunta03',
  standalone: true,
  imports: [MaterialModule,MatTableModule, MatPaginatorModule ],
  templateUrl: './pregunta03.component.html',
  styleUrl: './pregunta03.component.css'
})
export class Pregunta03Component implements OnInit {

  displayedColumns: string[] = ['name', 'email'];
  dataSource = new MatTableDataSource<Comment>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentsWithGarfieldBizEmail().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
