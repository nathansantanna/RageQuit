export class Damage {
    type: DamageType;
    value: number;
  // public physical: number;
  // public magical: number;
  // public trueDamage: number;
  // public FlatMagicPenetration: number;
  // public FlatArmorPenetration: number;
  // public PercentageMagicPenetration: number;
  // public PercentageArmorPenetration: number;
  // public MagicReduction: number;
  // public ArmorReduction: number;
  // public PercentageArmorReduction: number;
  // public PercentageMagicReduction: number;

  // public contrstuctor()  {
  //   this.physical = 0 ;
  //   this.magical = 0;
  //   this.trueDamage = 0;
  //   this.FlatMagicPenetration = 0;
  //   this.FlatArmorPenetration = 0;
  //   this.PercentageMagicPenetration = 0;
  //   this.PercentageArmorPenetration = 0;
  //   this.MagicReduction = 0;
  //   this.ArmorReduction = 0;
  //   this.PercentageArmorReduction = 0;
  //   this.PercentageMagicReduction = 0;
  // }
}
export enum DamageType  {
  Physical,
  Magic,
  True
}
