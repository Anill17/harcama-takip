const CATEGORIES = ['Tümü', 'Market', 'Ulaşım', 'Fatura', 'Eğlence', 'Diğer']

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            active === c
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
