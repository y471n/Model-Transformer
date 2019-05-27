const package = require("./packages/model-transformer/package.json");
const fs = require("fs");

function updatePackageVersion() {
  const currentVersion = package.version;
  const targetVersion = parseInt(currentVersion.split(".")[2]) + 1;
  const temp = currentVersion.split(".");
  temp[temp.length - 1] = targetVersion;
  package.version = temp.join(".");
  fs.writeFileSync(
    "./packages/model-transformer/package.json",
    JSON.stringify(package, null, 2)
  );
}

try {
  updatePackageVersion();
  console.log("SUCCESS");
} catch (err) {
  console.log(err.message);
}
