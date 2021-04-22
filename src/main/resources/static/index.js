$(function(){
    hentAlleMotorvogner();
    hentAlleBiler();
});

function registrerMotorvogn(){

    const motorvogn = {
        personNr: $('#input-personnummer').val(),
        navn: $('#input-navn').val(),
        adresse: $('#input-adresse').val(),
        kjennetegn: $('#input-kjennetegn').val(),
        merke: $('#valgtMerke').val(),
        type: $('#valgtType').val()
    }

    $('#error-personnummer').html("");
    $('#error-navn').html("");
    $('#error-adresse').html("");
    $('#error-kjennetegn').html("");
    $('#error-bilmerke').html("");
    $('#error-biltype').html("");


    let error = 0;

    if(motorvogn.personNr ===""){
        error++;
        $('#error-personnummer').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>");
    }

    if(motorvogn.navn === ""){
        error++;
        $('#error-navn').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>");
    }

    if(motorvogn.adresse === ""){
        error++;
        $('#error-adresse').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>");
    }

    if(motorvogn.kjennetegn === ""){
        error++;
        $('#error-kjennetegn').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>");

    }


    if(motorvogn.merke === "Velg merke..."){
        error++;
        $('#error-bilmerke').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>");
    }

    if(motorvogn.type == null){
        error++;
        $('#error-biltype').html("<p style='color: red'>Vennligst fyll ut dette feltet.</p>")
    }

    if(error>0){
        $('#feil').html("<p style='color: red'>Vennligst fyll ut alle felt</p>");
    } else {
        $.post("/lagreMotorvogn", motorvogn, function () {
            hentAlleMotorvogner();
        });

        $('#input-personnummer').val("");
        $('#input-navn').val("");
        $('#input-adresse').val("");
        $('#input-kjennetegn').val("");
        $('#input-bilmerke').val("");
        $('#input-biltype').val("");
    }

}

function hentAlleMotorvogner(){
    $.get("/hentAlleMotorvogner", function(data){
        formaterData(data);
    });
}

function hentAlleBiler(){
    $.get("/hentAlleBiler", function(biler){
        formaterBiler(biler);
    });
}

function formaterBiler(biler){
    let ut = "<select class='form-control' id='valgtMerke' onchange='finnTyper()'>";
    let forrigeMerke = "";
    ut += "<option>Velg merke...</option>";
    for(const bil of biler){
        if(bil.merke !== forrigeMerke) {
            ut += "<option>" + bil.merke + "</option>"
        }
        forrigeMerke = bil.merke;
    }
    ut += "</select>";
    $('#input-bilmerke').html(ut);
}

function finnTyper(){
    const valgtMerke = $('#valgtMerke').val();
    $.get("/hentAlleBiler", function(biler){
        formaterTyper(biler,valgtMerke);
    });
}

function formaterTyper(biler,valgtMerke){
    let ut = "<label for='input-biltype'>Type</label><select class='form-control' id='valgtType'>";
    for(const bil of biler){
        if(bil.merke === valgtMerke){
            ut += "<option>"+bil.type+"</option>";
        }
    }
    ut += "</select>"
    $('#input-biltype').html(ut);
}

function formaterData(motorvogner){

    let ut =`<h2>Motorvogner i register:</h2>
            <table class='table'>
            <tr><th>Personnr</th>
            <th>Navn</th>
            <th>Adresse</th>
            <th>Kjennetegn</th>
            <th>Bilmerke</th>
            <th>Biltype</th></tr>`;

    for(const motorvogn of motorvogner){
        ut += "<tr><td>"+motorvogn.personNr+"</td><td>"+motorvogn.navn+"</td><td>"+motorvogn.adresse+"</td><td>" +
            motorvogn.kjennetegn+"</td><td>"+motorvogn.merke+"</td><td>"+motorvogn.type+"</td></tr>"
    }
    ut += "</table><button class=\"btn btn-danger\" onclick=\"slettAlle()\">Slett alle</button>\n";
    $('#utboks').html(ut);

}

function slettAlle(){

    $.post("/slett");

    let ut = "<h2>Biler i register:</h2><table class='table'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th>" +
        "<th>Bilmerke</th><th>Biltype</th></tr>";

    $('#utboks').html(ut);
}


