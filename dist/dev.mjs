import { readFileSync } from "node:fs";
import { parseString } from "xml2js";
let xml = readFileSync("../dev/content.xml", "utf-8");
parseString(xml, { strict: true, xmlns: true, explicitRoot: true, explicitArray: false, mergeAttrs: true }, (error, content) => {
    /*
    let k = Object.keys(content["office:document-content"]["$ns"]["local"]);
    console.log(k);
    console.log(String(content["office:document-content"]["$ns"]["local"]));
    */
    let dc = content;
    //console.log(dc["document-content"]);
    //console.log(dc["office:document-content"]);
    console.log(dc["office:document-content"]?.["office:body"]?.["office:text"]);
});
