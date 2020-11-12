#!/usr/bin/env node

const { white, cyan, bold, blue } = require('colorette')

const info = {
    Work: white(`${blue('Fresh Qube')}, Founder - Building Customer-Led and Data-Driven Products with Cloud Native Technologies`),
    Github: cyan('vemuruadi'),
    Twitter: cyan('vemuruadi'),
    LinkedIn: cyan('linkedin.com/in/vemuruadi') + '\n' ,
    Email: cyan('adi@vemuruadi.com'),
    Card: white('npx vemuruadi'),
}

const head = `${blue(bold('  Adi Vemuru') + ' /')} ${blue('vemuruadi')} / ${white('vemuruadi.com')}`

const body = Object.entries(info)
  .map(([key, value]) => [white(bold(`${key}:`.padStart(16, ' '))), value].join(' '))
  .join('\n')

console.log('\n' + [head, body].join('\n\n') + '\n')