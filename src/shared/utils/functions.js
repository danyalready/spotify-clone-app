export function toMinAndSec(time) {
  const seconds = time / 1000

  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)

  return `${min}:${sec}`
}
