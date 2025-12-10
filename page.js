<div id="mensagem" style="
  margin-bottom:1rem;
  padding:0.75rem 1rem;
  border-radius:4px;
  background:#fff3cd;
  color:#856404;
  border:1px solid #ffeeba;
  font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
">
  Este teste deve ser realizado sem sair desta página.
  Se mudar de aba ou de janela, o teste será automaticamente anulado.
</div>

<div id="quadro-teste" style="
  width:100%;
  height:80vh;
  border:1px solid #ccc;
  border-radius:4px;
  overflow:hidden;
  background:#ffffff;
">
  <!-- SUBSTITUA O SRC PELO LINK DO SEU TESTE INTUITIVO -->
  <iframe
    id="frame-intuitivo"
    src="https://tests.intuitivo.pt/publication/0253e09d-eccf-4bb6-b3d0-6ba63ed45a4c"
    style="width:100%;height:100%;border:none;">
  </iframe>
</div>

<script>
  // Estado do teste
  let testeAnulado = false;

  const mensagem = document.getElementById('mensagem');
  const quadroTeste = document.getElementById('quadro-teste');

  function anularTeste(motivo) {
    if (testeAnulado) return;
    testeAnulado = true;

    // Remove o iframe e esconde o quadro
    quadroTeste.innerHTML = '';
    quadroTeste.style.display = 'none';

    // Mostra mensagem de anulação
    mensagem.classList.add('erro');
    mensagem.style.background = '#f8d7da';
    mensagem.style.color = '#721c24';
    mensagem.style.borderColor = '#f5c6cb';
    mensagem.textContent =
      'O teste foi ANULADO porque saiu desta página (' + motivo + '). ' +
      'Informe o professor.';
  }

  // Detetar perda de foco da aba (mudança de aba, janela, minimizar, etc.)
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      anularTeste('a aba perdeu visibilidade (mudança de aba/janela)');
    }
  });

  // Opcional: detetar também perda de foco da janela
  window.addEventListener('blur', function () {
    if (!testeAnulado) {
      anularTeste('a janela perdeu foco');
    }
  });
</script>
