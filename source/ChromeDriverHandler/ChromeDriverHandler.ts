import chrome from "selenium-webdriver/chrome";
import { Builder, By, Key, ThenableWebDriver, until } from "selenium-webdriver";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class ChromeDriverHandler {
  static instance: ChromeDriverHandler;

  public static Instance(): ChromeDriverHandler {
    if (this.instance == null) this.instance = new ChromeDriverHandler();
    return this.instance;
  }

  public async openChrome(): Promise<void> {
    const options = new chrome.Options();

    const driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    try {
      await driver.get("http://www.google.com");

      await driver.wait(until.titleIs("Google"), 1000);

      const title = await driver.getTitle();
      console.log(`Title is : ${title}`);
    } finally {
      await delay(5000);
      await driver.quit();
    }
  }
}
