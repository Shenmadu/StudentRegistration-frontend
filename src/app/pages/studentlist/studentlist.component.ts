import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit { //use when loard table 
  private http;
  public studentList: any;
  public selectedStudent:any={};


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loardStudent();
  }
  loardStudent() {
    this.http.get("http://localhost:8080/student")
      .subscribe((data) => {
        console.log(data);
        this.studentList = data;

      })
  }
  public removeStudent() {  
    let apiUrl= "http://localhost:8080/student/"+ this.selectedStudent.id;
    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
         this.loardStudent();          
          this.selectedStudent="";

      })
  }

setSelectedStudent(student:any){ //use because student object cannot acces in modal tag because out of table
  this.selectedStudent=student;
}


createStudent() {
  this.http.post("http://localhost:8080/student", this.selectedStudent)
    .subscribe(data => {
      console.log(data);
      this.selectedStudent={};
      this.loardStudent();  

    });
  }

}
