import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, Users } from './app.service';
import { MatTableDataSource } from '@angular/material/table';
import{MatPaginator, PageEvent} from '@angular/material/paginator';
import{MatSort} from '@angular/material/sort'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'assignment-project';

  currentPage =0;
  usersData!:any;
  public displayColumn = ['userId', 'id', 'title', 'body']
  public dataSources!: MatTableDataSource<Users>;
@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;


  constructor(private userData:AppService){}

  ngOnInit(): void {
    
    this.getUserData();
    setTimeout(()=>{
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
    }, 2000)
   

  }
  
getUserData(){
  this.userData.getUserList().subscribe((data)=>{
    this.usersData = data;
    this.dataSources = new MatTableDataSource(this.usersData)

    // this.dataSources.paginator = this.paginator;
    //  this.dataSources.sort = this.sort;
     
  })
}


applyFilter(event:Event){
const filterValue = (event.target as HTMLInputElement).value;
this.dataSources.filter = filterValue.trim().toString();
if(this.dataSources.paginator){
  this.dataSources.paginator.firstPage();
}
}
}
