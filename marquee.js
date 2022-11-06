function Marquee(...options) {
  this.marqueeLength = options[1]
  this.phrase = options[0]

  let blankStr = Array(this.marqueeLength - this.phrase.length).fill(" ").join("");
  let strForMarquee = blankStr + this.phrase + blankStr;


  this.run = () => {
    let pos = 0;
    let limit = 36;
    setInterval(() => {
      console.clear();
      console.log(strForMarquee.substring(pos++, limit++));
      if (pos === (blankStr.length+this.phrase.length)) {
        pos = 0;
        limit = 36;
      }
    }, 200);
  }
}

const marquee = new Marquee('Codeable', 50);
