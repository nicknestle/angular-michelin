import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {
  ThemingModule,
  MATERIAL_ICONS_DEFAULT_FONT,
  MaterialIconFonts,
} from '@michelin/theme';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ThemingModule,
  ],
  providers: [
    {
      provide: MATERIAL_ICONS_DEFAULT_FONT,
      useValue: MaterialIconFonts.filled,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'michelin-demo';
}
