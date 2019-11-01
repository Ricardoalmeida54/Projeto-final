import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  protected usuario:Usuario = new Usuario;

  constructor() {

  }

}
