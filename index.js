https://api.harvardartmuseums.org/person?apikey=c94aae39-1e35-4d2b-9621-478f3c54a91c

//let apikey= "c94aae39-1e35-4d2b-9621-478f3c54a91c";




async function llamarAPI() {
    const url = "https://api.harvardartmuseums.org/person?apikey=c94aae39-1e35-4d2b-9621-478f3c54a91c";
    const parametros = { parametro1: 'valor1', parametro2: 'valor2' };
    const headers = {
      'Authorization': 'Bearer tu_token_de_api',
      'Content-Type': 'application/json'
    };
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        // Si necesitas enviar parámetros en la URL, puedes usar URLSearchParams
        // body: new URLSearchParams(parametros)
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
  
      const data = await response.json();
      // Trabaja con los datos recibidos
      console.log(data);
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  }
  
  // Llamamos a la función asíncrona
  llamarAPI();
  