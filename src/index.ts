import { cyan, green, grey, red, yellowBright as yellow } from "chalk";
import { stdout } from "supports-color";

const infoIcon = stdout ? "ℹ" : "i";
const successIcon = stdout ? "✔" : "√";
const warningIcon = stdout ? "⚠" : "‼";
const errorIcon = stdout ? "✖" : "×";

export const info = (...logs: unknown[]): void => log(logs, infoIcon, cyan);
export const success = (...logs: unknown[]): void => log(logs, successIcon, green);
export const warning = (...logs: unknown[]): void => log(logs, warningIcon, yellow);
export const error = (...logs: unknown[]): void => log(logs, errorIcon, red);

function log(logs: unknown[], icon: string, color: (text: unknown) => string): void {
    console.log(generateDate(), color(icon), ...logs);
}

function generateDate(): string {
    const date = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });
    const colored = grey(date);
    return colored;
}
