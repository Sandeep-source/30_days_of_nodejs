import { writeFile } from "fs";

function writeToFile(path, content) {
  writeFile(path, content, (err) => {
    if (err) {
      console.log("Error writing file", err.message);
    } else {
      console.log("Data written to", path);
    }
  });
}

writeToFile("test-files/output1.txt", "Hello from nodejs to output1 file");
writeToFile("test-files/output2.txt", "Hello from nodejs to output2 file");
writeToFile("test-files/output3.txt", "Hello from nodejs to output3 file");
writeToFile("test-files/output4.txt", "Hello from nodejs to output4 file");
