$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstTC.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "To test the login functionality with valid credentials",
  "description": "",
  "id": "login-functionality;to-test-the-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the user name",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.User_is_on_login_page()"
});
formatter.result({
  "duration": 9526143497,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enter_the_user_name()"
});
formatter.result({
  "duration": 112040,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enter_the_password()"
});
formatter.result({
  "duration": 38060,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 38487,
  "status": "passed"
});
});