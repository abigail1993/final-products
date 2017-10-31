prompt("ingresa frase para encriptar")


var cesar = function cipher (str,shift){
  var out = "";
  for (var i = 0; i<str.length; i++){
    var c = str [i];

    if((c.charCodeAt(0) >= 65) && (c.charCodeAt(0) <= 90)) {
      var letter= c.charCodeAt (0) - 65;
      out += String.fromCharCode (((letter + shift) % 26) + 65);
    }

    else if ((c.charCodeAt(0) >=97) && (c.charCodeAt (0)<=122)){
      var lowecase  = c.charCodeAt (0) - 97;
      out += String.fromCharCode (((lowecase + shift) % 26) + 97);
    }
  }
  console.log(out);
};

cesar("a",33)
