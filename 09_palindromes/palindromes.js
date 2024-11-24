const palindromes = function (str) {
  if (!str) return

  const revdStr = revStr(str)

  const len = str.length
  const trimedStr = trimStr(str)

  let isPalindromes = true

  for (let i = 0; i < len; i++) {
    if (trimedStr[i]?.toLowerCase() !== revdStr[i]?.toLowerCase()) {
      isPalindromes = false
      break
    }
  }

  if (!isPalindromes) return false
  return true
}

function isValidChar(char) {
  return /^[a-zA-Z0-9]$/.test(char)
}

function revStr(str) {
  if (!str) return ''
  const len = str.length

  let revTmp = ''
  for (let i = len - 1; i >= 0; i--) {
    if (!isValidChar(str[i])) continue
    revTmp += str[i]
  }
  return revTmp
}

function trimStr(str) {
  if (!str) return ''
  const len = str.length

  let trimedStr = ''
  for (let i = 0; i < len; i++) {
    if (!isValidChar(str[i])) continue
    trimedStr += str[i]
  }
  return trimedStr
}

// Do not edit below this line
module.exports = palindromes
