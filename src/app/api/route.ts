import { NextResponse } from "next/server";

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Your GET endpoint
 *     tags: []
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hoge:
 *                   type: string
 *                   x-stoplight:
 *                     id: 473qkm0vcvnrh
 *     operationId: get-api
 */
export async function GET(request: Request) {
  return NextResponse.json({ hoge: "fuga" });
}
