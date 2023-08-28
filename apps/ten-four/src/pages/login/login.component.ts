import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputDirective} from '@stain-win/tf-ui/components';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {debounceTime, tap} from 'rxjs';

@Component({
  selector: 'tf-login',
  standalone: true,
    imports: [CommonModule, InputDirective, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    constructor(
        private fb: FormBuilder,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.loginForm.valueChanges.pipe(
            debounceTime(250),
            tap(_ => console.log(this.loginForm.valid)),
        ).subscribe(() => {
        });
    }

    onSubmit(): void {
        console.log(this.loginForm.getRawValue());
    }
}
