# API de Tarefas — Node.js + Express

> Projeto 5: API REST completa (CRUD) com Express, persistência em arquivo JSON e deploy no Railway.

**Anterior:** [04 — Blog Estático](https://github.com/Possi-dev/estudos-04-blog-estatico) | **Próximo:** [06 — Full-stack](https://github.com/Possi-dev/estudos-06-gerenciador-tarefas-fullstack)

---

## Demo (API em produção)

**Base URL:** `https://api-de-tarefas-production.up.railway.app`

> Esta é uma API (back-end only). Não tem interface visual — responde JSON. Veja como testar abaixo.

---

## O que este projeto ensina

| Conceito | Onde está no código |
|----------|---------------------|
| Servidor Node.js | `const app = express()` + `app.listen()` |
| Rotas REST | `app.get('/tarefas')`, `app.post('/tarefas')`, etc. |
| Status codes | `201` (criado), `400` (erro cliente), `404` (não encontrado) |
| Middleware | `express.json()` processa JSON no body |
| Validação de entrada | Verifica se `texto` existe e não é vazio |
| CRUD | Create, Read, Update, Delete — as 4 operações base |
| Deploy | Railway detecta `package.json` e `railway.json` automaticamente |

---

## Endpoints

| Método | Rota | Descrição | Sucesso |
|--------|------|-----------|---------|
| GET | `/tarefas` | Lista todas | 200 |
| GET | `/tarefas/:id` | Busca por ID | 200 |
| POST | `/tarefas` | Cria nova | 201 |
| PUT | `/tarefas/:id` | Atualiza (texto e/ou status) | 200 |
| DELETE | `/tarefas/:id` | Remove | 204 |

---

## Como testar a API em produção

### PowerShell (Windows)

```powershell
# Listar todas
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas"

# Criar
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas" -Method Post -Body '{"texto":"Estudar Node"}' -ContentType "application/json"

# Atualizar (marcar concluída)
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas/1" -Method Put -Body '{"concluida":true}' -ContentType "application/json"

# Deletar
Invoke-RestMethod -Uri "https://api-de-tarefas-production.up.railway.app/tarefas/1" -Method Delete
```

### curl

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

### Postman / Insomnia

1. Baixe Postman (gratuito) ou use Insomnia
2. Crie requisição GET para a URL base
3. Para POST, mude método e adicione Body → JSON

---

## Como rodar localmente

```bash
cd 05-api-de-tarefas
npm install
npm start
# API em http://localhost:3000
```

---

## Estrutura

```
05-api-de-tarefas/
├── server.js              # API completa (rotas, validação, CRUD, JSON file) — 87 linhas
├── package.json           # Dependência: express
├── railway.json           # Config Railway
├── render.yaml            # Config Render (alternativa)
├── vercel.json            # Config Vercel (alternativa)
├── .github/workflows/     # GitHub Actions para deploy automático
├── .gitignore
├── LICENSE
└── README.md
```

---

## Como foi feito

**Transparência:** Código gerado pela IA **opencode**. Estudei como o Express define rotas, o que cada status code significa, por que `express.json()` é necessário, e como o ciclo de deploy (código → Railway → URL pública) funciona na prática.

---

## Próximos passos de estudo

- [ ] Conectar esta API a um front-end (ver Projeto 6)
- [ ] Substituir arquivo JSON por banco de dados real
- [ ] Adicionar autenticação
- [ ] Escrever testes automatizados

---

## Licença

MIT — veja [LICENSE](LICENSE).