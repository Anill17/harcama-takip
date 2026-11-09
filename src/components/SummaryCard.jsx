export default function SummaryCard({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="bg-blue-600 text-white rounded-2xl p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-200 text-sm">Toplam Harcama</p>
          <p className="text-3xl font-bold mt-1">
            ₺{total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-200 text-sm">Kayıt Sayısı</p>
          <p className="text-3xl font-bold mt-1">{expenses.length}</p>
        </div>
      </div>
    </div>
  )
}
