import { Request, Response } from 'express'
import { pool } from '../database'
import { QueryResult } from 'pg'

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
  } catch (error) {
    console.log(error)
    res.status(500).json('Internal Server Error')
  }
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  res.status(200).json(response.rows)
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body
  await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])

  res.json({
    message: 'User created successfully',
    body: {
      user: {
        name,
        email
      }
    }
  })
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  const { name, email } = req.body
  await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])

  res.json(`User ${id} updated successfully`)
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  await pool.query('DELETE FROM users WHERE id = $1', [id])

  res.json(`User ${id} deleted successfully`)
}
