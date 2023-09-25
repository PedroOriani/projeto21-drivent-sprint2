import { createTicket } from "@/repositories/tickets-repository";
import Joi from "joi";

export const ticketSchema = Joi.object<createTicket>({
    ticketTypeId: Joi.number().required()
})