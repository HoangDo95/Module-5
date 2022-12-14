import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../category.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  idDelete: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
  showDelete(product: Product) {
    this.idDelete = product.id;
  }

  delete(idDelete: number) {
    console.log(idDelete);
    this.categoryService.deleteCategory(idDelete).subscribe(() => {
        this.ngOnInit();
      }, e => {
        console.log(e);
      }
    );
  }

}
