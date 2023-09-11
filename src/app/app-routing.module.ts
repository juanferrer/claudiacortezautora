import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog,component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'libros', component: BooksComponent },
  { path: 'autor', component: AuthorComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
