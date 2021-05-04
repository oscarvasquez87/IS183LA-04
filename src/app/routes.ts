
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: 'About'
        }
    },
    {
        path: 'artist',
        component: ArtistComponent,
        data: {
            name: 'Artist'
        }
    },
    {
        path: 'artwork',
        component: ArtworkComponent,
        data: {
            name: 'Artwork'
        }
    }

];

export const routerModule = RouterModule.forRoot(routes);

