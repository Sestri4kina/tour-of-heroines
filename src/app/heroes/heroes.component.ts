import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero-detail/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]//add a service to providers to teach injector how to create this service
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  //inject a service
  constructor(
    private router: Router,
    private heroService: HeroService
    ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
