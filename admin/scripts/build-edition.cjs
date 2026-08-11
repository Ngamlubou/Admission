const fs = require("fs");
const path = require("path");
const editionId = process.argv[2];

if (!editionId) {
    console.error("Please provide edition id");
    process.exit(1);
}

const edition = JSON.parse(
    fs.readFileSync(
    path.join("editions", editionId, "edition.json" ), "utf8" )
);


const config = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, "conf-template.json"),
        "utf8"
    )
);

config.productName = edition.productName;
config.version = edition.version;
config.identifier = edition.identifier;

config.app.windows[0].title =
    edition.window.title;

fs.writeFileSync(
    "src-tauri/tauri.conf.json",
    JSON.stringify(config, null, 2)
);


console.log("Edition built");
