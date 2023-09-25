import { Router } from 'express';
import { ticketsControllers } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.get('/types', authenticateToken, ticketsControllers.getTypes);
ticketsRouter.get('/', authenticateToken, ticketsControllers.getTicket);
ticketsRouter.post('/', authenticateToken, ticketsControllers.createTicket);

export { ticketsRouter };
