import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.org'];

  let onlyExtension = '.com'

  pronouns.map((pronoun) => {
    adjs.map((adj) => {
      nouns.map((noun) => {
        extensions.map((extension) => {
          if (extension === onlyExtension) {
            const element = `${pronoun}${adj}${noun}${extension}`;
            console.log(element);
          }
        })
      })
    })
  })
};



//for (let i = 0; i < pronoun.length; i++){
//  for (let j = 0; j <adj.length; j++) {
//    for (let k = 0; k < noun.length; k++) {
//      const element = pronoun[i]+adj[j]+noun[k];
//      console.log(element + ".com");
//    }
//  }
//}
