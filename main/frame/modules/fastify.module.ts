import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

export type Request = FastifyRequest;

export type Response = FastifyReply;

export type Router = FastifyInstance;

export type RestResponseType = {
  status: number;
  data: Record<string, any>;
};
