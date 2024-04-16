'use client'

import { ShoppingCart } from 'lucide-react'
import { Sheet, SheetTrigger } from './ui/sheet'



const Cart = () => {
  return (
   < Sheet>
   <SheetTrigger className='group -m-2 flex items-center p-2'>
    <ShoppingCart className='size-6 shrink-0 text-gray-400 group-hover:text-gray-500' aria-hidden/>
    <span className='ml-2 text-sm font-medium text-gray-700   '></span>
   </SheetTrigger>
   </Sheet>
  )
}

export default Cart