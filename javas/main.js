$( document ).ready(function() {
    $("#btc_qr").hide();
    $("#btc_address").hide();
    $("#ltc_qr").hide();
    $("#ltc_address").hide();
    $("#eth_qr").hide();
    $("#eth_address").hide();
    $("#doge_qr").hide();
    $("#doge_address").hide();
    $("#bch_qr").hide();
    $("#bch_address").hide();
    $("#trx_qr").hide();
    $("#trx_address").hide();
});

$(function() {
    $("#btc_button").click(function (event) {
        if( $("#btc_button").text() == "Show Address"){
            $("#btc_address").show();
            $("#btc_qr").show();
            $("#btc_button").html("Hide Address");
        }
        else{
            $("#btc_address").hide();
            $("#btc_qr").hide();
            $("#btc_button").html("Show Address");
        }
    });
    $("#ltc_button").click(function (event) {
        if( $("#ltc_button").text() == "Show Address"){
            $("#ltc_address").show();
            $("#ltc_qr").show();
            $("#ltc_button").html("Hide Address");
        }
        else{
            $("#ltc_address").hide();
            $("#ltc_qr").hide();
            $("#ltc_button").html("Show Address");
        }
    });
    $("#bch_button").click(function (event) {
        if( $("#bch_button").text() == "Show Address"){
            $("#bch_address").show();
            $("#bch_qr").show();
            $("#bch_button").html("Hide Address");
        }
        else{
            $("#bch_address").hide();
            $("#bch_qr").hide();
            $("#bch_button").html("Show Address");
        }
    });
    $("#eth_button").click(function (event) {
        if( $("#eth_button").text() == "Show Address"){
            $("#eth_address").show();
            $("#eth_qr").show();
            $("#eth_button").html("Hide Address");
        }
        else{
            $("#eth_address").hide();
            $("#eth_qr").hide();
            $("#eth_button").html("Show Address");
        }
    });
    $("#trx_button").click(function (event) {
        if( $("#trx_button").text() == "Show Address"){
            $("#trx_address").show();
            $("#trx_qr").show();
            $("#trx_button").html("Hide Address");
        }
        else{
            $("#trx_address").hide();
            $("#trx_qr").hide();
            $("#trx_button").html("Show Address");
        }
    });
    $("#doge_button").click(function (event) {
        if( $("#doge_button").text() == "Show Address"){
            $("#doge_address").show();
            $("#doge_qr").show();
            $("#doge_button").html("Hide Address");
        }
        else{
            $("#doge_address").hide();
            $("#doge_qr").hide();
            $("#doge_button").html("Show Address");
        }
    });
});