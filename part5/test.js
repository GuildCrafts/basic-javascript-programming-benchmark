var expect = require('chai').expect
var solution = require('./solution')

describe('solution', function(){

  context('when given 1', function(){
    it('should return true', function(){
      expect(solution(1)).to.be.true
    })
  })

  context('when given 0', function(){
    it('should return false', function(){
      expect(solution(0)).to.be.false
    })
  })

  context('when given ""', function(){
    it('should return false', function(){
      expect(solution("")).to.be.false
    })
  })

  context('when given "0"', function(){
    it('should return false', function(){
      expect(solution("0")).to.be.true
    })
  })

  context('when given undefined', function(){
    it('should return false', function(){
      expect(solution()).to.be.false
    })
  })

})
