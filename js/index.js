window.addEventListener('load', () => {


    let lon;
    let lat;

    const temperaturaValor = document.getElementById('temperatura-valor');
    const temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    const ubicacion = document.getElementById('ubicacion');
    const velocidadViento = document.getElementById('viento-velocidad');
    const humedad = document.getElementById('humedad');
    const tempMax = document.getElementById('temperatura-maxima');
    const tempMin = document.getElementById('temperatura-minima');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {


            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=0247f28a1cb4b75653d101d91469d7aa`;

            fetch(URL)
                .then(response => { return response.json(); })
                .then(data => {
                    console.log(data);


                    temperaturaValor.textContent = `${Math.round(data.main.temp)} °C`;

                    temperaturaDescripcion.textContent = data.weather[0].description;

                    ubicacion.textContent = data.name;

                    tempMax.textContent = `${Math.round(data.main.temp_max)} °C`

                    tempMin.textContent = `${Math.round(data.main.temp_min)} °C`

                    velocidadViento.textContent = `${data.wind.speed} m/s`;

                    humedad.textContent = `${data.main.humidity} %`

                    console.log(data.weather[0].description);

                    // const UrlIcon =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                    // console.log(UrlIcon)
                    
                    

                    switch (data.weather[0].icon) {
                        // ICONOS DIA
                        case '01d':
                            iconoAnimado.src = 'animated/day.svg';
                            console.log('DESPEJADO');
                            break;
                        case '02d':
                            iconoAnimado.src = 'animated/cloudy-day-3.svg';
                            console.log('POCAS NUBES');
                            break;
                        case '03d':
                            iconoAnimado.src = 'animated/cloudy-day-2.svg';
                            console.log('NUBES DISPERSAS');
                            break;
                        case '04d':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg';
                            console.log('NUBES ROTAS');
                            break;
                        case '09d':
                            iconoAnimado.src = 'animated/rainy-4.svg';
                            console.log('LLOVIZNA');
                            break;
                        case '010d':
                            iconoAnimado.src = 'animated/rainy-6.svg';
                            console.log('LLUVIA');
                            break;
                        case '11d':
                            iconoAnimado.src = 'animated/thunder.svg';
                            console.log('TORMENTA');
                            break;
                        case '13d':
                            iconoAnimado.src = '';
                            console.log('NIEVE');
                            break;
                        case '50d':
                            iconoAnimado.src = 'animated/cloudy.svg';
                            console.log('NEBLINA');
                            break;
                        // ICONOS NOCHE
                        case '01n':
                            iconoAnimado.src = 'animated/night.svg';
                            console.log('DESPEJADO');
                            break;
                        case '02n':
                            iconoAnimado.src = 'animated/cloudy-night-3.svg';
                            console.log('POCAS NUBES');
                            break;
                        case '03n':
                            iconoAnimado.src = 'animated/cloudy-night-2.svg';
                            console.log('NUBES DISPERSAS');
                            break;
                        case '04n':
                            iconoAnimado.src = 'animated/cloudy-night-1.svg';
                            console.log('NUBES ROTAS');
                            break;
                        case '09n':
                            iconoAnimado.src = 'animated/rainy-4.svg';
                            console.log('LLOVIZNA');
                            break;
                        case '10n':
                            iconoAnimado.src = 'animated/rainy-6.svg';
                            console.log('LLUVIA');
                            break;
                        case '11n':
                            iconoAnimado.src = 'animated/thunder.svg';
                            console.log('TORMENTA');
                            break;
                        case '13n':
                            iconoAnimado.src = 'animated/snowy-6.svg';
                            console.log('NIEVE');
                            break;
                        case '50n':
                            iconoAnimado.src = 'animated/cloudy.svg';
                            console.log('NEBLINA');
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg';
                            console.log('por defecto');
                    }
                })

                .catch(error => {
                    console.log(error);
                });
        });
    }
});