import { ThenableWebDriver } from "selenium-webdriver";
import { ChromeHandler, delay } from "./ChromeHandler/ChromeHandler";
import { getInstance } from "./InstanceManager";

async function main() {
  const chromeHandler = getInstance(ChromeHandler);
  await chromeHandler.openChrome(async (driver: ThenableWebDriver) => {
    await driver.get(`https://google.com`);
    await delay(5000);
  });
}

main();
