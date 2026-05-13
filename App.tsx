// APP.TSX — Arquivo RAIZ do projeto (ponto de entrada do app)
// Aqui ficam 3 responsabilidades principais:
// 1. Define o tipo Ocorrencia (exportado para as telas usarem)
// 2. Guarda o estado global (lista de ocorrências compartilhada entre telas)
// 3. Monta a navegação por abas (Bottom Tab Navigator)

import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import HomeScreen from './src/screens/HomeScreen';
import NovaOcorrenciaScreen from './src/screens/NovaOcorrenciaScreen';
import ListaOcorrenciasScreen from './src/screens/ListaOcorrenciasScreen';
import { colors, fontSize } from './src/styles/theme';

// TIPO OCORRENCIA — exportado para as telas poderem usar
// export = outras telas conseguem importar esse tipo
export type Ocorrencia = {
  id: string;        // identificador único gerado automaticamente
  titulo: string;
  descricao: string;
  local: string;
};

// Tipo das rotas do navigator — define quais abas existem
export type RootTabParamList = {
  Home: undefined;
  NovaOcorrencia: undefined;
  ListaOcorrencias: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {

  // ESTADO GLOBAL — lista de ocorrências compartilhada entre telas
  // Fica aqui pois tanto NovaOcorrencia (escreve) quanto
  // ListaOcorrencias (lê) precisam acessar os mesmos dados
  // Isso se chama "lifting state up" (levantar o estado pro pai)
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  // Função para adicionar nova ocorrência
  // Omit<Ocorrencia, 'id'> = recebe tudo menos o id (gerado aqui)
  function adicionarOcorrencia(novaOcorrencia: Omit<Ocorrencia, 'id'>) {
    const ocorrenciaCompleta: Ocorrencia = {
      ...novaOcorrencia,             // copia titulo, descricao e local
      id: Date.now().toString(),     // gera id único com timestamp atual
    };
    // ...anterior = mantém as ocorrências antigas e adiciona a nova no início
    setOcorrencias((anterior) => [ocorrenciaCompleta, ...anterior]);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,                        // esconde o header padrão
          tabBarActiveTintColor: colors.primary,     // cor do ícone ativo
          tabBarInactiveTintColor: colors.textLight, // cor do ícone inativo
          tabBarStyle: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          // Ícone muda dependendo de qual aba está ativa
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'NovaOcorrencia') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'ListaOcorrencias') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size ?? fontSize.lg} color={color} />;
          },
        })}
      >
        {/* ABA INÍCIO — não precisa de props */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />

        {/* ABA NOVA — passa a função adicionarOcorrencia via prop */}
        <Tab.Screen
          name="NovaOcorrencia"
          options={{ title: 'Nova' }}
        >
          {() => <NovaOcorrenciaScreen adicionarOcorrencia={adicionarOcorrencia} />}
        </Tab.Screen>

        {/* ABA LISTA — passa o array de ocorrências via prop */}
        <Tab.Screen
          name="ListaOcorrencias"
          options={{ title: 'Lista' }}
        >
          {() => <ListaOcorrenciasScreen ocorrencias={ocorrencias} />}
        </Tab.Screen>

      </Tab.Navigator>

      {/* Toast fica fora do Navigator para aparecer em cima de tudo */}
      <Toast />

    </NavigationContainer>
  );
}