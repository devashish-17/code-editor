import React from 'react'
import Link from 'next/link'

const tokenRing = () => {


    const code = "class TokenRing{constructor(numProcesses){this.numProcesses=numProcesses;this.processes=new Array(numProcesses).fill(null);this.tokenIndex=0;this.mutex=new Mutex();}process(processId){if(processId===this.tokenIndex){this.mutex.lock().then(()=>{console.log(`Process ${processId} is in the critical section.`);setTimeout(()=>{console.log(`Process ${processId} is exiting the critical section.`);this.mutex.unlock();this.tokenIndex=(this.tokenIndex+1)%this.numProcesses;this.processes[this.tokenIndex].giveToken();},1000);});}}start(){for(let i=0;i<this.numProcesses;i++){const processId=i;const process=new Process(processId,this);this.processes[processId]=process;process.start();}this.processes[0].giveToken();}}class Process{constructor(processId,tokenRing){this.processId=processId;this.tokenRing=tokenRing;}start(){setTimeout(()=>{this.tokenRing.process(this.processId);this.start();},100);}giveToken(){this.tokenRing.process(this.processId);}}class Mutex{constructor(){this.locked=false;this.waitingQueue=[];}lock(){if(this.locked){return new Promise((resolve)=>{this.waitingQueue.push(resolve);});}else{this.locked=true;return Promise.resolve();}}unlock(){if(this.waitingQueue.length>0){const nextResolver=this.waitingQueue.shift();nextResolver();}else{this.locked=false;}}}const tokenRing=new TokenRing(3);tokenRing.start(); "

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

            {code}
        </div>
    )
}

export default tokenRing