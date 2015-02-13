describe('triangle', function(){
  it('will output the length of side one'), function(){
    expect(Triangle(3).to.equal("Side one equals", 3))
  });
});
describe('wordOrder', function(){
  it('will output the word from a one word string', function(){
    expect(wordOrder("Hello")).to.equal("Hello");
  });
  
