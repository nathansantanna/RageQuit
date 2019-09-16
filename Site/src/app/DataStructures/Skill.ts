import { ChampionComponent } from '../Champion/champion.component';

export class Skill {
  BaseDamage: number;
  ApRatio: number;
  AdRatio: number;
  ManaRatio: number;
  Level: number;


  CalculateDamage(champion: ChampionComponent): number  {
    return this.BaseDamage + (champion.AbilityPower * this.ApRatio)
      + (champion.AttackDamage * this.AdRatio)
      + (champion.Mana * this.ManaRatio);
  }
}

export class AdditiveStackSkill extends Skill {
  Stacks: number;
  StackApRatio: number;
  StackManaRatio: number;
  StackBaseDamageRatio: number;

  CalculateDamage(champion: ChampionComponent)  {
    const totalDamage =  super.CalculateDamage(champion)
      + ((this.Stacks * this.StackApRatio) * champion.AbilityPower )
      + ((this.Stacks * this.ManaRatio) * champion.Mana )
      + ((this.Stacks * this.StackBaseDamageRatio) * this.BaseDamage);
    return totalDamage;
  }
}
