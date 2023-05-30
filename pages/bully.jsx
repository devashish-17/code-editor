import React from 'react'
import Link from 'next/link'

const bully = () => {
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
                            </div>
                        </div>
                        <div className='bg-blue-600 text-slate-50 w-20 h-10 md:flex justify-center items-center rounded-lg hidden'>
                            Run
                        </div>
                    </div>
                </div>
            </nav>

            bully
            <div>
                def initial():
                num = int(input("Enter no. of Processes: "))
                return num

                def processID(num):
                for i in range(1, num + 1):
                d = int(input("Enter the id of Process: "))
                print("\nProcesses: ", end="")
                for i in range(1, num + 1):
                print("P" + str(i), end=" ")
                print()

                def startElection():
                p = int(input("\nEnter the Process who initialized election: "))
                return p

                def message(p, num):
                z = 0
                while p [**lessThanSymbol**]= 6:
                print()
                for i in range(p, num):
                print("Process", p, "sending ELECTION msg to", i + 1, "...")
                print()
                for i in range(p, num - 1):
                print("Process", p, "getting reply from", i + 1)
                p += 1
                z = p - 2
                return z

                def coordinator(z):
                print("Process", z, "is the coordinator")

                print()

                num = initial()
                processID(num)
                p = startElection()
                z = message(p, num)
                coordinator(z)

                print()

            </div>
            
            Ring
            <div>
                def initial():
                num = int(input("Enter no. of Processes: "))
                return num

                def processID(num):
                processIds = []
                for i in range(1, num+1):
                d = int(input(f"Enter the id of Processes : "))
                processIds.append(d)
                print("\nProcesses:", " ".join(["P"+str(i) for i in range(1, num+1)]))

                def startElection(num):
                b = int(input("\nEnter the Process who initialized election: "))
                return b

                def sendToken(b):
                print(f"\nProcess **curly braces b** sending Token message to 1...")
                token = 0
                for i in range(2, b+1):
                print(f"Process **i - 1** sending Token message to **i**...")
                token = i
                return token

                def declareLeader(token):
                print(f"\nProcess **token** selected as Coordinator")

                def main():
                print()
                num = initial()
                processID(num)
                b = startElection(num)
                token = sendToken(b)
                declareLeader(token)
                print()

                main()

            </div>

        </div>
    )
}

export default bully