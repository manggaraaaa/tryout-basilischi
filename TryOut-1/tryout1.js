var fs = require('fs');
var file = '';
var _ = require('lodash');
var namafile = process.argv[2];

//generate file dinamis
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

function Hitung(file) {
    var HasilHitung = [];
    var fileArray = file.toString().toLowerCase().split(' ');
    var kUnik = _.uniq(fileArray);
    var kAll = _.countBy(fileArray);
    HasilHitung.push('Jumlah semua kata: '+fileArray.length);
    HasilHitung.push('Jumlah kata yang unik: '+kUnik.length);
    HasilHitung.push('Jumlah kata yang unik dan jumlahnya masing-masing:');
    _.forEach(kAll, function(value, key){
        HasilHitung.push(key+':'+value);
    });

    //Deklarasikan angka
    var Angka = fileArray.map(function(val){
        return parseInt(val);
    }).filter(Boolean);

    HasilHitung.push('Ada '+ Angka.length +' angka: '+ Angka.join(', '));
    Angka = Angka.reduce(function(acc, val){ 
    	return acc + val
    }, 0);

    HasilHitung.push('Jumlah semua angka: '+Angka);

  	//Tampilkan data
    _.forEach(HasilHitung, function(value){
        console.log(value);
    });
    return true;
}

fs.readFile(namafile, 'utf8', function(err, data){
    if(err) throw err;
    file = data;
    Hitung(file); 
})