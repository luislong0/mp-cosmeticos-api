import { z } from 'zod'
import data from '../../data.json'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = z.string().parse(params.id)
  console.log('veio aqui')

  console.log('ID: ' + id)

  const products = data.products.filter((product) => {
    return product.categories.includes(id)
  })

  console.log(products)

  if (!products) {
     // Cria uma resposta com status 404 e corpo JSON
     return new Response(JSON.stringify({ message: "Products not found." }), {
       status: 404,
       headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*", // Permite todos os domínios
         "Access-Control-Allow-Methods": "GET, OPTIONS", // Especifica métodos permitidos
         "Access-Control-Allow-Headers": "Content-Type, Authorization", // Especifica cabeçalhos permitidos
       },
     });
   
  }

    return new Response(JSON.stringify(products), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permite todos os domínios
        "Access-Control-Allow-Methods": "GET, OPTIONS", // Especifica métodos permitidos
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Especifica cabeçalhos permitidos
      },
    });
}
