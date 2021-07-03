import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ComponentsModule } from '../components.module';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

componentes: Observable <Componente[]>;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.componentes = this.DataService.getMenuOpts();

  }

}


