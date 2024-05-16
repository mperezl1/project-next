import React from 'react'

export default function Navegation() {
  return (
    <div>
      <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <div className="lg:-mt-16 z-10">
          <div className="fixed top-0 py-0 shadow lg:pt-16 lg:sticky start-0 end-0 lg:shadow-none">
            <div className="sticky top-0 lg:bottom-0 lg:h-[calc(100vh-4rem)] flex flex-col">
              <div className="overflow-y-scroll no-bg-scrollbar lg:w-[342px] grow bg-wash dark:bg-wash-dark" style={{ overscrollBehavior: 'contain' }}>
                <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-10 hidden lg:block">

                <nav role="navigation" className="w-full pt-6 scrolling-touch lg:h-auto grow pe-0 lg:pe-5 lg:pb-16 md:pt-4 lg:pt-4 scrolling-gpu font-semibold" style={{background:'rgba(120,131,155,.2)',width:'56rem',fontSize:'15px', color: 'rgb(153,161,179'}}>
                    <ul>
                      <h3 className="mb-1 text-sm font-bold ms-5 text-tertiary dark:text-tertiary-dark">INTRODUCCIÓN</h3>
                      <li>
                        <a title="Inicio rápido" target="" aria-current="page" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-base text-link dark:text-link-dark bg-highlight dark:bg-highlight-dark border-blue-40 hover:bg-highlight hover:text-link dark:hover:bg-highlight-dark dark:hover:text-link-dark" href="/learn" style={{ color: '#fff'}}>
                          <div>Inicio rápido
                            
                          </div>
                          <span className="pe-1 text-link dark:text-link-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition rotate-0" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-100" style={{transition:'opacity 250ms ease-in-out'}}>
                          <div id="react-collapsed-panel-:R8im6:" aria-hidden="false" role="region" style={{boxSizing:'border-box'}}>
                            <ul>
                              <li>
                                <a title="Tutorial: Tres en línea" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/tutorial-tic-tac-toe" style={{ color: '#fff'}}>
                                  <div>Tutorial: Tres en línea
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Pensar en React" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/thinking-in-react" style={{ color: '#fff'}}>
                                  <div>Pensar en React
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a title="Instalación" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-primary dark:text-primary-dark" href="/learn/installation" style={{ color: '#fff'}}>
                          <div>Instalación
                            
                          </div>
                          <span className="pe-1 text-tertiary dark:text-tertiary-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition -rotate-90 rtl:rotate-90" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-50" style={{transition:'opacity 250ms ease-in-out'}}>
                          <div id="react-collapsed-panel-:R8qm6:" aria-hidden="true" role="region" style={{boxSizing:'border-box',display:'none',height:'0px',overflow:'hidden'}}>
                            <ul>
                              <li>
                                <a title="Iniciar un nuevo proyecto de React" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/start-a-new-react-project" style={{ color: '#fff'}}>
                                  <div>Iniciar un nuevo proyecto de React
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Agregar React a un proyecto existente" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/add-react-to-an-existing-project" style={{ color: '#fff'}}>
                                  <div>Agregar React a un proyecto existente
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Configurar un editor" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/editor-setup" style={{ color: '#fff'}}>
                                  <div>Configurar un editor
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Usar TypeScript" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/typescript" style={{ color: '#fff'}}>
                                  <div>Usar TypeScript
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Herramientas de Desarrollo de React" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/react-developer-tools" style={{ color: '#fff'}}>
                                  <div>Herramientas de Desarrollo de React
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li role="separator" className="mt-4 mb-2 ms-5 border-b border-border dark:border-border-dark"></li>
                      <h3 className="mb-1 text-sm font-bold ms-5 text-tertiary dark:text-tertiary-dark mt-2">APRENDE REACT</h3>
                      <li>
                        <a title="Describir la UI" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-primary dark:text-primary-dark" href="/learn/describing-the-ui " style={{ color: '#fff'}}>
                          <div>Describir la UI
                            
                          </div>
                          <span className="pe-1 text-tertiary dark:text-tertiary-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition -rotate-90 rtl:rotate-90" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-50" style={{transition:'opacity 250ms ease-in-out'}}>
                          <div id="react-collapsed-panel-:R9am6:" aria-hidden="true" role="region" style={{boxSizing:'border-box',display:'none',height:'0px',overflow:'hidden'}}>
                            <ul>
                              <li>
                                <a title="Tu primer componente" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/your-first-component" style={{ color: '#fff'}}>
                                  <div>Tu primer componente
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Importar y exportar componentes" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/importing-and-exporting-components" style={{ color: '#fff'}}>
                                  <div>Importar y exportar componentes
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Escribir marcado con JSX" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/writing-markup-with-jsx" style={{ color: '#fff'}}>
                                  <div>Escribir marcado con JSX
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="JavaScript en JSX con llaves" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/javascript-in-jsx-with-curly-braces" style={{ color: '#fff'}}>
                                  <div>JavaScript en JSX con llaves
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Pasar props a un componente" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/passing-props-to-a-component">
                                  <div>Pasar props a un componente
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Renderizado condicional" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/conditional-rendering">
                                  <div>Renderizado condicional
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Renderizado de listas" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/rendering-lists">
                                  <div>Renderizado de listas
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Mantener los componentes puros" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/keeping-components-pure">
                                  <div>Mantener los componentes puros
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Tu UI como un árbol" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/understanding-your-ui-as-a-tree">
                                  <div>Tu UI como un árbol
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a title="Agregar interactividad" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-primary dark:text-primary-dark" href="/learn/adding-interactivity">
                          <div>Agregar interactividad
                            
                          </div>
                          <span className="pe-1 text-tertiary dark:text-tertiary-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition -rotate-90 rtl:rotate-90" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-50" style={{transition:'opacity 250ms ease-in-ou'}}>
                          <div id="react-collapsed-panel-:R9im6:" aria-hidden="true" role="region" style={{boxSizing:'border-box',display:'none',height:'0px',overflow:'hidden'}}>
                            <ul>
                              <li>
                                <a title="Responder a eventos" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/responding-to-events">
                                  <div>Responder a eventos
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="El estado: la memoria de un componente" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/state-a-components-memory">
                                  <div>El estado: la memoria de un componente
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Renderizado y confirmación" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/render-and-commit">
                                  <div>Renderizado y confirmación
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="El estado como una instantánea" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/state-as-a-snapshot">
                                  <div>El estado como una instantánea
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Poner en cola una serie de actualizaciones del estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/queueing-a-series-of-state-updates">
                                  <div>Poner en cola una serie de actualizaciones del estado
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Actualizar objetos en el estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/updating-objects-in-state">
                                  <div>Actualizar objetos en el estado
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Actualizar arrays en el estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/updating-arrays-in-state">
                                  <div>Actualizar arrays en el estado
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a title="Gestión del estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-primary dark:text-primary-dark" href="/learn/managing-state">
                          <div>Gestión del estado
                            
                          </div>
                          <span className="pe-1 text-tertiary dark:text-tertiary-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition -rotate-90 rtl:rotate-90" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-50" style={{transition:'opacity 250ms ease-in-out'}}>
                          <div id="react-collapsed-panel-:R9qm6:" aria-hidden="true" role="region" style={{boxSizing:'border-box',display:'none',height:'0px',overflow:'hidden'}}>
                            <ul>
                              <li>
                                <a title="Reaccionar a las entradas con el estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/reacting-to-input-with-state">
                                  <div>Reaccionar a las entradas con el estado
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Elección de la estructura del estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/choosing-the-state-structure">
                                  <div>Elección de la estructura del estado
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Compartir estado entre componentes" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/sharing-state-between-components">
                                  <div>Compartir estado entre componentes
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Preservar y reiniciar el estado" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/preserving-and-resetting-state">
                                  <div>Preservar y reiniciar el estado
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Extraer lógica de estado en un reducer" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/extracting-state-logic-into-a-reducer">
                                  <div>Extraer lógica de estado en un reducer
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Pasar datos en profundidad con contexto" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/passing-data-deeply-with-context">
                                  <div>Pasar datos en profundidad con contexto
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Escalar con reducer y contexto" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/scaling-up-with-reducer-and-context">
                                  <div>Escalar con reducer y contexto
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a title="Puertas de escape" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5 text-base font-bold text-primary dark:text-primary-dark" href="/learn/escape-hatches">
                          <div>Puertas de escape
                            
                          </div>
                          <span className="pe-1 text-tertiary dark:text-tertiary-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="duration-100 ease-in transition -rotate-90 rtl:rotate-90" style={{minWidth:'20px',minHeight:'20px'}}>
                              <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
                                <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                                <polygon points="446 418 466 418 466 398 446 398"></polygon>
                              </g>
                            </svg>
                          </span>
                        </a>
                        <div className="opacity-50" style={{transition:'opacity 250ms ease-in-out'}}>
                          <div id="react-collapsed-panel-:Ra2m6:" aria-hidden="true" role="region" style={{boxSizing:'border-box',display:'none',height:'0px',overflow:'hidden'}}>
                            <ul>
                              <li>
                                <a title="Referenciar valores con refs" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/referencing-values-with-refs">
                                  <div>Referenciar valores con refs
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Manipular el DOM con Refs" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/manipulating-the-dom-with-refs">
                                  <div>Manipular el DOM con Refs
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Sincronizar con Efectos" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/synchronizing-with-effects">
                                  <div>Sincronizar con Efectos
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Quizás no necesites un Efecto" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/you-might-not-need-an-effect">
                                  <div>Quizás no necesites un Efecto
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Ciclo de vida de los Efectos reactivos" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/lifecycle-of-reactive-effects">
                                  <div>Ciclo de vida de los Efectos reactivos
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Separar eventos de Efectos" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/separating-events-from-effects">
                                  <div>Separar eventos de Efectos
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Eliminar dependencias de los Efectos" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/removing-effect-dependencies">
                                  <div>Eliminar dependencias de los Efectos
                                    
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a title="Reutilizar la lógica con hooks personalizados" target="" className="p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-sm ps-6 ps-5 text-base text-secondary dark:text-secondary-dark" href="/learn/reusing-logic-with-custom-hooks">
                                  <div>Reutilizar la lógica con hooks personalizados
                                    
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="h-20"></div>
                  </nav>
                </aside>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
