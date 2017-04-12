//test module
const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  //nest describe test
  describe('#add', () => {
    it('should add two numbers', () =>{
      var res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) =>{
    utils.asyncAdd(3,4, (sum)=>{
      expect(sum).toBe(7).toBeA('number'); //assertion
      done(); // when done(async), mocha will execute result
    });
  });

  it('should square a number', () =>{
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
  });

  it('should async square a number', (done) =>{
    utils.asyncSquare(5, (produit) =>{
      expect(produit).toBe(25).toBeA('number');
      done();
    });
  })

  it('should expect some value', () =>{
    // expect(12).toNotBe(12);
    // expect({name: 'dDarling'}).toNotEqual({name: 'Darling'});
    // expect({name: 'Darling'}).toEqual({name: 'Darling'});
    // expect([2,3,4]).toInclude(3);
    // expect([2,3,4]).toExclude(1);
    expect({
      name: 'Darling',
      age: 50,
      location: 'Quebec'
    }).toInclude({
      age: 50
    });
  });
});



it('should set firstName and lastName', () =>{
  var user = {location: 'Quebec', age: 25};
  var res = utils.setName(user, 'Xiao Xia');
  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Xiao',
    lastName: 'Xia'
  });
});
