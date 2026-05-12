import { Mail, Phone, MapPin, ExternalLink, Code2, ShieldCheck, Database, BrainCircuit, Briefcase, GraduationCap, Sparkles, Download } from "lucide-react";

export default function App() {
  const cvUrl = `${import.meta.env.BASE_URL}CV_RANDRIATSARAFARA_Rivotiana_Philippe_stage_dev.pdf`;
  const skills = [
    "JavaScript ES6",
    "HTML5 / CSS3",
    "API REST",
    "JSON",
    "Python",
    "Docker",
    "PostgreSQL",
    "Redis",
    "Git / GitHub",
    "Débogage",
  ];

  const strengths = [
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Adaptation rapide avec l’IA",
      text: "Capable d’utiliser les outils IA pour comprendre, prototyper, corriger et améliorer progressivement une application.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Bases full-stack solides",
      text: "Compréhension du front-end, du back-end, des formulaires, des routes, de l’authentification et des réponses JSON.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Culture sécurité applicative",
      text: "Projet académique centré sur le partage sécurisé de fichiers, les accès utilisateurs et la journalisation.",
    },
  ];

  const projectFeatures = [
    "Upload, partage et téléchargement sécurisé de fichiers",
    "Authentification et contrôle d’accès",
    "Journalisation des actions utilisateurs",
    "Routes back-end et réponses JSON",
    "Environnement Docker avec PostgreSQL et Redis",
    "Démarche de test, débogage et amélioration continue",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400 font-bold text-slate-950 shadow-lg shadow-teal-500/20">
                RP
              </div>
              <div>
                <p className="text-sm text-slate-400">Portfolio développeur</p>
                <h1 className="text-lg font-semibold">Rivotiana Philippe Randriatsarafara</h1>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="mailto:lembarakah@gmail.com" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-teal-400 hover:text-teal-300">
                Contact
              </a>
              <a href="https://github.com/mbaraka-cloud/secure-file-app" target="_blank" rel="noreferrer" className="rounded-full bg-teal-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-teal-300">
                GitHub
              </a>
            </div>
          </nav>

          <div className="grid items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm text-teal-200">
                <Sparkles className="h-4 w-4" /> Disponible pour stage développeur
              </div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Développeur web junior orienté <span className="text-teal-300">full-stack</span>, API et IA.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Jeune diplômé en génie logiciel, motivé, rigoureux et adaptable. Je conçois des interfaces web simples, des routes back-end, des intégrations API REST et des applications utiles avec une démarche de recherche, test et amélioration continue.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/mbaraka-cloud/secure-file-app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-teal-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300">
                  Voir le projet GitHub <ExternalLink className="h-4 w-4" />
                </a>
                <a href="mailto:lembarakah@gmail.com" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-teal-400 hover:text-teal-300">
                  Me contacter <Mail className="h-4 w-4" />
                </a>
                <a href={cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-teal-400 hover:text-teal-300">
                  Télécharger le CV <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-teal-300">Profil résumé</p>
                <h3 className="mt-3 text-2xl font-bold">Candidat junior à fort potentiel</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Expérience en support client technique, back-office et développement d’une application web sécurisée. Bon niveau de français, esprit d’équipe et capacité à suivre les instructions.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-300">
                  <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-teal-300" /> lembarakah@gmail.com</p>
                  <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-teal-300" /> 034 94 400 61</p>
                  <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-teal-300" /> Antananarivo, Madagascar</p>
                  <p className="flex items-center gap-3"><Code2 className="h-4 w-4 text-teal-300" /> github.com/mbaraka-cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/40">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-teal-300">Projet principal</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Secure File App</h2>
          </div>
          <a href="https://github.com/mbaraka-cloud/secure-file-app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200">
            Ouvrir le dépôt <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400 text-slate-950">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold">Application web de partage sécurisé de fichiers</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Projet full-stack permettant de gérer l’upload, le partage et le téléchargement de fichiers avec une logique d’authentification, de contrôle d’accès et de suivi des actions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Docker', 'PostgreSQL', 'Redis'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">{tag}</span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <h3 className="mb-5 text-xl font-semibold">Fonctionnalités</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {projectFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-300">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-teal-300">Compétences</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Stack technique</h2>
            <p className="mt-5 leading-8 text-slate-400">
              Un socle technique adapté à un stage développeur : création d’interfaces, manipulation de données, API REST, environnement back-end et déploiement local avec Docker.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 shadow-lg shadow-slate-950/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
              <Briefcase className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-400">2023 — Antananarivo</p>
            <h3 className="mt-2 text-2xl font-semibold">Conseiller client technique — Webhelp</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Assistance technique pour des problèmes de connexion Internet, analyse des demandes, accompagnement client et communication claire auprès d’utilisateurs non spécialistes.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
              <Database className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-400">2021–2022 — Antananarivo</p>
            <h3 className="mt-2 text-2xl font-semibold">Conseiller client back-office — Teleperformance</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Traitement et validation de dossiers clients, mailing, renseignement de documents et respect des procédures opérationnelles.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400 text-slate-950">
                <GraduationCap className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-teal-300">Formation</p>
              <h2 className="mt-3 text-3xl font-bold">Licence en génie logiciel</h2>
              <p className="mt-3 text-slate-400">Université E-Media — Antananarivo, 2023–2025</p>
            </div>
            <p className="leading-8 text-slate-300">
              Formation orientée bases du développement logiciel, programmation web, bases de données, algorithmique et développement d’applications. Objectif : évoluer rapidement comme développeur polyvalent, capable d’apprendre, d’utiliser les outils IA et de contribuer à des projets web ou mobiles.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rivotiana Philippe Randriatsarafara — Portfolio développeur</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-teal-300" href="mailto:lembarakah@gmail.com">Email</a>
            <a className="hover:text-teal-300" href="https://github.com/mbaraka-cloud/secure-file-app" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}