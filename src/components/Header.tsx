// HEADER.TSX — Cabeçalho reutilizável
// Usado no topo de todas as telas do app
// Recebe 'titulo' (obrigatório) e 'subtitulo' (opcional)
// Ex de uso: <Header titulo="Nova Ocorrência" subtitulo="Preencha os dados" />

import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize, spacing } from '../styles/theme';

// Define quais props esse componente aceita
type HeaderProps = {
  titulo: string;
  subtitulo?: string; // o ? significa que é opcional
};

export default function Header({ titulo, subtitulo }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      {/* Só renderiza o subtítulo se ele foi passado */}
      {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  titulo: {
    fontSize: fontSize.xl,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: fontSize.md,
    color: colors.textLight,
    marginTop: spacing.xs,
    textAlign: 'center',
    lineHeight: 22,
  },
});