var expect = require('chai').expect

try{
  var solution = require('./solution')
}catch(error){
  console.log('error?', error)
}


describe('solution', function(){
  it('works for a static case', function(){
    let object = {
      "size0": 10,
      "color0": 'red',
      "size1": 20,
      "color1": 'green',
      "size2": 30,
      "color2": 'blue',
    }

    expect(solution('size', object)).to.eql([10,20,30])
    expect(solution('color', object)).to.eql(['red', 'green', 'blue'])
  })

  it('works for a dynamic case', function(){
    var object = {}
    var expectedResult = []
    for (var i = 0; i < 10; i++) {
      expectedResult.push(object["number"+i] = Math.random())
    }
    for (var i = 0; i < 10; i++) {
      object["ignored"+i] = Math.random()
    }
    expect(solution('number', object)).to.eql(expectedResult)
  })
})
