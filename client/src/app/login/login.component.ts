import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private httpClient: HttpClient) { }

    username: String;
    password: String;

    ngOnInit() {
    }
    login() : void {
        if(this.username != '' && this.password != ''){
            this.httpClient.post("http://localhost:8000/api/v1/userpayment/",
                {
                    "username": this.username,
                    "password": this.password
                })
                .subscribe(
                    user => {
                        if(user == '') {
                            alert("Invalid credentials");
                        }else{
                            localStorage.setItem('id_user', user[0]['id_user']);
                            this.httpClient.get("http://localhost:8000/api/v1/customersuser/"+user[0]['id_user'])
                                .subscribe(
                                    customersuser => {
                                        if(customersuser == '' ){
                                            this.router.navigate(["personal"]);
                                        }else{
                                            localStorage.setItem('id_customer', customersuser[0]['id_customer']);
                                            this.httpClient.get("http://localhost:8000/api/v1/customersstep/"+customersuser[0]['id_customer'])
                                                .subscribe(
                                                    customersstep => {
                                                        if(customersstep == ''){
                                                            this.router.navigate(["personal"])
                                                        }else{
                                                            if(customersstep[0]['id_step'] == 2){
                                                                this.router.navigate(["personal"]);
                                                            }else if(customersstep[0]['id_step'] == 3){
                                                                this.router.navigate(["address"]);
                                                            }else if(customersstep[0]['id_step'] == 4){
                                                                this.router.navigate(["success"]);
                                                            }
                                                        }
                                                    },
                                                    error => {
                                                        console.log("Error", error);
                                                    }
                                                );
                                        }
                                    },
                                    error => {
                                        console.log("Error", error);
                                    }
                                );
                        }
                    },
                    error => {
                        console.log("Error", error);
                    }
                );
        }else {
            alert("Invalid credentials");
        }
    }

}
