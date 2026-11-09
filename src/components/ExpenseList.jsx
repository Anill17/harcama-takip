const BADGE_COLORS = {
  Market: 'bg-green-100 text-green-700',
  Ulaşım: 'bg-blue-100 text-blue-700',
  Fatura: 'bg-orange-100 text-orange-700',
  Eğlence: 'bg-purple-100 text-purple-700',
  Diğer: 'bg-gray-100 text-gray-600',
}

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-5xl mb-4">🧾</p>
        <p className="text-lg font-medium">Henüz harcama yok</p>
        <p className="text-sm mt-1">Yukarıdaki formu kullanarak ilk harcamanı ekle.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 text-left">
          <tr>
            <th className="px-4 py-3 font-medium">Açıklama</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">Kategori</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">Tarih</th>
            <th className="px-4 py-3 font-medium text-right">Tutar</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {expenses.map((e) => (
            <tr key={e.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 font-medium text-gray-800">{e.title}</td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${BADGE_COLORS[e.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {e.category}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{e.date}</td>
              <td className="px-4 py-3 text-right font-semibold text-gray-800">
                ₺{e.amount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => onDelete(e.id)}
                  className="text-red-400 hover:text-red-600 transition-colors"
                  title="Sil"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
