import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';
import { CATEGORIES, PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories = CATEGORIES;
  products = PRODUCTS;

  searchQuery: string = '';
  selectedCategory: number = -1;

  deletedProduct: { product: Product, index: number } | null = null;
  undoTimeout: any;

  get filteredProducts(): Product[] {
    const query = this.searchQuery.toLowerCase();
    return this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesCategory = this.selectedCategory == -1 || product.category == this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  onProductRemove(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.deletedProduct = { product: this.products[index], index };
      this.products = this.products.filter(p => p.id !== productId);

      if (this.undoTimeout) {
        clearTimeout(this.undoTimeout);
      }
      this.undoTimeout = setTimeout(() => {
        this.deletedProduct = null;
      }, 6000);
    }
  }

  undoRemove(): void {
    if (this.deletedProduct) {
      const { product, index } = this.deletedProduct;
      const updatedProducts = [...this.products];
      updatedProducts.splice(index, 0, product);
      this.products = updatedProducts;
      this.deletedProduct = null;
      if (this.undoTimeout) {
        clearTimeout(this.undoTimeout);
      }
    }
  }
}

