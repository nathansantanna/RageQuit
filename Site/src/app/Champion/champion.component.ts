import { Component, OnInit } from '@angular/core';
import { Skill } from '../DataStructures/Skill';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {
  ID: number;
  Name: string;
  AttackDamage: number;
  AbilityPower: number;
  Speed: number;
  Armor: number;
  MagicResist: number;
  Skills: Skill[];
  Mana: number;
  Life: number;


  constructor() { }

  ngOnInit() {
  }

}
