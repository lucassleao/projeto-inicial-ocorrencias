// LISTAOCORRENCIASSCREEN.TSX — Tela que lista todas as ocorrências (aba "Lista")
// Recebe o array de ocorrências do App.tsx via prop
// Usa FlatList para renderizar a lista de forma performática
// Se não tiver nenhuma ocorrência, mostra uma mensagem de lista vazia
// Cada item da lista é renderizado pelo componente OccurrenceCard

import { View, FlatList, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import OccurrenceCard from '../components/OccurrenceCard';
import { colors, fontSize, spacing } from '../styles/theme';
import { Ocorrencia } from '../../App';

// Recebe a lista de ocorrências do App.tsx via prop
type Props = {
  ocorrencias: Ocorrencia[];
};

export default function ListaOcorrenciasScreen({ ocorrencias }: Props) {
  return (
    <View style={styles.container}>

      {/* Mostra quantas ocorrências tem no subtítulo */}
      <Header
        titulo="Ocorrências"
        subtitulo={`${ocorrencias.length} ocorrência(s) registrada(s)`}
      />

      {/* Operador ternário: se vazio mostra mensagem, senão mostra a lista */}
      {ocorrencias.length === 0 ? (

        // Estado vazio — ainda não tem nenhuma ocorrência
        <View style={styles.vazio}>
          <Text style={styles.vazioTexto}>Nenhuma ocorrência cadastrada ainda.</Text>
          <Text style={styles.vazioSub}>
            Vá até a aba "Nova" e registre a primeira!
          </Text>
        </View>

      ) : (

        // FlatList = componente otimizado para listas longas
        // data = array de itens
        // keyExtractor = chave única de cada item (usa o id)
        // renderItem = como cada item será exibido
        <FlatList
          data={ocorrencias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OccurrenceCard
              titulo={item.titulo}
              descricao={item.descricao}
              local={item.local}
            />
          )}
          showsVerticalScrollIndicator={false} // esconde a barra de scroll
        />

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  vazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vazioTexto: {
    fontSize: fontSize.lg,
    color: colors.textLight,
    textAlign: 'center',
  },
  vazioSub: {
    fontSize: fontSize.md,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});