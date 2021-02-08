
function ell1() 
{
    test1 = document.getElementById("atv-classe-ell-1").value;
    test2 = document.getElementById("atv-classe-ell-2").value;
    test3 = document.getElementById("atv-classe-ell-3").value;
    ellac = (test1 + test2 + test3)/3
    ellac1 = ellac*0.2

    test4 = document.getElementById("prova-mensal-ell-1").value;
    test5 = document.getElementById("prova-mensal-ell-2").value;
    ellmensal = (test4 + test5)/2
    ellmensal1 = ellmensal*0.4

    test6 = document.getElementById("prova-trimestral-ell-1").value;
    test7 = document.getElementById("prova-trimestral-ell-2").value;
    elltri = (test6 + test7)/2
    elltri1 = elltri*0.4

    document.getElementById("test").innerHTML = ellac1 + ellmensal1 + elltri1;
}



// document.getElementById("test").innerHTML = test1 * test2;