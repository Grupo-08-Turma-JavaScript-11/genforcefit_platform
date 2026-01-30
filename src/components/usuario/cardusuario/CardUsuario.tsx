import type Usuario from "../../../models/Usuario"

interface CardUsuarioProps {
  usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuarioProps) {
  return (
    <div className="bg-white border rounded shadow-md p-6 w-full max-w-sm">
      <h3 className="text-lg font-bold mb-2">
        {usuario.nome}
      </h3>

      <p className="text-sm text-gray-700">
        <strong>Email:</strong> {usuario.usuario}
      </p>

      {usuario.altura && (
        <p className="text-sm text-gray-700">
          <strong>Altura:</strong> {usuario.altura} cm
        </p>
      )}

      {usuario.peso && (
        <p className="text-sm text-gray-700">
          <strong>Peso:</strong> {usuario.peso} kg
        </p>
      )}
    </div>
  )
}

export default CardUsuario
