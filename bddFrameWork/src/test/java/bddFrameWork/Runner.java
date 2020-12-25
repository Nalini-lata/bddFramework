package bddFrameWork;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="./FeatureFiles" , glue="bddFrameWork", format={"pretty", "html:Reports/cucumber/reports.html"})

public class Runner {

}
