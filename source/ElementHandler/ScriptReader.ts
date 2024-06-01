import * as fs from "fs";
import * as path from "path";
import { Logger } from "selenium-webdriver/lib/logging";
import { parseStringPromise } from "xml2js";

export const getJsonFiles = async (directory: string): Promise<object[]> => {
  const files = fs.readdirSync(directory);

  const xmlObjects: object[] = [];

  for (const file of files) {
    const filePath = path.join(directory, file);

    if (path.extname(filePath) !== ".xml") continue;
    const data = fs.readFileSync(filePath, "utf-8");
    try {
      const obj = await parseStringPromise(data);
      xmlObjects.push(obj);
    } catch (error) {}
  }

  return xmlObjects;
};
const targetLocation = "../../scripts/SimpleScripts";
