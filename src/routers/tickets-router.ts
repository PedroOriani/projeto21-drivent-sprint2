import { Router } from 'express';
import { ticketsControllers } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter.get('/tickets/types', authenticateToken, ticketsControllers.getTypes);
ticketsRouter.get('/tickets', authenticateToken, ticketsControllers.getTicket);
ticketsRouter.post('/tickets', authenticateToken, validateBody(ticketSchema), ticketsControllers.createTicket);

export { ticketsRouter };
