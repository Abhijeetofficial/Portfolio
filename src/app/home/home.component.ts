import { Component, NgModule, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
  loop: true,
  typeSpeed: 90,
  deleteSpeed: 90,
  typeColor: 'aqua'
})

writer
  .type('I am a Full Stack Developer.')
  .rest(500)
  .changeOps({ deleteSpeed: 80 })
  .remove(21)
  .type('Programmer.')
  .rest(500)
  .remove(11)
  .type('Learner.')
  .rest(500)
  // .changeOps({ deleteSpeed: 20 })
  // .remove(21)
  // .type('change options on the go')
  // .rest(500)
  .clear()
  .start()
  }

}
