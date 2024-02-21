import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { User } from '../../app.component';

function setUserNameToUpperCase(user: User): User {
  return {
    ...user,
    name: user.name.toUpperCase(),
  };
}

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <h2>Nome: {{ user.name }}</h2>
    <h2>Profissão: {{ user.profession }}</h2> -->
    @if(showUserAge) {
    <h2>Idade: {{ userAge }}</h2>
    }
  `,
  styles: [],
})
export class InputTransformComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute })
  public userAge!: number;

  @Input({ required: true, transform: booleanAttribute })
  public showUserAge!: boolean;

  ngOnInit(): void {
    console.log(typeof this.userAge);
  }
}
