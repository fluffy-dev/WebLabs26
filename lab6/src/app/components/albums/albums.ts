import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;
  sortOrder: 'default' | 'asc' | 'desc' = 'default';
  private originalAlbums: Album[] = [];

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.originalAlbums = [...data];
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  toggleSort(): void {
    if (this.sortOrder === 'default') {
      this.sortOrder = 'asc';
    } else if (this.sortOrder === 'asc') {
      this.sortOrder = 'desc';
    } else {
      this.sortOrder = 'default';
    }
    this.sortAlbums();
    this.cdr.detectChanges();
  }

  private sortAlbums(): void {
    if (this.sortOrder === 'asc') {
      this.albums = [...this.albums].sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOrder === 'desc') {
      this.albums = [...this.albums].sort((a, b) => b.title.localeCompare(a.title));
    } else {
      this.albums = this.originalAlbums.filter(a => this.albums.some(b => b.id === a.id));
    }
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
      this.originalAlbums = this.originalAlbums.filter((album) => album.id !== id);
      this.cdr.detectChanges();
    });
  }
}
