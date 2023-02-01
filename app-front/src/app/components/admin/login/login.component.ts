import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/http/services/admin/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });
  loading: boolean | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe((res) => (this.loading = res));
  }

  sendForm(_event: MouseEvent) {
    const { email, password } = this.form.getRawValue();
    if (!email && !password) return;

    this.loadingService.start();
    this.authService
      .auth(email, password)
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe(({ success }) => {
        if (success) this.router.navigate(['/admin']);
      });
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
