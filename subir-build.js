import { Octokit } from "@octokit/rest";
import { argv } from "process";
import fs from "fs";

const usuario = "SC-PROSOFT";
const token = fs.readFileSync("C:/token.txt", "utf8").trim();
const octokit = new Octokit({ auth: token });

const modulo = argv[2];

// Leer la información del package.json para obtener el número de versión
const package_json = fs.readFileSync("./package.json");
const parse_json = JSON.parse(package_json);
const version = parse_json.version;

const repositorio_name = `SETUP-CONSEN-VUE`;

// Define el nombre y la etiqueta del lanzamiento
const release_name = version;
const release_tag = `v${version}`;

octokit.repos
  .createRelease({
    owner: usuario,
    repo: repositorio_name,
    tag_name: release_tag,
    name: release_name,
  })
  .then((response) => {
    console.log(`Lanzamiento creado: ${response.data.html_url}`);
    // Lee el archivo .rar y obtén su contenido como un búfer
    const file_content = fs.readFileSync("./dist.rar");

    // Sube el archivo .rar al lanzamiento utilizando el método uploadReleaseAsset
    octokit.repos
      .uploadReleaseAsset({
        owner: usuario,
        repo: repositorio_name,
        release_id: response.data.id,
        name: `dist.rar`,
        data: file_content,
      })
      .then((response) => {
        console.log(`Compilado subido correctamente: ${response.data.browser_download_url}`);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
