import fs from 'fs';
import { SaveFile } from './save-file';

describe('SaveFileUseCase', () => {

    const options = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table'
    }

    afterEach(() => {
        const exist = fs.existsSync('outputs')
        if (exist) fs.rmSync('outputs', {recursive: true})

        const customOutput = fs.existsSync(options.fileDestination)
        if (customOutput) fs.rmSync(options.fileDestination, {recursive: true})
    })

    it('Should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';

        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);

        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})
        
        expect(result).toBe(true);
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    })

    it('Should save file with custom values', () => {
        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(options.fileDestination)
        const fileContent = fs.readFileSync(`${options.fileDestination}/${options.fileName}.txt`, {encoding: 'utf-8'})

        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    })

    it('Should return false if directory could not be created', () => {
        const saveFile = new SaveFile()
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => {throw new Error('error')}
        )

        const result = saveFile.execute(options);
        expect(result).toBe(false);

        mkdirSpy.mockRestore();
    })

});