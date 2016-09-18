(function(){
  var proxyquire  =  require('proxyquire');

  describe("Foo + Bar Handling: ", function() {
    // var bar = require('../src/module.bar.js'),
    var m = proxyquire('../src/module.bar.js', {"./module.foo":{"foo" :function () {return "fxx";}}});
      text = "Hello";
      console.info("xxxxx");
      console.info(m.bar(text));


    it("the output should be correct",  function() {
      expect(m.bar(text)).toEqual("Hello foo");
    });
  });

})();