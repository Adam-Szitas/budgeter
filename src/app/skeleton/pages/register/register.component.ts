import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, RouterModule]
})
export class RegisterComponent implements OnInit {
    public formGroup: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {}

    public ngOnInit() {
        this.formGroup = this.fb.group({
            name: ['', [Validators.required]],
            // mail: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(2)]],
        });
    }

    public onRegister(): void {
        this.authService.register(this.formGroup.value).subscribe({
            next: () => {
                this.router.navigateByUrl('/dashboard');
            },
            error: console.error,
        });
    }
}

export interface Credentials {
    name: string;
    mail?: string;
    password: string;
}
