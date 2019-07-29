import { Injectable } from '@angular/core';
import { Damage } from '../DataStructures/Damage';
import { Defense } from '../DataStructures/Defense';

@Injectable({
  providedIn: 'root'
})
export class DamageCalculatorService {

  constructor() { }

  CalculateDamage(damage: number, defense: number) {
    let result = 0;
    if (defense > 0) {
      result = damage * (100 / (100 + defense));
    } else {
      result = damage * (2 - (100 / (100 - defense)));
    }
    return result;
  }

  CalculateResistance(Damage: Damage , Champion: Champion, champion: Champion) {
    let result = 0;
    result = resistance ;
  }
}
