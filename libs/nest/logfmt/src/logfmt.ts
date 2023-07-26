import { ConsoleLogger, LogLevel } from "@nestjs/common";
import { stringify } from "logfmt";

export class LogfmtConsoleLogger extends ConsoleLogger {
    protected formatPid(pid: number) {
        return `${pid}`;
    }

    protected formatMessage(logLevel: LogLevel, message: unknown, pidMessage: string, formattedLogLevel: string, contextMessage: string, timestampDiff: string): string {
        const output = this.stringifyMessage(message, logLevel);
        return stringify({
            pid: pidMessage,
            timestamp: this.getTimestamp(),
            logLevel,
            context: contextMessage,
            message: output,
        });
    }
}
