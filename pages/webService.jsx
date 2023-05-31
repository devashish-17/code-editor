import React from 'react'
import Link from 'next/link'

const webService = () => {

    const code = " data = { 'num1': num1, 'num2': num2 }";

    return (
        <div>
            <nav className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 hidden md:block">
                            <img className="h-8 w-8" src="/favicon.ico" alt="Logo" />
                        </div>
                        <div className="flex-grow">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href={'/rmi'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        C++
                                    </div>
                                </Link>
                                <Link href={'/mpi'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        Python
                                    </div>
                                </Link>
                                <Link href={'/berkeley'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        Javascript
                                    </div>
                                </Link>
                                <Link href={'/tokenRing'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        Java
                                    </div>
                                </Link>
                                <Link href={'/bully'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        PHP
                                    </div>
                                </Link>
                                <Link href={'/webService'}>
                                    <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        C#
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='bg-blue-600 text-slate-50 w-20 h-10 md:flex justify-center items-center rounded-lg hidden'>
                            Run
                        </div>
                    </div>
                </div>
            </nav>

            <div> pip install flask </div>
            <div> app.py </div>
            <div>from flask import Flask

                app = Flask(__name__)

                @app.route('/')
                def hello():
                return 'Hello, World!'

                if __name__ == '__main__':
                app.run()
            </div>
            <div>or</div>
            <div>from flask import Flask, request

                app = Flask(__name__)

                @app.route('/add', methods=['POST'])
                def add_numbers():
                data = request.json
                num1 = data['num1']
                num2 = data['num2']
                result = num1 + num2
                return str(result)

                if __name__ == '__main__':
                app.run()
            </div>

            <div> python app.py </div>

            <div> client.py </div>
            <div> import requests

                response = requests.get('http://localhost:5000/')
                print(response.text)
            </div>
            <div>or</div>
            <div> import requests

                num1 = int(input("Enter the first number: "))
                num2 = int(input("Enter the second number: "))

                {code}

                response = requests.post('http://localhost:5000/add', json=data)
                print(response.text)
            </div>








        </div>
    )
}

export default webService