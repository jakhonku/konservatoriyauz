import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  'IlmiyFaoliyat', 'IlmiyUslubiy', 'Korrupsiya', 'Xalqaro', 'Yoshlar', 'Xabar',
  'YashilMakon', 'Moliyaviy', 'OquvUslubiy',
  'GrantAriza', 'GrantTest', 'YakuniyJarayon', 'DarsBakalavr', 'DarsMagistratura', 'TalabaYutuqlari', 'Ekofaol',
  'QabulDasturlari', 'IjodiyNatijalar'
];

const dir = path.join(__dirname, 'src', 'pages');

pages.forEach(page => {
  const content = `import React from 'react';
import { useTranslation } from 'react-i18next';

const ${page} = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">${page}</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Bu sahifa tez orada to'ldiriladi...
                </p>
            </div>
        </div>
    );
};

export default ${page};
`;
  const filePath = path.join(dir, `${page}.jsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${page}.jsx`);
  }
});
