import {Component, Input, OnInit} from '@angular/core';
import {User} from './user';
import {Category} from './category';
import {Tag} from './tag';
import {Task} from './task';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private httpClient: HttpClient) { }
    title = 'tasks';

    @Input() taskToEdit: Task;

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

    tasks: Task[] = [
        {
            id: 1,
            name: 'Nouvelle tâche',
            user: this.user,
            category: this.category,
            tags: this.tags
        },
        {
            id: 2,
            name: 'Une autre tâche',
            user: this.user,
            category: this.category,
            tags: this.tags
        }
    ];

    task: Task;

    brands: any[];

    ngOnInit() {

        // On requête GET /api/brands pour avoir toutes les marques
        this.httpClient.get('http://localhost:8000/api/brands.json')
            .subscribe((response: any[]) => {
                this.brands = response;
                console.log(this.brands);
        });

        // On requête POST /api/brands pour poster une nouvelle marque
        this.httpClient.post('http://localhost:8000/api/brands', {
            name: 'Audi',
            description: 'Fameuse marque argentine'
        })
            .subscribe((response: any[]) => {
                console.log(response);
            });
    }






    onTaskEditedEvent(task: Task) {
        this.taskToEdit = task;
    }
}
