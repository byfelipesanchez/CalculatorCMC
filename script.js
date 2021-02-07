
function ell1 () 
{
    var atv1 = document.getElementById('atv-class-ell-1').value;
    var atv2 = document.getElementById('atv-class-ell-2').value;
    var atv3 = document.getElementById('atv-class-ell-3').value;

    var atvResult = (atv1 + atv2 + aatv3)*0.2;

    var mensal1 = document.getElementById('prova-mensal-ell-1').value;
    var mensal2 = document.getElementById('prova-mensal-ell-2').value;

    var mensalResult = (mensal1 + mensal2)*0.4;

    var trimestral1 = document.getElementById('prova-trimestral-ell-1');
    var trimestral2 = document.getElementById('prova-trimestral-ell-2');

    var triResult = (trimestral1 + trimestral2)*0.4;

    var ell = (atvResult + mensalResult + triResult).innerHTML=(ell)

    i

};

// var ell = document.querySelectorAll('#atv-class-ell', '#prova-mensal-ell', '#prova-trimestral-ell');



// document.getElementById(('atv-class-ell')*3 *0.2) +
// document.getElementById(('prova-mensal-ell')*2 *0.4) +
// document.getElementById(('prova-trimestral-ell')*2 *0.4)
    