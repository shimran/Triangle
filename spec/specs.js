describe('Triangle', function(){

  it('Will check to see if Triangle via Triangle Inequality', function(){
    expect(Triangle("3,0,0")).to.equal("These are not valid triangle dimensions")
  });

  it('Will return a scalene triangle if sides are different values and meet triangle inequality', function(){
    expect(Triangle("3,4,5")).to.equal("You have a Scalene Triangle");
  });

  it('Will return an isosceles triangle if only two sides are equal and meet triangle inequality', function(){
    expect(Triangle("4,4,7")).to.equal("You have an Isosceles Triangle");
  })

  it('Will return an equilateral triangle if all sides are equal and meet the triangle inequality', function(){
    expect(Triangle("5,5,5")).to.equal("You have an Equilateral Triangle")
  });

  it('Will check to see all sides are greater than zero', function(){
    expect(Triangle("5,0,5")).to.equal("All sides must have a value greater than zero")
    expect(Triangle("0,5,5")).to.equal("All sides must have a value greater than zero")
    expect(Triangle("5,0,5")).to.equal("All sides must have a value greater than zero")
  });

  it('Will check to see if all three sides are inputted', function(){
    expect(Triangle(",0,5")).to.equal("You must input three sides!")
    expect(Triangle("5,,5")).to.equal("You must input three sides!")
    expect(Triangle("5,0,")).to.equal("You must input three sides!")
  });

  it('Will accept float types for all conditions', function(){
    expect(Triangle("0,1.5,0")).to.equal("These are not valid triangle dimensions")
    expect(Triangle("3.25,4.4,5.5")).to.equal("You have a Scalene Triangle");
    expect(Triangle("4.5,4.5,7")).to.equal("You have an Isosceles Triangle");
    expect(Triangle("5.1,5.1,5.1")).to.equal("You have an Equilateral Triangle")
  });

});
