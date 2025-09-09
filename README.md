Este é um projeto desenvolvido em [**React Native**](https://reactnative.dev), criado utilizando a CLI da comunidade [`@react-native-community/cli`](https://github.com/react-native-community/cli), com o objetivo de realizar testes End-to-End (E2E) utilizando o framework [**Detox**](https://wix.github.io/Detox/).

# Começando

>**Nota**: Certifique-se de ter completado as instruções de [Configuração do Ambiente - React Native](https://reactnative.dev/docs/environment-setup) até o passo "Criando uma nova aplicação", antes de prosseguir. <br><br>
Confira também se possui a versão openjdk 17 instalada.  
Execute o comando `yarn` ou `npm install` para instalar as dependências.


## Passo 1: Iniciar o Metro Server

Primeiro, você precisará iniciar o **Metro**, o _bundler_ JavaScript que acompanha o React Native.

Para iniciar o Metro, execute o seguinte comando no diretório _raiz_ do seu projeto React Native:

```bash
# usando npm
npm start

# OU usando Yarn
yarn start
```

## Passo 2: Iniciar sua Aplicação

Deixe o Metro Bundler rodando em seu próprio terminal. Abra um _novo_ terminal no diretório _raiz_ do seu projeto React Native. Execute o comando abaixo para iniciar o aplicativo no _Android_ ou _iOS_:

### Para Android

```bash
# usando npm
npm run android

# OU usando Yarn
yarn android
```

### Para iOS

```bash
# usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado corretamente, você deverá ver seu novo aplicativo rodando no _Emulador Android_ ou no _Simulador iOS_ em breve, desde que tenha configurado seu emulador/simulador corretamente.

Esta é uma maneira de executar seu app — você também pode rodá-lo diretamente no Android Studio ou Xcode, respectivamente.

## Passo 3: Modificando seu App

Agora que você conseguiu rodar o aplicativo com sucesso, vamos modificá-lo.

1. Abra o arquivo `App.tsx` no editor de texto de sua escolha e edite algumas linhas.
2. Para **Android**: Pressione a tecla <kbd>R</kbd> duas vezes ou selecione **"Reload"** no **Menu de Desenvolvedor** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (no Windows e Linux) ou <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (no macOS)) para ver as suas alterações!

   Para **iOS**: Pressione <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> no Simulador iOS para recarregar o app e ver as suas alterações!

## Passo 4: Executando os testes End-to-End com Detox

Detox é um framework End-to-End focado em aplicações mobile, neste caso está sendo utilizado para executar testes dessa aplicação React Native. 

Para executar os testes, execute os comandos abaixo de acordo com o dispositivo que você deseja testar:

### iOS

```bash
~ detox:ios_test
```

### Android

```bash
~ detox:android_test
```

### Genymotion ( Android )

```bash
~ detox:genymotion_test
```

## Parabéns! :tada:

Você rodou e modificou com sucesso seu aplicativo React Native. :partying_face:

### E agora?

- Se você quiser adicionar esse novo código React Native a um aplicativo existente, confira o [Guia de Integração](https://reactnative.dev/docs/integration-with-existing-apps).
- Se você está curioso para aprender mais sobre React Native, confira a [Introdução ao React Native](https://reactnative.dev/docs/getting-started).

# Solução de Problemas

Se você não conseguir fazer isso funcionar, veja a página de [Solução de Problemas](https://reactnative.dev/docs/troubleshooting).

# Saiba Mais

Para saber mais sobre React Native, confira os seguintes recursos:

- [Site do React Native](https://reactnative.dev) - aprenda mais sobre React Native.
- [Começando](https://reactnative.dev/docs/environment-setup) - uma **visão geral** do React Native e como configurar seu ambiente.
- [Aprenda o Básico](https://reactnative.dev/docs/getting-started) - um **tour guiado** pelos **fundamentos** do React Native.
- [Blog](https://reactnative.dev/blog) - leia as últimas postagens do **Blog** oficial do React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - o repositório **Open Source** no GitHub para o React Native.