import { Router } from 'express';
import prisma from '../lib/prisma';
import data from '../../data';

const router = Router();
const DUMMY_MODE = process.env.USE_DUMMY_DATA === 'true';

// GET /api/skills
router.get('/', async (req, res) => {
  try {
    if (DUMMY_MODE) {
      return res.json({ data: data.getAllSkills() });
    }
    
    const allSkills = await prisma.skills.findMany({
      include: {
        user: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            job_title: true,
            department: true
          }
        }
      }
    });
    return res.json({ data: allSkills });
  } catch (err:any) {
    console.log(err)
    return res.status(500).json({ 
      error: 'Failed to fetch skills',
      message: err.message
    });
  }
});

// GET /api/skills/user/:userId
// MUST BE REGISTERED BEFORE /:id
router.get('/user/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (isNaN(userId)) return res.status(400).json({ error: 'Invalid userId' });

  try {
    if (DUMMY_MODE) {
      return res.json({ data: data.getSkillsByUserId(userId) });
    }
    
    const userSkills = await prisma.skills.findMany({
      where: { user_id: userId }
    });
    return res.json({ data: userSkills });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch user skills' });
  }
});

// GET /api/skills/:id
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    if (DUMMY_MODE) {
      const skill = data.getSkillById(id);
      if (!skill) return res.status(404).json({ error: 'Skill not found' });
      return res.json({ data: skill });
    }
    
    const skill = await prisma.skills.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            job_title: true,
            department: true
          }
        }
      }
    });

    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    return res.json({ data: skill });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch skill' });
  }
});

// POST /api/skills
router.post('/', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  const { user_id, skill, category, proficiency } = req.body;
  if (!user_id || !skill || !category || proficiency === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  if (typeof proficiency !== 'number' || proficiency < 1 || proficiency > 5) {
    return res.status(400).json({ error: 'Proficiency must be a number between 1 and 5' });
  }

  try {
    const newSkill = await prisma.skills.create({
      data: {
        user_id,
        skill,
        category,
        proficiency,
        verified: false
      }
    });
    return res.status(201).json({ data: newSkill });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create skill' });
  }
});

// PATCH /api/skills/:id
router.patch('/:id', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  // Optional proficiency validation on update
  if (req.body.proficiency !== undefined) {
    const { proficiency } = req.body;
    if (typeof proficiency !== 'number' || proficiency < 1 || proficiency > 5) {
      return res.status(400).json({ error: 'Proficiency must be a number between 1 and 5' });
    }
  }

  try {
    const skill = await prisma.skills.update({
      where: { id },
      data: req.body
    });
    return res.json({ data: skill });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update skill' });
  }
});

// DELETE /api/skills/:id
router.delete('/:id', async (req, res) => {
  if (DUMMY_MODE) return res.status(503).json({ error: 'Mutations disabled in dummy mode' });
  
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    await prisma.skills.delete({ where: { id } });
    return res.json({ data: { success: true } });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete skill' });
  }
});

export default router;
