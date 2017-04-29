/*
*	manager-dashboard.component.ts
*	Manager dashboard component that is displayed to Manager when they log in.
*	The Manager options are:
*		-Checkout
*		-Add/Edit/Search Discount Codes
*		-Add/Edit/Search Employee
*		-Add/Edit/Search Customer Profile
*		
*/
import { Component, Input } from '@angular/core';
import { Manager, iMenuOption } from '../classes';
import { EmployeeService } from '../services/employee.service';


@Component({
	selector: 'manager-dashboard',
	template: `
		<h2>Manager Dashboard</h2>
		<products></products>
		<button 
		*ngFor="let option of options">
		<a [routerLink]="option.urlPath">{{option.name}}</a>
		</button>
	`,

})

export class ManagerDashboardComponent {
	manager:Manager;
	
	constructor(private employeeService:EmployeeService){
		employeeService.employeeObs.subscribe((emp:Manager)=>{
			this.manager = emp;
			console.log(emp);
		})
	}


	options:iMenuOption[]=[{
				name:"Checkout",
				urlPath:"/checkout"
			},
			{
				name:"Search Products",
				urlPath:"products/search"
			},
			{
				name:"Add Customer Profile",
				urlPath:"customers/add"
			},
			{
				name:"Edit Customer Profile",
				urlPath:"customers/edit"
			},
			{
				name:"Search Customer Profile",
				urlPath:"customers/search"
			},
			{
				name:"Add Employee Profile",
				urlPath:"employees/add"
			},
			{
				name:"Edit Employee Profile",
				urlPath:"employees/edit"
			},
			{
				name:"Search Employee Profile",
				urlPath:"employees/search"
			},
			{
				name:"Add Discount Profile",
				urlPath:"discounts/add"
			},
			{
				name:"Edit Discount Profile",
				urlPath:"discounts/edit"
			},
			{
				name:"Search Discount Profile",
				urlPath:"discounts/search"
			}]
	ngOnInit(){
	}
	ngOnChanges(){
		

	}
}
