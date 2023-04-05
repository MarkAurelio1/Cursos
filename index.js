const express = require('express')

 const app = express()

 app.use(express.json())

 // Query params = ?nome=NodeJS São parametros na frente da rota
 // Router Params = /curso/2 Passa na rota para acessar 
 // Request Body = { nome: 'Node JS', tipo: 'Backend' } Manda um objeto dentro do corpo da requisão
 //index mostra posição do array na const index
 // CRUD Create, Read, Update, Delete

 const cursos = ['História', 'Geografia', 'Física']

 app.get('/cursos', (req, res) => {
  return res.json(cursos)
 })
 

 //localhost:4000/curso/2  
 app.get('/cursos/:index', (req, res) => {
  const { index } = req.params
  return res.json(cursos[index])
 })

 // Criando um novo curso
 app.post('/cursos', (req, res)=> {
  const { name } = req.body
  cursos.push(name)

  return res.json(cursos)
 })

 //Atualizando um curso
 app.put('/cursos/:index', (req, res)=> {
  const { index } = req.params
  const { name } = req.body

  cursos [index] = name

  return res.json(cursos)
 })

 // Excluindo algum curso

 app.delete('/cursos/:index', (req, res)=> {
  const { index } = req.params

  cursos.splice(index, 1)

  return res.json(cursos)
  })

 app.listen(4000)