import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PageService } from '../../services/page.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    constructor(
        private authService: AuthService,
        private pageService: PageService,
    ) {}

    public logOut(): void {
        this.authService.logout().subscribe({
            next: () => {
                this.pageService.redirectTo('');
                console.log('Logout successful');
            },
        });
    }
}
