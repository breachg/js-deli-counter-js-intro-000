function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ` + newName +`. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  return (`Currently serving ${katzDeliLine[0]}.`)
  if (katzDeliLine.length == 0) {
    return ("There is nobody waiting to be served!")
}
    else {
    katzDeliLine.shift();
  }
}
