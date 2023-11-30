/* RUN TEST - node tests/firstTest.js */

const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

// describe block

describe("Home Page Tests 2", function () {
  // it block - check regions dropdown
  it("Check homepage title 2", async function () {
    const mainPage = "https://kdlolympsite.ddirection.kz/";

    // launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to the main page
    await driver.get(mainPage);

    //sleep
    await driver.sleep(2000);

    let homeTitle = await driver
      .findElement(By.xpath(`//*[@id="__nuxt"]/div/main/div[1]/h1/span`))
      .getText()
      .then(function (value) {
        return value;
      });

    // assert using chai assertion
    homeTitle.should.equal("Клинико-диагностические лаборатории ОЛИМП");

    //sleep
    await driver.sleep(2000);

    // close the browser
    await driver.quit();
  });

  
});
