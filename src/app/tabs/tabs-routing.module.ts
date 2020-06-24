import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'kone-kone',
    component: TabsPage,
    children: [
      {
        path: 'timeline',
        loadChildren: () => import('../timeline/timeline.module').then( m => m.TimelinePageModule)
      },
      {
        path: 'talk',
        loadChildren: () => import('../talk/talk.module').then(m => m.TalkPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
      },
      {
        path: '',
        redirectTo: '/kone-kone/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/kone-kone/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
