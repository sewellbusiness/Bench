import { Layers, Code2, Database, Wrench } from "lucide-react";
const categories = [
  { icon:Layers,   name:"Architecture & Systems", skills:["System architecture and design","Database design and modeling","Requirements gathering and workflow analysis","Business process understanding — how departments and roles actually operate","End-to-end system thinking — database to interface"] },
  { icon:Code2,    name:"Development",            skills:["PHP, JavaScript, Node.js","HTML, CSS, web interfaces","AJAX, REST APIs","AI integration — Claude API, custom workflows"] },
  { icon:Database, name:"Database",               skills:["MySQL (primary, 20+ years production)","Microsoft SQL Server","Oracle (enterprise, FDA-regulated environments)","Query optimization, schema design, migrations"] },
  { icon:Wrench,   name:"Other",                  skills:["Stripe payment integration","Data scraping and ETL pipelines","Role-based security systems","Git version control"] },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-orange mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sewell-dark">What I Bring</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => { const Icon = cat.icon; return (
            <div key={cat.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-sewell-orange/10 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-sewell-orange" /></div>
              <p className="text-sm font-display font-semibold text-sewell-dark uppercase tracking-wide mb-4">{cat.name}</p>
              <ul className="space-y-2">{cat.skills.map(s => <li key={s} className="text-sm font-body text-sewell-muted leading-relaxed">{s}</li>)}</ul>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}
