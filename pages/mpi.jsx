import React from 'react'
import Link from 'next/link'

const mpi = () => {
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

            <div>
                from mpi4py import MPI

                def distribute_data(data, num_processors):
                # Calculate the number of elements per processor
                elements_per_processor = len(data) // num_processors

                # Distribute data to each processor
                local_data = []
                for i in range(num_processors):
                start_index = i * elements_per_processor
                end_index = start_index + elements_per_processor
                local_data.append(data[start_index:end_index])

                return local_data

                def calculate_partial_sum(local_data):
                partial_sum = sum(local_data)
                return partial_sum

                def main():
                # MPI setup
                comm = MPI.COMM_WORLD
                num_processors = comm.Get_size()
                rank = comm.Get_rank()

                if rank == 0:
                # Generate the array of N elements (e.g., 1 to 100)
                N = 100
                data = list(range(1, N+1))

                # Distribute data to each processor
                local_data = distribute_data(data, num_processors)
                else:
                local_data = None

                # Scatter the data to each processor
                local_data = comm.scatter(local_data, root=0)

                # Calculate the partial sum for each processor
                partial_sum = calculate_partial_sum(local_data)

                # Gather the partial sums from each processor to display the intermediate results
                all_partial_sums = comm.gather(partial_sum, root=0)

                # Display the intermediate sums calculated at different processors
                if rank == 0:
                print("Intermediate sums:-")
                for i, sum_val in enumerate(all_partial_sums):
                print("Processor", i, ":", sum_val)

                # Sum up the partial sums to get the final result
                total_sum = comm.reduce(partial_sum, op=MPI.SUM, root=0)

                # Display the final sum
                if rank == 0:
                print("Final sum:", total_sum)

                if __name__ == "__main__":
                main()

            </div>
        </div>
    )
}

export default mpi