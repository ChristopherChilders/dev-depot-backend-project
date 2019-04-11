// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/users');
const Favorites = require('../models/favorites');

// describe('Sanity check', function () {
//     it('should be 2', function () {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

// describe('Users model', () => {
//     it('Should be able to get an array of Users', async () => {
//         const theUsers = await User.getAll();
//         theUsers.should.be.an.instanceOf(Array);
//     });
//     it('should get one user by id', async () => {
//         const theUser = await User.getById(2);
//         theUser.should.be.an.instanceOf(User);
//     });
// })

describe('Users and Favorites', () => {
    it('should get all the favorites for an individual user', async () => {
        const theUser = await User.getById(1);
        const theFavorites = await theUser.favorites;
        expect(theFavorites).to.be.an.instanceOf(Array);
        expect(theFavorites).to.have.lengthOf(3);
        for(let i=0; i<theFavorites.length; i++) {
            expect(theFavorites[i]).to.be.an.instanceOf(Favorites);
        }
    });
});

describe('Users model', () => {
    it('should be able to retrieve all user data', async () => {
        const allUsers = await User.getAll();
        allUsers.should.be.an.instanceOf(Array);
    });

    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
    });
});