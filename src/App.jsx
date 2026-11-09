import { useState } from 'react'
import CategoryFilter from './components/CategoryFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import SummaryCard from './components/SummaryCard'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', [])
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const addExpense = (expense) => setExpenses([expense, ...expenses])

  const deleteExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id))

  const filtered = activeCategory === 'Tümü'
    ? expenses
    : expenses.filter((e) => e.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">💸 Harcama Takip</h1>
        <SummaryCard expenses={expenses} />
        <ExpenseForm onAdd={addExpense} />
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <ExpenseList expenses={filtered} onDelete={deleteExpense} />
      </div>
    </div>
  )
}
