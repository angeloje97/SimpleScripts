export class ElementHandler {
  private handlers: { [key: string]: (data: HandlerData) => Promise<void> };

  constructor() {
    this.handlers = {
      Button: buttonHandler,
      Input: inputHandler,
      URL: urlHandler,
    };
  }

  public getHandler(handlerName: string): (data: HandlerData) => Promise<void> {
    if (!this.handlers[handlerName]) {
      return defaultHandler;
    }

    return this.handlers[handlerName];
  }
}

//#region Handlers
const defaultHandler = async (data: HandlerData): Promise<void> => {};

const buttonHandler = async (data: HandlerData): Promise<void> => {};

const inputHandler = async (data: HandlerData): Promise<void> => {};

const urlHandler = async (data: HandlerData): Promise<void> => {};

//#endregion

//#region Types
export type HandlerData = {
  elementID: string;
  waitData?: {
    enabled: boolean;
    time: number;
  };
};
//#endregion
