$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Opencart.feature");
formatter.feature({
  "line": 2,
  "name": "Opencart website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Testcase_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Register in opencart website",
  "description": "",
  "id": "opencart-website;register-in-opencart-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_opencart_register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the user launch the browser for register",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the opencart register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepdefinition.the_user_launch_the_browser_for_register()"
});
formatter.result({
  "duration": 20984675500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefinition.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 4998321999,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefinition.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 9588416001,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefinition.the_user_close_the_opencart_register_page()"
});
formatter.result({
  "duration": 516931201,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login in opencart website",
  "description": "",
  "id": "opencart-website;login-in-opencart-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@tc02_opencart_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the user launch the browser for login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user enters \"\u003cemailid\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the user close the opencart login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "opencart-website;login-in-opencart-website;",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ],
      "line": 22,
      "id": "opencart-website;login-in-opencart-website;;1"
    },
    {
      "cells": [
        "soundaryariya27@gmail.com",
        "sound"
      ],
      "line": 23,
      "id": "opencart-website;login-in-opencart-website;;2"
    },
    {
      "cells": [
        "sound",
        "sound11"
      ],
      "line": 24,
      "id": "opencart-website;login-in-opencart-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login in opencart website",
  "description": "",
  "id": "opencart-website;login-in-opencart-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testcase_Feature"
    },
    {
      "line": 13,
      "name": "@tc02_opencart_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the user launch the browser for login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user enters \"soundaryariya27@gmail.com\" and \"sound\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the user close the opencart login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.the_user_launch_the_browser_for_login()"
});
formatter.result({
  "duration": 14928169099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 13016709400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soundaryariya27@gmail.com",
      "offset": 17
    },
    {
      "val": "sound",
      "offset": 49
    }
  ],
  "location": "LoginStepdefinition.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 10840710500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.the_user_close_the_opencart_login_page()"
});
formatter.result({
  "duration": 264194799,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login in opencart website",
  "description": "",
  "id": "opencart-website;login-in-opencart-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testcase_Feature"
    },
    {
      "line": 13,
      "name": "@tc02_opencart_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the user launch the browser for login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user enters \"sound\" and \"sound11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the user close the opencart login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.the_user_launch_the_browser_for_login()"
});
formatter.result({
  "duration": 11322012000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 5319375300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sound",
      "offset": 17
    },
    {
      "val": "sound11",
      "offset": 29
    }
  ],
  "location": "LoginStepdefinition.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 9587927500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.the_user_close_the_opencart_login_page()"
});
formatter.result({
  "duration": 809336200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Choose currency type in opencart website",
  "description": "",
  "id": "opencart-website;choose-currency-type-in-opencart-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc03_opencart_choosecurrency"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "launching the browser for choosing currency type",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user opens opencart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user select the currency type",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the user closes the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyStepdefinition.launching_the_browser_for_choosing_currency_type()"
});
formatter.result({
  "duration": 23433691000,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepdefinition.the_user_opens_opencart_homepage()"
});
formatter.result({
  "duration": 10266352801,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepdefinition.the_user_select_the_currency_type()"
});
formatter.result({
  "duration": 12347277200,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepdefinition.the_user_closes_the_homepage()"
});
formatter.result({
  "duration": 5687126300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Choose the company brand in open cart website",
  "description": "",
  "id": "opencart-website;choose-the-company-brand-in-open-cart-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc04_opencart_choosebrand"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "launching the browser for choosing the brand",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "the user opens the opencart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the user select the brand",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the user close the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "BrandsStepdefinition.launching_the_browser_for_choosing_the_brand()"
});
formatter.result({
  "duration": 6508530900,
  "status": "passed"
});
formatter.match({
  "location": "BrandsStepdefinition.the_user_opens_the_opencart_homepage()"
});
formatter.result({
  "duration": 11177610700,
  "status": "passed"
});
formatter.match({
  "location": "BrandsStepdefinition.the_user_select_the_brand()"
});
formatter.result({
  "duration": 20592374501,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...nfo\u0026manufacturer_id\u003d[9]\u003e but was:\u003c...nfo\u0026manufacturer_id\u003d[8]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.Opencart.stepdefinition.BrandsStepdefinition.the_user_select_the_brand(BrandsStepdefinition.java:37)\r\n\tat ✽.Then the user select the brand(src/main/resources/feature/Opencart.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BrandsStepdefinition.the_user_close_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 44,
  "name": "Contact us in open cart website",
  "description": "",
  "id": "opencart-website;contact-us-in-open-cart-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@tc05_opencart_contactus"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "launching browser for contactus scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "the user opens the website",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the user enters the contactus details",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "the user closes the website",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsStepdefinition.launching_browser_for_contactus_scenarior()"
});
formatter.result({
  "duration": 31562021500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepdefinition.the_user_opens_the_website()"
});
formatter.result({
  "duration": 10141723899,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepdefinition.the_user_enters_the_contactus_details()"
});
formatter.result({
  "duration": 19009338000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepdefinition.the_user_closes_the_website()"
});
formatter.result({
  "duration": 5764115000,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Product return in open cart website",
  "description": "",
  "id": "opencart-website;product-return-in-open-cart-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@tc06_opencart_return"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "launching browser for return scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user opens the website for product returns",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user enters the return details",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the user closes the websites",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductReturnStepdefinition.launching_browser_for_return_scenario()"
});
formatter.result({
  "duration": 6838973600,
  "status": "passed"
});
formatter.match({
  "location": "ProductReturnStepdefinition.the_user_opens_the_website_for_product_returns()"
});
formatter.result({
  "duration": 6505833399,
  "status": "passed"
});
formatter.match({
  "location": "ProductReturnStepdefinition.the_user_enters_the_return_details()"
});
formatter.result({
  "duration": 18298895600,
  "status": "passed"
});
formatter.match({
  "location": "ProductReturnStepdefinition.the_user_closes_the_websites()"
});
formatter.result({
  "duration": 2377556600,
  "status": "passed"
});
});