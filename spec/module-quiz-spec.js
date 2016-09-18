(function(){

  describe("Array Handling: ", function() {
    describe("checking a common js file", function() {
      describe ("In array \"objArray\" find the obj with the lowest \"e\" and return its \"i\"", function(){

        var quiz = require('../src/module.quiz.js');

      var a = Math.round(Math.random() * 10),
        b = Math.round(Math.random() * 100) + 20,
        c = Math.round(Math.random() * 100) + 30,
        d = Math.round(Math.random() * 100) + 40;

       var aa = Math.round(Math.random() * 10),
          bb = Math.round(Math.random() * 100) + 20,
          cc = Math.round(Math.random() * 100) + 30,
          dd = Math.round(Math.random() * 100) + 40;

        var objArray = [{i:aa, e:a}, {i:bb, e:b}, {i:cc, e:c}, {i:dd, e:d}];

        it("The lowest value is " + aa,  function() {
          console.info(objArray);
          expect(quiz(objArray)).toEqual(aa);
        });
      })
    });
  });

})();