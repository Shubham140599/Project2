import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FeaturedfoodComponent } from './featuredfood/featuredfood.component'
import { SocialFeedComponent } from './social-feed/social-feed.component'
import { ChefsComponent } from './chefs/chefs.component'
import { OurProductComponent } from './our-product/our-product.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [AppComponent, FeaturedfoodComponent, SocialFeedComponent, ChefsComponent, OurProductComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
