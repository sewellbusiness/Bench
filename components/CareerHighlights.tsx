const highlights = [
  { company:"ChironVision",      role:"Database Administrator",       type:"work",      body:"Managed Oracle database environments for a pharmaceutical company running FDA-regulated data. Worked directly alongside Big Six accounting firms and enterprise ERP consultants in a production environment where data integrity was non-negotiable." },
  { company:"BaaN",              role:"Senior Technical Consultant", type:"work",      body:"Recruited directly by BaaN to lead database operations across their Western America consulting practice. Managed enterprise ERP database environments, provided rapid-response troubleshooting across approximately 20 client accounts, and mentored a team of 15 IT consultants. Primary clients included Fortune 500 manufacturers and aerospace companies." },
  { company:"Sitelite",          role:"Technical Account Manager",    type:"work",      body:"Provided remote management services for customer web infrastructure — monitoring and maintaining web servers, databases, and custom processes to ensure continuous uptime. Served as the bridge between sales and potential clients, translating technical capabilities into business value and coordinating internally to ensure delivery matched what was promised." },
  { company:"Onyx Acceptance Corp", role:"Database Administrator",    type:"work",      body:"Brought in to replace a failing FoxPro system that had hit its limits. Worked directly alongside VB developers building the replacement — designing and implementing stored procedures that powered the new system and building out role-based security architecture. Managed the Microsoft SQL Server infrastructure underpinning consumer auto loan operations in a financial services environment where data integrity and uptime were non-negotiable." },
  { company:"Langston University",  role:"BS, Business Administration", type:"education", body:"Currently a pioneer candidate for Langston's inaugural Master's program — the first of its kind at the university." },
  { company:"Tulsa Community College", role:"AS, Liberal Arts · AS, Entrepreneurship", type:"education", body:"" },
];
export default function CareerHighlights() {
  return (
    <section className="bg-sewell-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-orange mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sewell-dark">Career Highlights</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-sewell-orange/20 hidden sm:block" />
          <div className="space-y-10">
            {highlights.map((h,i) => (
              <div key={i} className="relative sm:pl-12">
                <div className="absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-sewell-orange hidden sm:block" />
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <span className="text-lg font-display font-semibold text-sewell-dark">{h.company}</span>
                  <span className={`text-xs font-semibold font-display px-3 py-1 rounded-full ${h.type==="education" ? "bg-blue-50 text-sewell-blue border border-blue-100" : "bg-gray-100 text-gray-500 border border-gray-200"}`}>{h.role}</span>
                </div>
                {h.body && <p className="text-base font-body text-sewell-muted leading-relaxed">{h.body}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
