import { NgModule } from '@angular/core';
import { MentionsListComponent } from './mentions-list.component';
import { MentionDirective } from './mention.directive';

@NgModule({
  declarations: [
    MentionsListComponent,
    MentionDirective
  ],
  imports: [
  ],
  exports: [
    MentionsListComponent,
    MentionDirective
  ]
})

export class NgxMentionsModule { }
