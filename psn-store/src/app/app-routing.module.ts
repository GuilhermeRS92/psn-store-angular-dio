import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'latest', pathMatch: 'full' },
  { path: 'latest', loadChildren: () => import('./pages/latest/latest.module').then(m => m.LatestModule)},
  { path: 'collections', loadChildren: () => import('./pages/collections/collections.module').then(m => m.CollectionsModule)},
  { path: 'deals', loadChildren: () => import('./pages/deals/deals.module').then(m => m.DealsModule)},
  { path: 'ps5', loadChildren: () => import('./pages/ps5/ps5.module').then(m => m.Ps5Module)},
  { path: 'subscriptions', loadChildren: () => import('./pages/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)},
  { path: 'browse', loadChildren: () => import('./pages/browse/browse.module').then(m => m.BrowseModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
