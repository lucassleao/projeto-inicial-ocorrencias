// HOMESCREEN.TSX — Tela inicial do app (aba "Início")
// É a primeira tela que o usuário vê quando abre o app
// Não recebe nenhuma prop pois só exibe informações estáticas
// Usa o componente Header que criamos antes

import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fontSize, spacing } from '../styles/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho com título e subtítulo */}
      <Header
        titulo="OcorrênciaApp"
        subtitulo="Registre e acompanhe problemas urbanos na sua cidade."
      />

      {/* Card explicativo de como usar o app */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Como usar?</Text>
        <Text style={styles.cardTexto}>
          • Toque em <Text style={{ fontWeight: 'bold' }}>Nova</Text> para registrar um problema.{'\n'}
          • Toque em <Text style={{ fontWeight: 'bold' }}>Lista</Text> para ver todas as ocorrências.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                          // ocupa toda a tela
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',         // centraliza tudo verticalmente
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitulo: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  cardTexto: {
    fontSize: fontSize.md,
    color: colors.textLight,
    lineHeight: 24,
  },
});