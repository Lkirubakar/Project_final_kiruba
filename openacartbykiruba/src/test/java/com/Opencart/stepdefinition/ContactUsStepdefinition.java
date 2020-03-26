package com.Opencart.stepdefinition;


import com.Opencart.excelutility.excel_data;
import com.Opencart.pagesobjects.ContactUsPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ContactUsStepdefinition {
		ContactUsPage cs=new ContactUsPage();
		excel_data excel= new excel_data();
		
		@Given("^launching browser for contactus scenario$")
		public void launching_browser_for_contactus_scenarior() throws Throwable {
			cs.browsing("firefox");
		}

		@When("^the user opens the website$")
		public void the_user_opens_the_website() throws Throwable {
			cs.opencart_pgcontact();
		}

		@Then("^the user enters the contactus details$")
		public void the_user_enters_the_contactus_details() throws Throwable {
		   cs.contactform(excel.name(1),excel.email(1),excel.enquiry(1));
		}

		@Then("^the user closes the website$")
		public void the_user_closes_the_website() throws Throwable {
			cs.closer();
		}
}
