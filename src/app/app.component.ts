import { Component } from '@angular/core';

import { AutoGrowDirective, UnlessDirective } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ AutoGrowDirective, UnlessDirective ]
})
export class AppComponent {
  title = 'app works!';
}
