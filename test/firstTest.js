/* RUN TEST - node tests/firstTest.js */

const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

// DESCRIBE

describe("Home Page Tests", function () {

  // IT BLOCK - START
  it("SMOKE TEST. Check HOMEPAGE title", async function () {
    // URL
    const mainPage = "https://kdlolympsite.ddirection.kz/";

    // LAUNCH THE BROWSER
    let driver = await new Builder().forBrowser("firefox").build();

    // NAVIGATE TO THE MAIN PAGE
    await driver.get(mainPage);

    //SLEEP
    await driver.sleep(2000);

    let homeTitle = await driver
      .findElement(By.xpath(`//*[@id="__nuxt"]/div/main/div[1]/h1/span`))
      .getText()
      .then(function (value) {
        return value;
      });

    // ASSERT
    homeTitle.should.equal("Клинико-диагностические лаборатории ОЛИМП");

    // CLOSE THE BROWSER
    await driver.quit();
  });// IT BLOCK - END

  
});
