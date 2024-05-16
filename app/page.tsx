import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <main className="" style={{background: '#23272f'}} >

      <Header></Header>

      <article className="font-normal break-words text-primary dark:text-primary-dark">
        <div className="ps-0">
          <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center">
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out" style={{color:'#149eca'}}>
                    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                    <g stroke="currentColor" stroke-width="1" fill="none">
                      <ellipse rx="10" ry="4.5"></ellipse>
                      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                    </g>
            </svg>
            <h1 className="text-4xl font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary dark:text-primary-dark"style={{ color: '#fff'}}>React</h1>
            <p className="text-3xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center"style={{ color: '#fff'}}>La biblioteca para interfaces de usuario web y nativas</p>
            <div className="mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row">
                  <a className="w-full sm:w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug bg-link text-white hover:bg-opacity-80 text-lg py-3 rounded-full px-4 sm:px-6" aria-label="Aprende React" target="_self" href="/learn" style={{background:'#149eca'}}>Aprende React</a>
                  <a className="w-full sm:w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug text-primary dark:text-primary-dark shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 text-lg py-3 rounded-full px-4 sm:px-6" aria-label="Referencia de la API" target="_self" href="/reference/react"style={{ color: '#fff',border:'1px solid rgb(153,161,179'}}>Referencia de la API</a>
            </div>
          </div>
          <div className="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-primary-dark/10 " style={{contain:'content'}}>
            <div className="flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center">
              <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
                <h2 className="leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl" style={{ color: '#fff'}}>Crea interfaces de usuario a partir de componentes</h2>
                <p className="max-w-3xl mx-auto text-lg lg:text-xl text-secondary dark:text-secondary-dark leading-normal" style={{ color: '#fff'}}>React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como <code dir="ltr" className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left" style={{background:'rgba(120,131,155,.2)'}}>Thumbnail</code>,
                  <code dir="ltr" className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left" style={{background:'rgba(120,131,155,.2)'}} >LikeButton</code>, y <code dir="ltr" className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left" style={{background:'rgba(120,131,155,.2)'}}>Video</code>. Luego combínalos para formar pantallas, páginas y aplicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer></Footer>

    </main>
  );
}
