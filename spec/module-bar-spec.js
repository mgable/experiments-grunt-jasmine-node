(function(){
  var proxyquire  =  require('proxyquire');

  describe("Foo + Bar Handling: ", function() {
    var m = proxyquire('../src/module.bar.js', {"./module.foo":{"foo" :function () {return "fxx";}}});
      text = "Hello";

    it("this will be in ERROR!",  function() {
      expect(m.bar(text)).toEqual("Hello foo");
    });

    it("the output should be correct",  function() {
      expect(m.bar(text)).not.toEqual("Hello foo");
    });
  });

})();