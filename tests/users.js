const User = require('../models/users');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

describe('Users model', () => {
    it('Should be able to get an array of Users', async () => {
        const theUsers = await User.getAll();
        expect(theUsers).to.be.an.arrayOf(User);
    });
    
})