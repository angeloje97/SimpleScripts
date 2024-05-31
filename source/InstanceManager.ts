const singletonDict: { [key: string]: any } = {};

export function getInstance<T>(classType: new () => T): T {
  const className = classType.name;
  if (!singletonDict[className]) {
    singletonDict[className] = new classType();
  }

  return singletonDict[className];
}
