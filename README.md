## Resolvendo conflitos no styled-components

### Podem ocorrer erros de tipagens no `styled-components` ao utilizar a sintaxe ` styled(TouchableOpacity)``; `.

- Para resolver quando o gerenciador de pacotes utilizado é o `npm`;

  - Adicionar o seguinte trecho de código no `package.json`.
    ```json
    "overrides": {
      "@types/react": "~18.2.45" /** ou tipagem atual do projeto */
    },
    ```

- Para resolver quando o gerenciador de pacotes utilizado é o `yarn`;
  - Adicionar o seguinte trecho de código no `package.json`.
    ```json
    "resolutions": {
      "@types/react": "~18.2.45" /** ou tipagem atual do projeto */
    },
    ```
- Apagar a pasta `node_modules` e reinstalar dependências.