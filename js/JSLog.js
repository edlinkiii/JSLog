export default class JSLog {
    #Level = {
        LOG: "LOG",
        INFO: "INFO",
        DEBUG: "DEBUG",
        WARN: "WARN",
        ERROR: "ERROR",
    }
    #Default = {
        LOG: {
            ToConsole: console.log,
            ToFile: false,
            ToAPI: false,
            GetStack: false,
            AccentColor: "BLUE",
        },
        INFO: {
            ToConsole: console.info,
            ToFile: false,
            ToAPI: true,
            GetStack: false,
            AccentColor: "GREEN",
        },
        DEBUG: {
            ToConsole: console.debug,
            ToFile: false,
            ToAPI: true,
            GetStack: true,
            AccentColor: "YELLOW",
        },
        WARN: {
            ToConsole: console.warn,
            ToFile: false,
            ToAPI: true,
            GetStack: true,
            AccentColor: "ORANGE",
        },
        ERROR: {
            ToConsole: console.error,
            ToFile: false,
            ToAPI: true,
            GetStack: true,
            AccentColor: "RED",
        },
    }
    #Color = {
        LIGHT: {
            DEFAULT: "black",
            GREEN: "",
            YELLOW: "",
            ORANGE: "",
            RED: "",
            PURPLE: "",
            BLUE: "",
        },
        DARK: {
            DEFAULT: "white",
            GREEN: "",
            YELLOW: "",
            ORANGE: "",
            RED: "",
            PURPLE: "",
            BLUE: "",
        },
    }
    /**
     *
     */
    constructor(options = {}) {
        this.logAPI = options.logAPI || null;
        this.logFunction = options.logFunction || null;
        this.defaultLevel = options.defaultLevel.toUpperCase() || "LOG";
    }

    logIt(message, level, overrides={}) {}

    getStack() {}

    getUserTheme() {}

    logToConsole() {}

    logToFile() {}

    logToAPI() {}
}

const jsLog = new JSLog({
    logFunction: () => alert("***** LOG TO SERVER *****")
});

const log = jsLog.logIt;

log("Test", "info");
