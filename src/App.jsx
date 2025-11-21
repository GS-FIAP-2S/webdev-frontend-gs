import { useState, useEffect } from 'react'
import profissionaisData from './data/profissionais.json'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'
import SearchBar from './components/SearchBar'

function App() {
  const [profissionais, setProfissionais] = useState([])
  const [filteredProfissionais, setFilteredProfissionais] = useState([])
  const [selectedProfissional, setSelectedProfissional] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterArea, setFilterArea] = useState('')
  const [filterCidade, setFilterCidade] = useState('')
  const [filterTecnologia, setFilterTecnologia] = useState('')

  useEffect(() => {
    setProfissionais(profissionaisData)
    setFilteredProfissionais(profissionaisData)
  }, [])

  useEffect(() => {
    let filtered = profissionais

    // Filtro por busca (nome, cargo, resumo)
    if (searchTerm) {
      filtered = filtered.filter(prof => 
        prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.resumo.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por área
    if (filterArea) {
      filtered = filtered.filter(prof => prof.area === filterArea)
    }

    // Filtro por cidade
    if (filterCidade) {
      filtered = filtered.filter(prof => prof.localizacao === filterCidade)
    }

    // Filtro por tecnologia
    if (filterTecnologia) {
      filtered = filtered.filter(prof => 
        prof.habilidadesTecnicas.some(tech => 
          tech.toLowerCase().includes(filterTecnologia.toLowerCase())
        )
      )
    }

    setFilteredProfissionais(filtered)
  }, [searchTerm, filterArea, filterCidade, filterTecnologia, profissionais])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleCardClick = (profissional) => {
    setSelectedProfissional(profissional)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProfissional(null)
  }

  const handleRecommend = (profissional) => {
    alert(`Você recomendou ${profissional.nome}! Sua recomendação foi registrada.`)
  }

  const handleSendMessage = (profissional) => {
    alert(`Mensagem enviada para ${profissional.nome}! Em breve você receberá uma resposta.`)
  }

  // Obter valores únicos para os filtros
  const areas = [...new Set(profissionais.map(p => p.area))].sort()
  const cidades = [...new Set(profissionais.map(p => p.localizacao))].sort()
  const tecnologias = [...new Set(profissionais.flatMap(p => p.habilidadesTecnicas))].sort()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Futuro do Trabalho
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          filterCidade={filterCidade}
          setFilterCidade={setFilterCidade}
          filterTecnologia={filterTecnologia}
          setFilterTecnologia={setFilterTecnologia}
          areas={areas}
          cidades={cidades}
          tecnologias={tecnologias}
        />
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          {filteredProfissionais.length} profissional(is) encontrado(s)
        </p>
      </div>

      {/* Professionals Grid */}
      <div className="container mx-auto px-4 pb-8">
        {filteredProfissionais.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfissionais.map(profissional => (
              <ProfileCard
                key={profissional.id}
                profissional={profissional}
                onClick={() => handleCardClick(profissional)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProfissional && (
        <ProfileModal
          profissional={selectedProfissional}
          onClose={handleCloseModal}
          onRecommend={() => handleRecommend(selectedProfissional)}
          onSendMessage={() => handleSendMessage(selectedProfissional)}
        />
      )}
    </div>
  )
}

export default App

