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

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
      this.cdr.detectChanges();
    });
  }
}
