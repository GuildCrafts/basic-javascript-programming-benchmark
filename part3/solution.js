module.exports = function(pattern, object){
  return Object.keys(object)
    .filter(function(key){
      return key.includes(pattern)
    })
    .map(function(key){
      return object[key]
    })
}
