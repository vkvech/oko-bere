let balicek = 
[
{hodnota:1,karta:"zelený spodek"},
{hodnota:1,karta:"červený spodek"},
{hodnota:1,karta:"žaludský spodek"},
{hodnota:1,karta:"kulový spoek"},

{hodnota:1,karta:"zelený svršek"},
{hodnota:1,karta:"červený svršek"},
{hodnota:1,karta:"žaludský svršek"},
{hodnota:1,karta:"kulový svrek"},

{hodnota:2,karta:"zelený král"},
{hodnota:2,karta:"červený král"},
{hodnota:2,karta:"žaludský král"},
{hodnota:2,karta:"kulový kál"},

{hodnota:7,karta:"zelená sedma"},
{hodnota:7,karta:"červená sedma"},
{hodnota:7,karta:"žaludská sedma"},
{hodnota:7,karta:"kulová sema"},

{hodnota:8,karta:"zelená osmička"},
{hodnota:8,karta:"červená osmička"},
{hodnota:8,karta:"žaludská osmička"},
{hodnota:8,karta:"kulová osmika"},

{hodnota:9,karta:"zelená devítka"},
{hodnota:9,karta:"červená devítka"},
{hodnota:9,karta:"žaludská devítka"},
{hodnota:9,karta:"kulová devítka"},

{hodnota:10,karta:"zelená desítka"},
{hodnota:10,karta:"červená desítka"},
{hodnota:10,karta:"žaludská desítka"},
{hodnota:10,karta:"kulová desítka"},

{hodnota:11,karta:"zelené eso"},
{hodnota:11,karta:"červené eso"},
{hodnota:11,karta:"žaludské eso"},
{hodnota:11,karta:"kulové eso"},
];

let zamichanyBalicek = [];
let rozpocet =0;
let rozpocet1 =0;
let rozpocet2=0;
let rozpocet3 =0;
let kartyNaStole = 0;
let pocitac=0;
let scoreVyhra =0;
let scoreProhra=0;

function barva(){

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);


    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}



function reset()
{
    let con = window.confirm("Opravdu chceš restartovat hru?");
    if (con == true)
    {
        location.reload();
    }
}

function odejit()
{
    let con = window.confirm("Opravdu chceš odejít?");
    if (con == true)
    {
        document.getElementById("buttonVzitKartu").disabled = true;
        document.getElementById("castka").disabled = true;
        document.getElementById("vsadit").disabled = true;
        document.getElementById("ukoncitKolo").disabled = true;
        document.getElementById("odejit").disabled = true;
        document.getElementById("barva").disabled = true;
    }
}

function vklad()
{
    let con = true;
    let rozpocetParagraf = document.getElementById("rozpocet");
    document.getElementById("score").innerHTML=scoreVyhra + " : "+scoreProhra
    while(con == true)
    {
        rozpocet = prompt("kolik si sebou bereš");
        rozpocet = Number(rozpocet);
        let x = isNaN(rozpocet);
         if (rozpocet <100)
        {
            alert("minimální vklad je 100Kč");
        }
         else if (x == true)
        {
            alert("písmenka tady neberem");
        }

        else if(rozpocetParagraf.innerHTML == "")
        {
            rozpocet = Math.floor(rozpocet/3);
            con =false;
            rozpocet1=rozpocet;
            rozpocet2=rozpocet; 
            rozpocet3=rozpocet;

            document.getElementById("zivot1").innerHTML = rozpocet1;
            document.getElementById("zivot2").innerHTML = rozpocet2;
            document.getElementById("zivot3").innerHTML = rozpocet3;
            rozpocetParagraf.innerHTML = "máš " + rozpocet + " Kč";
        }
    }
}


function vsadit()
{
    let castka = document.getElementById("castka");
    let sazkaVypis = document.getElementById("sazka");
    if (!isNaN(castka.value))
    {
        if (castka.value > 0)
        {
            if (castka.value <= rozpocet)
            {
                sazkaVypis.innerHTML="vsadil jsi " + castka.value + " Kč";
                michani();
                document.getElementById("buttonVzitKartu").disabled = false;
                document.getElementById("castka").disabled = true;
                document.getElementById("vsadit").disabled = true;
                document.getElementById("odejit").disabled = true;
            }
            else
            {
                alert("nemůžeš vsadit více než kolik máš")
            }
        }
        else
        {
            alert("na účet nebo zadarmo se tady nehraje")
        }
    }
    else
    {
        alert("písmenka tady neberem")
    }
}

function michani()
{
    let x=1;
     if(balicek.length==0)   
    {
        for(let i=0;i<zamichanyBalicek.length;i++)
        {
            balicek.push(zamichanyBalicek[i]);
            zamichanyBalicek.splice(i,1);
        }
    }
     while(x==1)
    {
        
        if(balicek.length!=0)
        {
            for(let i=0;i<balicek.length;i++)
            {
                let y = Math.floor(Math.random() * 10);
                if(y<2)
                {
                   zamichanyBalicek.push(balicek[i]);
                   balicek.splice(i,1);
                }
            }
            
        }
        else
        {
            x=0;
        }
        
    }
}

function sazka()
{
    let x =  document.getElementById("castka");
    let castka = 0; 
    castka=x.value;
    castka = Number(castka)
    return castka;
}

function vyhra()
{
    let rozpocetParagraf = document.getElementById("rozpocet");
    let x = sazka();
    let y = rozpocet;
    let z = 0;
    z = y+x
    rozpocet = z;
    rozpocetParagraf.innerHTML = "máš " + z + " Kč";
    scoreVyhra++;
    znovu();
}

function prohra()
{
    let rozpocetParagraf = document.getElementById("rozpocet");
    let x = sazka();
    let y = rozpocet;
    let z = y-x;
    rozpocet = z;
    rozpocetParagraf.innerHTML = "máš " + z + " Kč";
    scoreProhra++;
    znovu();
}

function remiza()
{
    znovu();
}

function znovu()
{
    document.getElementById("vytahnuteKartyHrac").innerHTML = ""
    document.getElementById("vytahnuteKartyPocitac").innerHTML = ""
    document.getElementById("celkemHrac").value ="";
    document.getElementById("celkemPocitac").value ="";
    document.getElementById("sazka").innerHTML = ""
    pocitac=0;
    kartyNaStole=0;
    document.getElementById("buttonVzitKartu").disabled = true;
    document.getElementById("castka").disabled = false;
    document.getElementById("vsadit").disabled = false;
    document.getElementById("ukoncitKolo").disabled = true;
    document.getElementById("odejit").disabled = false;
    zivoty();
    score();
}

function vzitKartu()
{
    let con = document.getElementById("sazka");
    let karty = document.getElementById("vytahnuteKartyHrac");
    let celkem = document.getElementById("celkemHrac");
    let x =0;
    let y = celkem.value;
    document.getElementById("ukoncitKolo").disabled = false;
    
    if(con.innerHTML =="")
    {
        alert("nemůžeš hrát když jsi nic nevsadil")
    }
    else
    {
        x = zamichanyBalicek[kartyNaStole].hodnota;
        y = Number(y)
        celkem.value =x+y;
        karty.innerHTML += "vzal jsi si " + zamichanyBalicek[kartyNaStole].karta +" s hodnotou " + zamichanyBalicek[kartyNaStole].hodnota+"<br>";
        kartyNaStole++;

        if((celkem.value>21) && (kartyNaStole>2))
        {
            setTimeout(function() {
                alert("prohráváš překonal jsi hodnotu 21")
                prohra();                
            }, 100);
        }
        
        else if((celkem.value==22) && (kartyNaStole==2))
        {
            setTimeout(function() {
                alert("vyhráváš dostal jsi královské oko");
                vyhra();
            }, 100);
        }
    }
}

function konec()
{
    let karty = document.getElementById("vytahnuteKartyPocitac");
    let i = 0;
    let y = true;
    let celkem = document.getElementById("celkemPocitac");

    while(pocitac<18)
    {
        i++;
        karty.innerHTML += "Počítač si vzal " + zamichanyBalicek[kartyNaStole].karta +" s hodnotou " + zamichanyBalicek[kartyNaStole].hodnota+"<br>";
        x = zamichanyBalicek[kartyNaStole].hodnota;
        pocitac += x
        celkem.value=pocitac;
        kartyNaStole++;

        if(pocitac>21 && (i>2))
        {
            setTimeout(function() {
                alert("vyhráváš počítač překonal 21");
                vyhra();
            }, 100);
                y=false;
            
        }
        
        else if((pocitac==22) && (i==2))
        {
            setTimeout(function() {
                alert("prohráváš počítač získal královské oko");
                prohra();
            }, 100);
            y=false;
        }
    }

    if(y==true)
    {
       porovnani() 
    }
}

function porovnani()
{
    let x=0;
    let y=0;
    let celkem = document.getElementById("celkemHrac").value;
    celkem = Number(celkem)
    x=(celkem-21)*-1;
    y=(pocitac-21)*-1;
    let jeMensi = x<y;
        if(jeMensi == true)
        {
            setTimeout(function() {
                alert("vyhráváš jsi blíže 21")
                vyhra()
            }, 100);
        }

        else if (x==y)
        {
            setTimeout(function() {
                alert("je to remíza oba máte stejný počet")
                remiza();
            }, 100);
        }

        else
        {
            setTimeout(function() {
                alert("prohráváš počítač je blíže 21")
                prohra();
            }, 100);
        }
}

function zivoty()
{
    let zivot1 = document.getElementById("zivot1");
    let zivot2 = document.getElementById("zivot2");
    let zivot3 = document.getElementById("zivot3");
    let rozpocetParagraf = document.getElementById("rozpocet");

    if(rozpocet1 >=0)
    {
        rozpocet1=rozpocet;
        zivot1.innerHTML = rozpocet1;
        if(rozpocet1 ==0)
        {
            rozpocet1 = -1;
            rozpocet = rozpocet2;
            rozpocetParagraf.innerHTML = "máš " + rozpocet + " Kč";
        }
    }
    else if(rozpocet2 >=0)
    {
        rozpocet2=rozpocet;
        zivot2.innerHTML = rozpocet2;
        if(rozpocet2 ==0)
        {
            rozpocet2 = -1;
            rozpocet = rozpocet3;
            rozpocetParagraf.innerHTML = "máš " + rozpocet + " Kč";
        }
    }
    else if(rozpocet3 >0)
    {
        rozpocet3=rozpocet;
        zivot3.innerHTML = rozpocet3;
    }

    if (rozpocet3 ==0)
    {
        document.getElementById("buttonVzitKartu").disabled = true;
        document.getElementById("castka").disabled = true;
        document.getElementById("vsadit").disabled = true;
        document.getElementById("ukoncitKolo").disabled = true;
        alert("přišel jsi o všechny peníze")
    }
}

function score()
{
    document.getElementById("score").innerHTML=scoreVyhra + " : "+scoreProhra
}

let x1 = 150;
let dx1 = 0;
let y1 = 10;
let dy1 = 5;

let x2 = 275;
let dx2 = 0;
let y2 = 80;
let dy2 = 5;

let x3 = 400;
let dx3 = 0;
let y3 = 150;
let dy3 = 5;

function vykreslit(){

    let obsah = document.getElementById("platno").getContext("2d");
    if(y1<10)
    {
        dy1=-dy1;
    }

    else if(y1>150)
    {
        dy1=-dy1;
    }

    x1+=dx1;
    y1+=dy1;

    if(y2<10)
    {
        dy2=-dy2;
    }

    else if(y2>150)
    {
        dy2=-dy2;
    }

    x2+=dx2;
    y2+=dy2;

    if(y3<10)
    {
        dy3=-dy3;
    }

    else if(y3>150)
    {
        dy3=-dy3;
    }

    x3+=dx3;
    y3+=dy3;
    
    
    obsah.fillStyle='rgba(255,0,255,0.25)';
    obsah.fillRect(0,0,600,300);
    obsah.clearRect(0,0,600,300);

    if(rozpocet3 > 0)
    {
        obsah.beginPath();
        obsah.arc(x1+15, y1+16, 25, 0, 2*Math.PI);
        obsah.fillStyle="red";
        obsah.fill();
        obsah.stroke();
    }

    if(rozpocet2 > 0)
    {
        obsah.beginPath();
        obsah.arc(x2+15, y2+16, 25, 0, 2*Math.PI);
        obsah.fillStyle="red";
        obsah.fill();
        obsah.stroke(); 
    }

    if (rozpocet1 > 0)
    {
        obsah.beginPath();
        obsah.arc(x3+15, y3+16, 25, 0, 2*Math.PI);
        obsah.fillStyle="red";
        obsah.fill();
        obsah.stroke();
    }
  }

setInterval(vykreslit,15);