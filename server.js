const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// TODO: GET /health → 200 { db: "ok" }
// Confirme a conexão com o banco usando prisma.$queryRaw`SELECT 1`

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
