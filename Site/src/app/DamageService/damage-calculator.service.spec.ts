import { TestBed } from '@angular/core/testing';

import { DamageCalculatorService } from './damage-calculator.service';
import { Damage } from '../DataStructures/Damage';
import { Defense } from '../DataStructures/Defense';

function overrideSetup() {

}

describe('DamageCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DamageCalculatorService = TestBed.get(DamageCalculatorService);
    expect(service).toBeTruthy();
  });
});
describe('When Calculating Damage', () => {
    it('should calculate damage', () => {
      const damageCalculatorService: DamageCalculatorService = new DamageCalculatorService();
      const actual = damageCalculatorService.CalculateDamage(100, 100);
      const expected = 50;
      expect(expected).toBe(actual);
    });
    it('should calculate FinalResistanceWithFlatPenetration', () => {
      const damageCalculatorService: DamageCalculatorService = new DamageCalculatorService();
      let damage: Damage;
      damage.FlatArmorPenetration = 25;
      const actual = damageCalculatorService.CalculateDamage(100, 100);
      const expected = 50;
      expect(expected).toBe(actual);
    });


});
