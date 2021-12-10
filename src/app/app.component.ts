import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  chetos() {
    Swal.fire('hola', 'chetos');
  }
}
