import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {User} from '../user';
import {Task} from '../task';
import {Tag} from '../tag';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  user: User = {
    id: 1,
    email: 'test@test.com'
  }

  category: Category = {
    id: 1,
    name: 'To-do list personnelle'
  }

  tags: Tag[] = [
    {
      id: 1,
      name: 'a-faire'
    },
    {
      id: 2,
      name: 'urgent'
    }
  ]

  task: Task = {
    id: 1,
    name: 'Nouvelle tâche',
    user: this.user,
    category: this.category,
    tags: this.tags
  }

  constructor() { }

  ngOnInit(): void {
  }

}
