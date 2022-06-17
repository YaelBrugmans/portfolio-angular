import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component : IndexComponent,
  },
  {
    path: 'index',
    component : IndexComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'works',
    component: WorksComponent,
  },
  {
    path: 'works/:id',
    component: WorksComponent,
  },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
