/**
 * Read a text file.
 *
 * @param sourceFilename source file name.
 */
export declare function readFile(sourceFilename: string): string;
/**
 * Write anything to a file.
 *
 * @param targetFilename target file name.
 * @param data data to be written.
 */
export declare function writeFile(targetFilename: string, data: any): void;
/**
 * Checks if a file exists.
 *
 * @param path A path to a file or directory.
 */
export declare function existFile(path: string): boolean;
