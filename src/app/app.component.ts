import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Crud';

  users = [
    {name: 'Pepito Perez', phone: 1234567, email: 'prueba1@prueba.com'},
    {name: 'Donjuan Piedra', phone: 1234567, email: 'prueba2@prueba.com'},
    {name: 'Sinnombre Facundo', phone: 1234567, email: 'prueba3@prueba.com'},
    {name: 'Ramon Segundo', phone: 1234567, email: 'prueba4@prueba.com'},
    {name: 'Pedro Ustacio', phone: 1234567, email: 'prueba5@prueba.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  hideAdd:boolean = false;


  addUsers():void{
    this.hideUpdate;
    this.users.push(this.model);
  }
  viewAdd():void{
    this.hideAdd = false;
    this.hideUpdate = true;
  }
  myvalue;
  editUsers(i):void {
    this.hideUpdate = false;
    this.hideAdd = true;
    this.model2.name = this.users[i].name;
    this.model2.phone = this.users[i].phone;
    this.model2.email = this.users[i].email;
    this.myvalue = i;
  }
  updateUsers():void {
    let i = this.myvalue;
    for (let j = 0; j < this.users.length; j++){
      if (i == j){
        this.users[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  deleteUsers(i):void {
    var res = confirm('Seguro que desea eliminar el usuario?');
    if (res){
      this.users.splice(i,1);
    }
  }
}
