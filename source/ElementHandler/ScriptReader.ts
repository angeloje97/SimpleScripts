import * as fs from "fs";
import * as path from "path";
import { parseStringPromise } from "xml2js";
import { Logger } from "../Logging/Logger";
const fileName = "ScriptReader.ts";

const getXMLFiles = async (directory: string): Promise<object[]> => {
  Logger.LogFunction(`Start ${fileName}::getXMLFiles(${directory})`);

  const files = fs.readdirSync(directory);

  const xmlObjects: object[] = [];

  for (const file of files) {
    const filePath = path.join(directory, file);

    if (path.extname(filePath) !== ".xml") continue;
    const data = fs.readFileSync(filePath, "utf-8");
    try {
      const obj = {
        FileName: file,
        ...(await parseStringPromise(data)),
      };
      xmlObjects.push(obj);
    } catch (error) {}
  }

  Logger.LogFunction(`End ${fileName}::getXMLFiles(${directory})`);

  return xmlObjects;
};

export const readScripts = async () => {
  Logger.LogFunction(`Start ${fileName}::readScripts()`);

  const targetLocation = path.resolve(
    `${__dirname}../../../scripts/SimpleScripts`
  );
  console.log(targetLocation);
  const xmlObjects = await getXMLFiles(targetLocation);
  console.log(xmlObjects);

  Logger.LogFunction(`End ${fileName}::readScripts()`);
};

readScripts();
