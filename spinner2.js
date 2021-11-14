const spinAnimation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let iteration = 0;
const timeInterval = 300;

for (const element of spinAnimation) {
  iteration++;
  setTimeout( function () {
    process.stdout.write('\r' + element + '   ');
  }, timeInterval * iteration)
}
