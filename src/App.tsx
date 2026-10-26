import './App.css'
import heroImg from './assets/hero.png'

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Ateliê — início">ATELIÊ <span>ARQUITETURA</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Atuação</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <span className="header-index">EST. 2014 · BRASIL</span>
      </header>

      <section className="hero" id="inicio">
        <img src={heroImg} alt="Fachada histórica com detalhes arquitetônicos em pedra" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">ARQUITETURA · MEMÓRIA · TEMPO</p>
          <h1>O passado<br />também <em>habita</em><br />o futuro.</h1>
          <p className="hero-intro">Projetos que preservam histórias e renovam a maneira de viver os espaços.</p>
          <a className="text-link" href="#projetos">Conheça nosso trabalho <span aria-hidden="true">↗</span></a>
        </div>
        <span className="hero-caption">01 — RESTAURO E REABILITAÇÃO</span>
        <span className="hero-number">01 / 03</span>
      </section>

      <section className="intro" id="sobre">
        <p className="eyebrow">UM OLHAR ATENTO AO QUE PERMANECE</p>
        <h2>Construir com respeito<br />à <em>memória do lugar.</em></h2>
        <p className="intro-text">Entre vestígios e possibilidades, aproximamos patrimônio e vida contemporânea. Cada projeto parte da escuta do edifício, de sua história e das pessoas que o habitam.</p>
      </section>

      <section className="practice" id="projetos">
        <div><span>01</span><h3>Restauração</h3><p>Intervenções cuidadosas que devolvem presença e uso aos edifícios históricos.</p></div>
        <div><span>02</span><h3>Conservação</h3><p>Pesquisa e cuidado contínuo com a materialidade e a memória do patrimônio.</p></div>
        <div><span>03</span><h3>Interiores</h3><p>Espaços contemporâneos que convivem com as marcas e camadas do tempo.</p></div>
      </section>

      <footer id="contato"><a className="wordmark" href="#inicio">ATELIÊ <span>ARQUITETURA</span></a><p>Projetar o presente, cuidar do que fica.</p><a href="mailto:contato@atelie.arq.br">Vamos conversar ↗</a></footer>
    </main>
  )
}

export default App
