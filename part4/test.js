var expect = require('chai').expect
var solution = require('./solution')

describe('solution', function(){

  context('when given 1 and 1', function(){
    it('should return true', function(){
      expect(solution(1, 1)).to.be.true
    })
  })

  context('when given "1" and 1', function(){
    it('should return false', function(){
      expect(solution("1", 1)).to.be.false
    })
  })

  context('when given "" and 0', function(){
    it('should return false', function(){
      expect(solution("", 0)).to.be.false
    })
  })

  context('when given "0" and 0', function(){
    it('should return false', function(){
      expect(solution("0", 0)).to.be.false
    })
  })

  context('when given false and 0', function(){
    it('should return false', function(){
      expect(solution(false, 0)).to.be.false
    })
  })

})
