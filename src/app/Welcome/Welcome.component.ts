import { Component, OnInit } from '@angular/core';
import { MyClass } from '../my-class';



@Component({
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    ngOnInit(): void {
     
    }


    
    name:string="Asmi";
    age:number=26;
    msg:string="Happy to see you";
    isDisabled:boolean=true;
    isDisplay:boolean=true;
    isDisplay1:boolean=true;
    number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    user:MyClass[]= new Array();
    month:string='';
    email:string='';

    monthName(id:number){
      if(id == 9){
        this.month="September";
      }
      else{
        this.month="May"
      }
    }



    displayUser(){
      this.user[0] = new MyClass('Asmi',26);
      this.user[1] = new MyClass('Alan',26);
      this.user[2] = new MyClass('Anusha',26);
      this.user[3] = new MyClass('Raeshma',26);
      this.user[4] = new MyClass('Anto',26);
    }



    disable(){
      if(this.isDisabled){
        this.isDisabled=false;
      }else{
        this.isDisabled=true;
      }
  
    }

    display(){
      if(this.isDisplay== true){
        this.isDisplay = false;
      }
    }

    display1(){
      if(this.isDisplay1== true){
        this.isDisplay1 = false;
      }else{
        this.isDisplay1 = true;
      }
    }

    submit(login1:any){
      console.log("Submitted",login1)
      
    }
    submitted = false;
    onSubmit() {
    this.submitted = true;
  }

  submit1(check:any){
  console.log('submitted',check)
  }
    

  }
