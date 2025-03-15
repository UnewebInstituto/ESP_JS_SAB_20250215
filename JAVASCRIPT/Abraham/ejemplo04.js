var i, j, m, n;

m=9
n=9

i=1

while (i<=m){
    console.log("Tabla de multiplicar del "+i);

    //Documento no está definido en nodejs
    //document.write("Tabla de multiplicar del "+i);
   
    j=1;
    while( j<=n){
        console.log(i+ " x "+ j+ " = " + i*j);
        j++;
    }
    i++;
    console.log("--------------------------------------");

}