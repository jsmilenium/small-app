import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    constructor(private router: Router, private httpClient: HttpClient) { }

    iban: String;

    ngOnInit() {
    }
    next() : void {
        this.httpClient.post("http://localhost:8000/api/v1/customerspayment",
            {
                "iban": this.iban,
                "id_customer": localStorage.getItem('id_customer')
            })
            .subscribe(
                rs => {
                    this.httpClient.post("http://localhost:8000/api/v1/customersstep",
                        {
                            "id_customer": localStorage.getItem('id_customer'),
                            "id_step": 4
                        })
                        .subscribe(
                            rs => {
                                console.log("POST Request is successful ", rs);
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
        this.router.navigate(["success"]);
    }
    leave() : void{
        localStorage.clear();
        this.router.navigate(["login"])
    }

}
