import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestRoutingModule } from './latest-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { LatestComponent } from './latest.component';
import { PriceContainerComponent } from './components/card-game/components/price-container/price-container.component';
import { TagsContainerComponent } from './components/card-game/components/tags-container/tags-container.component';
import { PlatformContainerComponent } from './components/card-game/components/platform-container/platform-container.component';


@NgModule({
  declarations: [
    LatestComponent,
    BannerComponent,
    CardGameComponent,
    PriceContainerComponent,
    TagsContainerComponent,
    PlatformContainerComponent
  ],
  imports: [
    CommonModule,
    LatestRoutingModule
  ]
})
export class LatestModule { }
