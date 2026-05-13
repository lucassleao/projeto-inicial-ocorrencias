// TOASTMENSAGEM.TS — Função para exibir alertas visuais na tela
// Toast é aquela notificação que aparece no topo e some sozinha
// Em vez de repetir Toast.show() em todo lugar, criamos essa função
// e chamamos ela de qualquer tela passando 3 parâmetros:
// tipo: 'success' (verde), 'error' (vermelho) ou 'info' (azul)
// titulo: texto principal do alerta
// mensagem: texto secundário (opcional)

import Toast from 'react-native-toast-message';

type TipoToast = 'success' | 'error' | 'info';

export function mostrarToast(
  tipo: TipoToast,
  titulo: string,
  mensagem?: string  // o ? significa que é opcional
) {
  Toast.show({
    type: tipo,
    text1: titulo,
    text2: mensagem,
    position: 'top',       // aparece no topo da tela
    visibilityTime: 3000,  // some após 3 segundos
  });
}