import React from 'react'
import { Button } from 'antd';
import Link from 'antd/es/typography/Link';

function Dashboard() {
  return (
    <>
      <div className='h-[100vh] w-[100vw]'>

        <div className='flex justify-between items-center px-20 pt-10'>
          <div className='flex items-center gap-2'>
            <img src="./public/logoseek.png" alt="" className='h-20 w-20' />
            <div className='text-3xl font-bold'>Dashboard</div>
          </div>
          <Link href='/'>
         <Button type="primary" className='py-5 px-8 text-lg font-semibold'>LogOut</Button>
          </Link>
        </div>




      </div>



    </>
  )
}

export default Dashboard