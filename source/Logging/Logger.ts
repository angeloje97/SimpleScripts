export class Logger {
  private static activeLogType = {
    functionCall: true,
  };

  public static LogFunction(message: string): void {
    if (!this.activeLogType.functionCall) return;

    console.log(`[FUNCTIONCALL] : ${message} `);
  }
}
