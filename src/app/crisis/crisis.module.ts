import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisService }          from './crisis.service';
import { CrisisRoutingModule }    from './crisis-routing.module';

export const moduleConfig = {
  imports:      [ CommonModule, CrisisRoutingModule ],
  declarations: [ CrisisDetailComponent, CrisisListComponent ],
  providers:    [ CrisisService ]
}

@NgModule(moduleConfig)
export class CrisisModule {}
