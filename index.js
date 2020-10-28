function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ` + newName +`. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  var outputString;
  if (katzDeliLine.length == 0) {
    outputString ="There is nobody waiting to be served!"
}
    else { outputString = "Currently serving " + katzDeliLine[0]+".";
   katzDeliLine.shift()
 }
  return outputString;
}
