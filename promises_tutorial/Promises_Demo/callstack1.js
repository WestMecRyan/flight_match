function one() { 
    console.log('starting function one');
    function two() { 
        console.log('starting function two');
        function three() { 
            console.log('starting function three');
            console.log('three');
            console.log('ending function three');
        }
        three();
        console.log('ending function two');
    }
    two();
    console.log('ending function one');
}

one();