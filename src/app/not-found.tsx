import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' h-screen flex justify-center items-center flex-col '>
      <h2 className='text-red-600'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='bg-blue-500 rounded-2xl p-1'>Return Home</Link>
    </div>
  )
}