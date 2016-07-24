import { Component } from '@angular/core';

import { AutoGrowDirective } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ AutoGrowDirective ]
})
export class AppComponent {
  title = 'app works!';
}
