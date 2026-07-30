# API de Tarefas

Meu quinto projeto: uma API REST simples com Node.js e Express.

## 🔗 Demo ao vivo

**Railway (produção):** https://api-de-tarefas-production.up.railway.app  
**GitHub Pages (estático):** https://possi-dev.github.io/estudos-05-api-de-tarefas/

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tarefas` | Lista todas as tarefas |
| GET | `/tarefas/:id` | Busca uma tarefa por ID |
| POST | `/tarefas` | Cria uma nova tarefa |
| PUT | `/tarefas/:id` | Atualiza uma tarefa |
| DELETE | `/tarefas/:id` | Remove uma tarefa |

## Como rodar localmente

```bash
cd 05-api-de-tarefas
npm install
npm start
# API rodando em http://localhost:3000
```

## Testes rápidos (PowerShell)

```powershell
# Criar
Invoke-RestMethod -Uri "http://localhost:3000/tarefas" -Method Post -Body '{"texto":"Estudar Node"}' -ContentType "application/json"

# Listar
Invoke-RestMethod -Uri "http://localhost:3000/tarefas"

# Atualizar
Invoke-RestMethod -Uri "http://localhost:3000/tarefas/1" -Method Put -Body '{"concluida":true}' -ContentType "application/json"

# Deletar
Invoke-RestMethod -Uri "http://localhost:3000/tarefas/1" -Method Delete
```

## O que aprendi aqui

- Criar servidor Node.js com Express
- Definir rotas HTTP (GET, POST, PUT, DELETE)
- Status codes (200, 201, 204, 400, 404)
- Middleware (express.json)
- Validação de entrada
- CRUD completo