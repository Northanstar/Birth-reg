import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='pt-20 m-16 grid gap-11 text-2xl'>
    <div className=' text-3xl flex gap-8 font-bold '>
     <h1 >Birth Registration </h1>
     </div>
     <div className='flex'>
     <p >Welcome to the Birth Registration Portal
Your Child's First Right — A Legal Identity
Birth registration is the first step in securing your child's legal identity and access to essential rights and services. This portal is your one-stop destination for registering births quickly, securely, and conveniently.

</p>
    
</div>
<div>
<h2 className='font-bold'>
  How to Register
  </h2>
  <ol className='list'>
<li>Fill the Application – Enter the child's birth details (date, place, parents' information).</li>

<li>Upload Documents – Submit required documents (hospital record, parents' ID proofs).</li>

<li>Submit & Verify – Review and submit for approval.</li>

<li>Receive Certificate – Download or collect the official birth certificate.</li>
  </ol>

</div>

<div >
  <h2 className='font-bold'>Required Documents </h2>
Hospital birth notification/record

Parents’ government-issued IDs (e.g., national ID, passport)

Marriage certificate (if applicable)
</div>

<div>
  <h2 className='font-bold'>Processing Time</h2>
Typically 7–14 working days after submission.
</div>

<Link href={'/Register'}><button className='bg-amber-400 px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-200 font-semibold text-black shadow-md w-2xl mx-auto block'>
  Register Now
</button></Link>

    </div>
  )
}

export default page