import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewVideosComponent } from './components/view-videos/view-videos.component';
import { RedirigirComponent } from './hook/redirigir/redirigir.component';

export const routes: Routes = [
    {path: '', component:HomeComponent },
    {path : 'watch/:v', component:ViewVideosComponent},
    {path : 'redirect/:v', component: RedirigirComponent}

];
