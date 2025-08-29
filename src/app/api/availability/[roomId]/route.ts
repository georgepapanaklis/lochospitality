export function GET(_req: Request, ctx: { params: { roomId: string } }) {
    return Response.json({ roomId: ctx.params.roomId, rates: [] });
  }
  