import { ConsoleLogger, LogLevel } from "@nestjs/common";
import { stringify } from "logfmt";

export class LogfmtConsoleLogger extends ConsoleLogger {
    protected formatPid(pid: number) {
        return String(pid);
    }

    protected formatContext(context: string) {
        return context;
    }

    protected colorize(message: string, logLevel: LogLevel) {
        return message;
    }

    protected getTimestamp() {
        return new Date().toISOString();
    }

    protected formatMessage(logLevel: LogLevel, message: unknown, pidMessage: string, formattedLogLevel: string, contextMessage: string, timestampDiff: string): string {
        const context = contextMessage.trim().replaceAll('[', '').replaceAll(']', '');

        const output = this.stringifyMessage(message, logLevel);

        return stringify({
            pid: pidMessage,
            timestamp: this.getTimestamp(),
            level: logLevel,
            context,
            message: output,
        }) + '\n';
    }
}
