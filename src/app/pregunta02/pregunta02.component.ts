import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from './Character';
import { CharacterService } from '../character.service';
import { MaterialModule } from '../angular-material/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pregunta02',
  templateUrl: './pregunta02.component.html',
  styleUrls: ['./pregunta02.component.css'],
  standalone: true,
  imports: [MaterialModule,MatTableModule, MatPaginatorModule,NgClass]
})
export class Pregunta02Component implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'gender', 'species'];
  dataSource = new MatTableDataSource<Character>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getHumanCharacters().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}