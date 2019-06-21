import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})
export class EntryComponent {
  title: string = 'My First Photo';
  photo: string = 'http://placehold.it/800x500?text=madeofhuman';
  description: string = 'A description of my first photo';
  comments: any[] = [
    {
      name: 'John',
      comment: 'A comment.'
    },
    {
      name: 'Andrew',
      comment: 'Another comment.'
    },
    {
      name: 'Scott',
      comment: 'Just one more comment.'
    },
  ];
}
