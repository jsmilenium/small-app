import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  street: String;
  housenumber: String;
  zipcode: String;
  city: String;

    ngOnInit() {
    }
     next() : void {
        if(this.street != '' && this.housenumber != '' && this.zipcode != '' && this.city != ''){
            this.httpClient.post("http://localhost:8000/api/v1/customersaddress",
                {
                    "street": this.street,
                    "house_number": this.housenumber,
                    "zip_code": this.zipcode,
                    "city": this.city,
                    "id_customer": localStorage.getItem('id_customer')
                })
                .subscribe(
                    data => {
                        this.httpClient.post("http://localhost:8000/api/v1/customersstep",
                            {
                                "id_customer": localStorage.getItem('id_customer'),
                                "id_step": 3
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
            this.router.navigate(["payment"]);
        }else {
            alert("Invalid credentials");
        }
    }
     leave() : void{
         localStorage.clear();
        this.router.navigate(["login"])
    }
}
