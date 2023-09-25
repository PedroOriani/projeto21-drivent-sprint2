import { TicketStatus } from '@prisma/client';
import { notFoundError } from '@/errors';
import { ticketsRepository } from '@/repositories/tickets-repository';

async function getTypes() {
  const result = await ticketsRepository.getTypes();
  return result;
}

async function getTicket(userId: number) {
  const enrollment = await ticketsRepository.verifyEnrollment(userId);

  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.getTicket(enrollment.id);

  if (!ticket) throw notFoundError();
}

async function createTicket(userId: number, ticketTypeId: number) {
  const enrollment = await ticketsRepository.verifyEnrollment(userId);

  if (!enrollment) throw notFoundError();

  const ticket = {
    ticketTypeId,
    enrollmentId: enrollment.id,
    status: TicketStatus.RESERVED,
  };

  await ticketsRepository.createTicket(ticket);

  const ticketData = await ticketsRepository.getTicket(enrollment.id);

  return ticketData;
}

export const ticketsServices = {
  getTypes,
  getTicket,
  createTicket,
};
