import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PlayersComponent } from './features/players/players.component';
import { LiveScoresComponent } from './features/live-scores/live-scores.component';
import { HistoryComponent } from './features/history/history.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'live-scores', component: LiveScoresComponent },
    { path: 'history', component: HistoryComponent },
    { path: '**', redirectTo: '' }
];
