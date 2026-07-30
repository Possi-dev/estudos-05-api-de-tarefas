# 05 — A Maquina sem Rosto

> **Capitulo 5 da linha do tempo.** Quatro projetos no front-end. Eu sabia fazer paginas. Mas o que havia atras delas? Entrei no back-end e descobri um mundo sem interface — so JSON, status codes e rotas.

**Anterior:** [04 — O Blog das Semanas](https://github.com/Possi-dev/estudos-04-blog-estatico) | **Proximo:** [06 — O Estado Completo](https://github.com/Possi-dev/estudos-06-gerenciador-tarefas-fullstack)

---

## A historia

Eu passava as 4 primeiras semanas pensando que desenvolvedor web era quem construia paginas. Estava errado pela metade.

O front-end e metade da historia. A outra metade — a parte que o usuario nunca ve — e onde a magia realmente acontece. E a casa dentro da qual a magia acontece: o servidor.

A IA propôs: *"Vamos construir uma API REST. Sem front-end. So back-end. So rotas e JSON."*

Foi a primeira vez que toquei em Node.js. A primeira vez que escrevi `const express = require('express')`. A primeira vez que rodei `npm install` e vi a pasta `node_modules` aparecer com centenas de arquivos que eu nao pedi.

O resultado foi uma API de tarefas que:

- `GET /tarefas` — lista todas em JSON
- `POST /tarefas` — cria uma nova
- `PUT /tarefas/:id` — atualiza
- `DELETE /tarefas/:id` — remove
- Tudo persistido num arquivo `tarefas.json`

Sem pagina. Sem botao. Sem cor. Quando eu abri `http://localhost:3000/tarefas` no navegador e vi um JSON bruto — `[{"id":...,"texto":"...","concluida":false}]` — achei estranho e fantastico ao mesmo tempo. Estava programando **servidor**. nao estava colorindo tela. Estava dizendo ao computador como responder a pedidos pela rede.

*> Era feio. Mas era poderoso.*

Deployei no Railway. Em segundos, minha API estava em `https://api-de-tarefas-production.up.railway.app` — acessivel do mundo inteiro. Testei com `Invoke-RestMethod` no PowerShell. Funcionou. Eu tinha um back-end vivo na internet.

---

## Demo ao vivo

**API em produao (Railway):** https://api-de-tarefas-production.up.railway.app

> Esta e uma API (back-end). Nao tem interface visual — ela responde JSON. Veja como testar abaixo.

---

## Como este projeto foi feito

**Transparencia:** Este codigo foi gerado pela IA **opencode**. Meu papel foi:

- Entender o que e uma API REST e os metodos HTTP (GET, POST, PUT, DELETE)
- Estudar como o Express define rotas (`app.get`, `app.post`, etc.)
- Entender status codes (200 = OK, 201 = Criado, 400 = Erro do cliente, 404 = Nao encontrado)
- Aprender o que e middleware (`express.json()` interpreta o corpo das requisicoes)
- Entender o ciclo de deploy: codigo -> Railway -> URL publica

Nao escrevi o codigo do zero — ele foi gerado pela IA e eu estudei o resultado.

---

## O que este projeto ensina

| Conceito | Onde esta no codigo |
|----------|---------------------|
| Servidor Node.js | `const app = express()` + `app.listen()` |
| Rotas REST | `app.get('/tarefas')`, `app.post('/tarefas')`, etc. |
| Status codes | `res.status(201)` para criar, `res.status(404)` para nao encontrado |
| Middleware | `app.use(express.json())` processa JSON do corpo da requisicao |
| Validacao de entrada | Verifica se `texto` existe e nao e vazio antes de criar tarefa |
| CRUD | Create, Read, Update, Delete — as 4 operacoes basicas de dados |
| Deploy | Railway detecta `package.json` e `railway.json` automaticamente |

---

## Endpoints

| Metodo | Rota | Descricao | Status de sucesso |
|--------|------|-----------|-------------------|
| GET | `/tarefas` | Lista todas as tarefas | 200 |
| GET | `/tarefas/:id` | Busca uma tarefa por ID | 200 |
| POST | `/tarefas` | Cria uma nova tarefa | 201 |
| PUT | `/tarefas/:id` | Atualiza uma tarefa | 200 |
| DELETE | `/tarefas/:id` | Remove uma tarefa | 204 |

---

## Como testar a API em producao

### Com PowerShell (ja no Windows):

```powershell
# Listar todas as tarefas
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas"

# Criar uma nova tarefa
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas" -Method Post -Body '{"texto":"Estudar Node"}' -ContentType "application/json"

# Atualizar uma tarefa (marcar como concluida)
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas/1" -Method Put -Body '{"concluida":true}' -ContentType "application/json"

# Deletar uma tarefa
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas/1" -Method Delete
```

### Com curl:

```bash
# Listar
curl https://api-de-tarefas-production.up.railway.app/tarefas

# Criar
curl -X POST https://api-de-tarefas-production.up.railway.app/tarefas \
  -H "Content-Type: application/json" \
  -d '{"texto":"Nova tarefa"}'

# Deletar
curl -X DELETE https://api-de-tarefas-production.up.railway.app/tarefas/1
```

### Com Postman ou Insomnia:

1. Baixe Postman (gratuito) ou use Insomnia
2. Crie uma requisicao GET para a URL da API
3. Para POST, mude o metodo e adicione Body -> JSON

---

## Como rodar localmente

```bash
cd 05-api-de-tarefas
npm install
npm start
# API rodando em http://localhost:3000
```

---

## Estrutura dos arquivos

```
05-api-de-tarefas/
├── server.js          # Toda a logica da API (rotas, validacao, CRUD) — 87 linhas
├── package.json       # Dependencias (express) e scripts (start)
├── railway.json       # Configuracao de deploy no Railway
├── render.yaml        # Configuracao de deploy no Render (alternativa)
├── vercel.json        # Configuracao de deploy na Vercel (alternativa)
├── .github/workflows/ # GitHub Actions para deploy automatico
├── .gitignore
├── LICENSE
└── README.md
```

---

## O que aprendi neste capitulo

Aprendi que back-end e invisivel pro usuario, mas e onde tudo acontece. Que JSON e a lingua franca da web. Que `201` nao e so um numero — e uma promessa: "criado com sucesso". Que middleware e codigo que roda entre o pedido e a resposta. Que `npm install` baixa o mundo.

Mas tinha um abismo na minha frente. Eu tinha um front-end (Projetos 01-04) e um back-end (Projeto 05). Eles nunca se falaram. O front usava `localStorage`. O back usava arquivo JSON. Eram dois mundos separados.

*> Eu precisava junta-los. Eu precisava ver o front chamar o back.*

Isso me levou ao [Projeto 06](https://github.com/Possi-dev/estudos-06-gerenciador-tarefas-fullstack).

---

## Proximos passos de aprendizado

- [ ] Conectar esta API a um front-end (ver Projeto 6)
- [ ] Adicionar persistencia real (banco de dados)
- [ ] Adicionar autenticacao (login)
- [ ] Escrever testes automatizados

---

## Licenca

MIT — veja [LICENSE](LICENSE).
