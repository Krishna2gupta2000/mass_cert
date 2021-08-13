const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const readline = require('readline');
const canvas = createCanvas(1000, 750)
const ctx = canvas.getContext('2d')

//const names =[]
function certmaker(listfile,certimg,saveloc){

 
  const file = readline.createInterface({
    input: fs.createReadStream(listfile),//'./list.json'
    output: process.stdout,
    terminal: false
  });
  // Write "Awesome!"
  //ctx.font = '30px Impact'
  //ctx.rotate(0.1)
  //ctx.fillText('Krishna Gupta', 50, 100)
  
  file.on('line',async (line) => {
    line = line.trim();
    console.log(line);
   await loadImage(certimg).then(async (image) => { //'./training_cert.png'
    ctx.drawImage(image, 0, 0, 1000, 750)
  
    // Write "Awesome!"
    ctx.font = 'bold 40px Menlo'
        //ctx.rotate(0.1)
    ctx.textAlign = "center"
    ctx.fillStyle = '#9370DB'
    ctx.fillText(line, 500, 350)
  
    const buffer = canvas.toBuffer('image/png')
   await fs.writeFileSync(saveloc+line+'.png', buffer) //'./tcertificates/'
  
          //console.log('<img src="' + canvas.toDataURL() + '" />')
        })
  });
  
  // adding name
  
}
module.exports = { certmaker };