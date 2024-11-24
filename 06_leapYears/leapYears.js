const leapYears = function (yr) {
  if (!yr || isNaN(yr)) return
  const yes = true
  const no = false
  if (Number.isInteger(yr / 4)) {
    if (Number.isInteger(yr / 100)) if (!Number.isInteger(yr / 400)) return no

    return yes
  }
  return no
}

// Do not edit below this line
module.exports = leapYears
