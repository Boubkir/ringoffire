import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {
  cardAction = [
    {
      title: 'Waterfall',
      description:
        'Everyone has to start Push Up  at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.',
    },
    { title: 'You', description: 'You decide who will Push Up ' },
    { title: 'Me', description: 'Congrats! 20 Push Up`s!' },
    {
      title: 'Category',
      description:
        'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.',
    },
    {
      title: 'Bust a jive',
      description:
        'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ',
    },
    { title: 'Chicks', description: 'All girls Push Up´s.' },
    {
      title: 'Heaven',
      description: 'Put your hands up! The last player 15 Push Up´s!',
    },
    {
      title: 'Mate',
      description:
        'Pick a mate. Your mate must always Push Up when you Push Up and the other way around.',
    },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men so Sit Up´s.' },
    { title: 'Quizmaster', description: '' },
    {
      title: 'Never have i ever...',
      description:
        'Say something you never did. Everyone who did it has to fight.',
    },
    {
      title: 'Rule',
      description:
        'Make a rule. Everyone needs to Push Up when he breaks the rule.',
    },
  ];

  title = '';
  description = '';
  @Input() card: string = '';

  constructor() {}

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      console.log(cardNumber);
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
