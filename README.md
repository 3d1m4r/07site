# Dhyper Media Studio

Réplica do portfólio Dhyper com 12 vídeos e contato pelo WhatsApp.

## Vídeos e imagens

Os arquivos de mídia estão hospedados no Lovable Assets, fora do repositório. A pasta `src/assets` contém somente pequenos arquivos JSON que apontam para as mídias online. Não é necessário enviar uma pasta de vídeos ao GitHub.

O player usa vídeos diretos MP4 e WebM, sem incorporações do Instagram, logotipos da plataforma ou informações de perfil. Marcas e textos já gravados nos próprios vídeos permanecem.

O endereço atual das mídias já está configurado. Mantenha este projeto Lovable e suas mídias para que continuem disponíveis. A opção `VITE_MEDIA_ORIGIN` permite trocar a origem das mídias se necessário. Os arquivos JSON também podem ser atualizados após uma migração de hospedagem.

## Como colocar no GitHub

1. Extraia o ZIP.
2. Crie um repositório no GitHub.
3. Envie o conteúdo da pasta extraída, mantendo a estrutura das pastas.
4. Não envie `node_modules`, arquivos `.env` com segredos ou pastas de compilação.

Você também pode conectar este projeto diretamente ao GitHub pelo menu **+ → GitHub → Connect project** no Lovable. Assim as próximas alterações são sincronizadas automaticamente.

## Como publicar

No Lovable, clique em **Publish**. Alterações futuras precisam de **Update** no painel de publicação.

O GitHub armazena o código, mas isso não publica o site automaticamente. Este projeto usa TanStack Start e não é um pacote de HTML pronto para GitHub Pages. Para hospedagem fora do Lovable, siga o guia: https://docs.lovable.dev/tips-tricks/self-hosting

## Desenvolvimento local

Com Bun instalado, dentro da pasta do projeto:

```sh
bun install
bun run dev
```

Para compilar e executar os testes:

```sh
bun run build
bun run test
```

As mídias e as fontes requerem conexão com a internet.

## Tecnologias

React, TypeScript, TanStack Start, Tailwind CSS e Radix Dialog.
