import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private http;
   public isSubmitionDisabled = false;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  public student = {
    firstName: null,
    lastName: null,
    contactNumber: null
  }
  public recentSavedStudent:any;

  createStudent() {
    this.recentSavedStudent=null;

    this.isSubmitionDisabled = true;
    this.http.post("http://localhost:8080/student", this.student)
      .subscribe(data => {
        this.isSubmitionDisabled = false;
        console.log(data);
        this.recentSavedStudent=data;

        this.student={
          firstName: null,
          lastName: null,
          contactNumber: null
        }

      });
  }

}
