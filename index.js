function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  let lineOrder = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    lineOrder.push(`${i + 1}. ${katzDeliLine[i]}`);
  } return `The line is currently: ${lineOrder.join(', ')}`
}


function ticketWheel() {
  let customerCount = 0;
  customerCount = customerCount++
  `Welcome, your ticket number is ${customerCount}`;
}

ticketWheel()
ticketWheel()
ticketWheel()