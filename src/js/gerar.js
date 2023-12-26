const form = document.querySelector('.form');
const entrada = document.querySelector('.entrada')
const botao = document.querySelector('.botao');

const qrCode = document.querySelector('.qr-code')
const qrCodeImg = document.querySelector('.code')

const generator = function(url){
    botao.value = 'Gerando código...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

    const imgDisable = qrCode.classList;

    qrCodeImg.addEventListener('load', ()=>{
        imgDisable.remove('disable');
        botao.value = 'Código criado!'
    })
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let url = entrada.value;

    if(!url) return;
    
    generator(url);
})

form.addEventListener('keydown', (e)=>{
    if(e.code === 'enter'){
        let url = entrada.value;

        if(!url) return;
    
        generator(url);
    }
})

entrada.addEventListener('keyup', ()=>{
    if(!entrada.value){
        botao.value = 'Gerar QR Code'
        const imgDisable = qrCode.classList;
        imgDisable.add('disable');
    }
})