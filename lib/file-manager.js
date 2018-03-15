"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
/**
 * Read a text file.
 *
 * @param sourceFilename source file name.
 */
function readFile(sourceFilename) {
    try {
        var data = fs.readFileSync(sourceFilename, "utf8");
        if (!data || data === "") {
            console.error("The file '" + sourceFilename + "' is empty. The process has been cancelled.");
            return null;
        }
        return data;
    }
    catch (error) {
        console.error("An error occurred while reading the file '" + sourceFilename + "'. Error: " + error);
        return null;
    }
}
exports.readFile = readFile;
/**
 * Write anything to a file.
 *
 * @param targetFilename target file name.
 * @param data data to be written.
 */
function writeFile(targetFilename, data) {
    try {
        console.log("Saving json to file '" + targetFilename + "' ...");
        fs.writeFileSync(targetFilename, data, "utf8");
    }
    catch (error) {
        console.error("An error occurred while writing to the file '" + targetFilename + "'. Error: " + error);
    }
}
exports.writeFile = writeFile;
/**
 * Checks if a file exists.
 *
 * @param path A path to a file or directory.
 */
function existFile(path) {
    return fs.existsSync(path);
}
exports.existFile = existFile;
//# sourceMappingURL=file-manager.js.map