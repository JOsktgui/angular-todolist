import { Component } from '@angular/core';
import { taskMutations } from './graphql/mutations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-test';
  text = '';

  addTask(): void {
    if (!this.text.length) { return; }

    taskMutations.addTask(this.text);
    this.text = '';
  }
}
