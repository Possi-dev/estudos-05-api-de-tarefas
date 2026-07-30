# API de Tarefas

> Projeto 5 do roadmap: API REST com Node.js e Express — CRUD completo de tarefas, deploy no Railway.

## Demo ao vivo

**API em produção (Railway):** https://api-de-tarefas-production.up.railway.app

> Esta é uma API (back-end). Não tem interface visual — ela responde JSON. Veja como testar abaixo.

## Como este projeto foi feito

**Transparência:** Este código foi gerado pela IA **opencode**. Meu papel foi:

- Entender o que é uma API REST e os métodos HTTP (GET, POST, PUT, DELETE)
- Estudar como o Express define rotas (`app.get`, `app.post`, etc.)
- Entender status codes (200 = OK, 201 = Criado, 400 = Erro do cliente, 404 = Não encontrado)
- Aprender o que é middleware (`express.json()` interpreta o corpo das requisições)
- Entender o ciclo de deploy: código → Railway → URL pública

Não escrevi o código do zero — ele foi gerado pela IA e eu estudei o resultado.

## O que este projeto ensina

| Conceito | Onde está no código |
|----------|---------------------|
| Servidor Node.js | `const app = express()` + `app.listen()` |
| Rotas REST | `app.get('/tarefas')`, `app.post('/tarefas')`, etc. |
| Status codes | `res.status(201)` para criar, `res.status(404)` para não encontrado |
| Middleware | `app.use(express.json())` processa JSON do corpo da requisição |
| Validação de entrada | Verifica se `texto` existe e não é vazio antes de criar tarefa |
| CRUD | Create, Read, Update, Delete — as 4 operações básicas de dados |
| Deploy | Railway detecta `package.json` e `railway.json` automaticamente |

## Endpoints

| Método | Rota | Descrição | Status de sucesso |
|--------|------|-----------|-------------------|
| GET | `/tarefas` | Lista todas as tarefas | 200 |
| GET | `/tarefas/:id` | Busca uma tarefa por ID | 200 |
| POST | `/tarefas` | Cria uma nova tarefa | 201 |
| PUT | `/tarefas/:id` | Atualiza uma tarefa | 200 |
| DELETE | `/tarefas/:id` | Remove uma tarefa | 204 |

## Como testar a API em produção

### Com PowerShell (já no Windows):

```powershell
# Listar todas as tarefas
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas"

# Criar uma nova tarefa
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas" -Method Post -Body '{"texto":"Estudar Node"}' -ContentType "application/json"

# Atualizar uma tarefa (marcar como concluída)
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
2. Crie uma requisição GET para a URL da API
3. Para POST, mude o método e adicione Body → JSON

## Como rodar localmente

```bash
cd 05-api-de-tarefas
npm install
npm start
# API rodando em http://localhost:3000
```

## Estrutura dos arquivos

```
05-api-de-tarefas/
├── server.js          # Toda a lógica da API (rotas, validação, CRUD)
├── package.json       # Dependências (express) e scripts (start)
├── railway.json       # Configuração de deploy no Railway
├── render.yaml        # Configuração de deploy no Render (alternativa)
├── vercel.json        # Configuração de deploy na Vercel (alternativa)
├── .github/workflows/ # GitHub Actions para deploy automático
├── .gitignore
├── LICENSE
└── README.md
```

## Próximos passos de aprendizado

- [ ] Conectar esta API a um front-end (ver Projeto 6)
- [ ] Adicionar persistência real (banco de dados)
- [ ] Adicionar autenticação (login)
- [ ] Escrever testes automatizados

## Licença

MIT — veja [LICENSE](LICENSE).
