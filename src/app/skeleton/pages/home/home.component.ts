import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UrlService } from '../../../services/url.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule],
})
export class HomeComponent {
    constructor(private urlService: UrlService) {}

    public getDocuments(): void {
        this.urlService.getDocument().subscribe({
            next: (data) => {
                console.log(data);
            },
        });
    }
}
