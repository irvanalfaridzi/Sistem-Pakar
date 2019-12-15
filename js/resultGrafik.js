// Data perhitungan


var minPermintaan = 20;
var maxPermintaan = 40;

var minPersediaan = 55;
var maxPersediaan = 95;

var minProduksi = 0;
var maxProduksi = 100;

// var x = 4000;
// var y = 300;

var totalPerhitunganPermintaanBesar = 0;
var totalPerhitunganPermintaanKecil = 0;
var totalPerhitunganProduksi = 0;
var totalMaxProduksi = 0;
var totalMinProduksi = 0;

var getValueProduksi = maxProduksi - minProduksi;

var valueRulePertama = 0;
var valueRuleKedua = 0;
var valueRuleKetiga = 0;
var valueRuleKeempat = 0;
var kesimpulan;

var hasil = 0;

function hitung() {

    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;

    if (cekRangeInputX(minPermintaan, maxPermintaan, x) && cekRangeInputY(minPersediaan, maxPersediaan, y)) {

        var hasilKecilPermintaan = hitungKecilPermintaan(x, minPermintaan, maxPermintaan);
        var hasilBesarPermintaan = hitungBesarPermintaan(x, minPermintaan, maxPermintaan);
        var hasilPersediaanTerbanyak = hitungPersediaanTerbanyak(y, minPersediaan, maxPersediaan);
        var hasilPersediaanTerkecil = hitungPersediaanTerkecil(y, minPersediaan, maxPersediaan);
        var hasilMinProduksi = hitungMinProduksi(x, minProduksi, maxProduksi, getValueProduksi);
        var hasilMaxProduksi = hitungMaxProduksi(x, minProduksi, maxProduksi, getValueProduksi);

        var totalRulePertamaBanget = rulePertama(hasilKecilPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeduaBanget = ruleKedua(hasilKecilPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);
        var totalRuleKetigaBanget = ruleKetiga(hasilBesarPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeempatBanget = ruleKeempat(hasilBesarPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);

        var hitungTotalPrediksiBanget = hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertamaBanget, totalRuleKeduaBanget, totalRuleKetigaBanget, totalRuleKeempatBanget);
        
        document.getElementById('hasilKecilPermintaan').innerHTML = "Hasil Rendah Suhu Udara =" + hasilKecilPermintaan;
        document.getElementById('hasilBesarPermintaan').innerHTML = "Hasil Tinggi Suhu Udara =" + hasilBesarPermintaan;
        document.getElementById('hasilPersediaanTerbanyak').innerHTML = "Hasil Kelembapan Tertinggi =" + hasilPersediaanTerbanyak;
        document.getElementById('hasilPersediaanTerkecil').innerHTML = "Hasil Kelembapan Terrendah =" + hasilPersediaanTerkecil;
        document.getElementById('hasilMaxProduksi').innerHTML = "Hasil Max Curah Hujan =" + hasilMaxProduksi;
        document.getElementById('totalRulePertamaBanget').innerHTML = "Hasil Rule Pertama =" + totalRulePertamaBanget;
        document.getElementById('totalRuleKeduaBanget').innerHTML = "Hasil Rule Kedua =" + totalRuleKeduaBanget;
        document.getElementById('totalRuleKetigaBanget').innerHTML = "Hasil Rule Ketiga =" + totalRuleKetigaBanget;
        document.getElementById('totalRuleKeempatBanget').innerHTML = "Hasil Rule Keempat =" + totalRuleKeempatBanget;
        document.getElementById('hitungTotalPrediksiBanget').innerHTML = "Hasil Total Prediksi =" + hitungTotalPrediksiBanget +"%";
        document.getElementById('kesimpulan').innerHTML = "Dari perhitungan fuzzy prediksi curah hujan maka hasil total prediksinya yaitu: " + hitungTotalPrediksiBanget +"%";
        


// ------------------------------------
    chartSatu.datasets[2].removePoint(0);
    chartSatu.datasets[3].removePoint(0);
    
    chartDua.datasets[2].removePoint(0);
    chartDua.datasets[3].removePoint(0);
    
    produksi.datasets[2].removePoint(0);
    produksi.datasets[3].removePoint(0);
    produksi.datasets[4].removePoint(0);
    produksi.datasets[5].removePoint(0);


    chartSatu.datasets[2].addPoint(x, hasilKecilPermintaan);
    chartSatu.datasets[3].addPoint(x, hasilBesarPermintaan);

    chartDua.datasets[2].addPoint(y, hasilPersediaanTerkecil);
    chartDua.datasets[3].addPoint(y, hasilPersediaanTerbanyak);

    produksi.datasets[2].addPoint(totalRulePertamaBanget, valueRulePertama);
    produksi.datasets[3].addPoint(totalRuleKeduaBanget, valueRuleKedua);
    produksi.datasets[4].addPoint(totalRuleKetigaBanget, valueRuleKetiga);
    produksi.datasets[5].addPoint(totalRuleKeempatBanget, valueRuleKeempat);
    
    chartSatu.update();
    chartDua.update();
    produksi.update();
/*    
    produksi


var lineChartDataSatu = {
    labels: [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000],
    // labels: ['0','5', '10','15', '20','25', '30','35','40','45', '50','55', '60','65','70','75','80','85','90','95','100'],

    datasets: [{
        label: 'Permintaan Kecil',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],
        // data: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'Permintaan Besar',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataSatu').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataSatu,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Permintaan'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });


// ------------------------------------
var lineChartDataDua = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'Persediaan Terkecil',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilPersediaanTerkecil ,0,0,0,0,0,0,0],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'Persediaan Terbanyak',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilPersediaanTerbanyak  ,1,1,1,1,1,1,1],
        
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataDua').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataDua,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Persediaan'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });



// ------------------------------------




var lineChartData = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Hasil Grafik'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });*/

// ------------------------------------


// ------------------------------------

       // alert(hitungTotalPrediksiBanget);
    } else {
        alert("Iam Sorry But.");
    }

}

function hitungBesarPermintaan(input, minPermintaan, maxPermintaan) {

    totalPerhitunganPermintaanBesar = (input - minPermintaan) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanBesar;
}

function hitungKecilPermintaan(input, minPermintaan, maxPermintaan) {

    totalPerhitunganPermintaanKecil = (maxPermintaan - input) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanKecil
}

function hitungPersediaanTerbanyak(input, minPersediaan, maxPersediaan) {

    totalPerhitunganPersediaanterbanyak = (input - minPersediaan) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanterbanyak;
}

function hitungPersediaanTerkecil(input, minPersediaan, maxPersediaan) {

    totalPerhitunganPersediaanTerkecil = (maxPersediaan - input) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanTerkecil;
}

function hitungMaxProduksi(input, minProduksi, maxProduksi, getValueProduksi) {

    totalMaxProduksi = ((input - minProduksi) / (maxProduksi - minProduksi)) * getValueProduksi;

    totalMaxProduksi = maxProduksi - totalMaxProduksi;

    return totalMaxProduksi;
}

function hitungMinProduksi(input, minProduksi, maxProduksi, getValueProduksi) {

    totalMinProduksi = ((maxProduksi - input) / (maxProduksi - minProduksi)) * getValueProduksi;

    totalMinProduksi = maxProduksi - totalMinProduksi;

    return totalMinProduksi;
}


function rulePertama(permintaanTurun, persediaanBanyak, maxProduksi, totalMaxProduksi) {

    valueRulePertama = Math.max(permintaanTurun, persediaanBanyak);

    var totalRulePertama = maxProduksi - (valueRulePertama * totalMaxProduksi)

    return totalRulePertama;
}

function ruleKedua(permintaanTurun, persediaanSedikit, maxProduksi, totalMaxProduksi) {

    valueRuleKedua = Math.max(permintaanTurun, persediaanSedikit);

    var totalRuleKedua = maxProduksi - (valueRuleKedua * totalMaxProduksi)

    return totalRuleKedua;
}

function ruleKetiga(permintaanNaik, persediaanBanyak, maxProduksi, totalMaxProduksi) {

    valueRuleKetiga = Math.max(permintaanNaik, persediaanBanyak);

    var totalRuleKetiga = maxProduksi - (valueRuleKetiga * totalMaxProduksi)

    return totalRuleKetiga;
}

function ruleKeempat(permintaanNaik, persediaanSedikit, maxProduksi, totalMaxProduksi) {

    valueRuleKeempat = Math.max(permintaanNaik, persediaanSedikit);

    var totalRuleKeempat = maxProduksi - (valueRuleKeempat * totalMaxProduksi)

    return totalRuleKeempat;
}

function hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertama, totalRuleKedua, totalRuleKetiga, totalRuleKeempat) {

    var hasilPertama = (valueRulePertama * totalRulePertama) + (valueRuleKedua * totalRuleKedua) + (valueRuleKetiga * totalRuleKetiga) + (valueRuleKeempat * totalRuleKeempat);
    var hasilKedua = valueRulePertama + valueRuleKedua + valueRuleKetiga + valueRuleKeempat;

    var totalHitungPrediksi = hasilPertama / hasilKedua;

    return totalHitungPrediksi;
}

function cekRangeInputX(minPermintaan, maxPermintaan, inputanX) {

    if (inputanX >= minPermintaan && inputanX <= maxPermintaan) {
        return true;
    } else {
        return false;
    }
}

function cekRangeInputY(minPersediaan, maxPersediaan, inputanY) {

    if (inputanY >= minPersediaan && inputanY <= maxPersediaan) {
        return true;
    } else {
        return false;
    }
}

 
   var ctx = document.getElementById('DataSatu').getContext('2d');
    var chartSatu = new Chart(ctx).Scatter(
        [
            {
                label : 'Minimum',
                strokeColor : 'rgb(255, 118, 117)',
                pointStrokeColor : 'rgb(255, 118, 117)',
                data : [
                        {x:minPermintaan, y:1},
                        {x:maxPermintaan, y:0}
                ]
            },
            {
                label : 'Maximum',
                strokeColor : 'rgb(85, 239, 196)',
                pointStrokeColor : 'rgb(85, 239, 196)',
                data : [
                        {x:minPermintaan, y:0},
                        {x:maxPermintaan, y:1}
                ]
            },
            {
                label : 'Input Minimum',
                strokeColor : '#FFFF00',
                pointStrokeColor : '#FFFF00',
            },
            {
                label : 'Input Maximum',
                strokeColor : 'rgb(112, 111, 211)',
                pointStrokeColor : 'rgb(112, 111, 211)',
            }
        ],{
            responsive : true
        }
    );

    var ctx = document.getElementById('DataDua').getContext('2d');
    var chartDua = new Chart(ctx).Scatter(
        [
            {
                label : 'Minimum',
                strokeColor : 'rgb(255, 118, 117)',
                pointStrokeColor : 'rgb(255, 118, 117)',
                data : [
                        {x:minPersediaan, y:1},
                        {x:maxPersediaan, y:0}
                ]
            },
            {
                label : 'Maximum',
                strokeColor : 'rgb(85, 239, 196)',
                pointStrokeColor : 'rgb(85, 239, 196)',
                data : [
                        {x:minPersediaan, y:0},
                        {x:maxPersediaan, y:1}
                ]
            },
            {
                label : 'Input Minimum',
                strokeColor : '#FFFF00',
                pointStrokeColor : '#FFFF00',
            },
            {
                label : 'Input Maximum',
                strokeColor : 'rgb(112, 111, 211)',
                pointStrokeColor : 'rgb(112, 111, 211)',
            },
        ],{
            responsive : true
        }
    );

    var ctx = document.getElementById('canvas').getContext('2d');
    var produksi = new Chart(ctx).Scatter(
        [
            {
                label : 'Minimum',
                strokeColor : 'rgb(255, 118, 117)',
                pointStrokeColor : 'rgb(255, 118, 117)',
                data : [
                        {x:minProduksi, y:1},
                        {x:maxProduksi, y:0}
                ]
            },
            {
                label : 'Maximum',
                strokeColor : 'rgb(85, 239, 196)',
                pointStrokeColor : 'rgb(85, 239, 196)',
                data : [
                        {x:minProduksi, y:0},
                        {x:maxProduksi, y:1}
                ]
            },
            {
                label : 'Permintaan Minimum',
                strokeColor : '#FFFF00',
                pointStrokeColor : '#FFFF00',
            },
            {
                label : 'Permintaan Maximum',
                strokeColor : 'rgb(112, 111, 211)',
                pointStrokeColor : 'rgb(112, 111, 211)',
            },
            {
                label : 'Persediaan Minimum',
                strokeColor : '#F0F0F0',
                pointStrokeColor : '#F0F0F0',
            },
            {
                label : 'Persediaan Maximum',
                strokeColor : '#0F0F0F',
                pointStrokeColor : '#0F0F0F',
            }
        ],{
            responsive : true
        }
    );

/*
var lineChartData = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Hasil Grafik'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });





var lineChartDataSatu = {
    labels: [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000],
    // labels: ['0','5', '10','15', '20','25', '30','35','40','45', '50','55', '60','65','70','75','80','85','90','95','100'],

    datasets: [{
        label: 'Permintaan Kecil',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1,  ,0,0,0,0,0,0,0],
        // data: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'Permintaan Besar',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0,  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataSatu').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataSatu,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Permintaan'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });


// ------------------------------------



var lineChartDataDua = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'Persediaan Terkecil',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1,  ,0,0,0,0,0,0,0],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'Persediaan Terbanyak',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0,  ,1,1,1,1,1,1,1],
        
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataDua').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataDua,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Persediaan'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
*/



    