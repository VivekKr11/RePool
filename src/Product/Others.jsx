import React from 'react'
import MetalBins from './MetalBins'
import VCIbag from './VCIbag'
import Ppcrates from './Ppcrates'
import Separatorsheet from './Separatorsheet'
import StripeAndBuckle from './StripeAndBuckle'
import { NavLink } from 'react-router-dom'

const Others = () => {
  return (
    <div className="font-saira">

      {/* ── HERO — dark ── */}
      <section
        className="w-full flex items-center pt-24 md:pt-28 pb-16 px-4"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1f4e 60%, #050d1a 100%)" }}
      >
        <div className="container mx-auto max-w-6xl w-full space-y-5">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
            <span className="w-6 h-px bg-blue-400" />
            Our Products
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Other <span className="text-blue-400">Products</span>
          </h1>
          <div className="w-12 h-[3px] rounded-full bg-blue-500" />
          <p className="text-slate-300 text-base leading-relaxed max-w-xl">
            Beyond our flagship products, Repool India offers a wide range of
            supplementary packaging and supply chain solutions engineered for
            durability, efficiency, and sustainability.
          </p>
        </div>
      </section>

      {/* ── SUB-PRODUCT SECTIONS ── */}
      <MetalBins />
      <VCIbag />
      <Ppcrates />
      <Separatorsheet />
      <StripeAndBuckle />

      {/* ── CTA — dark, hard cut ── */}
      <section
        className="py-16 px-4 text-white"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1f4e 50%, #050d1a 100%)" }}
      >
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-around items-center gap-6 text-lg sm:text-xl">
          <p className="sm:w-1/2 text-slate-300">
            Get in touch with us to know how Repool India can help your business.
          </p>
          <NavLink to="/contact">
            <button className="bg-white text-gray-800 font-semibold px-12 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Contact
            </button>
          </NavLink>
        </div>
      </section>

    </div>
  )
}

export default Others