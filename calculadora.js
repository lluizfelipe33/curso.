

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Calculadora JS - SOFTEX </title>
</head>
<body>
   <script>
    var n1 = Number (window.prompt('digite um número'))
    var n2 = Number (window.prompt('digite outro número'))
    var op = String (window.prompt('digite o operador'))

    if (op == "+") {
      var result = parseInt(n1) + parseInt(n2);
      window.alert (`A soma de ${n1} é ${n2} é igual a ${result}`)
   } else {
      if (op == "-") {
         var result = n1-n2; 
         window.alert (`A subtração de ${n1} menos ${n2} é igual a ${result}`) 
      } else {
         if (op == "*") {
          var result = n1*n2; 
         window.alert (`A multiplicação de ${n1} vezes ${n2} é igual a ${result}`)
         } else {
            var result = n1/n2;
            var rest = n1%n2;
            window.alert (`A divisão de ${n1} dividido ${n2} é igual a ${result} e o resto da divisão é ${rest}.`)
         }
      }
   }
   </script>
</body>
</html>
