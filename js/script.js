function traducir(){
    var textOriginal = document.getElementById('textOriginal').value;
    var textTraducido = document.getElementById('textTraducido');
    var textListo = '';
    var añadirM = true;

    for(var i = 0; i < textOriginal.length; i++){
        if(añadirM){
            switch(textOriginal[i]){
                case 'a':
                    textListo = textListo.concat('am');
                    añadirM = false;
                    break;
                case 'e':
                    textListo = textListo.concat('em');
                    añadirM = false;
                    break;
                case 'i':
                    textListo = textListo.concat('im');
                    añadirM = false;
                    break;
                case 'o':
                    textListo = textListo.concat('om');
                    añadirM = false;
                    break;
                default:
                    textListo = textListo.concat(textOriginal[i]);
            }
        }else if(textOriginal[i] === ' '){
            textListo = textListo.concat(textOriginal[i]);
            añadirM = true
        }else{
            textListo = textListo.concat(textOriginal[i]);
        }
    }
    
    textTraducido.innerHTML = textListo;
}
setInterval(traducir, 500);