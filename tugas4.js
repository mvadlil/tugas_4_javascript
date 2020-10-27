function tinggiBadanTertinggi(a,b,c) {
    if (a > b && a > c ) {
        console.log(a + " adalah tinggi badan tertinggi.");
    } else if ( b > a && b > c ) {
        console.log(b + " adalah tinggi badan tertinggi.");
    } else if ( c > a && c > b ) {
        console.log(c + " adalah tinggi badan tertinggi.");
    }
}

tinggiBadanTertinggi(150, 155, 165);