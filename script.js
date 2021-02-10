
function ell() 
{
    ellatv1 = document.getElementById("atv-classe-ell-1").value;
    ellatv2 = document.getElementById("atv-classe-ell-2").value;
    ellatv3 = document.getElementById("atv-classe-ell-3").value;
    ellatv = (ellatv1 + ellatv2 + ellatv3)/3
    ellatvtotal = (ellatv*0.2)

    ellmensal1 = document.getElementById("prova-mensal-ell-1").value;
    ellmensal2 = document.getElementById("prova-mensal-ell-2").value;
    ellmensal = (ellmensal1 + ellmensal2)/2
    ellmensaltotal = ellmensal*0.4

    elltri1 = document.getElementById("prova-trimestral-ell-1").value;
    elltri2 = document.getElementById("prova-trimestral-ell-2").value;
    elltri = (elltri1 + elltri2)/2
    elltritotal = elltri*0.4

    ellmedia = ellatvtotal + ellmensaltotal + elltritotal
}

function pdt() 
{
    pdtatv1 = document.getElementById("atv-classe-pdt-1").value;
    pdtatv2 = document.getElementById("atv-classe-pdt-2").value;
    pdtatv3 = document.getElementById("atv-classe-pdt--3").value;
    pdtatv = (pdtatv1 + pdtatv2 + pdtatv3)/3
    pdtatvtotal = (pdtatv*0.2)

    pdtmensal1 = document.getElementById("prova-mensal-pdt-1").value;
    pdtmensal2 = document.getElementById("prova-mensal-pdt-2").value;
    pdtmensal = (pdtmensal1 + pdtmensal2)/2
    pdtmensaltotal = pdtmensal*0.4

    pdttri1 = document.getElementById("prova-trimestral-pdt-1").value;
    pdtti2 = document.getElementById("prova-trimestral-pdt-2").value;
    pdttri = (pdttri1 + pdttri2)/2
    pdttritotal = pdttri*0.4

    pdtmedia = pdtatvtotal + pdtmensaltotal + pdttritotal
}

function mat() 
{
    matatv1 = document.getElementById("atv-classe-mat-1").value;
    matatv2 = document.getElementById("atv-classe-mat-2").value;
    matatv3 = document.getElementById("atv-classe-mat--3").value;
    matatv = (matatv1 + matatv2 + matatv3)/3
    matatvtotal = (matatv*0.2)

    matmensal1 = document.getElementById("prova-mensal-mat-1").value;
    matmensal2 = document.getElementById("prova-mensal-mat-2").value;
    matmensal = (matmensal1 + matmensal2)/2
    matmensaltotal = matmensal*0.4

    mattri1 = document.getElementById("prova-trimestral-mat-1").value;
    matti2 = document.getElementById("prova-trimestral-mat-2").value;
    mattri = (mattri1 + mattri2)/2
    mattritotal = mattri*0.4

    matmedia = matatvtotal + matmensaltotal + mattritotal
}

function fis() 
{
    fisatv1 = document.getElementById("atv-classe-fis-1").value;
    fisatv2 = document.getElementById("atv-classe-fis-2").value;
    fisatv3 = document.getElementById("atv-classe-fis--3").value;
    fisatv = (fisatv1 + fisatv2 + fisatv3)/3
    fisatvtotal = (fisatv*0.2)

    fismensal1 = document.getElementById("prova-mensal-fis-1").value;
    fismensal2 = document.getElementById("prova-mensal-fis-2").value;
    fismensal = (fismensal1 + fismensal2)/2
    fismensaltotal = fismensal*0.4

    fistri1 = document.getElementById("prova-trimestral-fis-1").value;
    fisti2 = document.getElementById("prova-trimestral-fis-2").value;
    fistri = (fistri1 + fistri2)/2
    fistritotal = fistri*0.4

    fismedia = fisatvtotal + fismensaltotal + fistritotal
}

function qui() 
{
    quiatv1 = document.getElementById("atv-classe-qui-1").value;
    quiatv2 = document.getElementById("atv-classe-qui-2").value;
    quiatv3 = document.getElementById("atv-classe-qui--3").value;
    quiatv = (quiatv1 + quiatv2 + quiatv3)/3
    quiatvtotal = (quiatv*0.2)

    quimensal1 = document.getElementById("prova-mensal-qui-1").value;
    quimensal2 = document.getElementById("prova-mensal-qui-2").value;
    quimensal = (quimensal1 + quimensal2)/2
    quimensaltotal = quimensal*0.4

    quitri1 = document.getElementById("prova-trimestral-qui-1").value;
    quiti2 = document.getElementById("prova-trimestral-qui-2").value;
    quitri = (quitri1 + quitri2)/2
    quitritotal = quitri*0.4

    quimedia = quiatvtotal + quimensaltotal + quitritotal
}

function bio() 
{
    bioatv1 = document.getElementById("atv-classe-bio-1").value;
    bioatv2 = document.getElementById("atv-classe-bio-2").value;
    bioatv3 = document.getElementById("atv-classe-bio--3").value;
    bioatv = (bioatv1 + bioatv2 + bioatv3)/3
    bioatvtotal = (bioatv*0.2)

    biomensal1 = document.getElementById("prova-mensal-bio-1").value;
    biomensal2 = document.getElementById("prova-mensal-bio-2").value;
    biomensal = (biomensal1 + biomensal2)/2
    biomensaltotal = biomensal*0.4

    biotri1 = document.getElementById("prova-trimestral-bio-1").value;
    bioti2 = document.getElementById("prova-trimestral-bio-2").value;
    biotri = (biotri1 + biotri2)/2
    biotritotal = biotri*0.4

    biomedia = bioatvtotal + biomensaltotal + biotritotal
}

function hist() 
{
    histatv1 = document.getElementById("atv-classe-hist-1").value;
    histatv2 = document.getElementById("atv-classe-hist-2").value;
    histatv3 = document.getElementById("atv-classe-hist--3").value;
    histatv = (histatv1 + histatv2 + histatv3)/3
    histatvtotal = (histatv*0.2)

    histmensal1 = document.getElementById("prova-mensal-hist-1").value;
    histmensal2 = document.getElementById("prova-mensal-hist-2").value;
    histmensal = (histmensal1 + histmensal2)/2
    histmensaltotal = histmensal*0.4

    histtri1 = document.getElementById("prova-trimestral-hist-1").value;
    histti2 = document.getElementById("prova-trimestral-hist-2").value;
    histtri = (histtri1 + histtri2)/2
    histtritotal = histtri*0.4

    histmedia = histatvtotal + histmensaltotal + histtritotal
}

function geo() 
{
    geoatv1 = document.getElementById("atv-classe-geo-1").value;
    geoatv2 = document.getElementById("atv-classe-geo-2").value;
    geoatv3 = document.getElementById("atv-classe-geo--3").value;
    geoatv = (geoatv1 + geoatv2 + geoatv3)/3
    geoatvtotal = (geoatv*0.2)

    geomensal1 = document.getElementById("prova-mensal-geo-1").value;
    geomensal2 = document.getElementById("prova-mensal-geo-2").value;
    geomensal = (geomensal1 + geomensal2)/2
    geomensaltotal = geomensal*0.4

    geotri1 = document.getElementById("prova-trimestral-geo-1").value;
    geoti2 = document.getElementById("prova-trimestral-geo-2").value;
    geotri = (geotri1 + geotri2)/2
    geotritotal = geotri*0.4

    geomedia = geoatvtotal + geomensaltotal + geotritotal
}

function esp() 
{
    espatv1 = document.getElementById("atv-classe-esp-1").value;
    espatv2 = document.getElementById("atv-classe-esp-2").value;
    espatv3 = document.getElementById("atv-classe-esp--3").value;
    espatv = (espatv1 + espatv2 + espatv3)/3
    espatvtotal = (espatv*0.2)

    espmensal1 = document.getElementById("prova-mensal-esp-1").value;
    espmensal2 = document.getElementById("prova-mensal-esp-2").value;
    espmensal = (espmensal1 + espmensal2)/2
    espmensaltotal = espmensal*0.4

    esptri1 = document.getElementById("prova-trimestral-esp-1").value;
    espti2 = document.getElementById("prova-trimestral-esp-2").value;
    esptri = (esptri1 + esptri2)/2
    esptritotal = esptri*0.4

    espmedia = espatvtotal + espmensaltotal + esptritotal
}

function ing() 
{
    ingatv1 = document.getElementById("atv-classe-ing-1").value;
    ingatv2 = document.getElementById("atv-classe-ing-2").value;
    ingatv3 = document.getElementById("atv-classe-ing--3").value;
    ingatv = (ingatv1 + ingatv2 + ingatv3)/3
    ingatvtotal = (ingatv*0.2)

    ingmensal1 = document.getElementById("prova-mensal-ing-1").value;
    ingmensal2 = document.getElementById("prova-mensal-ing-2").value;
    ingmensal = (ingmensal1 + ingmensal2)/2
    ingmensaltotal = ingmensal*0.4

    ingtri1 = document.getElementById("prova-trimestral-ing-1").value;
    ingti2 = document.getElementById("prova-trimestral-ing-2").value;
    ingtri = (ingtri1 + ingtri2)/2
    ingtritotal = ingtri*0.4

    ingmedia = ingatvtotal + ingmensaltotal + ingtritotal
}

function filo() 
{
    filoatv1 = document.getElementById("atv-classe-filo-1").value;
    filoatv2 = document.getElementById("atv-classe-filo-2").value;
    filoatv3 = document.getElementById("atv-classe-filo--3").value;
    filoatv = (filoatv1 + filoatv2 + filoatv3)/3
    filoatvtotal = (filoatv*0.2)

    filomensal1 = document.getElementById("prova-mensal-filo-1").value;
    filomensal2 = document.getElementById("prova-mensal-filo-2").value;
    filomensal = (filomensal1 + filomensal2)/2
    filomensaltotal = filomensal*0.4

    filotri1 = document.getElementById("prova-trimestral-filo-1").value;
    filoti2 = document.getElementById("prova-trimestral-filo-2").value;
    filotri = (filotri1 + filotri2)/2
    filotritotal = filotri*0.4

    filomedia = filoatvtotal + filomensaltotal + filotritotal
}


function mediamesal ()
{
    mensaltotal = (ellmensaltotal + pdtmensaltotal + matmensaltotal +
        fismensaltotal + quimensaltotal + biomensaltotal + histmensaltotal +
        geomensaltotal + espmensaltotal + ingmensaltotal + filomensaltotal)/12

    document.getElementById("mensal-result").innerHTML = mensaltotal;
}

function mediatrimestral ()

{
    tritotal = (elltritotal + pdttritotal + mattritotal +
        fistritotal + quitritotal + biotritotal + histtritotal +
        geotritotal + esptritotal + ingtritotal + filotritotal)/12

    document.getElementById("trimestral-result").innerHTML = tritotal;
}

function mediaatv ()
{

    atvtotal =  (ellatvtotal + pdtatvtotal + matatvtotal +
        fisatvtotal + quiatvtotal + bioatvtotal + histatvtotal +
        geoatvtotal + espatvtotal + ingatvtotal + filoatvtotal)/12


    document.getElementById("atv-result").innerHTML = atvtotal;    
}



// document.getElementById("test").innerHTML = ellatvtotal;

// document.getElementById("test").innerHTML = test1 * test2;
