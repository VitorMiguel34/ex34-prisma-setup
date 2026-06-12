const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// TODO: GET /health → 200 { db: "ok" }
// Confirme a conexão com o banco usando prisma.$queryRaw`SELECT 1`

app.get("/health", (req,res) => {
  prisma.$queryRaw`SELECT 1`
  res.status(200).json({db: "ok"})
})

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
