module.exports = extrude

function extrude(out, arr, bot, top, brr) {
  var size = arr.length
  var out = out || new Float32Array(size * 3 + 6)

  brr = brr || arr

  for (var i = 1, n = 3; i < size; i += 2, n += 6) {
    out[n-3] = arr[i-1]
    out[n-2] = bot
    out[n-1] = arr[i]
    out[n]   = brr[i-1]
    out[n+1] = top
    out[n+2] = brr[i]
  }

  out[n - 3] = arr[0]
  out[n - 2] = bot
  out[n - 1] = arr[1]
  out[n    ] = brr[0]
  out[n + 1] = top
  out[n + 2] = brr[1]

  return out
}

extrude.faces = faces
function faces(arr, out) {
  out = out || new Float32Array(arr.length - 6)
  for (var i = 2, l = arr.length, n = 6; i <= l; i += 1, n += 3) {
    out[n-2] = i-2
    out[n-1] = i-1
    out[n-0] = i
  }
  return out
}
