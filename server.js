const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

function find(id) {
    return tasks.find(t => t.id === id);
}

function findIndex(id) {
    return tasks.findIndex(t => t.id === id);
}

app.get('/tarefas', (req, res) => {
    res.json(tasks);
});

app.get('/tarefas/:id', (req, res) => {
    const task = find(Number(req.params.id));
    if (!task) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(task);
});

app.post('/tarefas', (req, res) => {
    const { texto } = req.body;
    if (!texto || typeof texto !== 'string' || texto.trim() === '') {
        return res.status(400).json({ erro: 'Campo "texto" é obrigatório' });
    }
    const task = { id: nextId++, texto: texto.trim(), concluida: false };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/tarefas/:id', (req, res) => {
    const task = find(Number(req.params.id));
    if (!task) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    const { texto, concluida } = req.body;
    if (texto !== undefined) {
        if (typeof texto !== 'string' || texto.trim() === '') {
            return res.status(400).json({ erro: '"texto" deve ser uma string não vazia' });
        }
        task.texto = texto.trim();
    }
    if (concluida !== undefined) {
        if (typeof concluida !== 'boolean') {
            return res.status(400).json({ erro: '"concluida" deve ser booleano' });
        }
        task.concluida = concluida;
    }
    res.json(task);
});

app.delete('/tarefas/:id', (req, res) => {
    const index = findIndex(Number(req.params.id));
    if (index === -1) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    tasks.splice(index, 1);
    res.status(204).send();
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API rodando em http://localhost:${PORT}`);
    });
}

module.exports = app;