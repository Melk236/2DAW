var n, doblePareja = 0, trio = 0, escaleraSimple = 0, escaleraCompleta = 0, pocker = 0;
function probabilidad() {

    for (let i = 0; i < 10000; i++) {
        if (i < 10) {
            if (i == 0) {
                pocker++;
            }
            else {
                trio++;
            }
        }
        else if (i < 100) {
            n = i.toString();
            n = '00' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();
            if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }
        else if (i < 1000) {
            n = i.toString();
            n = '0' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();

            if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {

                escaleraCompleta++;

            }
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }
        else {
            n = i.toString();
            n = n.split('');
            n = n.map(Number);
            n.sort();
            if (n[0] == n[1] && n[0] == n[2] && n[0] == n[3]) {
                pocker++;
            }
            else if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {

                escaleraCompleta++;

            }
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }

    }
   
    document.write('Pocker: ' + (pocker * 100) / 10000 + '%<br>');
    document.write('Escalera Completa: ' + (escaleraCompleta * 100) / 10000 + '%<br>');
    document.write('Escalera Simple: ' + (escaleraSimple * 100) / 10000 + '%<br>');
    document.write('Trio: ' + (trio * 100) / 10000 + '%<br>');
    document.write('Doble Pareja: ' + (doblePareja * 100) / 10000 + '%<br>');

    setTimeout(() => {
        window.close()
    }, 10000);
}
probabilidad();