function ProfileModal({ profissional, onClose, onRecommend, onSendMessage }) {
  if (!profissional) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Perfil Profissional
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <img
              src={profissional.foto}
              alt={profissional.nome}
              className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-gray-200 dark:border-gray-600"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150?text=' + profissional.nome.charAt(0)
              }}
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {profissional.nome}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                {profissional.cargo}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                  {profissional.area}
                </span>
                <span className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                  📍 {profissional.localizacao}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {profissional.resumo}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={onRecommend}
              className="flex-1 md:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              👍 Recomendar Profissional
            </button>
            <button
              onClick={onSendMessage}
              className="flex-1 md:flex-none px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              💬 Enviar Mensagem
            </button>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Habilidades Técnicas */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                🛠️ Habilidades Técnicas
              </h4>
              <div className="flex flex-wrap gap-2">
                {profissional.habilidadesTecnicas.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                💡 Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {profissional.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experiências */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                💼 Experiências
              </h4>
              {profissional.experiencias.map((exp, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {exp.cargo} - {exp.empresa}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.inicio} - {exp.fim}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>

            {/* Formação */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                🎓 Formação
              </h4>
              {profissional.formacao.map((form, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {form.curso}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {form.instituicao} - {form.ano}
                  </p>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            {profissional.idiomas && profissional.idiomas.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  🌐 Idiomas
                </h4>
                {profissional.idiomas.map((idioma, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-gray-800 dark:text-white">
                      {idioma.idioma} - <span className="text-gray-600 dark:text-gray-400">{idioma.nivel}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Certificações */}
            {profissional.certificacoes && profissional.certificacoes.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  🏆 Certificações
                </h4>
                <ul className="list-disc list-inside">
                  {profissional.certificacoes.map((cert, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projetos */}
            {profissional.projetos && profissional.projetos.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg md:col-span-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  🚀 Projetos
                </h4>
                {profissional.projetos.map((projeto, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {projeto.titulo}
                    </a>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {projeto.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Áreas de Interesse */}
            {profissional.areaInteresses && profissional.areaInteresses.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg md:col-span-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  🎯 Áreas de Interesse
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profissional.areaInteresses.map((interesse, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded"
                    >
                      {interesse}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal

