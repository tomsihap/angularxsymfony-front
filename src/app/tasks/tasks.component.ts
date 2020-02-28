import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Category} from '../category';
import {User} from '../user';
import {Task} from '../task';
import {Tag} from '../tag';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnChanges {

    @Input() tasks: Task[];
    @Input() taskEdited: Task;

    taskEditedCardVisible = true;

    constructor() { }

    ngOnInit(): void {
        console.log(this.taskEdited);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (typeof (this.taskEdited) !== null ) {
            this.taskEditedCardVisible = true;
        }
    }

    closeEditPanel(): void {
        this.taskEditedCardVisible = false;
    }

}
