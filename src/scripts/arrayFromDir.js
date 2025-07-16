const fs = require("fs");
const path = require("path");

function getDirectoryItems(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      const items = files.map((file) => path.join(directoryPath, file));
      resolve(items);
    });
  });
}

// Example usage:
const directory = "./my-directory"; // Replace with your directory path

getDirectoryItems(directory)
  .then((items) => {
    console.log(items);
  })
  .catch((err) => {
    console.error("Error reading directory:", err);
  });
