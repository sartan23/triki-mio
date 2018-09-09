var jugando = true
function CJugada(triqui, ficha) {

   var x, y
   var trix = document.getElementsByTagName('button');
   for(x = 0; x < 9; x += 3) {
      if ((trix[x].value == ficha) && (trix[x + 1].value == ficha))
      if (trix[x + 2].value == "")
         return (x + 2)
      if ((trix[x].value == ficha) && (trix[x + 2].value == ficha))
      if (trix[x + 1].value == "")
         return (x + 1)
      if ((trix[x + 1].value == ficha) && (trix[x + 2].value == ficha))
      if (trix[x].value == "")
      return (x)
   }
   for(x = 0; x < 3; x++) {
      if ((trix[x].value == ficha) && (trix[x + 3].value == ficha))
      if (trix[x + 6].value == "")
      return (x + 6)
      if ((trix[x].value == ficha) && (trix[x + 6].value == ficha))
      if (trix[x + 3].value == "")
      return (x + 3)
      if ((trix[x + 3].value == ficha) && (trix[x + 6].value == ficha))
      if (trix[x].value == "")
      return (x)
   }
   if ((trix[2].value == ficha) && (trix[4].value == ficha) && (trix[6].value == ""))
   return (6)
   if ((trix[2].value == ficha) && (trix[4].value == "") && (trix[6].value == ficha))
   return (4)
   if ((trix[2].value == "") && (trix[4].value == ficha) && (trix[6].value == ficha))
   return (2)
   if ((trix[0].value == ficha) && (trix[4].value == ficha) && (trix[8].value == ""))
   return (8)
   if ((trix[0].value == ficha) && (trix[4].value == "") && (trix[8].value == ficha))
   return (4)
   if ((trix[0].value == "") && (trix[4].value == ficha) && (trix[8].value == ficha))
   return (0)
   return -1
}

function PH(triqui, ficha) {
   var trix = document.getElementsByTagName('button');
   var x, y
   for(x = 0; x < 9; x += 3) {
      if ((trix[x].value == ficha) && (trix[x + 1].value == "") && (trix[x + 2].value == ""))
      return (x)
      if ((trix[x].value == "") && (trix[x + 1].value == ficha) && (trix[x + 2].value == ""))
      return (x + 1)
      if ((trix[x].value == "") && (trix[x + 1].value == "") && (trix[x + 2].value == ficha))
      return (x + 2)
   }
   return -1
}


function PV(triqui, ficha, jugadaH) {
   var x, y
   var trix = document.getElementsByTagName('button');
   for(x = 0; x < 3; x++) {

      if ((trix[x].value == ficha) && (trix[x + 3].value == "") && (trix[x + 6].value == ""))
      if (x != jugadaH)
         return (x)
      if ((trix[x].value == "") && (trix[x + 3].value == ficha) && (trix[x + 6].value == ""))
      if ((x + 3) != jugadaH)
      return (x + 3)
      if ((trix[x].value == "") && (trix[x + 3].value == "") && (trix[x + 6].value == ficha))
      if ((x + 6) != jugadaH)
      return (x + 6)
   }
   return -1
}

function OP(jugadaH, jugadav) {
   var x, y, fila, columna;
   var posicion = 0;
   matriz = new Array(3)
   for (x = 0; x < 3; x++) {
      matriz[x] = new Array(3)
      for (y = 0; y < 3; y++) {
         matriz[x][y] = posicion
         posicion ++
      }
   }
   for (x = 0; x < 3; x++) {
      for (y = 0; y < 3; y++) {
         if (matriz[x][y] == jugadaH)
           fila = x
         if (matriz[x][y] == jugadav)
            columna = y
      }
   }
   return (matriz[fila][columna])

}

function PonerRedondel(triqui) {
   var trix = document.getElementsByTagName('button');
   var jugada, jugadaH, jugadav


   jugada = CJugada(triqui, "O")

   if (jugada != -1) {

      trix[jugada].setAttribute('value', 'O');
      trix[jugada].innerHTML = "O";
      alert('vuelve a intentar')
      jugando = false
      return 1
   }
   jugada = CJugada(triqui, "X")
   if (jugada != -1) {
      trix[jugada].setAttribute('value', 'O');
      trix[jugada].innerHTML = "O";
      return 1
   }
   jugadaH = PH(triqui, "O")
   jugadav = PV(triqui, "O", jugadaH)
   if ((jugadaH != -1) && (jugadav != -1)) {

      if ((jugadaH != 4) || (jugadav != 4)) {
         jugada = OP(jugadaH, jugadav)
         trix[jugada].setAttribute('value', 'O');
         trix[jugada].innerHTML = "O";
         return 1
      }
   }

   if ((jugadaH != -1) && (jugadav == -1)) {
      if ((jugadaH != 2) && (jugadaH != 5) && (jugadaH != 8)){
      
         trix[jugadaH + 1].setAttribute('value', 'O');
         trix[jugadaH + 1].innerHTML = "O";
        }else{
         trix[jugadaH - 1].setAttribute('value', 'O');
         trix[jugadaH - 1].innerHTML = "O";

         return 1}
  }
        if ((jugadaH == -1) && (jugadav != -1)) {
         if ((jugadav != 6) && (jugadav != 7) && (jugadav != 8)){

            trix[jugadaH + 3].setAttribute('value', 'O');
            trix[jugadaH + 3].innerHTML = "O";


         }else{
            trix[jugadaH - 3].setAttribute('value', 'O');
            trix[jugadaH - 3].innerHTML = "O"; }


         return 1
   }
      if (trix[4].value == "") {

      trix[4].setAttribute('value', 'O');
      trix[4].innerHTML = "O";
          return 1
   }

   for (x = 0; x < 9; x++)
   if (trix[x].value == "") {

      trix[x].setAttribute('value', 'O');
      trix[x].innerHTML = "O";

      return 1
   }
   alert('Empate recargue la pagina')

   jugando = false
   return -1

   console.log(jugada);
}


function PonerX(triqui, posicion, valor) {
     var posicionX = valor.value;
   if (jugando) {
      if (posicionX != "")
           alert('juege otra casilla')
      else {

         valor.setAttribute('value', 'X');
         valor.innerHTML = "X";

         if ( CV(triqui, "X") ) {
            alert('Felicidades.')

            jugando = false
         } else
            PonerRedondel(triqui)
      }
   } else {
      alert('Recargar Volver a jugar ')
   }
}



function CV(triqui, ficha) {
   var trix = document.getElementsByTagName('button');
   for(x = 0; x < 9; x += 3) {

      if ((trix[x].value == ficha) && (trix[x + 1].value == ficha) && (trix[x + 2].value == ficha))
      return true
   }
   for(x = 0; x < 3; x++) {
          if ((trix[x].value == ficha) && (trix[x + 3].value == ficha) && (trix[x + 6].value == ficha))
      return true
   }
   if ((trix[2].value == ficha) && (trix[4].value == ficha) && (trix[6].value == ficha))
      return true
   if ((trix[0].value == ficha) && (trix[4].value == ficha) && (trix[8].value == ficha))
      return true
   return false
}

  var jugando = true ;

   function PintarX(whois) {
      whois.value="X";

   }

function PM(triqui, posicion) {

   var trix = document.getElementsByTagName('button');
   if (jugando) {
      if (trix[posicion].value != "")
      
         alert('juega otra casilla')

         else {
     
         console.log(posicion);
         trix[posicion].setAttribute('value', 'X');
         trix[posicion].innerHTML = "X";
        }
    }
}