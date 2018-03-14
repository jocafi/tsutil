import fs = require("fs");
/**
 * Read a text file.
 * 
 * @param sourceFilename source file name.
 */
export function readFile(sourceFilename: string): string {
  try {
    const data = fs.readFileSync(sourceFilename, "utf8");
    if (!data || data==="") {
      console.error("The file '" + sourceFilename + "' is empty. The process has been cancelled.");
      return null;
    }

    return data;
  } catch (error) { 
    console.error("An error occurred while reading the file '" + sourceFilename + "'. Error: " + error);
    return null;
  }
}

/**
 * Write anything to a file.
 * 
 * @param targetFilename target file name.
 * @param data data to be written.
 */
export function writeFile(targetFilename: string, data: any): void {
  try {
    console.log("Saving json to file '" + targetFilename + "' ...");
    fs.writeFileSync(targetFilename, data, "utf8");
  } catch (error) {
    console.error("An error occurred while writing to the file '" + targetFilename + "'. Error: " + error);
  }
}

/**
 * Checks if a file exists.
 * 
 * @param path A path to a file or directory.
 */
export function existFile(path: string): boolean {
  return fs.existsSync(path);
}