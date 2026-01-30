export async function cadastrar(
  url: string,
  dados: any,
  setDados: any,
  headers: any = {}
) {
  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(dados),
  })

  setDados(await resposta.json())
}

export async function buscar(
  url: string,
  setDados: any,
  headers: any = {}
) {
  const resposta = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  })

  setDados(await resposta.json())
}

export async function deletar(
  url: string,
  headers: any = {}
) {
  await fetch(url, {
    method: "DELETE",
    headers: {
      ...headers,
    },
  })
}
