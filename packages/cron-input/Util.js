export function range(start, num) {
  const arr = []
  for (let i = start,index = 0; i < start + num; i++) {
    arr[index++] = i
  }
  return arr
}