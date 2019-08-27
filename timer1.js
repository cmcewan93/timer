let beepTimes = process.argv.slice(2);
beepTimes = beepTimes.sort((a,b) => a- b);
 //update later                   


for (let i = 0; i <beepTimes.length; i++) {
  if(isNaN(beepTimes[i])|| beepTimes[i] < 0) {
    continue;
  } else {
    setTimeout(() => {
      console.log(beepTimes[i]);
      process.stdout.write('\x07');
      }, beepTimes[i] * 1000);
  }
};