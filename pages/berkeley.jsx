import React from 'react'
import Link from 'next/link'

const berkeley = () => {

    const code = "function calculateAverageTime(times){const sum=times.reduce((total,time)=>total+time,0);return sum/times.length;}function synchronizeClocks(times){const averageTime=calculateAverageTime(times);const timeDiff=averageTime-times[0];for(let i=0;i<times.length;i++){times[i]+=timeDiff;}}function simulateLocalClock(times,index){const localTime=Date.now();times[index]=localTime;console.log(`Local time at index ${index}: ${localTime}`);}function main(){const numNodes=5;const times=new Array(numNodes).fill(0);for(let i=0;i<numNodes;i++){setTimeout(simulateLocalClock,i*1000,times,i);}setTimeout(()=>{synchronizeClocks(times);console.log('\nSynchronized times:') ;for(let i=0;i<numNodes;i++){console.log(`Node ${i}: ${times[i]}`);}},numNodes*1000);}main();    "
    return (
        <div>

            <nav className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
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
                        <div className='bg-blue-600 text-slate-50 w-20 h-10 flex justify-center items-center rounded-lg'>
                            Run
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                {code}
            </div>
        </div>
    )
}

export default berkeley