if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/caminho-para-seu-arquivo/service-worker.js')
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.error('Erro ao registrar o Service Worker:', error);
    });
}
