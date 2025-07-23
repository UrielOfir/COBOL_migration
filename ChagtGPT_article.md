# Migrating Core Banking from Mainframe (COBOL) to Modern Architectures

## Introduction & Background

Core banking systems in banks have long relied on IBM z/OS mainframes running COBOL-based batch and transaction applications due to their reliability, massive I/O capacity, and mature ecosystem. In fact, even today an estimated ~80% of corporate data remains on mainframes[1]. However, decades of accumulated technical debt (complex monolithic code, aging workforce, rising maintenance costs) have driven banks to consider modernization. Historical experience has shown full rip-and-replace projects are extremely risky: for example, Citibank spent over $1 billion across multiple failed attempts to replace its mainframe core[2]. COBOL developers are aging out (few new grads learn COBOL[3]), making long-term reliance on pure legacy untenable. Thus banks today carefully evaluate when and how to migrate to modern architectures without disrupting mission-critical operations.
## Why COBOL/Mainframes Persist

Mainframes remain dominant in banking largely because they excel at high-volume transaction processing, batch jobs, security and uptime. As one analysis notes, mainframes offer “cost effectiveness of [their] massive I/O capabilities” and enable banks to consolidate workloads, saving on licensing and energy costs[1]. Their track record of near-continuous availability, built-in disaster recovery, and secure COBOL/CICS/IMS stacks means banks can’t easily justify moving without strong incentives. However, the balance is shifting: mainframe ownership incurs ongoing costs for hardware, software licenses, and specialized staff, whereas modern cloud platforms use commodity hardware and a larger talent pool. Industry surveys have found migrating off mainframes can cut operating costs by 60–70%[4], and reduce maintenance/license fees. For example, one bank reported >75% annual cost savings by rehosting its COBOL workload on Windows via Micro Focus tools[5]. These economics, coupled with digital banking demands (real-time services, APIs, mobile), drive the push to modernize.
## Global & Israeli Modernization Trends (2020–2025)

In the past few years (2020–2025) banks worldwide have accelerated core modernization initiatives. A 2023 industry survey found 95% of large organizations are moving some mainframe workloads to cloud or distributed platforms, averaging 37% of workloads migrated off main[6]. Nearly all banks now plan modernization: Thought Machine/IDC report that 98% of banks intend to upgrade their core systems within 3 years[7]. This reflects competitive pressure from fintechs and regulators demanding agility. At the same time, 90% of banks still regard mainframes as “essential” for their business due to their security, reliability and performance[8]. In practice, most banks choose a hybrid path: integrating legacy with new cloud-native services.
### Israeli Context

In Israel, regulators have recently enabled core modernization. In June 2022 the Bank of Israel (BoI) lifted an old requirement to keep core systems and data on-premises, formally allowing banks to host “נתוניו, מערכות הליבה או תשתיות המחשוב” (core data, systems or infrastructure) on public clouds (AWS, Azure, GCP, IBM, Oracle)[9]. The change (BoI Circular NBT 362) treats cloud use for core banking as outsourcing, imposing rigorous due-diligence and security requirements[10]. Contracts must specify cloud data locations, participation in cyber exercises, and emergency access controls[11]. This regulatory shift – aligned with Israel’s own Nimbus government cloud strategy – is seen as “dramatic”, enabling banks to deploy cutting-edge infrastructure, reduce staffing, and cut costs[12][13]. For example, one report notes cloud migration “allows the banks to use more advanced third-party services, reduce workforce, and save expenses”[13]. Already the digital-only Israeli bank OneZero has secured BoI permission to run its core entirely on AWS in Europe[14].
### Global Case Study (Deloitte – Israeli Bank)

Illustrating a full-replacement approach, Deloitte described an "Israel-based global bank" replacing its outdated core with a cloud-native digital banking platform[15]. The new solution enabled 24/7 real-time processing and modern features (mobile authentication, OCR, etc.), while yielding “millions of dollars in IT maintenance cost savings per year”[16]. This transition allowed the bank to rapidly launch new products and compete with fintech rivals. Such cases highlight that when legacy platforms become “untenable” (costly and inflexible), a radical rebuild can pay off[17] – albeit with high project risk.
## Migration Strategies: Incremental vs. Full Replacement

Banks generally choose between phased (incremental) modernization and big-bang (full replacement) strategies – or a combination. A hybrid “strangler” pattern is common: keep the existing COBOL core running while slowly migrating functionality to new services. The trade-offs are well-documented[18]. Incremental upgrades (greenfield pilots, microservices APIs, facade layers) are lower-risk and allow continuous operation, but they extend dual environments and require careful integration. Full replacement promises a clean break to new architecture, but involves massive data migration and organizational change, as seen in high-profile failures (discussed below). One analysis breaks modernization into the “5 R’s” of migration[19]:
- **Rehost/Re-platform (Lift & Shift)**: Move COBOL workloads to a non-mainframe environment (e.g. AWS with Micro Focus runtime) with minimal code change[20]. This is quick and minimally invasive, often yielding immediate cost savings.
- **Refactor/Rewrite**: Convert COBOL applications to a modern language (Java, C#, etc.) or microservices architecture[20]. This is complex but enhances agility and maintainability long-term.
- **Replace/Repurchase**: Adopt a packaged modern core banking system (e.g. Temenos, Finastra, Thought Machine Vault) and migrate data into it. This can fast-track new features but risks vendor lock-in and lengthy implementation.
- **Retire**: Decommission obsolete modules and consolidate functionality (often feasible only for minor apps or batch jobs).
- **Retain**: Keep certain legacy components (perhaps in mainframe) if no viable alternative exists – effectively delaying migration on those parts.
Each approach has tradeoffs[20]. For example, refactoring yields flexibility but high upfront effort and risk, whereas rehosting delivers faster ROI but may lock in old logic. A cloud-native wrap (e.g. exposing CICS transactions as APIs) is another incremental tactic, often used before deeper refactors. The “Strangler Fig” pattern – where new services gradually supplant old functionality – is widely recommended for large cores. In practice, major banks often mix approaches: for example, RBC (Royal Bank of Canada) initially considered a full Temenos replacement but ultimately incrementally modernized by adopting Infosys Finacle for new services and building API integrations around its COBOL core[21]. Conversely, JPMorgan Chase is moving aggressively toward a greenfield solution: it launched a cloud-native consumer bank (Chase UK) on Thought Machine’s Vault core, then plans to extend that platform to its U.S. operations in phases[22][23].
## Technical Comparison: Legacy vs. Modern Architectures

Classic core banking runs on monolithic mainframes: COBOL/CICS batch and on-line transactions, IMS/DB2 or VSAM data stores, and tightly-coupled codebases that process overnight batch cycles. These systems “often rely on batch processing, updating transactions in overnight cycles rather than in real time”[24], making true 24/7 digital services challenging. By contrast, modern architectures use cloud-native microservices: stateless services in containers, decoupled data stores (SQL/NoSQL), and continuous integration pipelines. New designs favor asynchronous messaging, real-time streaming (Kafka/Confluent), and RESTful APIs. For example, a modern core might implement an account service, a balance service, etc., each deployable independently and scalable elastically. Key technical differences include:
    • Processing: Mainframes are optimized for high-throughput batch and transactional I/O; new systems aim for low-latency, on-demand processing. Legacy cores are typically “not built for the open, connected financial ecosystem” of mobile and open banking[25].
    • Language/Runtime: COBOL/PL/I on z/OS vs. Java/.NET/Python on Linux containers or serverless. Migrating often involves converting business logic or wrapping it in new languages.
    • Integration: Legacy tightly integrates using CICS, MQSeries, or proprietary interfaces. Modern systems use APIs and message buses (Kafka, RabbitMQ) for interoperability across cloud services.
    • Deployment: Monolithic mainframe deployments with scheduled downtime, vs. continuous deployment in cloud with blue/green deployments and auto-scaling.
These technical shifts yield benefits (dynamic scalability, dev agility, ecosystem integration) but also require retooling: COBOL developers must learn distributed systems, CI/CD, and cloud security practices. Notably, modern cores (e.g. Thought Machine Vault, Mambu) are often API-first and leverage technologies like Kubernetes and Spring Boot, requiring entirely different skillsets.
## Case Studies (Successes and Failures)

### Royal Bank of Canada (RBC)

Originally with an aging monolithic core, RBC avoided a risky "big bang" cutover. Instead it adopted a “build and partner” strategy[21]. RBC selected Infosys Finacle for new retail functions and Volante VolPay for payments, then developed internal APIs to bridge old and new components. This incremental approach improved agility (e.g. faster product rollout via API-led integration) without disrupting legacy operations[21][26]. RBC’s experience highlights investing in middleware and a unified development environment to tie COBOL and new Java services together.
    ### JPMorgan Chase

In 2021 JPMorgan announced it would eventually replace its U.S. consumer core with Thought Machine's Vault, a cloud-native system[22]. It piloted Vault by launching Chase UK (a new digital bank) on that platform, then plans to migrate U.S. accounts in phases[27]. This “greenfield first, then migrate” approach let JPMorgan validate the new core in a smaller scope before undertaking the massive conversion at scale[27]. It exemplifies a hybrid strategy (a controlled pilot leading to full replacement) and signals confidence in cloud-native futures.
### Banco Guayaquil (Ecuador)

Faced with over 13,000 applications on IBM mainframe, Banco Guayaquil opted to rehost its entire core using x86 servers. Using Rocket Software’s rehosting platform (Enterprise Server), it migrated all COBOL apps off the mainframe. The result was dramatic: 80% lower infrastructure costs (smaller data center, less energy) and 25% faster overnight batch processing, with zero downtime during migration[28]. This case shows how modern platforms can replicate mainframe reliability while cutting costs[28]. The key was lifting the entire workload in one sweep and preserving exact functionality (no-code-change rehosting).
### ING Bank (Europe)

ING undertook a major refactor and rewrite of certain COBOL applications. A case study (via SoftwareMining) reports that ING migrated 1.5 million lines of COBOL/CICS/DB2 code to Java[29]. They ran exhaustive tests (comparing outputs of 2 billion transactions) to ensure parity, and phased in the new Java apps alongside legacy components. After cutover (running on Linux since Feb 2022), ING achieved substantial benefits: “substantial cost reduction in licensing and runtime expenses” and a move to a larger, more maintainable developer pool[30]. Their success underscores the importance of tool-assisted code conversion and rigorous testing in refactoring projects.
### TSB Bank (UK) – Failed Migration

By contrast, the 2018 TSB fiasco is a cautionary tale. TSB migrated its entire customer base to a new Oracle banking system, but poor data handling and testing led to system outages affecting all ~5.2 million customers. Regulators eventually fined TSB ~£50–62 million[31][32]. The debacle – with customers locked out for weeks, over £400 million in total costs, and the CEO’s resignation[31] – highlights the extreme risk of big-bang core swaps. It emphasizes that testing and risk management are paramount; TSB underestimated the complexity of its data migration and lost control of operational risk[31]. Many banks cite TSB when arguing for incremental or very carefully staged moves.
    ### Citibank (Historical)

As noted, Citibank's repeated attempts to replace its "Cosmos" core all stalled or were aborted[2]. Despite billions spent, the new systems could never match the legacy’s functionality and flexibility (which had evolved since the 1970s). This reinforces the lesson that any new solution must fully capture existing business rules – a daunting task for mature cores[2].
## Costs, ROI and Trade-offs

### Cost of Legacy vs. Modern

Maintaining a legacy mainframe entails high fixed and variable costs: specialized hardware leases, software licensing, and very high-caliber COBOL/CICS talent (often commanding high salaries). By contrast, modern platforms typically use commodity servers or public cloud (lower hardware costs) and pay-as-you-go licensing, with a larger pool of Java/.NET developers. Surveys corroborate big savings: organizations modernizing their mainframes report average $25 million/year in cost reductions[33], and studies estimate 60–90% cuts in operating expenses[4][34]. For example, one bank’s conversion claimed “up to 90% savings on operating costs” after automated modernization[35]. The ING case noted “substantial cost reduction in licensing and runtime expenses”[30]. Specific vendor claims include >75% annual ops cost cuts[5] or 80% lower infrastructure spend[28].
However, modernization requires significant upfront investment: development resources, new licenses or cloud credits, and potentially redundancy during parallel running. Total Cost of Ownership (TCO) analyses must account for migration effort (often 1–3+ years) versus ongoing savings. Notably, banking leaders advise viewing modernization as a business transformation, not just an IT upgrade, ensuring benefits (agility, new revenue) offset migration costs[36].
### Trade-offs and Risk

The promise of modernization comes with tradeoffs. Key risks include project overruns, data migration errors, and talent gaps in new technologies. Legacy devs may resist change, and banks often rely on outside partners (74% hire external firms[37]). Regulatory and security constraints can also slow cloud moves. On the flip side, benefits include faster product rollout, easier compliance updates, and improved customer experience[36]. Importantly, many experts warn that inaction is risky: “for mission-critical systems, the greatest risk is inaction”[38]. With cyber threats evolving, leaving older platforms unpatched or unsupported may expose compliance and security vulnerabilities.
## Key Vendors, Toolchains & Frameworks

### Cloud Provider Platforms

All major cloud providers now offer mainframe migration suites. AWS’s Mainframe Modernization service (launched 2021) lets banks modernize on AWS by refactoring (Java conversion via AWS Blu Age) or replatforming (COBOL/PL/I on Micro Focus runtime)[39]. AWS also provides data replication tools (with Precisely and BMC) and automated testing services. AWS claims these tools “reduce operating costs” by removing mainframe hardware/staff[40]. Azure and Google Cloud have similar programs (often in partnership with Micro Focus or third-party integrators), though vendors like AWS have led in marketing.
### COBOL Platforms

Micro Focus (now OpenText) remains a heavyweight, offering COBOL compilers and Enterprise Server runtimes for Windows, Linux, or Kubernetes. Many banks simply rehost COBOL on these platforms (lift-and-shift), as seen with the AG Insurance case[5]. Micro Focus tools can integrate COBOL code with modern tech via APIs and containers (e.g. using Visual COBOL, Enterprise Developer, and Enterprise Analyzer). IBM also supports modernization with tools like IBM Z Open Editor, IBM Cloud Pak for Applications (to run z workloads on OpenShift), and exposure of CICS/IMS via API gateways. Rocket Software (now part of HCL) provides mainframe emulation and modernization tools – notably, Banco Guayaquil used Rocket’s x86 rehosting solution[41][28].
### Conversion/Automation Tools

Companies like Amdocs/Astadia offer automated refactoring platforms (e.g. Astadia FastTrack) promising to convert COBOL to Java/.NET with high automation[42]. Vendors like Heirloom Computing claim full-stack JVM-based conversion. The ING case used SoftwareMining’s automated converter[29] to transform COBOL/DB2 to Java, highlighting the need for deep testing. These tools aim to accelerate “Rewrite/Refactor” migrations by preserving business logic while changing languages.
### Core Banking Products

New-generation core banking vendors are also part of the landscape. Cloud-native cores like Thought Machine Vault, Mambu, Temenos Transact (with cloud editions), or Finastra Fusion are being adopted by banks as part of replacement strategies (e.g. RBC’s Finacle, JPM’s Vault). While not COBOL-centric, they are critical enablers of core migration roadmaps. Integration platforms (e.g. Apigee, MuleSoft) and container orchestration (Kubernetes, OpenShift) form part of the new stack.
### Consulting and Ecosystem

System integrators (Accenture, Deloitte, EY, Cognizant, Capgemini) offer Mainframe Modernization Services and frameworks (often building on AWS/Azure migration accelerators). They bring project management, testing factories, and regulatory guidance. For example, Amdocs/Astadia touts 40–80% cost savings and 90% regression testing automation across hundreds of projects[43][42]. Banks often assemble multi-vendor ecosystems: a cloud provider, a COBOL conversion specialist, an integration platform, and compliance advisors.
## Key Risks, Benefits & Trade-offs

- **Benefits**: Modernization can unlock real-time banking, faster innovation, and lower costs. Banks report improved speed-to-market for new products and a “90+% increase in innovation capacity” post-migration[35]. Agility gains (60% faster release cycles) and enhanced developer productivity are often cited[34]. The Kyndryl survey found modernizing organizations realized ~9–11% profit growth and averaged $25 million/year savings[33]. In the Israeli context, cloud adoption is expected to enhance digital services (e.g. omnichannel, analytics) while aligning with government initiatives (AI, security).
    - **Risks/Trade-offs**: The main downside is project risk: legacy bankers often say "the bank that moves its core cannot make mistakes". Migration carries the danger of downtime, data loss, or functional gaps (as TSB painfully demonstrated[31]). Complex data models (customer records, transactions) must be ported without error. Running dual systems can double maintenance effort temporarily. Security is also a concern: the Kyndryl survey reported that 49% of organizations cite cybersecurity as a top consideration in modernization[44]. In practice, however, many experts note that public cloud security can meet or exceed on-prem standards (AWS and Azure are FedRAMP and ISO-certified), and major institutions like the CIA use AWS[45]. The challenge lies in correctly implementing security (identity management, encryption, monitoring) in the new environment. Israeli regulators stress that even if data moves offshore, banks remain fully responsible for its protection[45][10].
- **Skill and Change Management**: A critical risk is underestimating the organizational impact. Legacy teams must be retrained or augmented with cloud/DevOps talent. As one vendor notes, modernization can attract “a new generation of developers” and break down siloes[46], but only if executed holistically (involving business, IT, and operations). Cultural change is key: incremental approaches allow gradual learning, while full rewrites require large-scale skill transitions. Most banks engage external specialists to fill gaps (74% plan to use outside firms[37]).
- **Regulatory/Compliance**: In banking, any architecture change is scrutinized by regulators. Banks must ensure continuity of customer access, accurate records, auditability, and compliance with AML/KYC rules throughout migration. In Israel, this includes adhering to BoI directives on outsourcing/cloud (e.g. Nos. 359A, 362)[47], as well as data protection laws (Israeli Privacy Protection Law) and global standards (e.g. GDPR for EU data). Contracts with cloud providers must enforce encryption, data residency (as needed), and audit access[10][11]. Notably, with BoI’s new rules, banks must now treat cloud services as “outsourcing with material impact”, so supplier due-diligence, audits, and disaster recovery testing are mandatory[10]. This regulatory rigor adds overhead, but also means any modernized core can ultimately meet or exceed the security and compliance posture of its predecessor.
## Implications for COBOL Developers and Decision-Makers

For COBOL developers and architects at Bank Mizrahi-Tefahot (or any bank), modernization is as much about strategy and risk management as code changes. Devs should become conversant with both worlds: understand how their COBOL jobs and CICS transactions map onto new services. They must collaborate with business and IT leadership on choosing the path (e.g. which modules to rewrite vs. rehost). Learning modern practices (APIs, unit testing frameworks, version control, container platforms) will be critical. At the same time, communicating the strengths of the legacy system (its reliability and feature coverage) helps set realistic roadmaps.
**Next Steps**: Weigh business needs vs. technical debt: conduct an application portfolio assessment, identify candidates for cloud/RPA/Microservices, and pilot on non-critical segments. Use vendor tools (IBM Zowe, Micro Focus Enterprise, AWS Blu Age, etc.) to automate and test conversions. Engage risk/compliance teams early to align on security controls. Ultimately, modernization is not “optional” but a multi-year journey – the choice of when and how requires balancing costs, risks, and market pressures. As one expert put it: “Whether banks choose a phased hollow-out or a bold rip-and-replace, success demands an API-first, cloud-native mindset coupled with disciplined execution.”[48].
## Sources

This analysis draws on industry reports, vendor case studies, and news covering 2020–2025. Key citations include technology surveys and whitepapers[6][7][19], real-world case studies (e.g. RBC, JPMorgan, Banco Guayaquil, ING)[21][22][28][29], regulatory updates in Israel[9][10], and critiques of modernization efforts[31][2]. These provide a factual foundation for understanding the modernization landscape.

## References

**[1] [3] [4]** scholarsbank.uoregon.edu
https://scholarsbank.uoregon.edu/server/api/core/bitstreams/b58f14f9-a483-4ec2-aff0-98f8741ac473/content
[2] CitibankCaseStudy20020731.fm
https://titan.dcs.bbk.ac.uk/~gordon/se1/s8/citibank_case_study.pdf
[5] [46] AG Case Study
https://www.microfocus.com/media/case-study/ag-cs.pdf
[6] [8] [33] [37] [38] [44] Kyndryl's 2023 State of Mainframe Modernization Survey Report
https://www.kyndryl.com/content/dam/kyndrylprogram/cs_ar_as/state-mainframe-modernization.pdf
[7] [18] [21] [22] [23] [24] [25] [26] [27] [48] The Core Banking Modernization Dilemma: Incremental vs. Full System Upgrade - mobileLIVE
https://mobilelive.ai/blog/the-core-banking-modernization-dilemma-incremental-vs-full-system-upgrade
[9] [12] [13] [14] [45] בנק ישראל מבטל את הדרישה מהבנקים לאחסן את המידע והמערכות שלהם בארץ | כלכליסט
https://www.calcalist.co.il/calcalistech/article/h1k00ekbk9
[10] [11] בנק ישראל: בנקים רשאים להשתמש במחשוב ענן עבור מערכות ליבה - חדשות - law.co.il
https://www.law.co.il/news/2022/06/13/bank-of-israel-updates-cloud-computing-regulation/
[15] [16] [17] www2.deloitte.com
https://www2.deloitte.com/content/dam/Deloitte/us/Documents/process-and-operations/us-digital-transformation-hits-core-banking.pdf
[19] [20] What is Mainframe Modernization? Understanding the 5 R's of Migration
https://softwaremining.com/papers/comparison-of-COBOL-modernization-strategies.jsp
[28] [41] MAR-13487_CS_BancoGuayaquil
https://www.rocketsoftware.com/sites/default/files/customer_case_studies/pdf/files/banco-guayaquil-cs.pdf
[29] [30] COBOL to Java Banking Case Study: ING Bank's success story
https://softwaremining.com/news/ING-Bank-Mainframe-Modernization.jsp
[31] Recalling learnings from TSB’s core banking migration challenges | Celent
https://www.celent.com/en/insights/771585276
[32] TSB Bank Fined $62m for a Failed Mainframe Migration
https://futurumgroup.com/insights/tsb-bank-fined-62m-for-a-failed-mainframe-migration-a-cautionary-tale-we-can-learn-from/
[34] [35] [42] [43] Achieve Cloud Benefits with Automated Mainframe Modernization
https://www.amdocs.com/topics/use-case/automated-mainframe-modernization
[36] Regional bank turns to core platform modernization | EY - US
https://www.ey.com/en_us/insights/financial-services/regional-bank-turns-to-core-platform-modernization
[39] [40] AWS Mainframe Modernization - AWS
https://aws.amazon.com/mainframe-modernization/
[47] Israel AWS Compliance Center - Financial Services for Cloud - AWS
https://aws.amazon.com/financial-services/security-compliance/compliance-center/il/