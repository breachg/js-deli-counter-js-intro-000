function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ${katzDeliLine[0]}. You are number ${katzDeliLine.length} in line.`)
}
