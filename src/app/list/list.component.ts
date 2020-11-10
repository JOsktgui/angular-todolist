import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Task } from '../cache';
import { GET_TASKS } from '../graphql/queries';
import { taskMutations } from '../graphql/mutations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({ query: GET_TASKS })
      .valueChanges.subscribe(({ data }: any) => {
        this.tasks = data.tasks;
      });
  }

  removeTask(id: number): void {
    taskMutations.removeTask(id);
  }
}
