

const LogoContents = () => {
  return (
    <div className="flex-col h-56 justify-between bg-gradient-to-b from-green-800 to-green-950">
      <div className="w-full h-48 flex items-center justify-center flex-col ">
        <h1 className="text-white text-6xl font-title font-semibold" > WattLink </h1>
        <p className="text-white text-2xl font-subtitle">Soluções em Energia</p>
      </div>

      <div>
        <ul className="flex justify-center gap-10 w-full">
          <li className="w-72 justify-center border-r-2 border-stone-500 text-white"  >Iluminação</li>
          <li className="w-72 border-r-2 border-stone-500 text-white">Fios e cabos</li>
          <li className="w-72 border-r-2 border-stone-500 text-white">Material Elétrico</li>
          <li className="w-56 text-white">Infra</li>

        </ul>

      </div>
    </div>
  )

}

export { LogoContents }