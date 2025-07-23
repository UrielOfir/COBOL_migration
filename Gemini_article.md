Navigating the Digital Frontier: A Deep Technical Investigation into Core Banking System Modernization from IBM z/OS Mainframes and COBOL
I. Executive Summary
The global banking sector stands at a pivotal juncture, grappling with the imperative to modernize its foundational IT infrastructure. For decades, IBM z/OS mainframes and COBOL-based applications have served as the unwavering bedrock of core banking operations, renowned for their unparalleled reliability, security, and capacity to process immense transaction volumes. However, the relentless pace of digital transformation, fueled by evolving customer expectations for real-time services, hyper-personalization, and seamless digital experiences, increasingly exposes the inherent limitations of these legacy systems in terms of agility and cost-effectiveness. Modernization is no longer a discretionary IT upgrade but a strategic imperative to sustain competitiveness and ensure regulatory adherence.

Analysis of current trends (2020-2025) reveals a pronounced shift towards modern architectures, including cloud-native platforms, distributed systems, and hybrid cloud solutions. Banks are predominantly adopting incremental migration strategies, often employing dual-run validation techniques, to mitigate the substantial risks associated with large-scale transformations. While the Total Cost of Ownership (TCO) of mainframes remains a complex calculation, often underappreciated in its value generation, cloud migration introduces its own intricate and frequently underestimated hidden costs. The modernization journey is fraught with risks such as operational disruption, data integrity challenges, and critical skill gaps. Nevertheless, the compelling benefits of enhanced agility, scalability, accelerated innovation, and improved customer experience continue to drive this fundamental industry shift.

For Bank Mizrahi-Tefahot, a successful modernization trajectory necessitates a phased, meticulously risk-managed approach that is intrinsically aligned with the bank's strategic objectives. Key recommendations include a thorough assessment of the existing mainframe estate, strategic investment in talent development and upskilling, judicious leveraging of AI-powered tools for code and data transformation, and unwavering adherence to the Bank of Israel's evolving regulatory landscape, particularly concerning cloud adoption, data residency, and cybersecurity. This report aims to equip technical decision-makers, architects, and COBOL developers with the comprehensive understanding required to navigate these complex discussions and chart a future-proof course for the bank's core systems.

II. The Enduring Legacy: Mainframes and COBOL in Core Banking
Historical Context: Why COBOL and Mainframes Dominated Banking
The enduring presence of COBOL and mainframes in the financial sector is deeply rooted in their historical development and inherent design principles. COBOL, or Common Business-Oriented Language, emerged in the late 1950s with a deliberate focus on commercial, financial, and administrative applications. Its design prioritized readability and the clear expression of business logic, making it highly accessible to business-oriented programmers and suitable for complex financial calculations. Indeed, COBOL was the first programming language specifically tailored for financial transactions and interbank transfers. Over the decades, COBOL underwent significant evolution, with versions like COBOL-61 Extended, COBOL-65, and COBOL-70 introducing critical functionalities such as sorting, report writing, enhanced arithmetic, debugging capabilities, and inter-program communication. These enhancements solidified its position as a robust language for intricate business applications.   

Concurrently, mainframes began their integration into banking in the 1960s and 1970s, rapidly becoming the central nervous system for data processing and transaction management. Their architecture was engineered for high-volume, high-speed transaction processing, providing the foundational infrastructure for critical banking functions like customer account management, loan processing, and financial reporting. Mainframes excelled at handling millions of transactions daily with minimal downtime, offering unparalleled reliability and robust security frameworks essential for protecting sensitive financial data.   

The deep entrenchment of COBOL and mainframes is not merely a consequence of inertia; it stems from their foundational design principles that prioritized stability, security, and transaction integrity at a time when alternative technologies simply could not match these capabilities. These systems have consistently met the non-negotiable demands of banking for decades, establishing a proven track record of dependability. This historical context underscores the inherent resistance to change, as any replacement must demonstrate equivalent or superior capabilities in delivering certainty and reliability. The industry's cautious approach is a direct reflection of the success and critical nature of these long-standing systems.   

Current State: Mainframe Dominance and Persistence
Despite the emergence of more modern and flexible programming languages and computing paradigms, mainframes and COBOL continue to play a critical role in global finance. As of 2024, a significant 43% of international banking systems still rely on COBOL code, and an estimated 95% of all ATM transactions are powered by it. The sheer volume of COBOL code in active use is staggering, with estimates suggesting approximately 800 billion lines globally. Major financial institutions, including JPMorgan Chase, American Express, Bank of America, and Visa, continue to depend heavily on COBOL for their daily operations.   

Mainframes remain the backbone for core banking operations, demonstrating exceptional capabilities in high transaction processing, security, and continuous availability. IBM Z mainframes, for instance, are reported to process around 30 billion transactions daily and handle 87% of all credit card transactions, showcasing their critical role. Their reputation for hardened security is a significant draw, with the ability to process up to 12 billion encrypted transactions a day. Furthermore, these systems are noted for maintaining decade-long business continuity, with high availability features like IBM Parallel Sysplex ensuring continuous operation even during maintenance.   

The sheer scale of COBOL code and mainframe reliance creates a "too big to fail" scenario for modernization efforts. The operational risk of disruption often outweighs the perceived benefits of immediate, wholesale migration. This explains why incremental, low-risk approaches are overwhelmingly favored, and why a direct "rip and replace" strategy is rarely successful. Any interruption or failure in these mission-critical systems can have catastrophic consequences, ranging from severe financial losses to irreparable reputational damage. The complexity, resource intensity, and potential for disruption associated with total replacement make it a highly unpalatable choice for most financial institutions. The continued dominance is therefore not just about technological capability, but a profound risk-aversion driven by the imperative of continuous operation and data integrity.   

Table 1: COBOL and Mainframe Persistence Statistics (2024)

Metric	Value	Source
Percentage of International Banking Systems	43% rely on COBOL	
Percentage of ATM Swipes	95% rely on COBOL code	
Estimated Total Lines of COBOL Code in Use	800 billion lines	
Major Financial Companies' Daily Reliance	80% of daily transactions (e.g., JPMorgan Chase, American Express)	
Average Age of a COBOL Developer	Over 55 years	
Mainframe Transactions Processed Per Day	~30 billion transactions	
Percentage of Credit Card Transactions	87% processed by mainframes	
  
Challenges of Legacy Systems
Despite their proven track record, legacy mainframe and COBOL systems present significant challenges that increasingly hinder banks' ability to innovate and respond to market demands.

One of the most pressing issues is the skills gap and developer shortage. The average age of a COBOL developer is over 55, indicating a looming "skills gap epidemic" as this experienced cohort approaches retirement. It is increasingly difficult to locate and hire new engineers proficient in these archaic languages, including COBOL and JCL. This situation poses an "existential risk" to businesses, particularly when mission-critical systems are maintained by only a handful of developers. The aging workforce and lack of comprehensive documentation create a knowledge bottleneck. As fewer individuals understand the intricacies of these undocumented codebases, the cost and time required for any modification or integration increase dramatically, and the risk of introducing errors rises. This directly impacts a bank's time-to-market for new products and services.   

Furthermore, integration difficulties and agility constraints are significant impediments. Legacy systems make it extremely challenging to integrate modern technologies and applications that are crucial for cost control, competitive advantage, and meeting evolving customer expectations. They struggle to support the demand for real-time information and 24/7 services that customers now expect. Mainframes, by their nature, do not inherently support modern API-driven communication, often relying on batch jobs or custom middleware, which slows down automation and data access. This architectural rigidity hinders product innovation and a bank's ability to adapt swiftly to new market requirements.   

Finally, rising maintenance costs represent a substantial financial burden. Up to 70% of IT budgets in financial institutions are reportedly consumed by the maintenance of legacy systems. These traditional systems are expensive, labor-intensive, and complex to secure against modern cyber threats. The inherent complexity of historical architectures, often built through successive technological layers, makes every modification risky and costly, leading to a vicious cycle where technical debt continues to accumulate. The skills gap is not merely a staffing issue but a direct driver of these escalating maintenance costs and diminished agility. As fewer developers maintain increasingly complex, undocumented code, the effective cost per line of code rises, and the ability to innovate or respond to market changes slows dramatically. This creates a self-reinforcing cycle of technical debt accumulation, where the knowledge bottleneck makes the existing systems increasingly difficult and expensive to manage, pushing banks towards modernization not just for new features, but for sheer operational survival.   

III. Modern Architectural Paradigms for Core Banking
Cloud-Native Platforms: Principles and Benefits
Cloud-native platforms represent a fundamental shift in how applications are designed, built, and deployed, leveraging the distributed and elastic nature of cloud computing. These platforms are engineered to maximize the unique capabilities of cloud environments, offering real-time scalability, enhanced resilience, and often lower infrastructure costs compared to traditional on-premise systems. Key architectural principles underpinning cloud-native development include API-first design, microservices, and modularity, with security and compliance baked directly into the architecture rather than being bolted on as an afterthought.   

The benefits derived from adopting cloud-native platforms are substantial. Banks can achieve significantly faster product launches, substantially reduce operational costs, and deliver a superior customer experience. Furthermore, cloud-native architectures facilitate seamless integration with emerging technologies such as Artificial Intelligence (AI), real-time analytics, and blockchain, which are critical for future innovation.   

The shift to cloud-native is not merely a technical migration of infrastructure; it signifies a profound transformation in development and operational philosophy. It emphasizes agility, automation, and continuous delivery, requiring a significant organizational and cultural overhaul beyond just technical implementation. This implies a necessity for banks to invest in robust talent strategies, including upskilling existing staff to manage new platforms and embracing DevOps practices. Without these foundational organizational changes, simply "lifting and shifting" (rehosting) applications to the cloud may fail to deliver the anticipated agility and cost benefits, potentially leading to unforeseen "cloud shock" due to unoptimized resource consumption and management. The true value of cloud-native is realized when technology, people, and processes evolve in concert.   

Distributed Systems and Microservices: Technical Deep Dive
Microservices architecture is a cornerstone of modern distributed systems, designed to overcome the limitations of monolithic applications. It involves breaking down a large, complex system into smaller, independent services, each responsible for a specific business capability. These services communicate with each other through language-independent Application Programming Interfaces (APIs), such as REST or gRPC. This architectural style significantly enhances scalability, as individual services can be scaled independently based on demand, and accelerates innovation by allowing faster development and deployment cycles. It also improves system reliability by containing failures within isolated services, preventing a single point of failure from disrupting the entire system.   

Comparison: COBOL Batch Jobs on z/OS vs. Microservices on Cloud
The architectural contrast between traditional COBOL batch jobs on z/OS and modern microservices on cloud platforms is stark, particularly in their operational models and underlying assumptions.

COBOL Batch Jobs on z/OS:
Batch processing is a fundamental and highly efficient function of the z/OS operating system, designed to execute programs without direct end-user interaction. These jobs are typically scheduled to run during off-peak hours, such as overnight, when system resources are more readily available. Job Control Language (JCL) is used to define and control the operation of each batch job, specifying necessary input/output resources and managing spooled data. Data on mainframes is primarily managed through Virtual Storage Access Method (VSAM) data sets (Key-Sequenced Data Sets (KSDS), Entry-Sequenced Data Sets (ESDS), Relative Record Data Sets (RRDS)), or relational databases like DB2 for z/OS, and hierarchical databases like IMS DB. Batch programs are inherently designed to avoid concurrent user locking and waiting for real-time transaction responses, often processing large volumes of data in bulk. This architecture is predicated on the mainframe's high CPU power for mono-thread applications and efficient I/O locking mechanisms to ensure data integrity during batch runs.   

Microservices on Cloud:
The transformation of legacy batch logic to real-time microservices involves a significant re-architecture. For example, a typical mainframe retail banking application using z/OS CICS, JCL, COBOL, DB2, VSAM, and GDG files can be refactored into a microservices architecture. In this modernized setup, former COBOL programs, JCLs, and CICS transactions are often converted into single executables, commonly Java Spring Boot applications, which are then exposed via REST APIs for remote call capabilities. Data storage shifts from proprietary mainframe formats (VSAM, DB2 z/OS, IMS DB) to cloud-native databases such as Amazon Aurora (relational), or other options like Key-Value stores, NoSQL, or Graph databases, supporting various access modes. In-memory caches, such as Amazon ElastiCache, are frequently employed to optimize performance for both read and write operations in bulk and real-time modes. All deployed services are typically published into a central service directory for location lookup and seamless integration across the microservices landscape.   

Data Consistency: ACID vs. Eventual Consistency
The shift in architectural paradigms necessitates a fundamental re-evaluation of data consistency models, which is particularly critical in the financial sector.

ACID (Atomicity, Consistency, Isolation, Durability):
Traditional monolithic applications and relational databases, such as DB2 on z/OS, rely heavily on ACID properties to ensure strict correctness and reliability for every transaction.   

Atomicity: Guarantees that all steps of a transaction either succeed completely or fail entirely, preventing partial states.   

Consistency: Ensures that data remains consistent and valid according to predefined rules at the end of every transaction.   

Isolation: Dictates that concurrent transactions do not interfere with each other, appearing to execute sequentially.   

Durability: Ensures that once a transaction is committed, its changes are permanent and survive system failures.   


This strong consistency model is paramount for financial transactions where immediate and absolute data integrity is non-negotiable.   

BASE (Basically Available, Soft-state, Eventual Consistency):
Distributed microservices architectures often employ a "database per service" pattern, where each microservice manages its own data store. This approach prioritizes high availability and scalability over immediate consistency, aligning with the CAP theorem (Consistency, Availability, Partition tolerance) where distributed systems typically choose availability over absolute consistency. In a BASE model, temporary inconsistencies are allowed for a short period until the distributed data eventually resolves to a consistent state. The Saga pattern is a common design approach for managing distributed transactions across microservices, using a sequence of asynchronous local transactions. In this model, the burden of managing and reconciling temporary inconsistencies often falls on the application developers, requiring careful design and implementation of compensation logic.   

The architectural shift from COBOL batch processing on z/OS to cloud-native microservices demands a fundamental re-evaluation of data consistency models. Moving from a single, strongly consistent ACID database to distributed, eventually consistent data stores introduces new complexities in transaction management, error handling, and data reconciliation. For a COBOL developer, this represents a profound conceptual leap. Mainframe batch jobs inherently assume a consistent state before and after execution, relying on the database to enforce ACID properties. In a microservices environment, this guarantee is replaced by eventual consistency, meaning developers must design for potential temporary data discrepancies and implement application-level compensation logic (e.g., Saga patterns) to ensure overall business process integrity. This shifts responsibility for data correctness from the database engine to the application layer, necessitating new skills in distributed transaction management, fault tolerance, and event-driven architectures. The challenge is not merely how to convert the code, but how to rethink the fundamental guarantees of data integrity in a distributed environment.

Table 2: Monolithic vs. Microservices Architecture Comparison (Technical Aspects)

Aspect	Monolithic Architecture	Microservices Architecture
Architecture	Single, unified codebase	Distributed, independent services
Deployment	Entire system redeployed for updates	Individual services can be deployed independently
Tech Stack	Typically uses a single technology stack	Allows different technologies for different services (Polyglot)
Data Management	Centralized database	Decentralized, service-specific databases
Communication	Direct function calls within the codebase	API-based communication (REST, gRPC, event-driven)
Scalability	Limited; entire application must scale even if only one component needs it	Independent scaling of services; elastic scaling
Fault Tolerance	Failure in one component can disrupt the entire system	Failures contained within isolated services; minimal system-wide impact
Development Speed	Slower development and deployment cycles due to large codebase and interdependencies	Faster development and deployment due to smaller, independent services

Export to Sheets
Hybrid Cloud Solutions: Balancing Legacy and Modern
Hybrid cloud architecture has emerged as a strategic approach for financial institutions, combining elements of public cloud, private cloud, and on-premises infrastructure, often including existing mainframes. This model allows banks to strategically leverage the scalability and flexibility of cloud resources for less critical or variable workloads, while retaining core, high-volume, and highly sensitive transactions on the mainframe.   

The technical components of a hybrid cloud system typically include public cloud providers (such as AWS, Microsoft Azure, or Google Cloud Platform), private cloud environments (which can be on-premises or in vendor-owned data centers, potentially built on platforms like Red Hat OpenStack Platform), and the existing on-premises infrastructure, including mainframes. Crucially, orchestration software, such as Red Hat Ansible Automation Platform, is essential to govern how these diverse resources communicate, share data, and manage workloads across environments. Robust connectivity solutions, including VPNs, SD-WAN, and dedicated interconnects, are vital for establishing secure and high-performance links between public and private cloud resources.   

The strategic rationale for adopting hybrid approaches in banking is compelling. It is increasingly viewed as a strategic imperative, striking a crucial balance between the non-negotiable needs for security, reliability, and scalability inherent to banking, and the agility and innovation demanded by the digital era. This model enables banks to experiment with cutting-edge front-end technologies, generative AI, machine learning (ML), and advanced analytics without disrupting core banking functions that reside on the mainframe. Furthermore, hybrid cloud offers robust disaster recovery capabilities and enhances data management by integrating high-quality, high-volume mainframe data with powerful cloud analytics tools to glean real-time insights into customer behavior and improve decision-making. IBM z16 mainframes, for example, provide advanced protection by encrypting data wherever it resides – at rest, in-flight, and in use with fully homomorphic encryption.   

The increasing adoption of hybrid cloud models in banking is a pragmatic acknowledgment that a wholesale "off-mainframe" migration is often too risky or cost-prohibitive for core systems. Instead, it represents a strategic evolution where the mainframe is not retired but augmented and integrated into a broader, agile ecosystem. This shifts the mainframe from a standalone monolith to a critical, highly secure, and performant component within a distributed architecture. The mainframe's future, in this context, is not one of obsolescence but of strategic integration, leveraging its unique strengths (such as security, uptime, and transaction processing capabilities) while offloading non-core, variable, or innovative workloads to the cloud. For a COBOL developer, this implies a shift from solely maintaining monolithic applications to understanding how to expose mainframe data and logic via APIs for consumption by cloud-native services, and potentially developing new components that interact seamlessly with the mainframe.

Table 3: Mainframe Data Management (VSAM, DB2 z/OS) vs. Cloud Database Equivalents

Mainframe Data Store	Characteristics	Cloud Database Equivalent(s)	Migration Considerations
VSAM KSDS (Key-Sequenced Data Set)	Indexed sequential access by key, variable length records. Most common VSAM type.	Amazon RDS (e.g., Aurora, MySQL, PostgreSQL), Amazon DynamoDB (for NoSQL key-value needs)	Application re-architecture often required for relational DBs. Data restructuring, ensuring referential integrity. AWS DMS or partner solutions (e.g., Precisely) for full load and replication.
VSAM ESDS (Entry-Sequenced Data Set)	Sequential access, records stored in arrival order. Used by IMS, DB2, z/OS UNIX.	Amazon S3 (for flat files), Amazon RDS (for sequential processing), Amazon DynamoDB (for ordered data)	Data can be moved as flat files. Application logic needs to adapt to new sequential access patterns.
VSAM RRDS (Relative Record Data Set)	Direct access by record number, fixed length records.	Amazon RDS (e.g., Aurora, MySQL, PostgreSQL), Amazon DynamoDB (for fixed-record-size key-value needs)	Application re-architecture often required for relational DBs. Logical mapping of record numbers to new primary keys.
DB2 for z/OS	Relational database, SQL syntax, high transaction volume, ACID properties.	Amazon RDS for Db2, Amazon Aurora, Azure SQL Database, Google Cloud SQL (for relational needs)	SQL syntax largely shared, reducing rewrites. AWS DMS supports Db2 z/OS as a source. Native utilities (DB2UNLOAD, DB2IMPORT, DB2EXPORT) can be used.
IMS DB (Information Management System Database)	Hierarchical database, high performance for complex transactions.	Amazon DynamoDB (for hierarchical/document needs), Amazon Neptune (for graph data), Amazon RDS (with data restructuring)	Complex restructuring required for relational models. IMS native tools can unload data. Partner solutions for complex use cases.

Export to Sheets
IV. Core Banking Migration Strategies and Execution
Common Migration Strategies: The 6 Rs
To navigate the complexities of core banking modernization, organizations commonly employ a set of strategies known as the "6 Rs." These provide a structured framework for assessing applications and determining the most appropriate path forward. The choice among these strategies is not a one-size-fits-all decision but a strategic portfolio management exercise. For core banking systems, the "Retain" strategy with interface modernization, or "Replatform" and "Refactor" approaches, are often favored over "Rebuild" or "Rip and Replace" due to the immense risk and complexity involved, reflecting a pragmatic approach that prioritizes stability.   

Rehost (Lift and Shift): This strategy involves moving applications and their data to a modern cloud infrastructure with minimal or no modifications to the underlying code. It is often the fastest way to migrate, as it primarily focuses on replicating the existing runtime environment in the cloud. An example includes running COBOL, JCL, and CICS jobs within AWS-managed environments (such as containers or Virtual Machines) through services like AWS Mainframe Modernization (M2). While quick, this approach may not fully optimize applications for cloud-native benefits.   

Replatform (Lift, Tinker, and Shift): This strategy goes beyond rehosting by making minimal code or configuration changes to applications to enable them to run more effectively on a new cloud runtime platform. This typically involves upgrading middleware, databases, or operating layers to cloud-compatible versions. Replatforming strikes a balance between migration speed and cloud optimization. Examples include AWS Mainframe Modernization with Rocket Software or NTT DATA, which allow replatforming of COBOL and PL/I applications onto a mainframe-compatible managed runtime in the cloud with minimal source code changes, supporting both online transactions and batch jobs.   

Refactor: This strategy involves making significant changes to existing code without altering the application's external behavior, often with the goal of decomposing monolithic components or adding new business value. It requires rewriting or substantially redesigning mainframe applications to fully leverage cloud-native architectures like microservices, containers, and serverless computing. Key refactoring strategies include isolating business rules from complex code, modularizing monolithic programs into smaller, logical units, and identifying and removing dead or redundant code. AWS Blu Age, for instance, automates the transformation of legacy languages (COBOL, PL/1) into agile Java services and web frameworks.   

Rebuild/Rewrite: This is the most drastic approach, involving starting over and building a new application from scratch when the cost of replatforming or refactoring outweighs the benefits. This strategy is suitable for complex, code-heavy business processes and can enable rapid prototyping, often leveraging low-code solutions. Google Cloud Mainframe Rewrite, for example, utilizes Gemini models to transform legacy mainframe code into modern languages like Java or C#.   

Retire: This strategy involves decommissioning or shutting down applications that are no longer needed or do not provide sufficient business value.   

Retain: In this approach, applications remain on the mainframe, often due to high costs, complex dependencies, or unacceptable risks associated with migration. This strategy frequently involves modernizing interfaces and workflows to integrate the stable mainframe systems with newer applications without altering the core mainframe itself.   

For core banking, the decision is less about achieving the "most modern" architecture and more about managing risk and ensuring business continuity. This means that strategies like "Rehost" or "Replatform" (which minimize code changes) or "Retain" (with API-led integration) are often the most practical starting points. These incremental steps allow banks to de-risk the process and gain experience before attempting more disruptive "Refactor" or "Rebuild" approaches. The "6 Rs" therefore function as a risk-management framework as much as a technical one, guiding prudent modernization.

Table 4: Common Migration Strategies (6 Rs): Description, Pros, and Cons

Strategy	Description	Key Characteristics/Technical Approach	Pros	Cons	Typical Use Case in Banking
Rehost (Lift and Shift)	Move applications to cloud with minimal or no code changes.	Replicates mainframe runtime environment (e.g., containers, VMs) in cloud.	Fastest migration, low initial cost, minimal disruption to code.	Limited cloud optimization, may inherit legacy inefficiencies, potential "cloud shock" if not optimized later.	Non-critical applications, initial cloud adoption, quick datacenter exit.
Replatform (Lift, Tinker, Shift)	Minimal code/config changes to run better in cloud.	Upgrading middleware, databases to cloud-compatible versions; managed runtimes.	Balances speed and cloud optimization, preserves language/code investment.	Requires some code/config effort, may not fully leverage cloud-native benefits.	Core systems with minimal required changes, applications needing updated middleware.
Refactor	Significant code changes to utilize cloud-native features, without changing external behavior.	Rewriting/redesigning for microservices, containers, serverless; isolating business rules.	Improved scalability, resilience, maintainability, agility; full cloud optimization.	High complexity, significant code changes, requires deep understanding of legacy logic.	Applications with high business value, components needing greater agility/scalability.
Rebuild/Rewrite	Start over with new code, replacing legacy application entirely.	New development from scratch, often using low-code/no-code or modern languages.	Addresses all legacy issues, incorporates new functionalities, rapid innovation.	Most complex, resource-intensive, highest risk, potentially disruptive.	Outdated/low-value applications, new digital banking initiatives (greenfield).
Retire	Decommission or shut down applications.	Analysis of application usage and business value.	Reduces maintenance costs, frees up resources.	Loss of functionality if not replaced, potential data archiving needs.	Obsolete or redundant applications, services no longer needed.
Retain	Keep applications on the mainframe.	Modernize interfaces/workflows, integrate via APIs, leverage mainframe strengths.	Low risk, preserves existing investment, leverages mainframe reliability/security.	Limits agility for core system, continued mainframe maintenance costs.	Mission-critical core operations, highly stable systems with complex dependencies.

Export to Sheets
Incremental vs. Full Replacement ("Big Bang") Approaches
The choice between incremental modernization and a full replacement, often termed "Big Bang," is one of the most critical decisions in core banking transformation, heavily influencing risk exposure and project success.

Big Bang Approach:
This high-risk strategy involves replacing the entire mainframe system all at once, aiming for a swift solution to the problems of outdated core banking systems. While it promises a rapid cutover, this approach frequently leads to more problems than benefits. The sheer scale and complexity of replacing an entire legacy system can overwhelm resources, resulting in prolonged implementation timelines and substantial cost overruns. Critically, the risk of operational disruptions during the transition period is significantly higher, with even short periods of downtime capable of damaging customer trust and triggering regulatory scrutiny. The TSB Bank meltdown in April 2018 serves as a stark example of a catastrophic failure resulting from a complex system migration that went wrong. This incident, which locked millions of clients out of their accounts and caused widespread financial chaos, was attributed to insufficient performance testing, inadequate trial migrations, and a lack of full control and understanding of the source system. The industry has learned that a "rip and replace" strategy "almost never works" for core banking systems.   

Incremental Modernization (Progressive Modernization):
In contrast, incremental modernization is a step-by-step, iterative process that gradually updates and improves specific components of the mainframe ecosystem. This approach has emerged as the preferred solution for a significant 73% of financial institutions, enabling them to minimize risks while maximizing benefits in an increasingly competitive landscape.   

The advantages of incremental modernization are numerous:

Minimized Disruption: It significantly reduces the impact of unforeseen technical issues or compatibility problems, as changes are introduced in smaller, manageable workstreams.   

Risk Mitigation: High-risk upgrades are easier to mitigate, and potential "surprises" have a contained impact on vital business operations.   

Cost Management: It allows for more effective budget management by enabling smaller, manageable investments that deliver visible value at each stage, rather than requiring substantial upfront funding.   

Business Continuity and People Adaptation: Changes are implemented gradually, allowing employees to adapt to modern technologies and processes, minimizing the learning curve and reducing resistance or dissatisfaction.   

Improved Prioritization: Organizations can identify and prioritize the most critical areas for modernization, focusing resources where they will yield the quickest and most tangible benefits.   


This approach can involve "dual and parallel core platforms," where new customer propositions are launched on a new core, or existing customers are progressively migrated based on lifecycle events.   

The strong preference for incremental modernization over "big bang" is a direct lesson from past failures like TSB Bank. This shift reflects a move towards agile principles in core banking transformation, prioritizing continuous value delivery and risk mitigation over a single, high-stakes cutover. The complexity and criticality of core banking systems make "big bang" approaches unacceptably risky. The move to incremental is not just a tactical choice but a strategic embrace of iterative development and continuous validation, mirroring DevOps principles. This approach allows banks to build confidence, adapt to unforeseen challenges, and demonstrate value incrementally, making the modernization journey more manageable and less prone to catastrophic failure.

Table 5: Incremental vs. Big Bang Migration: Risk and Benefit Comparison

Aspect	Incremental/Phased Modernization	Big Bang/Full Replacement
Risk Level	Lower, controlled	High, potentially catastrophic
Complexity	Managed in smaller, independent workstreams	Extremely high, simultaneous tackling of multiple workstreams
Cost Profile	Costs spread out over time, smaller manageable investments, visible value at each stage	Higher upfront costs concentrated over a short period, potential for substantial overruns
Time to Value	Faster for individual components, continuous value delivery	Potentially quicker overall cutover, but often prolonged timelines due to complexity
Impact on Business Continuity	Minimal disruption, easier to mitigate issues, fallback plans more feasible	High risk of significant operational disruption and downtime, damage to trust
Employee Adaptation	Gradual adaptation to new technologies/processes, minimizes learning curve and resistance	Steep learning curve, potential for employee dissatisfaction and resistance
Typical Outcome (Success Rate)	Preferred by 73% of FIs, higher success rate, allows course correction	"Almost never works" for core systems, high failure rate, TSB Bank meltdown example
Examples	Progressive replacements, dual core, parallel core platforms	TSB Bank (failed), theoretical full system overhaul

Export to Sheets
Data Migration and Synchronization Strategies
Data is the most critical asset in banking, making its migration and synchronization arguably the most challenging aspect of core banking modernization.

Challenges:
Mainframe data is often stored in outdated formats such as VSAM (Key-Sequenced, Entry-Sequenced, Relative Record Data Sets), IMS DB, or DB2 for z/OS, which have unique structures and access methods. A significant challenge stems from undocumented business logic, where critical rules are hardcoded across COBOL programs, JCL, and batch scripts, making it difficult to identify dependencies and ensure accurate transformation. Ensuring data integrity and consistency throughout the transfer process is paramount, as even minor discrepancies can have severe financial and regulatory consequences. Furthermore, skill gaps between legacy mainframe teams and modern cloud tooling specialists can significantly slow down migration efforts.   

Tools and Techniques:
Complex Extraction, Transformation, and Loading (ETL) processes are typically involved in moving data from mainframes to cloud environments. While traditional ETL can be costly and slow , modern solutions aim to streamline this. Native mainframe utilities, such as DB2UNLOAD, DB2IMPORT, and DB2EXPORT, can be used for direct data migration. Similarly, IMS native tools can unload data from hierarchical databases. Specialized partner solutions available in cloud marketplaces, like Precisely for AWS, offer full data loads and ongoing, near real-time replication from mainframe sources (VSAM, DB2, IMS) to cloud databases. VirtualZ Computing's PropelZ, for example, streamlines VSAM to DB2 data sharing on z/OS, aiming to eliminate the inefficiencies of traditional ETL processes. For certain data types, such as VSAM KSDS and RRDS, migrating to relational databases often necessitates application re-architecture to align with new data models and ensure referential integrity.   

Dual-Run and Parallel Proving for De-risking:
A critical technique for de-risking data migration and ensuring functional equivalence is the implementation of "dual-run" or "parallel proving" strategies. This involves feeding the exact same input to both the legacy mainframe system and the newly modernized cloud system, then meticulously comparing their outputs field by field. This comparison can involve generated files, database states, or API responses, with the primary goal of building trust in the new system's accuracy. Once outputs consistently match over an extended period (days or weeks), traffic can be gradually shifted, starting with "shadow mode" (live input to both, mainframe remains authoritative) and progressing to "pilot mode" (routing a small percentage of live traffic to the new system) before full cutover. Google Cloud's Dual Run solution exemplifies this, capturing and replaying live production events from the mainframe onto the modernized cloud application and comparing outputs to verify correctness, completeness, and performance before the new application goes live.   

Data migration is not merely a technical transfer but a complex re-engineering of data models, access patterns, and consistency guarantees. The emphasis on "dual-run" and "parallel proving" signifies that data integrity and functional equivalence are paramount, often requiring a prolonged period of parallel operation to build confidence before decommissioning legacy systems. This implies that the data layer is frequently the long pole in the tent for modernization, as any inconsistency, even temporary, can have catastrophic financial and reputational consequences. Therefore, data migration cannot rely on simple ETL; it demands rigorous, real-time validation through dual-run mechanisms to ensure perfect functional equivalence between the old and new systems, a process that is both time-consuming and resource-intensive, often dictating the overall migration timeline. The "truth" of the banking system fundamentally resides in its data, not just its code.

V. Cost Analysis: Mainframe Maintenance vs. Modernization
Total Cost of Ownership (TCO) of Mainframes
A common misconception in the financial sector is that a complete migration off the mainframe is inherently the most cost-effective solution. Traditional TCO calculations often underestimate the inherent value and long-term savings that mainframes can provide, focusing narrowly on direct monetary costs.   

Software Licensing Costs: A significant portion of mainframe TCO is often attributed to software licensing. However, many vendors charge by the core, and mainframes are exceptionally efficient, capable of performing the same workload with far fewer cores than a distributed x86 server farm solution. This can lead to substantial software licensing savings on mainframes. IBM z Integrated Information Processors (zIIPs) further enhance this cost efficiency. These specialty processors are designed to offload eligible new workloads, such as Java, Python, and certain database operations (e.g., Db2 for z/OS), from general processors. By reducing the workload on general processors, zIIPs can lower the Million Service Unit (MSU) metrics used to calculate monthly license charges (MLC) for IBM software, potentially saving millions. While COBOL developer licenses might appear reasonable (e.g., $3,700), the runtime licensing structure for COBOL applications can be very expensive, sometimes reaching tens of thousands of dollars for customers.   

Energy and Space Consumption: Modern mainframes, particularly IBM z16 systems, demonstrate remarkable energy efficiency. Consolidating Linux workloads on a few IBM z16 systems, compared to running them on an equivalent number of x86 servers, can reduce energy consumption by 75%, space by 50%, and the CO2e footprint by over 850 metric tons annually. This consolidation contributes to significant operational savings.   

Staffing Costs: The aging workforce of COBOL developers, with an average age over 55, means that these are often senior and expensive engineers. The looming skills gap further drives up the cost for specialized talent required to maintain and evolve these systems.   

Value Generation: Beyond direct operational savings, modern mainframes are significant value generators. They drive a faster Return on Investment (ROI) through process improvements that streamline operations, completing tasks in minutes that might traditionally take days. Their ability to consolidate workloads from multiple platforms optimizes hardware usage, reduces infrastructure costs, and delivers scalability without significant performance degradation. Most importantly, mainframes provide mission-critical uptime, built-in redundancy, and fault tolerance, making them invaluable for organizations where continuous service is paramount. Features like pervasive quantum-safe encryption and AI-enhanced fraud detection further solidify their role in industries with stringent regulatory requirements.   

The TCO comparison between mainframes and cloud is far more complex than a simple infrastructure cost calculation. Mainframes, while having high upfront and perceived maintenance costs, offer hidden savings in software licensing (due to fewer cores and zIIP utilization), energy efficiency, and unparalleled reliability that prevents costly downtime. This suggests that a purely "cost-cutting" migration without considering these factors can lead to higher total long-term costs due to unforeseen operational disruptions and potentially increased software licensing in distributed environments. The "cost-saving secret" of mainframes lies in their extreme efficiency per unit of work and inherent resilience. This implies that a modernization business case must account for these "hidden values" of the mainframe, and that a hybrid strategy might be the most cost-effective by leveraging mainframe strengths for critical workloads while offloading others to the cloud, rather than a full migration that may incur new, unexpected costs.

Modernization Costs: Initial Investment and Hidden Costs
While core banking modernization promises substantial long-term benefits, it necessitates significant initial investment and can incur various "hidden costs" that often undermine initial ROI projections.

Comprehensive Cost Categories: The financial outlay for modernization can be categorized into three main phases :   

Pre-Migration Costs: This foundational phase includes strategic planning, comprehensive IT infrastructure assessment (hardware, software, maintenance), cloud readiness evaluations, vendor selection, and Proofs of Concept (PoCs). Diligent upfront planning is crucial, as insufficient assessment often leads to escalating costs later.   

Migration Execution Costs: These involve the actual transfer of assets, covering labor (internal and external consultants), specialized migration tools, and data transfer costs, particularly egress fees from existing systems. Application modifications (rehosting, replatforming, refactoring) also fall into this category, with the chosen migration strategy heavily influencing expenses.   

Post-Migration Costs: These transition into recurring operational expenditures, including ongoing cloud provider fees (compute, storage, network), new software licensing in the cloud, monitoring and governance tools, personnel for cloud management, and continuous staff training.   

Key Cost Drivers: The primary factors driving modernization costs include the volume and complexity of data (larger datasets increase transfer times and storage costs), the existing application portfolio and chosen modernization strategies, and the selected cloud service models (IaaS, PaaS, SaaS).   

Hidden Costs: Many "hidden costs" often stem from inadequate pre-migration diligence and can significantly impact the overall financial outcome :   

Data Egress Fees: Cloud providers typically charge for data movement, especially when transferring large datasets out of their cloud or across regions. These fees can accumulate quickly if not carefully managed.   

Application Refactoring and Reengineering: Legacy applications often require substantial modifications or complete rewrites to function efficiently in the cloud, leading to unexpected costs and delays. Choosing a cheaper rehost initially can lead to higher long-term operational costs if the application is not optimized for the cloud ("cloud shock").   

Underutilized Cloud Resources and Over-Provisioning: Organizations frequently overestimate their cloud resource needs, leading to excessive operational costs from paying for unused capacity.   

Security and Compliance Gaps: Cloud security models differ from on-premises environments. Inadequate measures can result in compliance violations and costly data breaches.   

Employee Training and Skill Gaps: Migrating to the cloud requires IT staff to acquire new skills. A lack of investment in training can slow operations and create inefficiencies, potentially necessitating expensive external consultants.   

Downtime and Productivity Losses: Unplanned downtime during migration can disrupt business operations, damage trust, and impact revenue.   

Scope Creep and Integration Costs: New requirements emerging mid-project due to insufficient initial planning, or the cost of ensuring new cloud services integrate with remaining legacy systems, can inflate budgets.   

Overlapping Services: During phased migrations, banks often incur costs for operating both old and new systems concurrently for an extended period.   

The "hidden costs" of cloud migration often undermine initial ROI projections, leading to "cloud shock" if not meticulously planned for. This underscores that a successful migration requires not just technical expertise but also sophisticated financial modeling and continuous cost optimization post-migration. The promise of cloud cost savings is often contingent on significant upfront investment in re-architecture, optimization, and talent development. Without thorough pre-migration assessment and continuous post-migration management (e.g., right-sizing, autoscaling), the perceived OpEx benefits can quickly be eroded by unexpected charges and inefficiencies. This implies that the financial justification for modernization must move beyond simple infrastructure cost comparisons to a holistic TCO model that accounts for the entire lifecycle of the new system, including the ongoing costs of cloud management and optimization.

Return on Investment (ROI) of Modernization
Despite the substantial initial investments and potential hidden costs, core banking modernization offers compelling returns on investment, driven by a combination of quantifiable financial gains and strategic benefits.

Quantifiable Benefits:
Financial institutions that have undertaken modernization journeys report significant improvements across various metrics:

Operational Efficiency: Average 40% reduction in operational costs , with some achieving 40-80% straight-through processing automation. This translates to 30-40% reduction in IT maintenance costs , 25-35% decrease in infrastructure expenses , and 40-50% improvement in staff productivity. McKinsey's Banking Efficiency Index indicates that modernized banks achieve 37% higher operational efficiency ratios.   

Agility and Innovation: Modernization leads to a 60% acceleration in new product launches , with some systems enabling 10 times faster product cycles. This supports an unprecedented pace of innovation.   

Customer Experience: Improved customer satisfaction is a key outcome. For instance, DBS Bank reported a 35% increase in customer satisfaction scores after modernization. Modern systems enable real-time access, personalized products, and seamless digital experiences.   

Risk Reduction: Modernized core platforms can reduce a bank's operational risk by up to 30%. Advanced security protocols and AI-powered fraud detection mechanisms can lead to a 47% reduction in fraud-related losses.   

Performance: Modern systems offer significantly improved system performance and responsiveness. Lloyds Banking Group, for example, reduced the income verification step in mortgage applications from days to seconds by leveraging machine learning on a modern platform.   

ROI Calculation Methodology: Beyond the classic ROI formula (Net Benefits - Total Costs / Total Costs), a rigorous methodology for banking requires integrating complementary metrics such as payback period and net present value. A comprehensive approach considers not only direct financial gains but also indirect benefits like improved organizational agility, enhanced regulatory compliance, and strengthened competitive positioning.   

Time Analysis: The realization of ROI typically unfolds over different time horizons :   

Short-term (6-12 months): Focuses on quick wins, particularly existing process optimization and automation of repetitive tasks.

Medium-term (1-3 years): Reveals structural benefits such as significant operational cost reduction or sustainable productivity improvement.

Long-term (3-5 years): Demonstrates strategic advantages like market share gains or strengthened competitive positioning.

While initial investment in modernization is substantial, the long-term ROI is driven by a combination of tangible cost reductions (operational, maintenance) and intangible benefits (agility, customer experience, reduced risk). The ability to accelerate product launches and integrate AI represents a shift from cost-saving to revenue-generating IT, making modernization a competitive differentiator. The ROI of core banking modernization is increasingly less about simply cutting IT costs and more about enabling business growth and competitive advantage. By providing agility for new product development and seamless customer experiences, modernization transforms IT from a cost center into a strategic enabler of revenue generation and market differentiation. This means the business case for modernization needs to be framed not just in terms of IT savings, but in terms of market share, customer retention, and innovation capacity.

Table 6: Mainframe TCO vs. Cloud Migration Costs: Key Factors and Hidden Costs

Category	Mainframe Cost Profile	Cloud Migration Cost Profile	Hidden Costs/Considerations
Hardware	High CapEx for purchase and upgrades, physical infrastructure, data center space, cooling.	OpEx (pay-as-you-go), no physical hardware ownership, lower data center costs.	Initial CapEx for cloud readiness (e.g., network upgrades), potential for over-provisioning if not managed.
Software Licensing	High Monthly License Charges (MLC) based on MSU, but can be optimized by zIIPs and core efficiency (fewer cores needed).	New cloud software licenses (BYOL or cloud provider licenses), potential for increased licensing complexity across distributed services.	
Mainframe core compression can reduce software costs by replacing 300+ servers with 1 mainframe. Runtime COBOL licenses can be very expensive.   

Staffing	
High cost for senior, specialized COBOL/mainframe experts (average age > 55). Skills gap drives up talent acquisition costs.   

Costs for training existing staff in cloud technologies, hiring new cloud experts.   

Skill gaps can lead to suboptimal and costlier outcomes. Need for cross-training or hybrid specialists.   

Energy/Space	Significant power consumption and cooling requirements for on-prem data centers.	Reduced energy/space footprint due to shared cloud infrastructure.	
Mainframe z16 can reduce energy by 75% and space by 50% vs. x86 servers. Cloud energy consumption is distributed but still exists.   

Downtime Risk	
Extremely low, high availability (99.99%). Built-in redundancy and fault tolerance.   

Potential for significant downtime during complex migrations if not planned rigorously.   

Lost revenue/productivity during cutover. TSB Bank meltdown shows extreme impact of failed migration.   

Data Transfer	Minimal internal data transfer costs for existing operations.	
Substantial data egress fees when moving large datasets out of existing systems/clouds.   

Data volume and complexity are key cost drivers. Need for data compression/deduplication to minimize costs.   

Refactoring/Reengineering	
Costs associated with maintaining and modifying complex, often undocumented, legacy code.   

High costs for modifying or rewriting legacy applications for cloud efficiency.   

Undocumented logic leads to unexpected dependencies and increased refactoring effort.   

Over-provisioning	
Mainframes are provisioned for peak loads, but can scale up.   

Common issue in cloud where organizations overestimate resource needs, leading to excessive bills.   

Need for right-sizing cloud instances and implementing autoscaling policies.   

Compliance	
Mainframe's robust audit and compliance tools offer a secure environment.   

Costs for specialized tools, configurations, and audits to meet cloud compliance mandates.   

Non-compliance costs (fines, reputational damage) are far higher.   

Integration	
Relies on batch jobs or custom middleware for external integrations.   

Costs for ensuring new cloud services integrate with remaining legacy systems.   

Overlapping services (paying for old and new systems concurrently) during phased migrations.   

Table 7: Quantifiable Benefits of Core Banking Modernization

Benefit Category	Specific Metric/Benefit	Source/Context
Operational Efficiency	40% average reduction in operational costs	
Industry average    

40-80% straight-through processing automation	
Industry average    

37% higher operational efficiency ratios	
McKinsey's Banking Efficiency Index    

20% improvement in employee productivity (DBS Bank)	
DBS Bank case study    

20% savings on regular computerization and development costs (Bank Leumi)	
Bank Leumi case study    

Cost Reduction	30-40% reduction in IT maintenance costs	
Industry average    

25-35% decrease in infrastructure expenses	
Industry average    

15-20% reduction in overall operational costs	
Industry average    

$1.5 billion saved in fraud prevention, trading, operational efficiencies (JPMorgan Chase)	
JPMorgan Chase AI initiatives    

Agility & Innovation	60% acceleration in new product launches	
Industry average    

10x faster product cycles	
Temenos Transact    

90% reduction in account opening time (DBS Bank)	
DBS Bank case study    

Customer Experience	Improved customer satisfaction (general)	
Industry trend    

35% increase in customer satisfaction scores (DBS Bank)	
DBS Bank case study    

Risk Mitigation	Up to 30% reduction in operational risk	
Modernized core platforms    

47% reduction in fraud-related losses	
Deloitte study    

98% accuracy in AI-driven fraud detection (JPMorgan Chase)	
JPMorgan Chase AI initiatives    

Performance	Income verification from days to seconds (Lloyds Banking Group)	
Lloyds Banking Group case study    

Unplanned ML platform downtime cut to zero (Lloyds Banking Group)	
Lloyds Banking Group case study    

VI. Key Risks, Benefits, and Tradeoffs of Modernization
Core banking modernization is a transformative journey that presents a complex interplay of risks, benefits, and inherent tradeoffs. Understanding these dynamics is crucial for informed decision-making.

Risks
The path to modernization is fraught with potential pitfalls that can derail projects and incur significant costs.

Operational Disruption: Core system changes inherently carry substantial operational risk. Even brief periods of downtime can severely disrupt customer access, erode trust, and trigger intense regulatory scrutiny. "Big bang" approaches, which attempt a full system replacement at once, significantly amplify this risk, often leading to prolonged implementation timelines, budget overruns, and unexpected technical issues. The TSB Bank meltdown serves as a stark reminder of the catastrophic consequences of such disruptions.   

Data Integrity and Consistency: Migrating vast volumes of sensitive financial data from complex, often undocumented mainframe formats presents a formidable challenge. Ensuring absolute data integrity and consistency across distributed services is paramount. The shift from strongly consistent ACID models to eventually consistent BASE models in microservices introduces new complexities, requiring careful application-level handling of temporary inconsistencies and sophisticated reconciliation processes.   

Cybersecurity: While modern cloud providers offer advanced security controls, migrating sensitive financial data to new environments necessitates a fundamentally different security posture. Inadequate security measures in the cloud can lead to compliance violations and devastating data breaches. An emerging threat is the potential for quantum decryption, which could compromise classically encrypted communications, necessitating advanced protection like fully homomorphic encryption offered by some mainframes.   

Vendor Lock-in: Moving to specific cloud providers or adopting proprietary tools can create new forms of vendor dependency, potentially limiting future flexibility and increasing long-term costs.   

Skill Gaps: A significant challenge is the mismatch in skillsets. Modern teams may lack the deep understanding of mainframe internals, while legacy teams may not be familiar with cloud tooling and modern development practices. This mismatch can significantly slow down migration efforts and lead to suboptimal outcomes.   

Unclear ROI and Budget Pressures: Modernization projects are inherently expensive, and initial costs can be substantial. The emergence of unforeseen "hidden costs" (e.g., data egress fees, over-provisioning in the cloud) can quickly inflate budgets and make it difficult to demonstrate a clear return on investment.   

Undocumented Logic: Many legacy COBOL and JCL systems suffer from a severe lack of comprehensive documentation, making it exceedingly difficult to understand the functional and technical behavior of critical business logic. This absence of documentation introduces significant risk to modernization efforts, making refactoring, dependency mapping, and ensuring functional equivalence a daunting and often prohibitive task.   

The interconnectedness of these risks is a critical consideration. For instance, skill gaps exacerbate the challenges of dealing with undocumented logic, which in turn increases refactoring costs and elevates the risk of operational disruption during migration. This highlights that modernization is not merely a technical project but a complex change management initiative demanding holistic planning across people, processes, and technology. The success of modernization hinges as much on effective change management and talent strategy as it does on the selection of appropriate technology.

Benefits
Despite the risks, the benefits of modernization are compelling and strategically vital for banks.

Agility and Faster Innovation: Modern architectures enable banks to launch new products, implement updates, and adapt to compliance changes significantly faster. This capability supports an unprecedented pace of innovation, crucial for staying competitive.   

Scalability and Resilience: Cloud-native and distributed systems allow for independent scaling of services, ensuring seamless performance even during peak transaction periods. They are designed to contain failures within isolated services, minimizing system-wide impact and enhancing overall resilience.   

Cost Reduction: While initial investment is high, modernization leads to lower infrastructure and maintenance costs in the long term. This includes optimized energy efficiency compared to traditional data centers.   

Enhanced Customer Experience: Modern systems support real-time access to information, personalized financial products, and seamless digital experiences across various channels, meeting and exceeding evolving customer expectations.   

Seamless Integration: Modern architectures, particularly those with API-first designs, facilitate easier integration with cutting-edge technologies like AI, blockchain, and advanced analytics.   

Improved Data Management and Insights: Transitioning to modern platforms enables real-time data processing and analytics, leading to improved decision-making, enhanced fraud detection, and a single, consistent source of truth for all customer and account information.   

Regulatory Compliance: Modern platforms are often built with regulatory adaptability in mind, embedding audit trails, consent management, and policy engines directly into the architecture, simplifying compliance with evolving regulations like Open Banking mandates (e.g., ISO 20022, PSD2, GDPR).   

The benefits of modernization extend beyond mere cost savings to fundamentally transform a bank's competitive posture. The ability to innovate rapidly, personalize services, and integrate emerging technologies positions banks to meet evolving customer expectations and compete effectively with agile fintechs and neobanks. The ultimate benefit is the capacity to adapt and thrive in a rapidly evolving financial ecosystem, shifting from a reactive, constrained operational model to a proactive, innovation-driven one.

Tradeoffs
The decision to modernize core banking systems inherently involves navigating a complex set of tradeoffs, where there are no universally "right" answers, but rather optimal balances based on a bank's unique context and risk appetite.

Short-term Disruption vs. Long-term Gain: Banks must weigh the initial complexity, significant costs, and potential operational disruption of modernization against the promise of long-term operational efficiency, accelerated innovation, and competitive advantage.   

Control vs. Flexibility: Retaining full, granular control over on-premises mainframes offers a sense of security and direct oversight. However, this comes at the cost of the flexibility, scalability, and agility offered by public cloud environments, which operate under shared responsibility models.   

Strong Consistency (ACID) vs. Eventual Consistency (BASE): This is a fundamental architectural tradeoff in distributed systems. Maintaining strong ACID consistency across distributed microservices can introduce performance bottlenecks and complexity, while embracing eventual consistency (BASE) requires careful application design to handle temporary data discrepancies, which is a significant paradigm shift for traditional banking systems.   

Cost of Change vs. Cost of Inaction: Banks face the dilemma of the high, often unpredictable, costs of modernization versus the escalating costs of maintaining aging legacy systems, including high maintenance budgets and the opportunity cost of missing market innovations and losing competitive edge.   

The decision to modernize is fundamentally about managing a complex set of tradeoffs, where there are no universally "right" answers. A bank must carefully weigh its risk appetite, strategic priorities, and financial capacity to determine the optimal balance between preserving the stability of the legacy environment and embracing the transformative potential of modern architectures. For Bank Mizrahi-Tefahot, this means understanding that while full cloud migration might offer maximum flexibility, it could introduce unacceptable risks or costs, making a hybrid or phased approach a more prudent and ultimately successful strategy.

Table 8: Key Risks and Mitigation Strategies in Core Banking Modernization

Risk Category	Description of Risk	Impact on Banking Operations	Mitigation Strategy
Operational Disruption	Unplanned downtime or service interruptions during migration or due to new system instability.	Loss of customer access, reputational damage, financial losses, regulatory scrutiny.	
Incremental/phased migration approach. Rigorous testing (functional, performance, security, regulatory). Robust fallback/rollback plans. Dual-run/parallel proving.   

Data Integrity & Consistency	Data corruption, loss, or inconsistencies during migration or in distributed systems.	Inaccurate financial records, regulatory non-compliance, customer distrust, fraud.	
Meticulous data cleansing and validation. Phased data migration. Dual-run/parallel proving with field-by-field comparison. Implementing Saga patterns for distributed transactions.   

Cybersecurity	Increased attack surface in hybrid/cloud environments, data breaches, compliance violations.	Financial losses, reputational damage, regulatory fines, legal liabilities.	
Built-in security and compliance in architecture. Advanced security controls (encryption, IAM, threat detection). Regular security audits and risk assessments. Adherence to BoI cybersecurity directives.   

Skill Gap	Lack of mainframe experts to maintain legacy systems, or cloud experts to manage new systems.	Slowed migration, increased costs for external consultants, operational inefficiencies, technical debt accumulation.	
Upskilling existing staff through training programs. Cross-training mainframe and cloud teams. Leveraging AI-powered tools to automate code transformation and documentation.   

Cost Overruns	Unforeseen expenses, underestimation of complexity, hidden cloud costs.	Budget depletion, project delays, negative ROI, missed strategic opportunities.	
Thorough pre-migration assessment and planning. Detailed TCO analysis considering hidden costs. Continuous cost monitoring and optimization post-migration. Phased budgeting.   

Undocumented Code	Critical business logic embedded in undocumented COBOL/JCL, making understanding and transformation difficult.	Increased refactoring time, higher risk of errors, project delays, difficulty in knowledge transfer.	
Automated documentation generation tools. AI-powered code analysis and explanation. Investing in subject matter experts (SMEs) for knowledge extraction.   

Vendor Lock-in	Over-reliance on a single cloud provider or proprietary tools.	Limited flexibility, potential for increased costs, difficulty in switching providers.	
Multi-cloud strategy. Adopting open standards and open-source technologies. Careful vendor selection and contracting.   

VII. Major Vendors, Toolchains, and Frameworks
The core banking modernization landscape is supported by a diverse ecosystem of major vendors offering specialized tools, platforms, and frameworks. A critical evaluation of their offerings provides insight into different strategic approaches.

AWS Mainframe Modernization
AWS Mainframe Modernization is a comprehensive service designed to facilitate the migration, modernization, running, testing, and operation of mainframe applications in a cloud-native, fully-managed runtime environment on AWS.   

Assess: The service offers application intelligence, knowledge, and analysis capabilities to help migration teams understand large application portfolios. This includes highlighting application dependencies and complexities, which is crucial for scoping and planning modernization projects.   

Refactor (AWS Blu Age): This solution automates the transformation of legacy programming languages, including COBOL, PL/1, NATURAL, and RPG/400, into agile Java services and modern web frameworks. It aims to preserve the original business functions while accelerating the transition to newer languages and data stores.   

Replatform (Rocket Software & NTT DATA): AWS offers replatforming capabilities through partnerships with Rocket Software and NTT DATA. These solutions enable the porting of COBOL and PL/I applications onto a mainframe-compatible managed runtime in the AWS Cloud with minimal source code changes. They support both online transactions and batch jobs, preserving the investment in the original language while modernizing the underlying infrastructure for on-demand resources and elastic scaling.   

Application Testing: The service includes features to accelerate modernization testing timelines through automation. It allows for validating functional equivalence between source applications on the mainframe and modernized target applications in the cloud, reducing effort and cost.   

Data Replication and File Transfer: AWS facilitates augmenting mainframe functions by leveraging mainframe-based data through near real-time data replication (e.g., with Precisely) and file transfer solutions (e.g., with BMC).   

AWS Transform for mainframe: This offering leverages agentic AI, trained on AWS's extensive migration experience, to accelerate mainframe modernization from years to months. It streamlines core phases, from initial analysis and planning to code refactoring and migration.   

AWS's comprehensive suite, particularly its AI-powered "Transform" and "Blu Age Refactor" tools, aims to automate and accelerate code conversion, thereby reducing manual effort and dependency on scarce COBOL skills. However, the success of automated refactoring critically depends on the quality and clarity of the original legacy code and the accuracy of the AI models. This necessitates thorough validation and human oversight from developers who deeply understand the original business logic. The role of the COBOL developer, therefore, shifts from manual translation to validating, refining, and ensuring the functional equivalence of AI-generated code, requiring continued expertise in the legacy domain to verify accuracy and handle complex edge cases. Decision-makers must understand that investing in these tools also requires investing in the human capital to effectively utilize and validate their outputs.

Micro Focus
Micro Focus is a long-standing player in the mainframe ecosystem, offering tools that primarily focus on enabling interoperability or migration within the mainframe environment or to distributed systems.

Micro Focus COBOL Conversion Tool (by Royal Cyber): This tool is designed to streamline mainframe modernization by converting Micro Focus COBOL source code and copybooks into IBM-compatible versions. This is particularly useful for enterprises aiming to migrate to IBM mainframe environments. The tool analyzes and identifies missing dependencies, verifies called programs, and generates compilation scripts, aiming to reduce manual effort and mitigate runtime errors.   

Host Access Analyzer 2.0: This asset management tool provides a comprehensive view of software deployment on host and mainframe systems. It retrieves real-time usage data to help organizations assess exposure to risk and vulnerabilities, ensure compliance with regulations, and gain insights into software usage and user configurations, thereby preparing for modernization efforts.   

Micro Focus tools often facilitate incremental modernization strategies that might retain the mainframe as a core component, rather than pushing for a full "off-mainframe" migration. This approach appeals to banks with high risk aversion or specific compliance needs that tie them to the mainframe. Their offerings enable improvements on or around the mainframe, such as upgrading COBOL versions or gaining better visibility into mainframe usage, which can optimize the performance and extend the life of existing mainframe investments without a disruptive rip-and-replace. For COBOL developers, these tools offer avenues to improve their current working environment and streamline development practices within the existing mainframe context.

IBM z/Hybrid Approaches
IBM's strategy for mainframe modernization is centered on evolving the z/OS mainframe into a central, highly integrated component of a hybrid cloud architecture, rather than advocating for its replacement. This approach leverages the mainframe's unique strengths while enabling seamless integration with modern cloud services and AI capabilities.

IBM z16 and zIIP Processors: The latest IBM z16 mainframes offer advanced security features, including fully homomorphic encryption, which protects data even when it is in use. A key element of IBM's cost-effectiveness strategy is the IBM z Integrated Information Processor (zIIP). This dedicated specialty processor is designed to operate asynchronously with general processors, offloading new workloads written in languages like Java or Python, managing containers, facilitating system recovery, and assisting with analytics. By running eligible workloads on zIIPs, banks can reduce the workload on general processors, thereby lowering the Million Service Unit (MSU) metrics that often influence software license charges, potentially leading to significant cost savings.   

watsonx Code Assistant for Z: This AI-powered tool is designed to accelerate mainframe application modernization at lower cost and risk than traditional alternatives. It can assist developers by generating code and content, streamlining the modernization process.   

Hybrid Cloud for IBM Z: IBM positions its mainframe hybrid cloud architecture as a strategic imperative for banks, balancing the mainframe's proven resilience and security with the agility and innovation of cloud computing. This model enables banks to integrate mainframe data with cloud analytics tools for real-time insights and to deploy machine learning (ML) cloud models to enhance customer experience, improve risk management, and combat fraud. IBM offers solutions to modernize and containerize legacy applications, and to run Linux on IBM Z systems, further integrating the mainframe into the broader hybrid cloud ecosystem.   

IBM's approach is not about replacing the mainframe but about redefining its role as the highly secure, resilient, and performant core of a modern hybrid architecture. By introducing specialty processors (zIIPs) to optimize costs and AI-powered tools (watsonx) to accelerate COBOL modernization on or towards the mainframe, IBM provides a compelling argument for banks to retain their significant investment while still achieving agility and innovation. This perspective is vital for COBOL developers to understand, as it suggests a future where their skills remain valuable, but are increasingly applied to integrating the mainframe with new technologies and leveraging its unique capabilities within a broader, distributed IT landscape.

Google Cloud Mainframe Modernization
Google Cloud offers a suite of solutions aimed at comprehensive mainframe modernization, covering assessment, reverse engineering, rewriting, replatforming, augmentation, and de-risking of mainframe applications.   

Mainframe Assessment Tool (MAT): Enhanced with Google's Gemini models and mainframe-specific agentic workflows, MAT helps thoroughly assess and analyze the entire mainframe estate. It generates a comprehensive knowledge base, including detailed code explanations, application logic, dependency insights, automated documentation, and generated test cases, empowering informed modernization strategy decisions.   

Mainframe Rewrite: This solution leverages Gemini models with mainframe-specific context to transform legacy mainframe code into modern languages like Java or C#. It provides an Integrated Development Environment (IDE) for developers to iteratively modernize, test, and deploy applications in Google Cloud.   

Dual Run: A critical de-risking mechanism, Google Cloud Dual Run captures and replays live production events originating on the mainframe onto the modernized cloud application. It then meticulously compares the outputs from both systems to ensure the correctness, completeness, and performance of the updated business logic throughout the modernization journey and prior to go-live.   

Mainframe Refactor: Previously known as Google Cloud G4, this solution automatically converts mainframe code to Java, preserving original functionality. Modernized applications can be deployed on Google Kubernetes Engine (GKE) or Cloud Run.   

Mainframe Connector: This tool seamlessly integrates mainframe data and applications with Google Cloud. It enables direct copying of data from mainframe data stores and datasets into Google Cloud, which helps reduce MIPS (Millions of Instructions Per Second) usage on the mainframe by leveraging cloud processing, while keeping existing mainframe applications intact. It also handles automatic conversion of codepages, data types, and encodings.   

Google Cloud's strong emphasis on generative AI (Gemini models) for assessment and code rewriting signifies a push towards highly automated, potentially faster, and more scalable modernization. The "Dual Run" capability is a critical de-risking mechanism, acknowledging the paramount importance of functional equivalence in banking migrations. Google's AI-driven tools directly target major pain points for COBOL developers: understanding undocumented legacy code and the daunting task of manual rewriting. The integration of AI aims to significantly reduce the human effort and time required for these complex tasks. Furthermore, "Dual Run" directly addresses the critical need for absolute functional equivalence in banking, providing a rigorous, automated testing framework that builds confidence in the modernized system. This approach suggests a future where AI assists COBOL developers in understanding and transforming their code, rather than replacing them, enabling a faster and more reliable transition.

Microsoft Azure Mainframe Modernization
Microsoft Azure offers a comprehensive roadmap for mainframe migration, leveraging its broad suite of cloud-native services to enable innovation and reduce overhead expenses. Azure provides elasticity, robust security, advanced analytics, and extensive integration options for AI, machine learning, and IoT.   

Assessment & Inventory Management: The process begins with understanding the current infrastructure through application discovery, dependency mapping, and infrastructure assessment. Tools like Azure Migrate, Azure Discovery Tools, and Royal Cyber's Modernization Suite are utilized for a quick and comprehensive view of the existing system.   

Migration Strategies: Azure supports various migration strategies, including rehosting (moving applications as-is), replatforming (minimal code changes for PaaS services), refactoring (dividing monoliths into microservices or containers), and rewriting/replacing (for old, low-value software).   

Code Conversion and Data Migration: This technically challenging phase involves transforming legacy codes (COBOL, Natural, PL/I) to leverage modern technologies. Automated tools like Micro Focus Enterprise Analyzer and Azure Data Factory for large data transfers are employed. The architecture often shifts towards event-driven models or RESTful APIs for long-term operation.   

Integration with Azure Cloud-Native Services: Modernized applications integrate with a wide array of Azure services, such as Azure Kubernetes Service (AKS) for container orchestration, Azure API Management for secure exposure of legacy services, Azure DevOps for CI/CD pipelines, Azure Logic Apps and Functions for serverless workflows, and Azure Synapse/Power BI for real-time analytics.   

Security, Governance & Compliance: Timely implementation of security measures is paramount. Azure-native features like Multi-Factor Authentication (MFA), Azure Active Directory (AAD), Role-Based Access Control (RBAC), encryption (in transit and at rest), and compliance policies (Azure Policy, Blueprints) are critical.   

Testing, Optimization & Validation: This phase ensures efficient post-deployment operations through performance testing, disaster recovery simulations (Azure Site Recovery), and User Acceptance Testing (UAT). Azure Advisor and Cost Analysis tools are used for continuous monitoring and resource optimization.   

Azure's approach emphasizes a comprehensive, step-by-step roadmap that integrates with its broad suite of cloud-native services, providing a full ecosystem for modernization. The partnership with Royal Cyber for automated COBOL conversion highlights the importance of specialized tooling within a broader cloud migration framework. For COBOL developers, this means not just converting code, but learning to work within a new, integrated DevOps environment that leverages containers (AKS), APIs, and serverless functions. The emphasis on security and compliance baked into the architecture is also crucial for banking. This implies a need for upskilling in a wide range of cloud-native services and development practices to fully leverage the Azure platform.

Table 9: Major Vendor Offerings for Mainframe Modernization

Vendor Name	Key Offerings/Solutions	Primary Migration Strategy Supported	Technical Highlights	Critical Evaluation/Value Proposition
AWS	Mainframe Modernization Service (Assess, Refactor with Blu Age, Replatform with Rocket/NTT DATA, Application Testing, Data Replication, AWS Transform)	Rehost, Replatform, Refactor, Data Augmentation	Agentic AI (AWS Transform), Automated COBOL/PL/1 to Java conversion, Managed Runtimes, Cloud-native testing, Near real-time data replication.	Comprehensive suite aiming to automate and accelerate code transformation, reducing manual effort. Success depends on legacy code quality and AI validation.
Micro Focus	COBOL Conversion Tool (via Royal Cyber), Host Access Analyzer 2.0	Replatform (within mainframe ecosystem), Analysis/Assessment	Converts Micro Focus COBOL to IBM COBOL, identifies dependencies, real-time usage data for risk/compliance.	Focuses on optimizing and modernizing within or from the mainframe environment, appealing to risk-averse banks. Supports incremental improvements.
IBM	IBM z/Hybrid Cloud, IBM z16, zIIP Processors, watsonx Code Assistant for Z	Hybrid Cloud Integration, Selective Modernization, Augmentation	Pervasive encryption (z16), Specialty processors (zIIP) for cost optimization, AI-powered code modernization, Linux on Z, containerization.	Positions mainframe as the secure, resilient core of a hybrid cloud. Challenges "off-mainframe at all costs" narrative by demonstrating continued innovation and value.
Google Cloud	Mainframe Modernization (Assessment Tool (MAT), Mainframe Rewrite, Dual Run, Mainframe Refactor, Mainframe Connector)	Rewrite, Refactor, Data Augmentation, De-risking	Gen AI (Gemini models) for code analysis & transformation, automated code conversion to Java/C#, parallel run testing (Dual Run), direct mainframe data integration.	Strong emphasis on AI-driven automation for code transformation and detailed assessment. Dual Run provides critical de-risking for functional equivalence.
Microsoft Azure	Mainframe Azure Migration Roadmap, Azure Migrate, Royal Cyber Modernization Suite	Rehost, Replatform, Refactor, Rewrite, Integration	Comprehensive roadmap, automated COBOL conversion, integration with Azure cloud-native services (AKS, API Management, DevOps), robust security features.	Offers a holistic ecosystem for the entire modernization lifecycle, emphasizing integration with a broad range of cloud-native services and a structured approach.

Export to Sheets
VIII. Regulatory, Compliance, and Cybersecurity Concerns in Israeli Banking
The Israeli banking industry operates within a dynamic and stringent regulatory environment, with the Bank of Israel (BoI) playing a pivotal role in shaping directives related to IT, cloud computing, data protection, and cybersecurity. These regulations significantly influence the feasibility and methodology of core banking system modernization.

Bank of Israel Directives and Guidelines
Cloud Computing Regulations:
The Bank of Israel's stance on cloud adoption for core banking systems has evolved. Initially, the BoI issued directives that prohibited banking corporations from using cloud services for their "core activities and core systems". This cautious approach reflected concerns about material operational risks related to information security, business continuity, and command and control of IT assets. However, subsequent directives, such as Directive 362, eliminated this outright injunction, allowing "material systems" to transition to cloud computing, provided strict risk management and governance frameworks are in place. This shift indicates a supervisory approach that now regards the transition of banking systems to cloud computing, including material systems, as a part of technological innovation and development, subject to robust controls. Banks are now required to assess associated risks, devise mitigation strategies, establish written policies, and obtain board approval for the use of material cloud services.   

Data Residency and Localization Requirements:
While earlier directives were strict about data storage "in Israel" , the BoI has adapted its stance. Current regulations permit sensitive data (e.g., customer data, confidential business information) to be stored, transferred, or processed on a cloud outside the borders of the State of Israel, provided the cloud service provider maintains a level of protection that complies with the European Union General Data Protection Regulation (GDPR). This aligns with the broader Israeli Privacy Protection Law (PPL) and Data Transfer Regulations, which govern personal data processing and international transfers, requiring informed consent and ensuring equivalent data protection standards abroad. The launch of AWS's Israel (Tel Aviv) Region in the first half of 2023, with three Availability Zones, is a significant development that directly addresses low latency and data residency requirements for customers in Israel.   

Cybersecurity Framework and Risk Management:
The Bank of Israel places paramount supervisory priority on upgrading banks' risk management capabilities. Directive 364 consolidates previous directives on IT management, cybersecurity, and data protection, establishing a unified, technology-neutral framework for managing cybersecurity and data protection risks. Banks are mandated to develop and maintain an operational risk management framework fully integrated into their overall management processes. This includes performing periodic risk assessments before and during engagement with cloud providers. Strong authentication requirements are specified for activities involving material service providers, particularly those with remote access or system maintenance roles. The directive also emphasizes managing supply chain cyber risk, ensuring the accountability of cloud service providers, even those using secondary providers. Banks are required to appoint a Chief Information Security Officer (CISO).   

Open Banking Mandates:
The Bank of Israel has made significant strides in advancing innovation and efficiency in payment systems by completing the transition to the ISO 20022 standard in the ZAHAV system (Israel's real-time payment infrastructure). This new standard enables the transfer of richer, more structured, and uniform data in payment messages, leading to more efficient, faster, and cheaper transfers. Furthermore, BoI guidelines require banks to enable licensed and supervised third parties to access customer accounts with explicit consent, for both information retrieval and transaction initiation. This initiative aims to foster competition and encourage the development of new financial services and products. Implementing open banking necessitates robust information security, stringent protection of customer privacy, and clear rules on liability among all participants in the ecosystem.   

The Bank of Israel's regulatory evolution, from initial caution to a more enabling stance on cloud adoption for core systems, coupled with strict data residency and cybersecurity mandates, creates a unique and complex compliance landscape. This implies that modernization is not just a technical or financial decision, but fundamentally a regulatory compliance project that requires deep understanding of evolving directives and continuous engagement with the regulator. For banks, particularly concerning data governance and third-party risk management, this means demonstrating proactive and continuous risk management, robust governance, and clear accountability. The BoI's shift signifies a maturation of regulatory understanding of cloud benefits, but it places a significant burden on banks to ensure compliance throughout their modernization journey.

Specific Requirements for Bank Mizrahi-Tefahot
For Bank Mizrahi-Tefahot, the Bank of Israel's directives and the broader Israeli fintech landscape directly shape the strategic considerations for core banking modernization.

Bank Mizrahi-Tefahot's strategic plan for 2025-2027 emphasizes providing "personal, human banking services, supported by advanced digital technology," aiming for a multi-channel approach that optimally combines human bankers with digital channels. The plan also highlights "continuing the automation of operational processes" and "adjusting periodically the operational model to the challenges of the future". While the plan does not explicitly mention mainframe modernization, the strong emphasis on "advanced digital technology" and "automation of operational processes" inherently implies a need to address legacy systems to achieve these ambitious goals. The bank's objectives to increase credit and deposit market shares and maintain a high level of operational efficiency (e.g., average operational efficiency ratio not exceeding 35%)  will be difficult to achieve without modernizing the underlying core systems that dictate agility and cost.   

The Bank of Israel's directives on cloud computing, data residency, and cybersecurity directly impact how Mizrahi-Tefahot can pursue its digital transformation goals. The elimination of the injunction against using cloud for "material systems"  is a critical enabler, allowing the bank to consider cloud solutions for components previously restricted. However, this permission comes with stringent requirements:   

Risk Assessment and Governance: The bank must conduct thorough risk assessments for each material cloud-computing service, update them regularly, and ensure board approval for implementation. This necessitates a robust operational risk management framework.   

Data Protection and Residency: Sensitive data transferred outside Israel must comply with GDPR-level protection. The presence of the AWS Israel (Tel Aviv) Region provides a local option to meet data residency and low-latency requirements for sensitive data. The bank must also ensure compliance with the Israeli Privacy Protection Law and Data Transfer Regulations.   

Third-Party Accountability: Mizrahi-Tefahot must ensure accountability from its cloud service providers, including those using secondary providers, and conduct due diligence reviews. The Bank of Israel retains the right to audit cloud service providers.   

Cybersecurity Controls: The bank must implement strong authentication requirements, monitor information security incidents, and ensure data encryption (at rest and in transit). The unified cybersecurity framework (Directive 364) requires continuous monitoring, proactive threat assessments, and robust incident response protocols.   

Open Banking Readiness: The Bank of Israel's push for open banking through ISO 20022 and mandated third-party access  further pushes for API-driven architectures and secure data sharing. This requires Mizrahi-Tefahot to ensure its modernized systems can expose data and services securely via APIs while adhering to strict information security and privacy rules.   

The bank's strategic plan to "adjust periodically the operational model to the challenges of the future" aligns directly with the need for continuous modernization and adaptation to regulatory changes. For Mizrahi-Tefahot, any cloud migration of core systems is inherently a regulatory project first and foremost. It requires not just technical implementation but also a robust audit trail, clear accountability for third-party providers, and ongoing adherence to evolving data protection and cybersecurity standards.

IX. Conclusion and Recommendations for Bank Mizrahi-Tefahot
The migration of core banking systems from IBM z/OS mainframes and COBOL-based applications to modern architectures is not merely a technical upgrade but a fundamental strategic imperative for banks globally, including Bank Mizrahi-Tefahot. The enduring legacy of COBOL and mainframes is rooted in their historical reliability and security, which have served the banking sector for decades. However, the escalating costs of maintaining aging, undocumented systems, coupled with a looming skills gap and the imperative for digital agility, necessitate this complex transformation.

The industry is moving towards cloud-native, distributed, and hybrid solutions, driven by the promise of faster innovation, enhanced scalability, and improved customer experiences. This shift involves a profound re-evaluation of architectural paradigms, from monolithic applications with ACID consistency to microservices with distributed data stores and eventual consistency. This transition demands new technical skills and a different approach to transaction management and data integrity.

The choice of migration strategy is critical. The overwhelming preference for incremental, phased modernization over "big bang" approaches reflects a learned caution from past failures and a commitment to continuous value delivery and risk mitigation. Data migration, often the most complex aspect, requires meticulous planning, specialized tools, and rigorous validation techniques like dual-run to ensure functional equivalence and data integrity.

Financially, the TCO comparison between mainframes and cloud is nuanced. While mainframes have high upfront and perceived maintenance costs, they offer hidden savings in software licensing (e.g., via zIIPs) and unparalleled reliability that prevents costly downtime. Conversely, cloud migration, while promising OpEx benefits, introduces its own set of significant and often hidden costs, including data egress fees, refactoring efforts, and the need for continuous optimization. The true ROI of modernization is realized through a combination of tangible cost reductions and intangible benefits like agility, innovation, and enhanced customer experience, which collectively drive competitive advantage.

For Bank Mizrahi-Tefahot, the modernization journey must be meticulously planned and executed within the specific context of Israeli banking regulations. The Bank of Israel's evolving directives, which now permit the use of cloud for "material systems" under strict governance, data residency, and cybersecurity controls, are paramount. Open banking mandates further necessitate API-driven architectures and secure data sharing.

Recommendations for Bank Mizrahi-Tefahot:

Conduct a Comprehensive, Granular Assessment: Initiate a detailed assessment of the entire mainframe estate, including all COBOL applications, JCL, and data structures (VSAM, DB2). Leverage AI-powered assessment tools (e.g., Google Cloud Mainframe Assessment Tool, AWS Mainframe Modernization Assess) to rapidly analyze code, identify dependencies, and generate documentation for undocumented logic. This foundational understanding is critical for accurate planning and de-risking.   

Adopt a Phased, Incremental Modernization Strategy: Prioritize a progressive modernization approach over a "big bang" replacement. Begin with less critical, well-defined workloads to build internal expertise and demonstrate early successes. Gradually expand to more complex core components, always prioritizing business continuity and minimizing operational disruption. This aligns with the industry's most successful transformations.   

Invest Heavily in Talent Transformation: Address the looming COBOL skills gap proactively. Implement comprehensive training and upskilling programs for existing COBOL developers in modern languages (e.g., Java, Python), cloud-native architectures (microservices, containers), DevOps practices, and distributed data consistency models (BASE). Foster cross-functional teams where legacy and modern developers collaborate to facilitate knowledge transfer and ensure a smooth transition.   

Leverage AI and Automation Judiciously: Explore and pilot AI-powered code transformation tools (e.g., AWS Blu Age, Google Cloud Mainframe Rewrite, IBM watsonx Code Assistant for Z) to accelerate COBOL code conversion and refactoring. Understand that these tools are "code helpers" requiring human validation and oversight. Automate testing (e.g., AWS Mainframe Modernization Application Testing, Google Cloud Dual Run) and data migration processes to ensure functional equivalence and data integrity.   

Prioritize Data Modernization and Consistency: Develop a robust data migration strategy that accounts for the complexities of mainframe data formats (VSAM, DB2) and the shift to cloud-native databases. Implement rigorous dual-run and parallel proving techniques for critical data sets to ensure absolute functional equivalence and build trust in the new systems. Design applications with a clear understanding of ACID vs. eventual consistency tradeoffs, implementing application-level compensation mechanisms where necessary for financial transactions.   

Ensure Unwavering Regulatory Compliance and Cybersecurity: Integrate compliance with Bank of Israel directives (e.g., Directive 362, 364), Israeli Privacy Protection Law, and international standards (GDPR) into every phase of modernization. Prioritize robust cybersecurity controls, including encryption (at rest and in transit), strong authentication, and continuous monitoring, especially when engaging cloud service providers. Leverage the AWS Israel (Tel Aviv) Region for sensitive data requiring local residency.   

Develop a Holistic TCO Model and Continuously Optimize: Move beyond simplistic cost comparisons. Develop a comprehensive TCO model that accounts for mainframe value generation (e.g., zIIP savings, reliability benefits) and the full spectrum of hidden cloud migration costs (e.g., egress fees, refactoring, over-provisioning). Implement continuous cost optimization strategies post-migration to avoid "cloud shock" and maximize ROI.   

Embrace Hybrid Cloud as a Strategic Imperative: Recognize that the mainframe can evolve into a critical, integrated component of a hybrid cloud architecture, rather than being fully replaced. This allows Bank Mizrahi-Tefahot to leverage the mainframe's unparalleled security and reliability for core, high-volume transactions while offloading innovative and variable workloads to the cloud for agility and scale. This approach aligns with IBM's strategic vision and offers a pragmatic path forward.   

By adopting these recommendations, Bank Mizrahi-Tefahot can navigate the complexities of core banking modernization effectively, transforming its legacy infrastructure into a flexible, agile, and secure digital platform that supports its strategic goals and positions it for sustained growth in the evolving financial landscape.


Sources used in the report

version1.com
Killing COBOL in core banking systems - Version 1
Opens in a new window

medium.com
That thing about core banking platforms | by Stefan Loesch - Medium
Opens in a new window

insights.samsung.com
Legacy or limitation? Transforming technology for banking in the future
Opens in a new window

finextra.com
Can AI Cure the Curious Case of COBOL in the Finance Industry? - Finextra Research
Opens in a new window

timthewebmaster.com
History of COBOL, its versions, and first appearance
Opens in a new window

swimm.io
Mainframes in Banking: Importance and Modernization Challenges - Swimm
Opens in a new window

oliverwyman.com
10 Key Areas For A Successful Core Banking Modernization - Oliver Wyman
Opens in a new window

ekotek.vn
Core Banking Transformation: A Comprehensive Guide to Strategic Modernization
Opens in a new window

tek-tips.com
Reasonally priced COBOL licenses - Tek-Tips
Opens in a new window

ibm.com
What is VSAM? - IBM
Opens in a new window

m.youtube.com
Simplify VSAM to DB2 Data Sharing on z/OS with PropelZ - YouTube
Opens in a new window

anaptyss.com
Implementing Microservices in Financial Systems: Challenges and their Solutions
Opens in a new window

lera.us
How Microservices Are Revolutionizing Banking Operations: A Guide to Innovation
Opens in a new window

ibm.com
Are you calculating your mainframe TCO all wrong? - IBM
Opens in a new window

ibm.com
Processing work on z/OS: How the system starts and manages batch jobs - IBM
Opens in a new window

basikon.com
Core Banking ROI: How to Measure the Return on Investment of Your Transformation
Opens in a new window

blog.aspiresys.com
Data-Driven Digital Transformation: Quantifying the ROI of Your Temenos Upgrade
Opens in a new window

unisys.com
Big bang or incremental? The definitive answer for mainframe modernization - Unisys
Opens in a new window

fintechnews.my
"Big Bang" Bank Upgrades Spell Trouble, Mambu Makes Case for Incremental Change
Opens in a new window

learn.microsoft.com
The 6 Rs of application modernization - App Modernization Guidance | Microsoft Learn
Opens in a new window

developers.redhat.com
Hybrid cloud architecture | Red Hat Developer
Opens in a new window

scalecomputing.com
Hybrid Cloud Architecture Explained - Scale Computing
Opens in a new window

designgurus.io
A Beginner's Guide To Distributed Systems - Design Gurus
Opens in a new window

community.ibm.com
Why banks prefer a mainframe hybrid cloud architecture - IBM Community
Opens in a new window

superblocks.com
Mainframe to Cloud Migration: 5 Proven Strategies and Best Practices - Superblocks
Opens in a new window

aws.amazon.com
How to Migrate Mainframe Batch to Cloud Microservices with AWS Blu Age
Opens in a new window

designgurus.io
ACID vs BASE Properties in Databases - Design Gurus
Opens in a new window

aws.amazon.com
From Mainframe to AWS Cloud: A comprehensive mapping guide – Part 2 (Databases)
Opens in a new window

overcast.blog
COBOL Migration: A Guide For 2025 - overcast blog
Opens in a new window

talent500.com
Data Consistency in Microservices: Strategies & Best Practices - Talent500
Opens in a new window

dataguidance.com
Israel: Digital Israeli and Bank of Israel publish draft joint standards on open banking customer experience | News | DataGuidance
Opens in a new window

boi.org.il
The Bank of Israel makes a significant step in advancing innovation, efficiency, and transparency in the payment systems | בנק ישראל
Opens in a new window

nocash.ro
The Bank of Israel publishes guidelines for the banks and credit card companies for implementation of the open banking standard - NOCASH ® de 24 ani
Opens in a new window

cloud.google.com
Accelerate mainframe modernization with Google Cloud AI
Opens in a new window

getfuturebank.com
Banks are warned against failed core strategies, as time runs out to modernise. - FutureBank
Opens in a new window

aws.amazon.com
AWS Mainframe Modernization
Opens in a new window

vinova.sg
The Cost of Cloud Migration: What Businesses Should Know - Vinova SG
Opens in a new window

wanclouds.net
The Hidden Costs of On-Prem to Cloud Migration (And How to Avoid Them) - Wanclouds
Opens in a new window

synlabs.io
Migrating Mainframe to Cloud: Best Practices and Key Strategies for Success - Synlabs
Opens in a new window

medium.com
From Mainframe to Hybrid Cloud: A Guide - Medium
Opens in a new window

ibm.com
Hybrid Cloud Solutions and Software | IBM
Opens in a new window

aws.amazon.com
Managed Mainframe Migration Service | AWS Mainframe ...
Opens in a new window

dbta.com
Micro Focus Unveils New Tool for Safeguarding Compliance and ...
Opens in a new window

royalcyber.com
Micro Focus COBOL Conversion Tool | Mainframe Modernization
Opens in a new window

henricodolfing.com
Case Study 2: The Epic Meltdown of TSB Bank - Henrico Dolfing
Opens in a new window

cloud.google.com
Mainframe Modernization solutions | Google Cloud
Opens in a new window

royalcyber.com
Mainframe Azure Migration Roadmap | Legacy to Cloud-Native
Opens in a new window

boi.org.il
1 Bank of Israel Banking Supervision Department Technology and Innovation Division IT Regulation and Examination Unit Jerusalem
Opens in a new window

boi.org.il
A Draft of the Guidelines Addressing Credit Rating Systems in Banks Toward the Implementation of the 'Basel II' Principles in Israel | בנק ישראל
Opens in a new window

mizrahi-tefahot.co.il
2025-2027 new strategic plan
Opens in a new window

ibm.com
IBM z Integrated Information Processor (zIIP) - Overview
Opens in a new window

d1.awsstatic.com
Regulatory Overview - Financial Services — Israel - awsstatic.com
Opens in a new window

youtube.com
From A to zIIP: What you need to know to reduce COBOL Costs with the IBM Specialty Processor - YouTube
Opens in a new window

pearlcohen.com
Bank of Israel Issues Proper Conduct of Banking Business Directive on Cybersecurity
Opens in a new window

linklaters.com
Data Protected Israel | Insights | Linklaters
Opens in a new window

al.boi.gov.il
Re: Cloud computing
Opens in a new window

en.globes.co.il
Hapoalim, Leumi adopting cloud computing - Globes English - גלובס
Opens in a new window

numberanalytics.com
7 Key Benefits of Core Banking Systems in Modern Finance
Opens in a new window

dataguidance.com
Israel | Jurisdictions - DataGuidance
Opens in a new window

basikon.com
Core Banking Modernization: How to Achieve a Successful Progressive Transformation
Opens in a new window

iclg.com
Data Protection Laws and Regulations Report 2025 Israel - ICLG.com
Opens in a new window

techmagic.co
Core Banking Modernization: Dealing With Challenges - TechMagic
Opens in a new window

law.co.il
Bank of Israel publishes draft guidelines on risk management in cloud computing - law.co.il
Opens in a new window

youtube.com
Mainframe Millions: The Hidden Cost Advantage - YouTube
Opens in a new window

resourcehub.bakermckenzie.com
Key Data & Cybersecurity Laws | Israel | Global Data and Cyber Handbook
Opens in a new window

aws.amazon.com
Israel AWS Compliance Center - Financial Services for Cloud
Opens in a new window

boi.org.il
Bank of Israel Banking Supervision Department Policy and Regulation Division April 24, 2018 Circular no. C-06-2560 Attn
Opens in a new window

cloudsecurityalliance.org
Cloud Security Glossary - CSA
Opens in a new window

boi.org.il
Directive 362—Cloud Computing
Opens in a new window

aiexpert.network
Case Study: How JPMorgan Chase is Revolutionizing Banking ...
Opens in a new window

cloud.google.com
Lloyds Banking Group case study | Google Cloud
Opens in a new window

Sources read but not used in the report

techdocs.broadcom.com
Use the Batch Processor - Broadcom TechDocs
Opens in a new window

us.nttdata.com
Six Rs in Accelerating Mainframe Modernization | NTT DATA
Opens in a new window

crassula.io
What Is Core Banking: Everything You Need to Know - Crassula
Opens in a new window

ibm.com
How a US bank modernized its mainframe applications with IBM Consulting and Microsoft Azure
Opens in a new window

ltimindtree.com
AWS Mainframe Migration Cloud | LTIMindtree
Opens in a new window

wolterskluwer.com
Community Reinvestment Act (CRA) regulatory modernization - Wolters Kluwer
Opens in a new window

ceps.eu
An Open letter on Israel/Palestine - CEPS
Opens in a new window

ibm.com
Starting your mainframe modernization journey with Azure - IBM
Opens in a new window

ibm.com
Banking IT Services and Solutions - IBM
Opens in a new window

broadcom.com
Customer Perspectives on Mainframe Storage Management: Meet The Modern Approach - Broadcom Inc.
Opens in a new window

mizrahi-tefahot.co.il
Mizrahi-Tefahot Strategic Plan 2021-2025
Opens in a new window

jpost.com
Israeli cybersecurity funding doubles in 2024, outperforms global markets, non-profit finds
Opens in a new window

gov.il
Israel International Cyber Strategy: International Engagement for Global Resilience - Gov.il
Opens in a new window

startupnationcentral.org
Israeli Fintech in 2025 Will Lead the Future of Finance - Startup Nation Central
Opens in a new window

viola-group.com
2025 – The Comeback Year - Viola Group
Opens in a new window

news.ycombinator.com
The IBM mainframe: How it runs and why it survives - Hacker News
Opens in a new window

umtb.co.uk
UMTB Tech Lending - Mizrahi-Tefahot London
Opens in a new window

deloitte.com
The Economic Impact of Cloud Computing in Israel 2024 - Deloitte
Opens in a new window

boi.org.il
Israel's Banking System
Opens in a new window

gov.il
Use of Cloud Services - Gov.il
Opens in a new window

youtube.com
Mainframe Operation Management Market and its Market Size, Forecast, and Share
Opens in a new window

www2.deloitte.com
The Economic Impact of Cloud Computing in Israel 2024 - Deloitte
Opens in a new window

m.youtube.com
Analyst Expert View: Mainframe in the Application Economy - YouTube
Opens in a new window

orca.security
Orca Security: Industry-Leading Cloud Security Solution
Opens in a new window

neontri.com
Digital Transformation Examples in Banking: Real-Life Cases - Neontri
Opens in a new window

youtube.com
The Surprising Economics of Mainframe Technology Webcast - YouTube
Opens in a new window

cloud.google.com
Cloud compliance and regulations resources | Google Cloud
Opens in a new window

jpmorganchase.com
Consumer Community Banking | JPMorgan Chase
Opens in a new window

ochk.cloud
PKO Bank Polski: case study - OChK
Opens in a new window

clausiuspress.com
A study on the impact of digital transformation of Lloyds Bank's retail business on customer service quality
Opens in a new window

oracle.com
Risk Management and Compliance| ERP | Oracle Israel
Opens in a new window

bis.org
Managing cloud risk - some considerations for the oversight of critical cloud service providers in the financial sector - Bank for International Settlements
Opens in a new window

retailbankerinternational.com
Five signs your core banking system has been cloud-washed - Retail Banker International
Opens in a new window

pl.asseco.com
PKO Bank Polski - Alnova system - Asseco Poland
Opens in a new window
