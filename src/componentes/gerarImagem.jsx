
function gerarImagem(setImgUrl) {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      setImgUrl(data.url);

    })

}

export default gerarImagem;
