import { ThenableWebDriver } from "selenium-webdriver";
import {
  ChromeHandler,
  delay,
} from "./ChromeDriverHandler/ChromeDriverHandler";
import { DriverFunction } from "./ChromeDriverHandler/ChromeDriverHandler";

async function main() {
  const chromeHandler = ChromeHandler.Instance();
  await chromeHandler.openChrome(async (driver: ThenableWebDriver) => {
    await driver.get(`https://angeloesmeralda.com`);
    await delay(5000);
  });
}

main();
