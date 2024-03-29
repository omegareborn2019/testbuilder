/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

// //   // In tests, we want to compare the expected behavior to the actual behavior.
// //   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
  describe('Diner\'s Club', function() {
    var assert = chai.assert;
    // Be careful, tests can have bugs too...

    it('has a prefix of 38 and a length of 14', function() {
      assert(detectNetwork('38345678901234') === "Diner's Club");
    });

    it('has a prefix of 39 and a length of 14', function() {
      assert(detectNetwork('39345678901234') === "Diner's Club");
    });
  });

  describe('American Express', function() {
    var assert = chai.assert;
    // It can get annoying to keep typing the if/throw, so here is a
    // helper function to throw an error if the input statement isn't true.
    it('has a prefix of 34 and a length of 15', function() {
      assert(detectNetwork('343456789012345') === 'American Express');
    });

    it('has a prefix of 37 and a length of 15', function() {
      assert(detectNetwork('373456789012345') === 'American Express');
    });
  });

  describe('Visa', function() {
    // Chai is an entire library of helper functions for tests!
    // Chai provides an assert that acts the same as our previous assert.
    // Search the documentation to figure out how to access it. 
    //   http://chaijs.com/
    var assert = chai.assert;
   

    it('has a prefix of 4 and a length of 13', function() {
      assert(detectNetwork('4123456789012') === 'Visa');
    });

    it('has a prefix of 4 and a length of 16', function() {
      assert(detectNetwork('4123456789012345') === 'Visa');
    });

    it('has a prefix of 4 and a length of 19', function() {
      assert(detectNetwork('4123456789012345678') === 'Visa');
    });
  });

  describe('MasterCard', function() {
    // Chai lets you write more human-readable tests that throw helpful errors.
    // Expect syntax is one way to do this, but there are others. 
    // If you want to know more, check out the documentation. 
    //   http://chaijs.com/api/bdd/
    var expect = chai.expect;
   
    it("has a prefix of 51 and a length of 16", function() {
      expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
    });
   
    it("has a prefix of 52 and a length of 16", function() {
      expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
    });
   
    it("has a prefix of 53 and a length of 16", function() {
      expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
    });

    // You can also use should instead of expect, which changes the style
    // slightly. It really doesn't matter which one you use - check out 
    // http://chaijs.com/guide/styles/ for more info, but it's important
    // to be consistent (unlike in this file, where we use BOTH expect
    // and should, but that's just for learning), so once you've gotten 
    // these tests to pass using should syntax, refactor your tests to 
    // use either expect or should, but not both. 
    
    it('has a prefix of 54 and a length of 16', function() {
      expect(detectNetwork('5412345678901234')).to.equal("MasterCard");
    });
   
    it('has a prefix of 55 and a length of 16', function() {
      expect(detectNetwork('5512345678901234')).to.equal("MasterCard");
    })
  });

  describe('Discover', function() {
    var assert = chai.assert;
    // Tests without a function will be marked as "pending" and not run
    // Implement these tests (and others) and make them pass!
    it('has a prefix of 6011 and a length of 16', function(){
      assert.equal(detectNetwork("6011098765432123"), "Discover");
    });
    it('has a prefix of 6011 and a length of 19', function(){
      assert.equal(detectNetwork("6011098765432123456"), "Discover");
    });
    it('has a prefix of 65 and a length of 16', function(){
      assert.equal(detectNetwork("6511098765432123"), "Discover");
    });
    it('has a prefix of 65 and a length of 19', function(){
      assert.equal(detectNetwork("6511098765432123456"), "Discover");
    });
    for (var prefix = 644; prefix <= 649; prefix++){
      (function(prefix){
        it("has a prefix of " + prefix + " and a length of 16", function(){
          assert.equal(detectNetwork(prefix + "1098765432123"), "Discover");
        });
        it("has a prefix of " + prefix + " and a length of 19", function(){
          assert.equal(detectNetwork(prefix + "1098765432123456"), "Discover");
        });
      })(prefix);
    }
  });

  describe('Maestro', function() {
    var assert = chai.assert;
    it("has a prefix of 5018 and a length of 12", function(){
      assert.equal(detectNetwork("501812345678"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 12", function(){
      assert.equal(detectNetwork("502012345678"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 12", function(){
      assert.equal(detectNetwork("503812345678"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 12", function(){
      assert.equal(detectNetwork("630412345678"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 13", function(){
      assert.equal(detectNetwork("5018123456781"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 13", function(){
      assert.equal(detectNetwork("5020123456781"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 13", function(){
      assert.equal(detectNetwork("5038123456781"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 13", function(){
      assert.equal(detectNetwork("6304123456781"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 14", function(){
      assert.equal(detectNetwork("50181234567812"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 14", function(){
      assert.equal(detectNetwork("50201234567812"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 14", function(){
      assert.equal(detectNetwork("50381234567812"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 14", function(){
      assert.equal(detectNetwork("63041234567812"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 15", function(){
      assert.equal(detectNetwork("501812345678123"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 15", function(){
      assert.equal(detectNetwork("502012345678123"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 15", function(){
      assert.equal(detectNetwork("503812345678123"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 15", function(){
      assert.equal(detectNetwork("630412345678123"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 16", function(){
      assert.equal(detectNetwork("5018123456781234"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 16", function(){
      assert.equal(detectNetwork("5020123456781234"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 16", function(){
      assert.equal(detectNetwork("5038123456781234"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 16", function(){
      assert.equal(detectNetwork("6304123456781234"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 17", function(){
      assert.equal(detectNetwork("50181234567812345"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 17", function(){
      assert.equal(detectNetwork("50201234567812345"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 17", function(){
      assert.equal(detectNetwork("50381234567812345"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 17", function(){
      assert.equal(detectNetwork("63041234567812345"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 18", function(){
      assert.equal(detectNetwork("501812345678123456"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 18", function(){
      assert.equal(detectNetwork("502012345678123456"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 18", function(){
      assert.equal(detectNetwork("503812345678123456"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 18", function(){
      assert.equal(detectNetwork("630412345678123456"), "Maestro");
    });
    it("has a prefix of 5018 and a length of 19", function(){
      assert.equal(detectNetwork("5018123456781234567"), "Maestro");
    });
    it("has a prefix of 5020 and a length of 19", function(){
      assert.equal(detectNetwork("5020123456781234567"), "Maestro");
    });
    it("has a prefix of 5038 and a length of 19", function(){
      assert.equal(detectNetwork("5038123456781234567"), "Maestro");
    });
    it("has a prefix of 6304 and a length of 19", function(){
      assert.equal(detectNetwork("6304123456781234567"), "Maestro");
    });
    // Write full test coverage for the Maestro card
  });

  describe("China UnionPay", function(){
    var assert = chai.assert;
    for (var prefix = 622126; prefix <= 622925; prefix++){
      (function(prefix){
        it("has a prefix of " + prefix + " and a length of 16", function(){
          assert.equal(detectNetwork(prefix + "1234567890"), "China UnionPay");
        });
        it("has a prefix of " + prefix + " and a length of 17", function(){
          assert.equal(detectNetwork(prefix + "12345678901"), "China UnionPay");
        });
        it("has a prefix of " + prefix + " and a length of 18", function(){
          assert.equal(detectNetwork(prefix + "123456789011"), "China UnionPay");
        });
        it("has a prefix of " + prefix + " and a length of 19", function(){
          assert.equal(detectNetwork(prefix + "1234567890111"), "China UnionPay");
        });
      })(prefix);
    }
    for (var prefix1 = 624; prefix1 <= 626; prefix1++){
      (function(prefix1){
        it("has a prefix of " + prefix1 + " and a length of 16", function(){
          assert.equal(detectNetwork(prefix1 + "1234567890123"), "China UnionPay");
        });
        it("has a prefix of " + prefix1 + " and a length of 17", function(){
          assert.equal(detectNetwork(prefix1 + "12345678901123"), "China UnionPay");
        });
        it("has a prefix of " + prefix1 + " and a length of 18", function(){
          assert.equal(detectNetwork(prefix1 + "123456789011123"), "China UnionPay");
        });
        it("has a prefix of " + prefix1 + " and a length of 19", function(){
          assert.equal(detectNetwork(prefix1 + "1234567890111123"), "China UnionPay");
        });
      })(prefix1);
    }
    for (var prefix2 = 6282; prefix2 <= 6288; prefix2++){
      (function(prefix2){
        it("has a prefix of " + prefix2 + " and a length of 16", function(){
          assert.equal(detectNetwork(prefix2 + "123456789012"), "China UnionPay");
        });
        it("has a prefix of " + prefix2 + " and a length of 17", function(){
          assert.equal(detectNetwork(prefix2 + "1234567890112"), "China UnionPay");
        });
        it("has a prefix of " + prefix2 + " and a length of 18", function(){
          assert.equal(detectNetwork(prefix2 + "12345678901112"), "China UnionPay");
        });
        it("has a prefix of " + prefix2 + " and a length of 19", function(){
          assert.equal(detectNetwork(prefix2 + "123456789011112"), "China UnionPay");
        });
      })(prefix2);
    }
  });

  describe("Switch", function(){
    var assert = chai.assert;
    it("has a prefix of 4903 and a length of 16", function(){
      assert.equal(detectNetwork("4903123456789012"), "Switch");
    });
    it("has a prefix of 4905 and a length of 16", function(){
      assert.equal(detectNetwork("4905123456789012"), "Switch");
    });
    it("has a prefix of 4911 and a length of 16", function(){
      assert.equal(detectNetwork("4911123456789012"), "Switch");
    });
    it("has a prefix of 4936 and a length of 16", function(){
      assert.equal(detectNetwork("4936123456789012"), "Switch");
    });
    it("has a prefix of 564182 and a length of 16", function(){
      assert.equal(detectNetwork("5641823456789012"), "Switch");
    });
    it("has a prefix of 633110 and a length of 16", function(){
      assert.equal(detectNetwork("6331103456789012"), "Switch");
    });
    it("has a prefix of 6333 and a length of 16", function(){
      assert.equal(detectNetwork("6333123456789012"), "Switch");
    });
    it("has a prefix of 6759 and a length of 16", function(){
      assert.equal(detectNetwork("6759123456789012"), "Switch");
    });
    it("has a prefix of 4903 and a length of 18", function(){
      assert.equal(detectNetwork("490312345678901234"), "Switch");
    });
    it("has a prefix of 4905 and a length of 18", function(){
      assert.equal(detectNetwork("490512345678901234"), "Switch");
    });
    it("has a prefix of 4911 and a length of 18", function(){
      assert.equal(detectNetwork("491112345678901234"), "Switch");
    });
    it("has a prefix of 4936 and a length of 18", function(){
      assert.equal(detectNetwork("493612345678901234"), "Switch");
    });
    it("has a prefix of 564182 and a length of 18", function(){
      assert.equal(detectNetwork("564182345678901234"), "Switch");
    });
    it("has a prefix of 633110 and a length of 18", function(){
      assert.equal(detectNetwork("633110345678901234"), "Switch");
    });
    it("has a prefix of 6333 and a length of 18", function(){
      assert.equal(detectNetwork("633312345678901234"), "Switch");
    });
    it("has a prefix of 6759 and a length of 18", function(){
      assert.equal(detectNetwork("675912345678901234"), "Switch");
    });
    it("has a prefix of 4903 and a length of 19", function(){
      assert.equal(detectNetwork("4903123456789012345"), "Switch");
    });
    it("has a prefix of 4905 and a length of 19", function(){
      assert.equal(detectNetwork("4905123456789012345"), "Switch");
    });
    it("has a prefix of 4911 and a length of 19", function(){
      assert.equal(detectNetwork("4911123456789012345"), "Switch");
    });
    it("has a prefix of 4936 and a length of 19", function(){
      assert.equal(detectNetwork("4936123456789012345"), "Switch");
    });
    it("has a prefix of 564182 and a length of 19", function(){
      assert.equal(detectNetwork("5641823456789012345"), "Switch");
    });
    it("has a prefix of 633110 and a length of 19", function(){
      assert.equal(detectNetwork("6331103456789012345"), "Switch");
    });
    it("has a prefix of 6333 and a length of 19", function(){
      assert.equal(detectNetwork("6333123456789012345"), "Switch");
    });
    it("has a prefix of 6759 and a length of 19", function(){
      assert.equal(detectNetwork("6759123456789012345"), "Switch");
    });
  });
});

