import { useState, type FormEvent } from 'react'
import './App.css'

const projects = [
  {
    number: '01', category: 'PROJETO DE ARQUITETURA', title: 'Estúdio de Yoga', place: 'Reorganização de edificação existente',
    description: 'Leitura do espaço existente, estudos de demolição e construção, novo layout e organização dos ambientes de prática e apoio.',
    image: '/projects/studio-yoga-4.jpg', alt: 'Prancha de layout do projeto Estúdio de Yoga', tags: ['Levantamento', 'Layout', 'Projeto executivo'],
  },
  {
    number: '02', category: 'ESTUDO DE IMPLANTAÇÃO', title: 'Instituto Terapêutico Ayurvédico', place: 'Organização espacial e relação com o terreno',
    description: 'Conjunto organizado em torno de pátios, paisagismo e percursos, com ambientes de terapia, yoga e convivência.',
    image: '/projects/instituto-ayurvedico-01.jpg', alt: 'Prancha de implantação do Instituto Terapêutico Ayurvédico', tags: ['Implantação', 'Estudo volumétrico', 'Paisagismo'],
  },
  {
    number: '03', category: 'DETALHAMENTO DE INTERIORES', title: 'Banheiro residencial', place: 'Projeto para residência familiar · São Paulo',
    description: 'Detalhamento em escala 1:20 com paginação, vistas, cortes, especificação de materiais e componentes.',
    image: '/projects/banheiro-residencial-7.jpg', alt: 'Prancha de detalhamento e perspectiva do banheiro residencial', tags: ['Interiores', 'Detalhamento', 'Materiais'],
  },
]

const experiences = [
  { date: 'AGO 2025 — MAI 2026', title: 'Estágio em Arquitetura', place: 'CBPM · Caixa Beneficente da Polícia Militar', text: 'Mapas no GeoSampa, levantamento de áreas, detalhamentos e visitas técnicas.' },
  { date: 'DESDE MAR 2025', title: 'Iniciação Científica em Patrimônio', place: 'UNICID · Universidade Cidade de São Paulo', text: 'Pesquisa documental junto a órgãos municipais, análise de edifícios existentes e visitas técnicas.' },
  { date: '2025 — 2026', title: 'Monitoria Acadêmica', place: 'Patrimônio e Restauro · Desenho para Design de Interiores', text: 'Apoio às atividades práticas e teóricas e organização das aulas.' },
]

function App() {
  const [comparison, setComparison] = useState(50)
  const [sent, setSent] = useState(false)

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Contato pelo portfólio — ${data.get('name')}`)
    const body = encodeURIComponent(`Nome: ${data.get('name')}\nE-mail: ${data.get('email')}\n\n${data.get('message')}`)
    window.location.href = `mailto:luisa.santasales@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main id="inicio" className="min-h-screen bg-stone-50 text-stone-900">
      <header className="site-header">
        <a href="#inicio" className="identity" aria-label="Luisa Santana Sales, página inicial">
          <span className="identity-monogram">LS</span>
          <span className="identity-copy"><strong>LUISA SANTANA SALES</strong><small>ARQUITETA E URBANISTA</small></span>
        </a>
        <nav aria-label="Navegação principal"><a href="#perfil">Perfil</a><a href="#projetos">Projetos</a><a href="#trajetoria">Trajetória</a><a href="#contato">Contato</a></nav>
        <a className="header-cau" href="#perfil">CAU A334297-2</a>
      </header>

      <section className="hero section-frame" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="red-dot" /> PORTFÓLIO · SÃO PAULO, BRASIL</p>
          <h1 id="hero-title">Arquitetura<br />desenhada com<br /><em>atenção ao lugar.</em></h1>
          <p className="hero-description">Sou Luisa Santana Sales, arquiteta e urbanista. Trabalho entre projeto, documentação técnica e leitura cuidadosa das edificações e de sua história.</p>
          <div className="hero-actions"><a className="button-primary" href="#projetos">Ver projetos <span>↘</span></a><a className="text-action" href="#perfil">Conhecer meu percurso</a></div>
          <p className="hero-register">ARQUITETA JÚNIOR <span /> REGISTRO PROFISSIONAL · CAU A334297-2</p>
        </div>
        <div className="hero-board" aria-label="Prancha de projeto autoral do Estúdio de Yoga">
          <div className="board-meta"><span>PROJETO · 001</span><span>ESTUDO DE LAYOUT</span></div>
          <img src="/projects/studio-yoga-4.jpg" alt="Planta de layout e organização dos ambientes do Estúdio de Yoga" />
          <div className="board-caption"><span>ESTÚDIO DE YOGA</span><span>DESENHO 04 / 04</span></div>
          <span className="board-crosshair crosshair-one" /><span className="board-crosshair crosshair-two" />
        </div>
        <div className="hero-index"><span>01</span><i /> PORTFÓLIO PROFISSIONAL</div>
      </section>

      <section className="profile section-frame" id="perfil">
        <div className="section-heading"><span>01 / PERFIL</span><span>FORMAÇÃO · PESQUISA · PROJETO</span></div>
        <div className="profile-layout">
          <div><p className="eyebrow green-eyebrow">LUISA SANTANA SALES</p><h2>Projeto claro,<br /><em>cuidado atento.</em></h2></div>
          <div className="profile-text"><p className="profile-lead">Arquiteta e Urbanista formada pela Universidade Cidade de São Paulo, com experiência em levantamento, detalhamento, documentação técnica, modelagem 3D e acompanhamento de obras.</p><p>Meu percurso combina prática de projeto, pesquisa em patrimônio e trabalho de campo. Tenho interesse em projetos executivos, detalhamento construtivo e na produção gráfica e técnica que transforma uma ideia em espaço construído.</p><p>Na iniciação científica, pesquiso documentação arquitetônica junto a órgãos municipais e analiso edifícios existentes. Na prática, valorizo o rigor do desenho, a escolha consciente de materiais e a comunicação entre projeto e obra.</p></div>
        </div>
        <div className="skill-strip"><div><span>01</span><strong>PROJETO & DETALHAMENTO</strong></div><div><span>02</span><strong>LEVANTAMENTO & DOCUMENTAÇÃO</strong></div><div><span>03</span><strong>PATRIMÔNIO & OBRA</strong></div></div>
      </section>

      <section className="projects section-frame" id="projetos">
        <div className="section-heading"><span>02 / PROJETOS SELECIONADOS</span><span>DESENHOS, ESTUDOS E DETALHES</span></div>
        <div className="projects-intro"><h2>Do estudo ao<br /><em>detalhe construtivo.</em></h2><p>Projetos e exercícios desenvolvidos ao longo da formação e da prática profissional. As pranchas mostram o processo de pensar, organizar e comunicar cada intervenção.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className="project-art"><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-no">{project.number}</span><span className="project-art-label">PRANCHA DE PROJETO</span></div>
            <div className="project-info"><p className="project-category"><span className="red-dot" /> {project.category}</p><h3>{project.title}</h3><p className="project-place">{project.place}</p><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}
        </div>

        <article className="comparison-panel">
          <div className="comparison-text"><p className="eyebrow green-eyebrow">ESTÚDIO DE YOGA · ESTUDO DE INTERVENÇÃO</p><h3>Do existente<br />à nova <em>organização.</em></h3><p>Comparação entre a planta existente e o layout proposto para os novos ambientes. Arraste o controle sobre a prancha.</p><div className="compare-legend"><span>01 · PLANTA EXISTENTE</span><span>04 · NOVO LAYOUT</span></div></div>
          <div className="compare-visual">
            <img src="/projects/studio-yoga-4.jpg" alt="Layout proposto do Estúdio de Yoga" />
            <div className="compare-before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}><img src="/projects/studio-yoga-existente-1.jpg" alt="Planta baixa existente do local antes da intervenção" /></div>
            <span className="compare-label compare-label-before">EXISTENTE</span><span className="compare-label compare-label-after">PROPOSTA</span>
            <div className="compare-rule" style={{ left: `${comparison}%` }} aria-hidden="true"><span>↔</span></div>
            <label className="sr-only" htmlFor="compare-range">Deslize para comparar a planta existente com a proposta</label>
            <input id="compare-range" className="compare-range" type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} />
          </div>
        </article>
      </section>

      <section className="trajectory section-frame" id="trajetoria">
        <div className="section-heading"><span>03 / TRAJETÓRIA</span><span>EXPERIÊNCIA PROFISSIONAL E ACADÊMICA</span></div>
        <div className="trajectory-layout"><div><h2>Aprender<br />fazendo e <em>pesquisando.</em></h2><p className="trajectory-intro">Uma formação construída entre universidade, escritório, acervo e canteiro.</p><div className="education"><span>FORMAÇÃO</span><strong>Arquitetura e Urbanismo</strong><p>UNICID · Universidade Cidade de São Paulo</p><small>AGO 2021 — JUN 2026</small></div><div className="software"><span>FERRAMENTAS</span><p><strong>Avançado</strong> · AutoCAD, SketchUp e LayOut</p><p><strong>Intermediário</strong> · Archicad, Illustrator, Pacote Office</p><p><strong>Básico</strong> · V-Ray, Enscape, Canva</p></div></div>
          <div className="timeline">{experiences.map((experience) => <article className="timeline-item" key={experience.title}><span className="timeline-date">{experience.date}</span><div><h3>{experience.title}</h3><p className="timeline-place">{experience.place}</p><p>{experience.text}</p></div></article>)}<article className="timeline-item"><span className="timeline-date">2024</span><div><h3>Acompanhamento de obras residenciais</h3><p className="timeline-place">Reforma e construção · São Paulo</p><p>Registros fotográficos, descrição técnica e levantamento de materiais e técnicas construtivas.</p></div></article></div></div>
        <div className="field-note"><img src="/projects/obra-adote-07.jpg" alt="Registro de campo do relatório de acompanhamento de obra Adote uma Obra" loading="lazy" /><div><span>REGISTRO DE CAMPO · 2024</span><p>Observação das etapas, materiais e condições reais da obra.</p></div></div>
      </section>

      <section className="contact section-frame" id="contato">
        <div className="section-heading"><span>04 / CONTATO</span><span>CONVERSAS E COLABORAÇÕES</span></div>
        <div className="contact-layout"><div><p className="eyebrow green-eyebrow">LUISA SANTANA SALES · ARQUITETA E URBANISTA</p><h2>Vamos desenhar<br />o próximo <em>passo.</em></h2><p className="contact-intro">Para conversar sobre projetos, colaboração profissional ou arquitetura, entre em contato pelos canais abaixo.</p><div className="contact-details"><a href="tel:+5511977875966"><span>TELEFONE</span>+55 11 97787-5966 <i>↗</i></a><a href="https://wa.me/5511977875966" target="_blank" rel="noreferrer"><span>WHATSAPP</span>Enviar mensagem <i>↗</i></a><a href="mailto:luisa.santasales@gmail.com"><span>E-MAIL</span>luisa.santasales@gmail.com <i>↗</i></a><a href="https://www.linkedin.com/in/santasales" target="_blank" rel="noreferrer"><span>LINKEDIN</span>linkedin.com/in/santasales <i>↗</i></a></div></div>
          <form className="contact-form" onSubmit={handleContact}><p className="form-title">Escreva uma mensagem</p><label htmlFor="contact-name">Seu nome</label><input id="contact-name" name="name" required autoComplete="name" placeholder="Nome e sobrenome" /><label htmlFor="contact-email">Seu e-mail</label><input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="voce@exemplo.com" /><label htmlFor="contact-message">Mensagem</label><textarea id="contact-message" name="message" rows={4} required placeholder="Como posso ajudar?" /><button type="submit">Preparar e-mail <span>↗</span></button>{sent && <p className="form-feedback" role="status">Mensagem preparada no seu aplicativo de e-mail. Se não abriu, escreva para luisa.santasales@gmail.com.</p>}<p className="form-note">O formulário abre seu aplicativo de e-mail com os campos preenchidos.</p></form></div>
      </section>

      <footer className="site-footer"><a className="footer-name" href="#inicio">LUISA SANTANA SALES <span>· ARQUITETURA E URBANISMO</span></a><span>SÃO PAULO · SP · BRASIL</span><a href="#inicio">VOLTAR AO INÍCIO ↑</a></footer>
    </main>
  )
}

export default App
