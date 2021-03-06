import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'My First Angular App';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
  	private heroService: HeroService,
  	private router: Router,
  	) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
     this.heroService.getHeroes()
     .then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
