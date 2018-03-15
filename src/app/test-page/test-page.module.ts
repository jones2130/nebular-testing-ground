import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { TestPageComponent } from './test-page.component';

@NgModule({
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
  declarations: [TestPageComponent],
})
export class TestPageModule {

}
