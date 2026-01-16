export default function NotFound () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <p className="text-4xl font-bold text-red-500">404-Post Gone !</p>
            <p className="mt-4 text-gray-400"> Sorry Could'nt Found This Post From DB</p>
            <a href="/about" className="mt-6 text-blue-400 underline"> Back To Home</a>

        </div>
    )
}