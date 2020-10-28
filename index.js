function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ${katzDeliLine.length - 1}. You are number ${katzDeliLine.length} in line.`)
}
