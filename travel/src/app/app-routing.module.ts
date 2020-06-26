import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent} from './blog/blog.component';
import { HomeComponent} from './home/home.component';
import { TravelComponent} from './travel/travel.component';
import { CaddieComponent} from './caddie/caddie.component';

const routes: Routes = [
{

        path: "",component: HomeComponent

},

{

        path:"blog",component: BlogComponent

},
{

        path:"travel",component: TravelComponent

},

{

        path:"caddie",component: CaddieComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
