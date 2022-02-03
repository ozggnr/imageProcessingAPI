import resize from '../helpers';

const height = 500;
const width = 500;
const filename = 'santamonica'
const wrongFilemane = 'asd'
describe('Testing image process', () => {
    it('checks resize function works with valid paramaters', async () => {
        const output = await resize(filename, width, height)
        expect(output).toBeTruthy()
    } )
    it('fails if filename doesn\'t exist', async() => {
        await expectAsync(resize(wrongFilemane, width, height)).toBeRejected()
    })
})