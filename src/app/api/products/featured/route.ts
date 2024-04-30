import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = data.products.filter((product) => product.featured)

  return new Response(JSON.stringify(featuredProducts), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Permite todos os domínios
      "Access-Control-Allow-Methods": "GET, OPTIONS", // Especifica métodos permitidos
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // Especifica cabeçalhos permitidos
    },
  });
}
