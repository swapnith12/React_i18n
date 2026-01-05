import { Outlet, useNavigate } from 'react-router-dom'
import { Home , ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Root() {
  const navigate = useNavigate()
  const {t} = useTranslation()
  return (
  <div className="min-h-screen flex flex-col bg-gray-50">
  <header className="w-full bg-blue-600 border-b border-blue-800 sticky top-0 z-50">
    <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
      <Home onClick={()=>navigate("/")} size={28} className="text-white" />

      <h1 className="hidden lg:block text-lg font-semibold text-white">
        {t('title')}
      </h1>

      <ArrowLeft onClick={()=>navigate(-1)} size={28} className="text-white" />
    </div>
  </header>
  <main className="flex-1 w-full text-blue-900">
    <div className="flex items-center justify-center mx-auto max-w-7xl px-4 py-6">
      <Outlet />
    </div>
  </main>
</div>

  )
}

export default Root
