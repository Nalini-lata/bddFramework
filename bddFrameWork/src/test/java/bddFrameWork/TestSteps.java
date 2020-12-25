package bddFrameWork;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	ChromeDriver driver;
	@Given("^User is on login page$")
	public void User_is_on_login_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "E:\\Nalini-Backup\\D\\chromedriver\\chromedriver.exe");
	//System.setProperty("webdriver.chrome.driver", "E:\\Nalini-Backup\\D\\chromedriver\\chomedriver.exe");
	driver =new ChromeDriver();
	driver.get("https://www.facebook.com/");
	driver.manage().window().maximize();
		
	    
	}

	@When("^user enter the user name$")
	public void user_enter_the_user_name() throws Throwable {
	   
	}

	@When("^user enter the password$")
	public void user_enter_the_password() throws Throwable {
	    
	}

	@Then("^user should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
	   
	}


}
