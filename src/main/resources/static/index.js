const Bilettene = [];
function Kjopbilett()
{
    let Filmnavn;
    try {
        Filmnavn = document.getElementById('select').value;
        if (Filmnavn == null || Filmnavn ==='')
        {
            throw new error;
        }
    } catch (error)
    {
        document.getElementById('velgfilm').innerHTML = 'Velg en film';
    }
    let Antall;
    try {
        Antall = document.getElementById('Antall').value;
        if ((Antall<=0)){
            throw new error;
        }
    } catch (error){
        document.getElementById('divAntall').style.color ='red'
        document.getElementById('divAntall').innerHTML = 'Må skrive noe inn i antall';
    }

    let Navn;
    try{
        Navn = document.getElementById('Fornavn').value;
        if ((Navn==null)||(Navn=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('divFornavn').style.color ='red'
        document.getElementById('divFornavn').innerHTML =' Må skrive noe inn i fornavnet';
    }
    let Etternavn;
    try {
        Etternavn = document.getElementById('Etternavn').value;
        if ((Etternavn==null)||(Etternavn=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('divEtternavn').style.color ='red'
        document.getElementById('divEtternavn').innerHTML =' Må skrive noe inn i etternavnet';

    }
    let Telefonnr;
    try {
        Telefonnr = document.getElementById('Telefonnr').value;
        if ((Telefonnr==null)||(Telefonnr=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('divTelefonnr').style.color ='red'
        document.getElementById('divTelefonnr').innerHTML = ' Må skrive noe inn i  telefonnr ';

    }
    let Epost;
    try {
        Epost = document.getElementById('Epost').value;
        if ((Epost == null)||(Epost=="")){
            throw new error;
        }
    } catch (error) {
        document.getElementById('divEpost').style.color ='red'
        document.getElementById('divEpost').innerHTML =' Må skrive noe inn i epost'

    }

    let Bilett = {
        Filmnavn: Filmnavn,
        Antall: Antall,
        Navn: Navn,
        Etternavn: Etternavn,
        Telefonnr: Telefonnr,
        Epost: Epost,
    }

    if(Antall !="" && Navn !="" && Etternavn !="" && Telefonnr !="" && Epost !=""){
        Bilettene.push(Bilett)
    }

    document.getElementById('select').value = '';
    document.getElementById('Antall').value = '';
    document.getElementById('Fornavn').value = '';
    document.getElementById('Etternavn').value = '';
    document.getElementById('Telefonnr').value = '';
    document.getElementById('Epost').value = '';

    visBilettene();

}

function visBilettene() {
    let ut = "<table border='1'>";
    ut += "<tr>";
    ut += "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";
    ut += "</tr>"

    for (let b of Bilettene) {
        ut += "<tr> <td>" + b.Filmnavn + "</td><td>" + b.Antall +
            "</td><td>" + b.Navn + "</td><td>" + b.Etternavn +
            "</td><td>" + b.Telefonnr + "</td><td>" + b.Epost +"</td></tr>"

    }

    ut += "<table>";

    document.getElementById("Skriv").innerHTML = ut;

}

function SlettBilettene() {
    Bilettene.splice(0,Bilettene.length);
    visBilettene();
    document.getElementById('divAntall').innerHTML = '';
    document.getElementById('divFornavn').innerHTML = '';
    document.getElementById('divEtternavn').innerHTML = '';
    document.getElementById('divTelefonnr').innerHTML = '';
    document.getElementById('divEpost').innerHTML = '';
}