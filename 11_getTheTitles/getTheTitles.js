const getTheTitles = function (coll) {
  if (!coll || coll?.length < 1) return

  const tmp = []
  coll.forEach((item) => tmp.push(item['title']))
  return tmp
}

// Do not edit below this line
module.exports = getTheTitles
