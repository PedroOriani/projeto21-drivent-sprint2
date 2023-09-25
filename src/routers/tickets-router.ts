import { Router } from 'express';
import { ticketsControllers } from '@/controllers/tickets-controller';
import { authenticateToken, validateBody } from '@/middlewares';
import { ticketSchema } from '@/schemas';

const ticketsRouter = Router();

ticketsRouter.use(authenticateToken)
ticketsRouter.get('/tickets/types', ticketsControllers.getTypes);
ticketsRouter.get('/tickets', ticketsControllers.getTicket);
ticketsRouter.post('/tickets', validateBody(ticketSchema), ticketsControllers.createTicket);

export { ticketsRouter };
