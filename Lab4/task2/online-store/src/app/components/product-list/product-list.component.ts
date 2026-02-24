import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [...products];
  sortOrder: string = 'default';
  minRating: number = 0;
  uniqueRatings: number[] = [...new Set(products.map(p => p.rating))].sort((a, b) => b - a);

  applyFilters(): void {
    let filtered = [...products];

    // Filter by rating
    if (this.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= this.minRating);
    }

    // Sort by price
    if (this.sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    this.products = filtered;
  }

  filterByRating(rating: number): void {
    this.minRating = rating;
    this.applyFilters();
  }

  sortProducts(): void {
    this.applyFilters();
  }
}
