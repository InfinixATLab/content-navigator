# Instruções para rodar

Para executar a aplicação, primeiro é necessário configurar a variável de ambiente. Crie content-navigator/.env:

```
EXPO_PUBLIC_API_URL=https://api.exemplo.com
```

Após essa etapa, é necessário instalar as dependências do projeto:

```
npm install
```

Com as dependências instaladas e variável de ambiente configurada, basta executar o projeto localmente utilizando o **Expo**:

```
npx expo start
```

Será gerado um QR Code que poderá ser lido pelo seu dispositivo no aplicativo **Expo Go**.

# Decisões de design

Recentemente, desenvolvendo um app para uso pessoal, senti a necessidade de buscar informações sobre boas formas de se estruturar projetos Expo. Após ler esse artigo https://expo.dev/blog/expo-app-folder-structure-best-practices, percebi semelhanças com algumas estruturas que gosto de utilizar em aplicações React, Next.js e até Node.js.

- Em Next.js, é interessante separar o código relacionado ao roteamento das páginas com do código de estruturação da página em si, com a criação da pasta `/screens`.
- Nesse outro artigo https://alexkondov.com/tao-of-node/, aprendi diversas boas práticas no desenvolvimento de API's em Node.js, uma delas diz respeito sobre manter arquivos relacionados próximos um dos outros. Por isso que ao quebrar um componente maior em componentes menores é interessante não armazenar componentes menores na pasta `/components` que fica na raiz do projeto.

Logo, ao identificar essas semelhanças passei a adotar a estrutura do artigo em questão para projetos Expo.

A maior dificuldade foi passar os dados para a tela de User Details. Como estava utilizando o Expo Router, seria necessário passar uma string para utilizar o useLocalSearchParams(). Existia a possibilidade de utilizar o navigate do próprio React Native, mas optei por manter o Expo Router pois a solução que desenvolvi foi criar um contexto global que pudesse armazenar os dados dos usuários. Adotei essa solução porque cumpriria com um dos pontos de bônus. Sem sombra de dúvida devem existir soluções mais elegantes, porém como ressaltado na reunião, a honestidade durante o processo é um fator relevante. Portanto, como essa foi a solução que me veio em mente e não queria fazer uso de IA para sugestões de código, decidi por manter. Além do mais, o tempo era um fator relevante e aprender novos conceitos sobre cache e armazenamento de dados local não seria viável.

Pesquisaria mais sobre a utilização de cache e do **expo-secure-store** para a implementação do uso de favoritos. Além disso, resolveria um problema de build que ocorreu no EAS, provavelmente relacionado ao versionamento da biblioteca **react-native-reanimated**, pois assim seria possível disponibilizar um link da aplicação.
