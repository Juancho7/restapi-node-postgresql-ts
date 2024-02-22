import express from 'express'
import indexRoutes from './routes/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', indexRoutes)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
