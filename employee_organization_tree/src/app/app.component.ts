import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public selectedNode = null;
  public loaded = null;

  public employeeData:any = [];



  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:4500';

  getUsers() {
    return this.http.post(this.rootURL + '/change',{});
  }

  ngOnInit(): void {
    console.log('ngIIIIIIIIIIII..')
    this.getUsers().subscribe((data:{employees:{}})=>{
      console.log('data...',data)
      this.model = new go.TreeModel(data.employees);
      this.loaded = true
this.employeeData = data.employees
      console.log('this.model...',this.model)
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  // public model: go.TreeModel
  public model: go.TreeModel = new go.TreeModel(
    []
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}
