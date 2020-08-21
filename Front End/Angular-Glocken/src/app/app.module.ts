/* Components/Modules Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import { BasicAuthInterceptor } from './login/helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './login/helpers/error.interceptor';
import { fakeBackendProvider } from './login/helpers/fake-backend';

/* Material Imports */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


/* Project Imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { MaskDirective } from './shared/components/Mask/mask.directive';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { SnackBarService } from './admin/snackBar.service';
import { HelpComponent } from './help/help.component';
import { StarComponent } from './shared/components/star/star.component';
import { LoginComponent } from './login/login.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    UserComponent,
    FooterComponent,
    AdminCreateComponent,
    AdminEditComponent,
    MaskDirective,
    DialogComponent,
    HelpComponent,
    StarComponent,
    LoginComponent,
    StudentAreaComponent,
    CarouselComponent,
    CalendarComponent
  ],
  imports: [
    /* Modules/Components */
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    //Material Imports
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    { provide: DatePipe }, { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
