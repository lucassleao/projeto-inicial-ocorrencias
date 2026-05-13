// OCCURRENCECARD.TSX — Card que exibe uma ocorrência na lista
// É o "cartãozinho" azul com ícone, título, descrição e localização
// Recebe 3 props: titulo, descricao e local
// Ex de uso: <OccurrenceCard titulo="Buraco" descricao="..." local="Centro" />

import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, fontSize, radius, spacing } from '../styles/theme';

// Define quais props esse componente aceita
type OccurrenceCardProps = {
  titulo: string;
  descricao: string;
  local: string;
};

export default function OccurrenceCard({
  titulo,
  descricao,
  local,
}: OccurrenceCardProps) {
  return (
    <View style={styles.card}>

      {/* TOPO: ícone de alerta + título da ocorrência */}
      <View style={styles.topo}>
        <Ionicons name="alert-circle-outline" size={22} color={colors.primary} />
        <Text style={styles.titulo}>{titulo}</Text>
      </View>

      {/* MEIO: descrição detalhada do problema */}
      <Text style={styles.descricao}>{descricao}</Text>

      {/* RODAPÉ: ícone de localização + local */}
      <View style={styles.rodape}>
        <Ionicons name="location-outline" size={18} color={colors.textLight} />
        <Text style={styles.local}>{local}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,  // fundo branco
    borderRadius: radius.lg,          // cantos bem arredondados
    padding: spacing.md,
    marginBottom: spacing.md,         // espaço entre os cards na lista
    borderWidth: 1,
    borderColor: colors.border,
  },
  topo: {
    flexDirection: 'row',             // ícone e título lado a lado
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  titulo: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: spacing.xs,           // espaço entre ícone e texto
  },
  descricao: {
    fontSize: fontSize.md,
    color: colors.textLight,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  rodape: {
    flexDirection: 'row',             // ícone e local lado a lado
    alignItems: 'center',
  },
  local: {
    fontSize: fontSize.sm,
    color: colors.textLight,
    marginLeft: spacing.xs,
  },
});