const hora = document.querySelector('.azul');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    
    let hr = dateToday.getHours();
    let mi = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if(se < 10){se ="0" + se};
    if(mi < 10){mi = "0" + mi};
    if(hr < 10){hr = "0" + hr};

    hora.textContent = hr;
    minutos.textContent = mi;
    segundos.textContent = se;

    
    

})