import { Router } from 'express';
import prisma from '../lib/prisma';
import data from '../../data';

const router = Router();
const DUMMY_MODE = process.env.USE_DUMMY_DATA === 'true';

// GET /api/organisations
router.get('/', async (req, res) => {
  try {
    if (DUMMY_MODE) {
      return res.json({ data: data.getOrganisations() });
    }
    const orgs = await prisma.organisations.findMany();
    return res.json({ data: orgs });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch organisations' });
  }
});

// GET /api/organisations/:id
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    if (DUMMY_MODE) {
      const org = data.getOrganisationById(id);
      if (!org) return res.status(404).json({ error: 'Organisation not found' });
      return res.json({ data: org });
    }
    
    const org = await prisma.organisations.findUnique({
      where: { id },
      include: {
        users: {
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
        }
      }
    });

    if (!org) return res.status(404).json({ error: 'Organisation not found' });
    return res.json({ data: org });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch organisation' });
  }
});

// POST /api/organisations
router.post('/', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  try {
    const org = await prisma.organisations.create({
      data: req.body
    });
    return res.status(201).json({ data: org });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create organisation' });
  }
});

// PATCH /api/organisations/:id
router.patch('/:id', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const org = await prisma.organisations.update({
      where: { id },
      data: req.body
    });
    return res.json({ data: org });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update organisation' });
  }
});

// DELETE /api/organisations/:id
router.delete('/:id', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    await prisma.organisations.delete({ where: { id } });
    return res.json({ data: { success: true } });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete organisation' });
  }
});

export default router;
