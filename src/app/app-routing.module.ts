import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  // {
  //   path: 'timeline',
  //   loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
  // },
  // {
  //   path: 'talk',
  //   loadChildren: () => import('./talk/talk.module').then( m => m.TalkPageModule)
  // }
  // ,
  // {
  //   path: 'message',
  //   loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
