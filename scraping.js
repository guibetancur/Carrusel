const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.reddit.com/r/programacion/comments/zy4iis/experiencia_egg_programaci%C3%B3n_full_stack_lo_peor/?onetap_auto=true'; // Reemplaza con la URL de la página que deseas analizar

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(body);
    // Aquí viene el código para extraer los enlaces
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      console.log(href);
    });
  }
});
