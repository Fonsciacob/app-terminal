import fs from 'fs'
import { yarg } from './plugins/yargs.plugin'

const {b:base, l:limit, s:showTable} = yarg

let ouputMessage = '';
const header = `
    ==================================
            Tabla del ${base}
    ==================================
`;

for (let i = 1; i <= limit ; i++) {
    ouputMessage += `${base} x ${i} = ${base * i} \n`
}

ouputMessage = header + ouputMessage

if (showTable) {
    console.log(ouputMessage);
}

const outputPath = 'outputs';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`outputs/tabla-${base}.txt`, ouputMessage);