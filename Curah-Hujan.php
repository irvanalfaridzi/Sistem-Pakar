<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UTS SISPAK</title>

    <link rel="stylesheet" href="style/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body>
    <div class="container-fluid">

    <h1 style="text-align: center">UTS Sistem Pakar-17410100073</h1>
    <h5 style="text-align: center" class="sub">Prediksi Curah Hujan Metode Fuzzy</h5>

    <div class="row">
        <div class="col-md-4">
            <div class="chart-one" style="width:100%; height:auto; border:1px solid #000000;">
            <canvas id="DataSatu"></canvas>
            </div>
        </div>
        <div class="col-md-4">
        <div class="chart-one" style="width:100%; height:auto; border:1px solid #000000;">
            <canvas id="DataDua"></canvas>
            </div>
        </div>
        <div class="col-md-4">
        <div class="chart-three" style="width:100%; height:auto; border:1px solid #000000;">
            <canvas id="canvas"></canvas>
        </div>
        </div>
    </div>

    <h5>Masukkan Inputan</h5>
        <input type="text" id="x" value="35" placeholder="Masukkan Nilai X">
        <input type="text" id="y" value="75" placeholder="Masukkan Nilai y">

        <button type="submit" id="hitungTotal" onClick="hitung();">Hitung</button>

        <div class="row">
            <div class="col-md-4">
            <p id="hasilKecilPermintaan"></p>
            <p id="hasilBesarPermintaan"></p>
            </div>
            <div class="col-md-4">
            <p id="hasilPersediaanTerbanyak"></p>
            <p id="hasilPersediaanTerkecil"></p>
            </div>
            <div class="col-md-4">
            <p id="hasilMaxProduksi"></p>
            <p id="totalRulePertamaBanget"></p>
            <p id="totalRuleKeduaBanget"></p>
            <p id="totalRuleKetigaBanget"></p>
            <p id="totalRuleKeempatBanget"></p>
            <p id="hitungTotalPrediksiBanget"></p>
            </div>
            <div class="col-md-8">
            <!-- <h5>Kesimpulan</h5> -->
            <p id="kesimpulan"></p>
            </div>
        </div>




       

    </div>

</body>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<script src="js/Chart.Core.js"></script>
<script src="js/Chart.Scatter.js"></script>
<!-- 
<script src="js/utils.js"></script>
 -->
<script src="js/resultGrafik.js"></script>
</html>