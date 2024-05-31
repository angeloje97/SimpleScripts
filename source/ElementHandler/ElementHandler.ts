import { ButtonHandler } from "./ButtonHandler";
import { InputHandler } from "./InputHandler";

export class ElementHandler {
  private handlers: { [key: string]: new () => BaseHandler };

  constructor() {
    this.handlers = {
      Button: ButtonHandler,
      Input: InputHandler,
    };
  }

  public getHandler(handlerName: string): BaseHandler {
    if (!this.handlers[handlerName]) {
      return new BaseHandler();
    }

    return new this.handlers[handlerName]();
  }
}

export class BaseHandler {
  public async handleData(data: HandlerData): Promise<void> {}
}

export type HandlerData = {
  elementID: string;
  waitData?: {
    enabled: boolean;
    time: number;
  };
};
