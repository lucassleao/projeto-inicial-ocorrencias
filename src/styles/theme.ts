// THEME.TS — "Dicionário de estilo" do app inteiro
// Todos os arquivos importam daqui para manter o visual consistente
// Se quiser mudar uma cor, muda aqui e muda em TODO o app automaticamente

export const colors = {
  primary: '#1B3A6B',      // azul escuro — cor principal dos botões e ícones
  primaryLight: '#2E5BA8', // azul médio — usado em hovers e destaques
  background: '#F4F6FA',   // cinza clarinho — fundo das telas
  surface: '#FFFFFF',      // branco — fundo de cards e formulários
  border: '#DDE3EF',       // cinza suave — borda dos cards e inputs
  text: '#1A1D2E',         // quase preto — texto principal
  textLight: '#6B7280',    // cinza médio — texto secundário e placeholders
};

export const fontSize = {
  sm: 12,  // texto pequeno (ex: localização no card)
  md: 14,  // texto normal (ex: descrição, labels)
  lg: 18,  // texto grande (ex: título do card)
  xl: 24,  // texto maior (ex: título das telas)
};

export const spacing = {
  xs: 4,   // espaço mínimo (ex: entre ícone e texto)
  sm: 8,   // espaço pequeno (ex: entre elementos próximos)
  md: 16,  // espaço médio (ex: padding interno dos cards)
  lg: 24,  // espaço grande (ex: padding das telas)
  xl: 32,  // espaço extra grande
};

export const radius = {
  sm: 6,   // borda levemente arredondada
  md: 10,  // borda média (ex: inputs)
  lg: 16,  // borda bem arredondada (ex: cards)
};