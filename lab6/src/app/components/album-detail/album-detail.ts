import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading: boolean = true;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.albumService.getAlbum(id).subscribe((data) => {
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();
      });
    }
  }

  saveTitle(): void {
    if (this.album && this.newTitle) {
      const updatedAlbum = { ...this.album, title: this.newTitle };
      this.albumService.updateAlbum(updatedAlbum).subscribe((data) => {
        if (this.album) {
          this.album.title = this.newTitle;
          this.cdr.detectChanges();
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
