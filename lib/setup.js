const dotenv = require("dotenv");
const path = require("path");
const contentfulImport = require("contentful-import");

dotenv.config({ path: path.resolve(__dirname, "../.env.local")});

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_MANAGEMENT_TOKEN,
  CONTENTFUL_ENVIRONMENT_ID = "master",
} = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      "Missing required environment variables.",
      "Please run the setup command like this:",
      "CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup",
    ].join("\n"),
  );
}

contentfulImport({
  spaceId: CONTENTFUL_SPACE_ID,
  environmentId: CONTENTFUL_ENVIRONMENT_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  contentFile: path.resolve(__dirname, "../lib/export.json")
}).then(() => {
  console.log("Content import completed successfully.");
}).catch((error) => {
  console.error("Error importing content:", error);
});