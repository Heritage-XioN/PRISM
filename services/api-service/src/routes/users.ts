import { Router } from 'express';
import prisma from '../lib/prisma';
import data from '../../data';

const router = Router();
const DUMMY_MODE = process.env.USE_DUMMY_DATA === 'true';

// GET /api/users
router.get('/', async (req, res) => {
  try {
    if (DUMMY_MODE) {
      return res.json({ data: data.getUsers() });
    }
    
    // Select all fields EXCEPT password
    const users = await prisma.users.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        personal_email: true,
        company_email: true,
        role: true,
        job_title: true,
        department: true,
        organisation_id: true,
        created_at: true,
        updated_at: true
      }
    });
    return res.json({ data: users });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    if (DUMMY_MODE) {
      const user = data.getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.json({ data: user });
    }
    
    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        personal_email: true,
        company_email: true,
        role: true,
        job_title: true,
        department: true,
        organisation_id: true,
        created_at: true,
        updated_at: true,
        skills: true
      }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json({ data: user });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
});

export default router;
