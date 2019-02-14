import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Muna Trading Co.' }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Muna Trading Co.' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
