import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { ViewVideosComponent } from './components/view-videos/view-videos.component';
import { RedirigirComponent } from './hook/redirigir/redirigir.component';

export const routes: Routes = [
    {path: '', component:HomeComponent },
    {path : 'watch/:v', component:ViewVideosComponent},
    {path : 'redirect/:v', component: RedirigirComponent}

=======
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent}
>>>>>>> 125d05e1bf9012643a0e9be524ac4906f421147a
];
