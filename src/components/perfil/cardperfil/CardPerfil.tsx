import type Usuario from "../../../models/Usuario";

interface CardPerfilProps {
  usuario: Usuario;
}


function CardPerfil({ usuario }: CardPerfilProps) {

  if (!usuario || !usuario.id) {
    return (
      <div className="text-white text-center">
        Carregando informações do perfil...
      </div>
    );
  }
  return (
    <div className="w-full max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur-md shadow-xl p-6 text-white">
      
      <div className="flex items-center gap-4 mb-6">
        <img
          src={usuario.foto || "avatar-de-perfil.png"}
          alt={`Foto de ${usuario.nome}`}
          className="w-40 h-40 rounded-full object-cover border-2 border-emerald-500"
        />

        <div>
          <h2 className="text-2xl font-bold">{usuario.nome}</h2>
          <p className="text-sm text-zinc-400">@{usuario.usuario}</p>
          <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-400">
            {usuario.tipo}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        
        <div className="bg-zinc-800 rounded-xl p-3">
          <p className="text-sm text-zinc-400">Altura</p>
          <p className="text-lg font-semibold">{usuario.altura} m</p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-3">
          <p className="text-sm text-zinc-400">Peso</p>
          <p className="text-lg font-semibold">{usuario.peso} kg</p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-3">
          <p className="text-sm text-zinc-400">IMC</p>
          <p className="text-lg font-semibold text-emerald-400">
            {Number(usuario.IMC)?.toFixed(1) || "--"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default CardPerfil;
