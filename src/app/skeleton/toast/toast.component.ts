import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'skeleton-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
    @Input()
    public text: string | null = null;
}
