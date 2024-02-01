import { readFile } from "fs";

function readFileContent(path) {
  readFile(path, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log("Error Reading file:",err);
      return;
    } else {
      console.log(data);
    }
  });
}
readFileContent('./test-files/file1.txt');
readFileContent('./test-files/empty-file.txt');
readFileContent('./test-files/random.txt');
