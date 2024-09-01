import { ServerApp } from './server-app';
describe('Server App', () => {
    it('Should create ServerApp instance', () => {
        
        const serverApp = new ServerApp();
        
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    })
})