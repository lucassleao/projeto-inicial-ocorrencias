// API.TS — Comunicação com o servidor do professor
// Todas as funções que fazem requisições HTTP ficam aqui
// criarOcorrencia() — salva uma ocorrência nova no banco de dados
// listarOcorrenciasPorSlug() — busca as ocorrências do aluno no servidor
// SLUG_ALUNO — identificador único do aluno (muda para o seu slug)

const BASE_URL = 'https://api-ocorrencias.vercel.app'; // URL da API do professor

// SLUG — identificador único do aluno no sistema
// O professor define qual slug cada aluno usa
// MUDE AQUI para o seu slug quando o professor passar
export const SLUG_ALUNO = 'lucas-leao';

// Tipo dos dados enviados para criar uma ocorrência
type CriarOcorrenciaPayload = {
  titulo: string;
  descricao: string;
  local: string;
  slug: string; // identifica de qual aluno é a ocorrência
};

// CRIAR OCORRÊNCIA — envia os dados para o servidor salvar no banco
// Usa o método POST (enviar dados novos)
export async function criarOcorrencia(payload: CriarOcorrenciaPayload) {
  const response = await fetch(`${BASE_URL}/ocorrencias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // avisa que estamos enviando JSON
    },
    body: JSON.stringify(payload), // converte o objeto para texto JSON
  });

  if (!response.ok) {
    throw new Error('Erro ao criar ocorrência');
  }

  const data = await response.json(); // converte a resposta de volta para objeto
  return data;
}

// LISTAR OCORRÊNCIAS — busca todas as ocorrências do aluno no servidor
// Usa o método GET (buscar dados)
// Filtra pelo slug para pegar só as ocorrências desse aluno
export async function listarOcorrenciasPorSlug(slug: string) {
  const response = await fetch(`${BASE_URL}/ocorrencias?slug=${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao listar ocorrências');
  }

  const data = await response.json();
  return data;
}