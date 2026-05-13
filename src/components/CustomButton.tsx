// CUSTOMBUTTON.TSX — Botão padrão do app
// Usado em todas as telas que precisam de um botão de ação principal
// Recebe 'titulo' (texto do botão) e 'onPress' (função que executa ao clicar)
// Ex de uso: <CustomButton titulo="Salvar" onPress={salvarOcorrencia} />

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fontSize, radius, spacing } from '../styles/theme';

// Define quais props esse componente aceita
type CustomButtonProps = {
  titulo: string;
  onPress: () => void; // função que será chamada quando o botão for pressionado
};

export default function CustomButton({ titulo, onPress }: CustomButtonProps) {
  return (
    // TouchableOpacity = botão com efeito de transparência ao pressionar
    // activeOpacity={0.85} = fica 85% opaco ao pressionar (efeito visual)
    <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: colors.primary, // azul escuro
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',            // centraliza o texto horizontalmente
  },
  texto: {
    color: '#FFFFFF',                // texto branco
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
});