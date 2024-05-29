import { ChromeDriverHandler } from "./ChromeDriverHandler/ChromeDriverHandler";

async function main() {
  const chromeHandler = ChromeDriverHandler.Instance();
  await chromeHandler.openChrome();
}

main();
