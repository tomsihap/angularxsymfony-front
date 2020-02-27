import {User} from './user';
import {Category} from './category';
import {Tag} from './tag';

export interface Task {

  id: number;
  title: string;
  user: User;
  category: Category;
  tags: Tag[];
}
