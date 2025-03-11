import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToDoAppComponent} from './to-do-app/to-do-app.component'
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  imports: [UsersComponent,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ToDoAppComponent,
            HeaderComponent,
          ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-app';

}
