import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { name: 'IlmiyFaoliyat', path: '/ilmiy-faoliyat' },
  { name: 'IlmiyUslubiy', path: '/ilmiy-uslubiy' },
  { name: 'Korrupsiya', path: '/korrupsiya' },
  { name: 'Xalqaro', path: '/xalqaro' },
  { name: 'Yoshlar', path: '/yoshlar' },
  { name: 'Xabar', path: '/xabar' },
  { name: 'YashilMakon', path: '/yashil-makon' },
  { name: 'Moliyaviy', path: '/moliyaviy' },
  { name: 'OquvUslubiy', path: '/oquv-uslubiy' },
  { name: 'GrantAriza', path: '/grant-ariza' },
  { name: 'GrantTest', path: '/grant-test' },
  { name: 'YakuniyJarayon', path: '/yakuniy-jarayon' },
  { name: 'DarsBakalavr', path: '/dars-bakalavr' },
  { name: 'DarsMagistratura', path: '/dars-magistratura' },
  { name: 'TalabaYutuqlari', path: '/talaba-yutuqlari' },
  { name: 'Ekofaol', path: '/ekofaol' },
  { name: 'QabulDasturlari', path: '/qabul-dasturlari' },
  { name: 'IjodiyNatijalar', path: '/ijodiy-natijalar' }
];

let appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let appJsx = fs.readFileSync(appJsxPath, 'utf8');

let imports = pages.map(p => `import ${p.name} from './pages/${p.name}';`).join('\n');
appJsx = appJsx.replace("import Tuzilma from './pages/Tuzilma';", "import Tuzilma from './pages/Tuzilma';\n" + imports);

let routes = pages.map(p => `            <Route path="${p.path}" element={<${p.name} />} />`).join('\n');
appJsx = appJsx.replace("{/* Add more routes here */}", `\n${routes}\n            {/* Add more routes here */}`);

fs.writeFileSync(appJsxPath, appJsx);
console.log("App.jsx updated!");
