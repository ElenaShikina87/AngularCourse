import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ButtonModule} from 'primeng/button';
import {MainComponent} from "./components/main/main.component";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ImageModule} from "primeng/image";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ButtonModule, MainComponent, CascadeSelectModule, ImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'SolarCourse';
}
