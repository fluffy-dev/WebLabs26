import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Album } from '../../models/album.model';
import { Photo } from '../../models/photo.model';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    /** Client-side cache for updated/deleted albums */
    private updatedAlbums = new Map<number, Album>();
    private deletedAlbumIds = new Set<number>();

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this.apiUrl).pipe(
            map(albums => albums
                .filter(a => !this.deletedAlbumIds.has(a.id))
                .map(a => this.updatedAlbums.has(a.id) ? this.updatedAlbums.get(a.id)! : a)
            )
        );
    }

    getAlbum(id: number): Observable<Album> {
        if (this.updatedAlbums.has(id)) {
            return of(this.updatedAlbums.get(id)!);
        }
        return this.http.get<Album>(`${this.apiUrl}/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
            tap(() => {
                this.updatedAlbums.set(album.id, album);
            })
        );
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            tap(() => {
                this.deletedAlbumIds.add(id);
                this.updatedAlbums.delete(id);
            })
        );
    }
}
