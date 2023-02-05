// pegar botão
var mybutton = document.getElementById("Botao_Cima");

// // quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////////////

// pegar botão
const BotaoBaixo = document.querySelector('#Botao_Baixo')

BotaoBaixo.addEventListener('click', () => {
    window.scroll({top: 99999999, behavior: "smooth"})
})

///////////////////////////////////////////////////////////////////

var mudarImg = document.querySelector('.img_mudando')
mudarImg.onmouseenter = () => {
  mudarImg.querySelector('#Foto_Perfil').style.opacity = '0';
  mudarImg.querySelector('#Foto_Perfil2').style.opacity = '1';
};

mudarImg.onmouseout = () => {
  mudarImg.querySelector('#Foto_Perfil').style.opacity = '1';
  mudarImg.querySelector('#Foto_Perfil2').style.opacity = '0';
};

///////////////////////////////////////////////////////////////////

var mudarImg2 = document.querySelector('.img_mudando2')
mudarImg2.onmouseenter = () => {
  mudarImg2.querySelector('#Img_Hobbies').style.opacity = '0';
  mudarImg2.querySelector('#Img_Hobbies2').style.opacity = '1';
};

mudarImg2.onmouseout = () => {
  mudarImg2.querySelector('#Img_Hobbies').style.opacity = '1';
  mudarImg2.querySelector('#Img_Hobbies2').style.opacity = '0';
};
