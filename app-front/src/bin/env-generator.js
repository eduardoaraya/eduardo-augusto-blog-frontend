const fs = require("node:fs/promises");
const path = require("node:path");

const envContent = `
// FILE GENERATED ${path.join(__dirname, __filename)}
export const environment = {
  production: ${process.env["NODE_ENV"] === 'production'},
  api: "${process.env["URL_API"] ?? "http://localhost:8080/production/"}"
};
`;

fs.writeFile(path.join(__dirname, "..", "environments", "environment.prod.ts"), envContent)
  .then(() => process.stdout.write("Environments genereted! \n"))
  .catch((err) => {
    process.stderr.write(err.toString());
    process.exit(1)
  });