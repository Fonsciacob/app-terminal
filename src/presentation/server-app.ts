import { CreateTable } from "../domain/use-cases/create-table"
import { SaveFile } from "../domain/use-cases/save-file"

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {

    static run({ base, limit, showTable }: RunOptions) {
        console.log('server runing...');

        const table = new CreateTable()
            .execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({ fileContent: table, fileDestination: `outputs/table-${base}`});

        if (showTable) console.log(table);
        
        (wasCreated) 
            ? console.info('File created!')
            : console.error('File not created!');
    
    }
}