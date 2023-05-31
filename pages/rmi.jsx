import React from 'react'
import Link from 'next/link'

const rmi = () => {

    const code1 = "--import java.rmi.Remote; import java.rmi.RemoteException; public interface RemoteService extends Remote {String processRequest(String request) throws RemoteException; }";
    const code2 = "--import java.rmi.RemoteException; import java.rmi.server.UnicastRemoteObject; public class RemoteServiceImpl extends UnicastRemoteObject implements RemoteService { public RemoteServiceImpl() throws RemoteException {// Required to throw RemoteException from the constructor} @Override public String processRequest(String request) throws RemoteException { return 'Processed: ' + request; } }";
    const code3 = "--import java.rmi.registry.LocateRegistry; import java.rmi.registry.Registry; public class Server { public static void main(String[] args) { try { RemoteService remoteService = new RemoteServiceImpl(); Registry registry = LocateRegistry.createRegistry(1099); registry.rebind('RemoteService', remoteService); System.out.println('Server started!'); } catch (Exception e) { e.printStackTrace(); } } }";
    const code4 = "--import java.rmi.registry.LocateRegistry; import java.rmi.registry.Registry; public class Client { public static void main(String[] args) { try { Registry registry = LocateRegistry.getRegistry('localhost', 1099); RemoteService remoteService = (RemoteService) registry.lookup('RemoteService'); String result = remoteService.processRequest('Hello, server!'); System.out.println('Result: ':  + result); } catch (Exception e) { e.printStackTrace(); } } }";

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

            RemoteService.java
            <div> {code1} </div>
            RemoteServiceImpl.java
            <div> {code2} </div>
            Server.java
            <div> {code3} </div>
            Client.java
            <div> {code4} </div>
            <div>
                javac RemoteService.java
                javac RemoteServiceImpl.java
                javac Server.java
                javac Client.java
            </div>
            <div> java Server </div>
            <div> java Client </div>
        </div>
    )
}

export default rmi