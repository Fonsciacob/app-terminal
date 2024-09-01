import { CreateTable } from './create-table';

describe('CreateTable', () => {
    it('Should create table with default values', () => {
        const createTable = new CreateTable();
        
        const table = createTable.execute({base: 2});
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable)
        expect(table).toContain('2 x 1 = 2')
        expect(rows).toBe(10)
    })

    it('Should create table with custom values', () => {
       
        const createTable = new CreateTable();
        
        const options = {
            base: 3,
            limit: 5
        }

        const table = createTable.execute(options);
        const rows = table.split('\n').length;
        
        expect(table).toContain('3 x 1 = 3')
        expect(rows).toBe(options.limit)
    })
})
