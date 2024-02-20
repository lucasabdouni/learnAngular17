import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div
    style="
    background-color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  "
  >
    <button (click)="renderBlock = true">Click</button>

    @defer(when renderBlock) {
    <h3 style="color: red">Element rendered on interaction</h3>
    } @placeholder {
    <span> Conteudo inicial do placeholder. </span>
    } @loading {
    <span> Carregando... </span>
    } @error {
    <span> Error... </span>
    }

    <!-- @for(user of userDatasList; track user.id) { @switch (user.age) { @case (20)
    {
    <span style="color: chartreuse">{{ user.name }} is {{ user.age }}</span>
    } @case(30) {
    <span style="color: green">{{ user.name }} is {{ user.age }}</span>
    } @default {
    <span style="color: red">{{ user.name }} is {{ user.age }}</span>
    } } } @empty {
    <span>Dont have datas to show</span>
    } -->

    <!--@if(user.profession ===
    'Software Developer') {
    <span style="color: chartreuse">{{ user.name }} is Software Developer</span>
    } @else if(user.profession === 'Scrum Master') {
    <span style="color: cadetblue">{{ user.name }} is a Scrum Master</span> }
    @else {
    <span style="color: black">{{ user.name }} is {{ user.profession }}</span>
    } } -->
  </div> `,
  styles: [],
})
export class AppComponent {
  renderBlock = false;
  title = 'learnAngular17';
  userDatasList: Array<{
    name: string;
    age: number;
    profession: string;
    id: string;
  }> = [
    { age: 20, name: 'Marcos', profession: 'Software Developer', id: '123' },
    { age: 30, name: 'Marcelo', profession: 'Software Developer', id: '456' },
    { age: 40, name: 'Carlos', profession: 'Scrum Master', id: '789' },
    { age: 30, name: 'Maria', profession: 'UX Designer', id: '123' },
  ];
}
