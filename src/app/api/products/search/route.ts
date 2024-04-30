import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

    return new Response(JSON.stringify(products), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permite todos os domínios
        "Access-Control-Allow-Methods": "GET, OPTIONS", // Especifica métodos permitidos
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Especifica cabeçalhos permitidos
      },
    });
}
