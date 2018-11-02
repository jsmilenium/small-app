import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  firstname: String;
  lastname: String;
  telephone: String;

  ngOnInit() {
  }
    next() : void {
        this.httpClient.post("http://localhost:8000/api/v1/customers",
            {
                "first_name": this.firstname,
                "last_name": this.lastname,
                "telephone": this.telephone,
                "id_user": localStorage.getItem('id_user')
            })
            .subscribe(
                data => {
                    this.httpClient.get("http://localhost:8000/api/v1/customers")
                        .subscribe(
                            data => {
                                this.httpClient.post("http://localhost:8000/api/v1/customersstep",
                                    {
                                        "id_customer": data[0]['id_customer'],
                                        "id_step": 2
                                    })
                                    .subscribe(
                                        rs => {
                                            console.log("POST Request is successful ", rs);
                                        },
                                        error => {
                                            console.log("Error", error);
                                        }
                                    );
                                localStorage.setItem('id_customer', data[0]['id_customer']);
                            },
                            error => {
                                console.log("Error", error);
                            }
                        );
                },
                error => {
                    console.log("Error", error);
                }
            );
        this.router.navigate(["address"]);
    }
    leave() : void{
        localStorage.clear();
        this.router.navigate(["login"])
    }

}