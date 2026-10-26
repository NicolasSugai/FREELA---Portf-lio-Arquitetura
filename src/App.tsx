import { useState, type FormEvent } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const projects = [
  { number: '01', category: 'RESTAURO · 2024', title: 'Casa da memória', place: 'Centro histórico · Minas Gerais', tags: ['Diagnóstico', 'Restauro de fachadas', 'Reabilitação'] },
  { number: '02', category: 'PATRIMÔNIO · 2023', title: 'Entre tempos', place: 'Conjunto urbano · São Paulo', tags: ['Conservação', 'Pesquisa histórica', 'Patrimônio'] },
  { number: '03', category: 'INTERIORES · 2022', title: 'Matéria presente', place: 'Residência · Rio de Janeiro', tags: ['Interiores', 'Restauro', 'Design autoral'] },
]

function App() {
  const [comparison, setComparison] = useState(52)
  const [sent, setSent] = useState(false)

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Contato pelo portfólio — ${data.get('name')}`)
    const body = encodeURIComponent(`Nome: ${data.get('name')}\nE-mail: ${data.get('email')}\n\n${data.get('message')}`)
    window.location.href = `mailto:contato@luisasales.com.br?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main id="inicio" className="min-h-screen bg-stone-50 text-stone-900">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Luisa Sales, início"><span>LS</span><span className="brand-name">LUISA SALES<small>ARQUITETURA & PATRIMÔNIO</small></span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#restauracao">Restauração</a><a href="#contato">Contato</a>
        </nav>
        <a className="cau" href="#sobre">CAU · ARQUITETURA E URBANISMO</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImg} alt="Detalhe de arquitetura histórica em pedra" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">PROJETO · PRESERVAÇÃO · PERMANÊNCIA</p>
          <h1 id="hero-title">Arquitetura,<br />restauro & conservação<br />do <em>patrimônio histórico.</em></h1>
          <p className="hero-summary">Luisa Sales — arquitetura que reconhece o valor do tempo e transforma o cuidado em projeto.</p>
          <a className="hero-link" href="#projetos">Explorar projetos <span aria-hidden="true">↘</span></a>
        </div>
        <span className="hero-note">ATUAÇÃO NO BRASIL · 2024—2026</span>
        <span className="hero-index">01 <i /> 03</span>
      </section>

      <section className="profile section-wrap" id="sobre">
        <div className="section-kicker"><span>01 / PERFIL</span><span>OLHAR, CONTEXTO, MATÉRIA</span></div>
        <div className="profile-grid">
          <h2>O futuro também<br />se constrói com<br /><em>memória.</em></h2>
          <div className="profile-copy">
            <p className="lead">Sou Luisa Sales, arquiteta dedicada a aproximar a preservação do patrimônio histórico das formas contemporâneas de habitar.</p>
            <p>Meu trabalho parte da escuta do lugar: sua história, seus materiais e as pessoas que o mantêm vivo. Desenvolvo projetos de restauro, conservação patrimonial e arquitetura de interiores com atenção à autenticidade e ao uso cotidiano.</p>
            <a className="underlined-link" href="#contato">Conheça minha abordagem <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="discipline-list" id="restauracao">
          <article><span>01</span><h3>Restauro</h3><p>Intervenções fundamentadas em pesquisa, diagnóstico e respeito às preexistências.</p></article>
          <article><span>02</span><h3>Conservação patrimonial</h3><p>Cuidado com a integridade material, cultural e histórica de cada bem.</p></article>
          <article><span>03</span><h3>Arquitetura de interiores</h3><p>Espaços acolhedores onde o novo convive com as marcas do tempo.</p></article>
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-wrap">
          <div className="section-kicker"><span>02 / SELEÇÃO DE TRABALHOS</span><span>IDEIAS QUE GANHAM LUGAR</span></div>
          <div className="projects-heading"><h2>Projetos com<br /><em>história para contar.</em></h2><p>Uma seleção de estudos e intervenções. Cada projeto começa com uma leitura cuidadosa do lugar.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-image project-image-${project.number}`}>
                  <img src={heroImg} alt={`Referência visual de ${project.title}`} />
                  <span className="project-number">{project.number}</span>
                  <span className="image-placeholder-label">IMAGEM DO PROJETO</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3><p className="project-place">{project.place}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>

          <article className="comparison-card" aria-labelledby="comparison-title">
            <div className="comparison-copy"><p className="eyebrow">PROCESSO · LEITURA DAS CAMADAS</p><h3 id="comparison-title">O cuidado transforma<br /><em>sem apagar.</em></h3><p>Use o controle para explorar um comparador conceitual Antes/Depois. Substitua as imagens demonstrativas pelos registros reais do projeto.</p><div className="comparison-legend"><span>ANTES</span><span>DEPOIS</span></div></div>
            <div className="comparison-visual">
              <img src={heroImg} alt="Estado posterior à intervenção — imagem demonstrativa" />
              <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}><img src={heroImg} alt="Estado anterior à intervenção — imagem demonstrativa" /></div>
              <span className="comparison-label before-label">ANTES</span><span className="comparison-label after-label">DEPOIS</span>
              <div className="comparison-divider" style={{ left: `${comparison}%` }} aria-hidden="true"><span>↔</span></div>
              <label className="sr-only" htmlFor="comparison-range">Deslize para comparar antes e depois</label>
              <input id="comparison-range" className="comparison-range" type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} />
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="section-wrap">
          <div className="section-kicker"><span>03 / CONTATO</span><span>VAMOS CONVERSAR</span></div>
          <div className="contact-grid">
            <div><p className="eyebrow">NOVOS PROJETOS · CONSULTAS · PARCERIAS</p><h2>Uma boa história<br />começa com <em>escuta.</em></h2><p className="contact-intro">Conte um pouco sobre o lugar, a ideia ou o desafio que gostaria de transformar.</p>
              <div className="contact-links"><a href="https://wa.me/?text=Ol%C3%A1%2C%20Luisa!%20Gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href="mailto:contato@luisasales.com.br">E-mail <span>↗</span></a><a href="https://www.linkedin.com/search/results/people/?keywords=Luisa%20Sales%20arquiteta" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <label htmlFor="name">Nome</label><input id="name" name="name" autoComplete="name" required placeholder="Como podemos chamar você?" />
              <label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="voce@exemplo.com" />
              <label htmlFor="message">Sobre o que gostaria de conversar?</label><textarea id="message" name="message" rows={4} required placeholder="Conte um pouco sobre seu projeto..." />
              <button type="submit">Preparar mensagem <span aria-hidden="true">↗</span></button>
              {sent && <p className="form-feedback" role="status">O seu aplicativo de e-mail foi aberto com a mensagem preparada. Se não abriu, escreva para contato@luisasales.com.br.</p>}
              <p className="form-note">O envio abre o seu aplicativo de e-mail com os dados preenchidos.</p>
            </form>
          </div>
        </div>
      </section>
      <footer className="site-footer"><a className="brand" href="#inicio"><span>LS</span><span className="brand-name">LUISA SALES<small>ARQUITETURA & PATRIMÔNIO</small></span></a><p>Preservar o que importa. Projetar o que vem.</p><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
    </main>
  )
}

export default App
