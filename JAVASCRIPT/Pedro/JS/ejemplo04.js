//Declaracion de variables
var i, j, m, n;
m = 9;
n = 9;
//Proceso principal
i = 1;
while (i <= m){
    console.log('Tabla demultiplicar del ' + i);
    j = 1;
    while( j <= n){
        console.log(i + ' x ' + j + ' = ' + i * j);
        j++;
    }
    i++;
    console.log ('-------------------');
}