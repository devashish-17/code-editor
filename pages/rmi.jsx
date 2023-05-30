import React from 'react'
import Link from 'next/link'

const rmi = () => {

    const code1 = "--import java.rmi.Remote; import java.rmi.RemoteException; public interface RemoteService extends Remote {String processRequest(String request) throws RemoteException; }";
    const code2 = "--import java.rmi.RemoteException; import java.rmi.server.UnicastRemoteObject; public class RemoteServiceImpl extends UnicastRemoteObject implements RemoteService { public RemoteServiceImpl() throws RemoteException {} @Override public String processRequest(String request) throws RemoteException { return 'Processed: ' + request; } }";
    const code3 = "--import java.rmi.registry.LocateRegistry; import java.rmi.registry.Registry; public class Server { public static void main(String[] args) { try { RemoteService remoteService = new RemoteServiceImpl(); Registry registry = LocateRegistry.createRegistry(1099); registry.rebind('RemoteService', remoteService); System.out.println('Server started!'); } catch (Exception e) { e.printStackTrace(); } } }";
    const code4 = "--import java.rmi.registry.LocateRegistry; import java.rmi.registry.Registry; public class Client { public static void main(String[] args) { try { Registry registry = LocateRegistry.getRegistry('localhost', 1099); RemoteService remoteService = (RemoteService) registry.lookup('RemoteService'); String result = remoteService.processRequest('Hello, server!'); System.out.println('Result: ':  + result); } catch (Exception e) { e.printStackTrace(); } } }";

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

            <div> {code1} </div>
            <div> {code2} </div>
            <div> {code3} </div>
            <div> {code4} </div>
        </div>
    )
}

export default rmi