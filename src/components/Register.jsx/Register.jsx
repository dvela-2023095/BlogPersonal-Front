
export const Register=()=>{
    const form ={
        
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">Create Account</h2>
                
                <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength="25"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label htmlFor="surname" className="block text-sm font-semibold text-gray-600 mb-1">Surname</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    maxLength="25"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-1">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    maxLength="15"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    minLength="8"
                    maxLength="100"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                Register
                </button>
            </form>
            </div>

    )
}