"use client";
import { useEffect, useRef } from "react";
interface CS { num:string; title:string; folio?:boolean; problem:string; built:string; result?:string; stack:string[]; demonstrates:string; }
const cases: CS[] = [
  { num:"01", title:"Folio: Multi-Entity Financial Platform", folio:true, problem:"Managing finances across multiple entities — personal accounts, business operations, investments, loans — typically requires separate tools that don't talk to each other. For individuals and small enterprises operating across both personal and business contexts, nothing on the market handled the full picture under one roof.", built:"Folio is a multi-entity financial platform built under Sewell Labs that supports both personal and enterprise workspaces under a single user account. The personal workspace handles transaction tracking, loan amortization, bank imports, and receipt processing through a custom transaction engine that validates, deduplicates, applies rules, and routes low-confidence items to a review queue. The enterprise workspace handles multi-entity accounting with full journal entry support. Both workspaces share a unified account architecture while maintaining complete data separation.", stack:["Node.js","PostgreSQL","Claude API","Custom transaction engine","Bank import pipeline","Receipt parsing"], demonstrates:"Product architecture at the system level — data modeling, workflow design, AI integration, and the kind of business logic that only comes from understanding how financial operations actually work, not just how to write code." },
  { num:"02", title:"RV Dealership Management System", problem:"A multi-location RV dealership was running on disconnected manual processes — sales staff tracking customer interactions on paper, finance operating inefficiently, parts managed separately with no unified system. Three locations, roughly 50 staff, no single source of truth.", built:"A complete dealership management platform built from the ground up after spending time with each department understanding how they actually worked. The internal system handled sales CRM with call sheets and interaction history, a rebuilt finance workflow with complex contract generation printed directly from system data, and a parts department POS system. Alongside the internal platform, a public-facing inventory website pulled live data from the same system — allowing sales staff to photograph units and publish them directly to the site.", result:"The public inventory site reached Alexa top 1,000 ranking — meaning significant measurable traffic at a time when that metric carried real weight. The dealership ran on this system across all three locations for the duration of my involvement.", stack:["PHP","JavaScript","MySQL","AJAX"], demonstrates:"End-to-end thinking — internal operations and public-facing product unified by the same data layer. Requirements gathering across departments and roles before a single line of code was written." },
  { num:"03", title:"Adult Education Management System", problem:"An adult education department managing multiple programs — ABE, GED, and college-level coursework — had no unified system to track attendance, enrollment, student progress, or degree requirements.", built:"A full department management platform handling all programs under one roof. The system tracked attendance and enrollment, and followed each student's college credit accumulation against their specific degree track — surfacing exactly what requirements remained at any point. Role-based login ensured staff accessed only what their position required. Printable reports handled administrative needs without manual assembly.", stack:["PHP","JavaScript","MySQL","AJAX"], demonstrates:"Institutional software built for real operational dependency — not a demo, not a prototype. Real staff, real students, real compliance requirements. The kind of system where accuracy isn't optional." },
  { num:"04", title:"ERP Software Modification Tracking System", problem:"A large pharmaceutical company implementing an enterprise ERP system had no reliable way to track software modifications, bugs, and issues across the project. A massive spreadsheet was being maintained manually and printed weekly for a steering committee — tedious, error-prone, and impossible to filter or query meaningfully.", built:"The spreadsheet was a symptom of a process that needed a real solution. Importing the data into a proper database with form-based entry eliminated the manual maintenance problem entirely. An intranet site gave the steering committee direct access — filtering, viewing, and inputting their own issues without waiting for a weekly printout. A broken weekly ritual became a live system everyone could use independently.", stack:["Legacy database and intranet tooling"], demonstrates:"The instinct that has defined my career — recognizing when a process needs to be rebuilt, not just maintained, and knowing how to do it." },
  { num:"05", title:"Fantasy Sports Portal", problem:"Commercial fantasy sports platforms don't work for every group or environment. Some communities need something self-contained, fully controlled, and built specifically for how they operate.", built:"A full fantasy sports portal built from scratch, handling league management, real-time scoring, trades, and in-platform chat. To feed the scoring system, I built a custom data mining pipeline that automatically pulled and normalized current player statistics, keeping the platform accurate without manual updates. The entire system ran on available hardware, serving an active user base across multiple seasons.", stack:["PHP","JavaScript","MySQL","AJAX","Custom data pipeline"], demonstrates:"Consumer-facing product thinking alongside backend data engineering — not just a user interface but a full system with automated data acquisition feeding it. Built resourcefully under real constraints with no room for shortcuts." },
];
function Card({ c, i }: { c:CS; i:number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.animation=`fadeInUp 0.7s ease forwards`; el.style.animationDelay=`${i*0.08}s`; obs.disconnect(); } }, { threshold:0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [i]);
  return (
    <div ref={ref} style={{ opacity:0 }} className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 md:p-10 ${c.folio ? "border-l-4 border-l-sewell-orange" : ""}`}>
      <div className="flex items-start gap-4 mb-6">
        <span className="text-xs font-semibold font-display text-sewell-orange pt-1">{c.num}</span>
        <h3 className="text-2xl font-display font-bold text-sewell-dark leading-snug">{c.title}</h3>
      </div>
      <div className="space-y-5">
        {([["The Problem",c.problem],["What I Built",c.built],...(c.result?[["The Result",c.result]]:[])]) .map(([label,text]) => (
          <div key={label as string}>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-muted mb-2">{label}</p>
            <p className="text-base font-body text-sewell-text leading-relaxed">{text}</p>
          </div>
        ))}
        <div className="flex flex-wrap gap-2 pt-1">{c.stack.map(s => <span key={s} className="text-xs font-semibold font-display bg-gray-100 text-gray-500 border border-gray-200 px-3 py-1 rounded-full">{s}</span>)}</div>
        <div>
          <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-muted mb-2">What It Demonstrates</p>
          <p className="text-base font-body text-sewell-text leading-relaxed">{c.demonstrates}</p>
        </div>
      </div>
    </div>
  );
}
export default function CaseStudies() {
  return (
    <section id="work" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-orange mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sewell-dark">Selected Projects</h2>
        </div>
        <div className="space-y-8">{cases.map((c,i) => <Card key={c.num} c={c} i={i} />)}</div>
      </div>
    </section>
  );
}
