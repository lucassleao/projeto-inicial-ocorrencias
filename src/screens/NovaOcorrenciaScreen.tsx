// NOVAOCORRENCIASCREEN.TSX — Tela de cadastro de ocorrência (aba "Nova")
// Tem 3 campos: título, descrição e local
// Quando salvar, chama a função adicionarOcorrencia() que vem do App.tsx
// O estado (dados digitados) fica guardado aqui com useState
// Se algum campo estiver vazio, mostra um toast de erro

import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import { colors, fontSize, radius, spacing } from '../styles/theme';
import { Ocorrencia } from '../../App';
import { mostrarToast } from '../components/ToastMensagem';

// Recebe a função de adicionar do App.tsx via prop
// Omit<Ocorrencia, 'id'> = tipo Ocorrencia sem o campo 'id'
// (o id é gerado automaticamente no App.tsx, não aqui)
type Props = {
  adicionarOcorrencia: (novaOcorrencia: Omit<Ocorrencia, 'id'>) => void;
};

export default function NovaOcorrenciaScreen({ adicionarOcorrencia }: Props) {

  // useState guarda o que o usuário digita em cada campo
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');

  function salvarOcorrencia() {

    // Validação: .trim() remove espaços em branco
    // Se qualquer campo estiver vazio, mostra erro e para aqui
    if (!titulo.trim() || !descricao.trim() || !local.trim()) {
      mostrarToast(
        'error',
        'Erro ao salvar',
        'Preencha todos os campos antes de continuar.'
      );
      return; // para a função aqui, não salva
    }

    // Chama a função do App.tsx passando os dados digitados
    adicionarOcorrencia({
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      local: local.trim(),
    });

    // Mostra mensagem de sucesso
    mostrarToast(
      'success',
      'Ocorrência cadastrada',
      'A ocorrência foi salva com sucesso.'
    );

    // Limpa os campos após salvar
    setTitulo('');
    setDescricao('');
    setLocal('');
  }

  return (
    <View style={styles.container}>

      <Header
        titulo="Nova Ocorrência"
        subtitulo="Preencha os dados abaixo para cadastrar uma nova ocorrência."
      />

      {/* Formulário dentro de um card */}
      <View style={styles.formBox}>

        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Buraco na avenida principal"
          value={titulo}           // valor atual do estado
          onChangeText={setTitulo} // atualiza o estado a cada letra digitada
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.inputMaior]} // aplica 2 estilos ao mesmo tempo
          placeholder="Descreva o problema encontrado"
          value={descricao}
          onChangeText={setDescricao}
          multiline // permite múltiplas linhas
        />

        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Centro"
          value={local}
          onChangeText={setLocal}
        />

      </View>

      {/* Botão que chama a função salvarOcorrencia ao ser pressionado */}
      <CustomButton titulo="Salvar Ocorrência" onPress={salvarOcorrencia} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  formBox: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.sm + 2,
    fontSize: fontSize.md,
    color: colors.text,
  },
  inputMaior: {
    minHeight: 100,          // campo de descrição é maior
    textAlignVertical: 'top', // texto começa no topo do campo
  },
});