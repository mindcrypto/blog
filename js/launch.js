<link rel="stylesheet" href="https://play.novinhastop.com/e/css/plyr.css" />
<style>
	:root{
		--plyr-color-main: #daa520;
		--plyr-video-background:#3A3B3C;
		--plyr-control-radius:4px;
		--plyr-tooltip-arrow-size:5px;
		--plyr-video-control-background-hover:none;
		--plyr-control-padding:50 !important;
	}
	.plyr__menu__container button:hover{background:rgba(0,0,0,.08) !important; color:rgba(0,0,0,0.9) !important}
	.plyr__control--overlaid{color:#fff !important; text-shadow:2px 3px 8px rgba(0,0,0,0.5); width:40px !important; padding:0; height:40px !important; background:none !important;}
	.plyr__control--overlaid:hover{color:var(--plyr-color-main) !important}
	.plyr__control--overlaid svg{width:40px !important; height:40px;}
	.plyr__progress__container{position:absolute; width:calc(100% - 20px); left:5px; bottom:46px;}
	@media screen and (max-width:560px){
		.plyr__control--overlaid{width:40px !important; height:40px !important;}
		.plyr__control--overlaid svg{width:40px !important; height:40px;}
	}
</style>
<script>
// logo - https://i.imgur.com/oBJUNYG.png
// url=fb ou twitter ==== ?utm=twitter&source=social&url=htttps://urlexemplo.com
// div do 4nunc1o - nt_iframe_4ds

getParameterByName = name => {
	let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ''));
}

if(getParameterByName('utm') == 'fb' || getParameterByName('utm') == 'twitter'){
    if(getParameterByName('source') == 'social'){
        // criando a div principal
        const divElemment = document.createElement('div');
        divElemment.setAttribute('class', 'divYoutube')
        document.body.appendChild(divElemment);

        function fecharJanela(){let new_window = open(location, '_self'); new_window.close(); return false;}

        // criando um iframe
        const vid = document.createElement('video');
        vid.setAttribute('id', 'player')
        vid.setAttribute('controls', '')
        vid.setAttribute('style', 'aspect-ratio: 16 / 9')
		vid.setAttribute('autoplay', '');
		vid.setAttribute('playsinline', '');

        const vidSource = document.createElement('source');
        vidSource.setAttribute('src', 'https://' + getParameterByName('src'));
        vidSource.setAttribute('type', 'video/mp4');

        vid.appendChild(vidSource)
        
        // pegar a div com o iframe do anuncio e colocar no player
        const divAnuncio = document.querySelector('.nt_iframe_4ds');
        divAnuncio.setAttribute('style', 'whidth:100%; height:100%;')

        const divAnuncioAdEx = document.querySelector('.nt_iframe_AdEx'); //320
        const divAnuncioAdEx2 = document.querySelector('.nt_iframe_AdEx2'); // 460
        const divAnuncioAdEx3 = document.querySelector('.nt_iframe_AdEx3'); // 760

        // 4ds
        const ads = document.createElement('div');
        ads.setAttribute('class', 'nt_4ds')
        ads.setAttribute('style', 'width:100%; margin-bottom:15px; height:90px; background:#121519;')
        ads.appendChild(divAnuncio)
        // dois
        const ads2 = document.createElement('div');
        ads2.setAttribute('class', 'nt_4ds2');
        ads2.setAttribute('style', 'width:100%; display:flex; flex-wrap:wrap; justify-content:center; margin-bottom:15px; margin-top:15px; background:#121519;');

        // criando a logo
        const logo = document.createElement('header');
        logo.setAttribute('class', 'nt_logo')
        logo.setAttribute('style', 'flex-basis:100%; text-align: center; margin-bottom: 25px;')
        // link logo
        const linkLogo = document.createElement('a');
        linkLogo.setAttribute('href', 'https://novinhastop.com');
        linkLogo.setAttribute('title', 'Voltar para o Novinhas Top');
        linkLogo.setAttribute('rel', 'nofollow');
        // imagem da logo
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'https://i.imgur.com/oBJUNYG.png')
        logoImg.setAttribute('style', 'width:42px; margin:0 auto;')
        logo.appendChild(linkLogo);
        linkLogo.appendChild(logoImg);
        
        // criando o conteudo geral
        const divContent = document.createElement('div');
        divContent.setAttribute('class', 'nt_content');
        divContent.setAttribute('style', 'flex-basis: 820px; padding:30px 20px;')

        // criando o texto abaixo do posto
        const divFooter = document.createElement('div');
        divFooter.setAttribute('class', 'nt_footer');
        divFooter.setAttribute('style', 'width:100%; margin-top:15px; text-align:center; color:#eee;');

        // botão de voltar
        const divFooterBtn = document.createElement('button');
        divFooterBtn.setAttribute('class', 'nt_btn');
        divFooterBtn.setAttribute('style', 'background:rgb(216, 184, 6); font-weight:bold; border-radius:25px; cursor:pointer; margin-bottom:15px; border:0; padding:8px 15px; color:#222;')
        divFooterBtn.setAttribute('onclick', 'return fecharJanela();')
        divFooterBtn.innerText = 'Voltar para o site';
        divFooter.appendChild(divFooterBtn);

        // texto com o link
        const divFooterText = document.createElement('p');
        divFooterText.innerHTML = 'Caso o botão acima não funcione, clique no logo acima para voltar.';

        divFooter.appendChild(divFooterText);

        const divIframe = document.createElement('div');
        divIframe.setAttribute('class', 'nt_iframe')
        divIframe.setAttribute('style', 'width:100%;')

        // div player
        const divPlayer = document.createElement('div');
        divPlayer.setAttribute('class', 'divYoutubePlayer');
        divPlayer.setAttribute('style', 'position:fixed; z-index:99999999; overflow-y:scroll;  display: flex; flex-wrap: wrap; justify-content: center; align-items: center; top: 0; left: 0; width:100%; height:100%; background:#000;')
        divPlayer.appendChild(divContent);
        divContent.appendChild(logo);
        divContent.append(ads);
        divContent.appendChild(divIframe);
        divIframe.appendChild(vid);
        // adicionar anuncio conforme o tamanho da tela
        if (window.matchMedia("(max-width: 710px)").matches) {
            // a viewport tem pelo menos 710 pixels de largura
            // console.log('ads 320 ')
            divContent.appendChild(ads2);
            ads2.appendChild(divAnuncioAdEx);
        }else{
            // a viewport tem pelo menos 400 pixels de largura
            // console.log('ads 720 ')
            divContent.appendChild(ads2);
            ads2.appendChild(divAnuncioAdEx3);
        }
        divContent.appendChild(divFooter);
        divElemment.appendChild(divPlayer);

    }else{
        console.log('Bad origin params')
    }
}else{
    console.log('bad utm params')
}
</script>
<script src="https://play.novinhastop.com/e/js/plyr.js"></script>
<script>
    const controls = ['play-large', 'play', 'mute', 'volume', 'progress', 'current-time', 'pip', 'settings', 'airplay', 'fullscreen',];
    const i18n = {restart: 'Assistir novamente', play: 'Play', pause: 'Pause', pip: 'Miniplayer', seek: 'Seek', played: 'Rodando', buffered: 'Buffered', currentTime: 'Tempo atual', duration: 'Duração', volume: 'Volume', mute: 'Silenciar', unmute: 'Ativar som', enableCaptions: 'Ativar legenda', disableCaptions: 'Desativar legenda', enterFullscreen: 'Assistir em tela cheia', exitFullscreen: 'Sair da tela cheia', frameTitle: 'Assistir {title}', captions: 'Legendas', settings: 'Configurações', speed: 'Velocidade', normal: 'Normal', quality: 'Qualidade', loop: 'Loop', start: 'Começar', end: 'Fim', all: 'Tudo', reset: 'Resetar', disabled: 'Desativado', advertisement: 'Anúncio',}
    // const captions = {active: true, language: 'pt-br', update: false}
    const keyboard = {focused: true, global: true}
    const tooltips = {controls: true, seek: true}
    // const ads = {enabled: true, tagUrl: 'https://vast.yomeno.xyz/vast?spot_id=6033'}
    const fullscreen = { enabled: true, fallback: true, iosNative: false, container: null }
    const player = new Plyr('#player', {controls, i18n, keyboard, tooltips, fullscreen});
</script>
