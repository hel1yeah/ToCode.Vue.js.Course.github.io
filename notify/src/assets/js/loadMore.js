export default function loadMore (res) {
  const messages = []
  // if > 3
  if (res.length > 3) {
    for (let i = 0; i < 3; i++) {
      // main - false to main - true
      res[i].main = true
      messages.push(res[i])
    }
    // back messages
    return messages
  // if < 2
  } else {
    for (let i = 0; i < res.length; i++) {
      res[i].main = true
      messages.push(res[i])
    }
    // back messages
    return messages
  }

}