import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    @Output() taskEditedEvent: EventEmitter<Task> = new EventEmitter();
    @Input() tasks: Task[];
    @Input() taskEdited: Task;

    constructor() { }

    ngOnInit(): void {
    }

    sendTaskToEdit(task: Task) {
        this.taskEditedEvent.emit(task);
    }

}
