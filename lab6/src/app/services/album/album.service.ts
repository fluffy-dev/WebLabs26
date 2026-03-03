import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { Photo } from '../../models/photo.model';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this.apiUrl);
    }
 
    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.apiUrl}/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
