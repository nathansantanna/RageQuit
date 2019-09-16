import { Injectable } from '@angular/core';
import { Damage } from '../DataStructures/Damage';
import { Defense } from '../DataStructures/Defense';
import { Skill } from '../DataStructures/Skill';
import { ChampionComponent } from '../Champion/champion.component';

@Injectable({
  providedIn: 'root'
})
export class DamageCalculatorService {

  constructor() { }

  CalculateSkillDamage(champion: ChampionComponent, skill: Skill)  {
    return skill.CalculateDamage(champion);
  }

  CalculateDamage(damage: number, defense: number): number {
    let result = 0;
    if (defense > 0) {
      result = damage * (100 / (100 + defense));
    } else {
      result = damage * (2 - (100 / (100 - defense)));
    }
    return result;
  }

}
