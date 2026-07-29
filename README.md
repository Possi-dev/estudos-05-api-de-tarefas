# API de Tarefas

Meu quinto projeto: uma API REST simples com Node.js e Express.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tarefas` | Lista todas as tarefas |
| GET | `/tarefas/:id` | Busca uma tarefa por ID |
| POST | `/tarefas` | Cria uma nova tarefa |
| PUT | `/tarefas/:id` | Atualiza uma tarefa |
| DELETE | `/tarefas/:id` | Remove uma tarefa |

## Como usar

```bash
npm install
npm start
```

A API estará disponível em `http://localhost:3000`.

### Exemplos

```bash
# Criar tarefa
curl -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d "{\"task\":\"Estudar Node.js\"}"

# Listar
curl http://localhost:3000/tarefas

# Atualizar
curl -X PUT http://localhost:3000/tarefas/1 -H "Content-Type: application/json" -d "{\"completed\":true}"

# Deletar
curl -X DELETE http://localhost:3000/tarefas/1
```

## O que aprendi aqui

- Criar um servidor Node.js com Express
- Definir rotas HTTP (GET, POST, PUT, DELETE)
- Status codes (200, 201, 204, 400, 404)
- Middleware (express.json)
- Validação de entrada
- CRUD completo