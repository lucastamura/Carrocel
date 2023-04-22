var listaPosterFilmes = []

listaPosterFilmes[0] = 'https://media.fstatic.com/NG9qNQpQWUFJ7tz6BgZW5cF-DBM=/210x312/smart/filters:format(webp)/media/movies/covers/2012/06/8643dee1dcb1c1020d1ac6ce34f8d71b.jpg';
listaPosterFilmes[1] = 'https://upload.wikimedia.org/wikipedia/pt/b/bd/Click_film.jpg';
listaPosterFilmes[2] = 'https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg';
listaPosterFilmes[3] = 'https://upload.wikimedia.org/wikipedia/pt/9/9e/Just_Go_with_it_P%C3%B4ster.jpg';
listaPosterFilmes[4] = 'https://br.web.img2.acsta.net/pictures/14/05/09/18/01/325769.jpg';
listaPosterFilmes[5] = 'https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg';
listaPosterFilmes[6] = 'https://upload.wikimedia.org/wikipedia/pt/d/d6/Grown_Ups.jpg';
listaPosterFilmes[7] = 'https://http2.mlstatic.com/D_NQ_NP_703166-MLB27363962728_052018-O.jpg';
listaPosterFilmes[8] = 'https://sm.ign.com/ign_br/screenshot/default/pixels-regposter-brazil_p1ja.jpg';
listaPosterFilmes[9] = 'https://br.web.img3.acsta.net/medias/nmedia/18/87/37/04/20039796.jpg';
listaPosterFilmes[10] = 'https://leleopd.files.wordpress.com/2009/02/bsdvd.jpg';
listaPosterFilmes[11] = 'https://br.web.img3.acsta.net/pictures/19/06/13/09/35/4216544.jpg';

var trailerFilmes = []

trailerFilmes[0] = 'https://www.youtube.com/watch?v=8MHj5lmNxD0'
trailerFilmes[1] = 'https://www.youtube.com/watch?v=zZNC5emNyEQ'
trailerFilmes[2] = 'https://www.youtube.com/watch?v=x6A_3Y9ML70'
trailerFilmes[3] = 'https://www.youtube.com/watch?v=iDarrUicnnY'
trailerFilmes[4] = 'https://www.youtube.com/watch?v=mXRVi-yfSA0'
trailerFilmes[5] = 'https://www.youtube.com/watch?v=oi5zj5hxtl0'


// for (var i=0; i<listaPosterFilmes.length; i=i+1) {
//   document.write("<img src=" + listaPosterFilmes[i] + ">");
// }

var listaNomeFilmes = ['O Paizão', 'Click', 'Como se fosse a primeira vez', 'Esposa de Mentirinha', 'Juntos e Misturados', 'Gente Grande', 'Gente Grande 2', 'Trocando os Pés', 'Pixels', 'Cada um tem a gêmea que merece', 'Um faz de conta que acontece', 'Mistério no Mediterrâneo']

document.write('<div class="container_todosFilmes">')

var i = 0;
while(i < listaPosterFilmes.length){
    if((listaPosterFilmes[i].endsWith('jpg')) || (listaPosterFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<a href="' + trailerFilmes[i] + '"target="_blank">' + '<img src="'+ listaPosterFilmes[i] +'"> </a>');
        document.write('<p>'+ listaNomeFilmes[i] +'</p>'); 
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')


// for (var i=0; i<nomeFilmes.length; i++) {
//   document.write("<img src=" + nomeFilmes[i] + ">");
// }
