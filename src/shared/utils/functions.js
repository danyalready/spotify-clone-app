export function toMinAndSec(time) {
  const seconds = time / 1000

  const min = Math.floor(seconds / 60)
  const sec = ('0' + Math.floor(seconds % 60)).slice(-2)

  return `${min}:${sec}`
}
