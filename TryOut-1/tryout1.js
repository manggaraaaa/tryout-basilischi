var fs = require('fs');
var file = '';
var _ = require('lodash');


function Hitung(file) {
    var HasilHitung = [];
    var fileArray = file.toString().toLowerCase().split(' ');
    var kUnik = _.uniq(fileArray);
    var kAll = _.countBy(file);
    result.push('Jumlah semua kata: '+fileArray.length);
    result.push('Jumlah kata yang unik: '+kUnik.length);
    result.push('Jumlah kata yang unik dan jumlahnya masing-masing:');
    _.forEach(kAll, function(value, key){
        result.push(key+':'+value);
    });

    //Deklarasikan angka
    var Angka = fileArray.map(function(val){
        return parseInt(val);
    }).filter(Boolean);

    result.push('Ada '+ Angka.length +' angka: '+ Angka.join(', '));
    Angka = Angka.reduce(function(acc, val){ 
    	return acc + val
    }, 0);

    result.push('Jumlah semua angka: '+Angka);

  	//Tampilkan data
    _.forEach(result, function(value){
        console.log(value);
    });
    return true;
}

fs.readFile('file1.txt', 'utf8', function(err, data){
    if(err) throw err;
    file = data;
    Hitung(file); 
})
