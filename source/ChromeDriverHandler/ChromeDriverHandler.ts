import chrome from "selenium-webdriver/chrome";
import { Builder, By, Key, ThenableWebDriver, until } from "selenium-webdriver";
import { Logger } from "../Logging/Logger";

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class ChromeHandler {
  //#region Singleton
  //#region  Common Data
  private className = "ChomeHandler";
  //#endregion

  static instance: ChromeHandler;

  public static Instance(): ChromeHandler {
    if (this.instance == null) this.instance = new ChromeHandler();
    return this.instance;
  }
  //#endregion

  public async openChrome(action: DriverFunction): Promise<void> {
    Logger.LogFunction(`${this.className}::openChrome() Start`);

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
      await action(driver);
      await driver.quit();
    }

    Logger.LogFunction(`${this.className}::openChrome() End`);
  }
}

//#region Types

export type DriverFunction = (driver: ThenableWebDriver) => Promise<void>;

//#endregion
