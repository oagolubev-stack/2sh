export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="bg-red-500 text-white p-4 rounded-lg text-2xl font-bold">
        Если этот блок красный — Tailwind работает!
      </div>
      <h1 className="text-4xl font-bold mt-8 text-blue-600">Travel Agency</h1>
      <p className="mt-4 text-gray-600">Добро пожаловать на наш сайт</p>
    </main>
  )
}