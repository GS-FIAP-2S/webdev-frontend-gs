function ProfileCard({ profissional, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={profissional.foto}
            alt={profissional.nome}
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200 dark:border-gray-600"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=' + profissional.nome.charAt(0)
            }}
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {profissional.nome}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {profissional.cargo}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
            {profissional.area}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {profissional.resumo}
        </p>

        <div className="mb-3">
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
            📍 {profissional.localizacao}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Principais Skills:
          </p>
          <div className="flex flex-wrap gap-1">
            {profissional.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {skill}
              </span>
            ))}
            {profissional.habilidadesTecnicas.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                +{profissional.habilidadesTecnicas.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

