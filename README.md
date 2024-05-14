# YouTube Video Downloader

Este é um simples aplicativo web para baixar vídeos do YouTube. Ele consiste em uma API backend construída com Node.js e Express, que usa a biblioteca `ytdl-core` para baixar vídeos do YouTube, e um frontend construído com HTML, CSS e JavaScript, que interage com a API para permitir que os usuários cole o link do vídeo e baixe-o.

## Configuração

1. **Instalação das Dependências**
   - No diretório raiz do projeto, instale as dependências do projeto executando o seguinte comando no terminal:
     ```
     npm install
     ```

2. **Execução do Servidor**
   - Para iniciar o servidor backend, execute o seguinte comando no terminal:
     ```
     npm start
     ```
   - Isso iniciará o servidor backend na porta padrão `3333`.

3. **Acessando o Aplicativo**
   - Abra um navegador da web e acesse o seguinte endereço:
     ```
     http://localhost:3333
     ```

## Uso

1. **Colando o Link do Vídeo**
   - Na página inicial do aplicativo, cole o link do vídeo do YouTube no campo fornecido.
   - Certifique-se de que o link tenha o formato correto, como `https://www.youtube.com/watch?v=VIDEO_ID`.

2. **Iniciando o Download**
   - Clique no botão "Download" para iniciar o processo de download.

3. **Download do Vídeo**
   - Após clicar em "Download", o navegador será redirecionado para uma nova página, onde o download do vídeo começará automaticamente.

## Observações
- Certifique-se de que o link do vídeo do YouTube seja válido e que você tenha permissão para baixar o vídeo.
- Este aplicativo não hospeda os vídeos baixados, apenas facilita o processo de download.

