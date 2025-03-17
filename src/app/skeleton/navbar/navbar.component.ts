import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    constructor(private authService: AuthService) {}

    public logOut(): void {
        this.authService.logout().subscribe({
            next: () => {
                console.log('Logout successful');
            },
        });
    }
}
