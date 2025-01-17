import React from 'react'

export default function TemplateDiv(props:any) {
  return (
    <div>
        <input type="radio" id={props.value} name="hosting" value={props.value} className="hidden peer" required />
        <label htmlFor={props.value} className="inline-flex items-center justify-between w-full p-5 text-dark bg-white peer-checked:border rounded-lg cursor-pointer  peer-checked:border-gold peer-checked:text-gold peer-checked:bg-cream hover:text-gold hover:bg-cream  ">                           
            <div className="block">
                <img src={props.image} alt="" />
                <p className='mt-2 text-xs font-bold'>{props.nama}</p>
            </div>
        </label>
    </div>
  )
}
