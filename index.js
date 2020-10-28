function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ${katzDeliLine[newName]}. You are number ${katzDeliLine.length} in line.`)
}
