import { siteConfig } from './siteConfig';
import { articleSchema, organizationSchema, websiteSchema } from '@/utils/schemaGenerator';
import { generateBreadcrumbSchema } from '@/utils/breadcrumbSchema';

const baseMetadata = {
  description: siteConfig.siteDescription,
  keywords: siteConfig.siteKeywords,
  ogImage: siteConfig.openGraph.defaultImage,
  ogType: 'website'
};

export const seoMetadata = {
  "/": {
    ...baseMetadata,
    title: "Phenomeny — Business Operating Systems for Modern Operations",
    description: "Phenomeny connects systems, teams, and intelligence into one operating layer to help businesses maximize productivity and regain operational control.",
  },
  "/how-it-works": {
    ...baseMetadata,
    title: "How It Works | AI-Native Operating Layer | Phenomeny",
    description: "Phenomeny embeds intelligence into organizational workflows. See how our AI-native operating layer connects systems, teams, and data without centralization.",
    keywords: "how it works, AI operating layer, enterprise AI, system integration, departmental intelligence, operational visibility",
    canonical: "https://pddt.in/how-it-works",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/how-it-works")
    ]
  },
  "/enterprise": {
    ...baseMetadata,
    title: "Enterprise | AI for Complex Organizations | Phenomeny",
    description: "Phenomeny is built for large, system-heavy organizations. Governance, security, and scale without fragmentation.",
    keywords: "enterprise AI, AI governance, enterprise software, system integration, regulated industries, enterprise scale",
    canonical: "https://pddt.in/enterprise",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/enterprise")
    ]
  },
  "/manufacturing": {
    ...baseMetadata,
    title: "Manufacturing | AI-Native Production Intelligence | Phenomeny",
    description: "Standardize operations in complex production environments. Reduce downtime, optimize inventory, and automate quality compliance with Phenomeny.",
    keywords: "manufacturing AI, production intelligence, predictive maintenance, supply chain visibility, manufacturing operations",
    canonical: "https://pddt.in/manufacturing",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/manufacturing")
    ]
  },
  "/education": {
    ...baseMetadata,
    title: "Education | AI Infrastructure for Campus Operations | Phenomeny",
    description: "Create continuity in educational ecosystems. Streamline admissions, student support, and administrative operations with Phenomeny.",
    keywords: "education AI, campus operations, student success, education technology, higher ed AI",
    canonical: "https://pddt.in/education",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/education")
    ]
  },
  "/careers": {
    ...baseMetadata,
    title: "Careers | Join Phenomeny | Build the Future of Work",
    description: "Join Phenomeny and build the operating system for the AI-native enterprise. Explore open positions in engineering, product, and sales.",
    keywords: "Phenomeny careers, tech jobs, AI jobs, engineering careers, startup jobs",
    canonical: "https://pddt.in/careers",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/careers")
    ]
  },
  "/resources": {
    ...baseMetadata,
    title: "Resources | Perspectives on Responsible AI | Phenomeny",
    description: "Access whitepapers, playbooks, and strategic guides designed to help you build AI-native enterprises responsibly and securely.",
    keywords: "AI resources, AI whitepaper, transformation playbook, enterprise AI guides, responsible AI, AI governance resources",
    canonical: "https://pddt.in/resources",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/resources")
    ]
  },
  "/about": {
    ...baseMetadata,
    title: "About Us | Building Responsible AI Foundations | Phenomeny",
    description: "We are building the operating infrastructure that allows complex organizations to evolve into AI-native entities safely and reliably.",
    keywords: "about Phenomeny, AI company mission, responsible AI, enterprise AI foundations, AI startup team",
    canonical: "https://pddt.in/about",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/about")
    ]
  },
  "/platform": {
    ...baseMetadata,
    title: "Platform | AI-Native Operating Foundation | Phenomeny",
    description: "Phenomeny's Platform unifies systems, data, and intelligence into a governed operating layer for modern enterprises.",
    keywords: "AI platform, operating foundation, enterprise AI, system integration, AI governance",
    canonical: "https://pddt.in/platform",
    ogType: 'product',
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/platform")
    ]
  },
  "/platform/overview": {
    ...baseMetadata,
    title: "Platform Overview — Unified Control for Complex Systems",
    description: "See how Phenomeny brings clarity to chaos by unifying data streams, workflows, and communication channels into a single pane of glass."
  },
  "/ai-native-operating-layer": {
    ...baseMetadata,
    title: "AI-Native Operating Layer | Phenomeny",
    description: "Discover how an AI-native operating layer orchestrates data, visibility, and execution across your enterprise stack.",
    keywords: "AI operating layer, enterprise automation, system integration, AI orchestration",
    canonical: "https://pddt.in/ai-native-operating-layer",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a33484ed95e1972eb3f4bc08c9f1c8f.png",
    ogType: "website"
  },
  "/security-governance-control": {
    ...baseMetadata,
    title: "Security, Governance & Control | Phenomeny",
    description: "Enterprise-grade security, governance, and operational control built into AI systems. Designed for compliance, visibility, and safety at scale.",
    keywords: "AI security, governance, compliance, enterprise control, operational safety",
    canonical: "https://pddt.in/security-governance-control",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a33484ed95e1972eb3f4bc08c9f1c8f.png",
    ogType: "website"
  },
  "/contact": {
    ...baseMetadata,
    title: "Contact Sales | Phenomeny",
    description: "Get in touch with Phenomeny. Discuss your enterprise needs and explore how AI Assistants™ can transform your operations.",
    keywords: "contact sales, enterprise AI, AI consultancy, AI transformation, business contact",
    canonical: "https://pddt.in/contact",
    ogType: "website"
  },
  "/capabilities": {
    ...baseMetadata,
    title: "Capabilities | AI-Native Infrastructure | Phenomeny",
    description: "Explore Phenomeny's foundational capabilities for AI-native operations. Model Intelligence, Context Memory, Data Pipeline, AI Assistants, and more.",
    keywords: "AI capabilities, enterprise AI, AI infrastructure, model intelligence, context memory, data pipeline, AI assistants, system integration",
    canonical: "https://pddt.in/capabilities",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/capabilities")
    ]
  },
  "/ai-features/unified-dashboards": {
    ...baseMetadata,
    title: "Unified Dashboards | Real-time Visibility | Phenomeny",
    description: "Real-time visibility across teams, tools, and processes. Unified Dashboards provide shared operational reality powered by AI-native operating layer.",
    keywords: "unified dashboards, real-time visibility, operational intelligence, business dashboards, AI dashboards",
    canonical: "https://pddt.in/ai-features/unified-dashboards",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a33484ed95e1972eb3f4bc08c9f1c8f.png",
    ogType: "website"
  },
  "/ai-features/workflow-ai": {
    ...baseMetadata,
    title: "Workflow AI | Automate Coordination & Handoffs | Phenomeny",
    description: "Automate handoffs, escalations, and coordination tasks. Workflow AI removes friction and ensures work moves predictably across teams and systems.",
    keywords: "workflow automation, AI coordination, handoff automation, escalation management, cross-functional workflows",
    canonical: "https://pddt.in/ai-features/workflow-ai",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a33484ed95e1972eb3f4bc08c9f1c8f.png",
    ogType: "website"
  },
  "/ai-features/signal-intelligence": {
    ...baseMetadata,
    title: "Signal Intelligence | Detect Risk Automatically | Phenomeny",
    description: "Detect operational, cultural, and execution risks automatically. Signal Intelligence surfaces early warning signals before they become visible in reports.",
    keywords: "signal intelligence, risk detection, operational risk, early warning system, AI risk detection",
    canonical: "https://pddt.in/ai-features/signal-intelligence",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a33484ed95e1972eb3f4bc08c9f1c8f.png",
    ogType: "website"
  },
  "/capabilities/model-intelligence": {
    ...baseMetadata,
    title: "Model Intelligence | Unified AI Orchestration | Phenomeny",
    description: "Model Intelligence provides unified orchestration for LLMs, SLMs, and custom reasoning engines. Control costs, ensure governance, and scale AI responsibly.",
    keywords: "model intelligence, LLM orchestration, AI governance, model selection, cost control, AI capabilities",
    canonical: "https://pddt.in/capabilities/model-intelligence",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Model Intelligence | Unified AI Orchestration",
      description: "Model Intelligence provides unified orchestration for LLMs, SLMs, and custom reasoning engines.",
      image: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
      datePublished: new Date().toISOString()
    })
  },
  "/capabilities/context-memory": {
    ...baseMetadata,
    title: "Context Memory | Vector-Based Retrieval & Semantic State | Phenomeny",
    description: "Context Memory provides vector-based retrieval and semantic state management for AI systems. Enable durable institutional knowledge and intelligent continuity.",
    keywords: "context memory, vector retrieval, semantic memory, AI memory, institutional knowledge, state management, AI continuity",
    canonical: "https://pddt.in/capabilities/context-memory",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website"
  },
  "/capabilities/data-pipeline": {
    ...baseMetadata,
    title: "Data Pipeline | Real-Time Ingestion & Normalization | Phenomeny",
    description: "Data Pipeline provides real-time ingestion, normalization, and embedding streams for AI systems. Build intelligence on current, consistent, and meaningful information.",
    keywords: "data pipeline, real-time ingestion, data normalization, embedding streams, operational intelligence, data governance, AI data flow",
    canonical: "https://pddt.in/capabilities/data-pipeline",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website"
  },
  "/capabilities/agent-workflows": {
    ...baseMetadata,
    title: "Agent Workflows | Autonomous Task Planning & Execution | Phenomeny",
    description: "Agent Workflows enable autonomous multi-step task planning and execution while maintaining full governance and visibility. Execute complex processes safely at scale.",
    keywords: "agent workflows, autonomous execution, task planning, workflow automation, AI execution, process automation, governance",
    canonical: "https://pddt.in/capabilities/agent-workflows",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website"
  },
  "/capabilities/system-integration": {
    ...baseMetadata,
    title: "System Integration | Deep API Connectors for Enterprise Systems | Phenomeny",
    description: "System Integration provides deep API connectors for enterprise ERP and CRM stacks. Embed intelligence directly into your existing infrastructure safely and reliably.",
    keywords: "system integration, API connectors, ERP integration, CRM integration, enterprise integration, API management, data integration",
    canonical: "https://pddt.in/capabilities/system-integration",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website"
  },
  "/capabilities/event-triggers": {
    ...baseMetadata,
    title: "Event Triggers | Reactive Processing for Live Business Signals | Phenomeny",
    description: "Event Triggers enable reactive processing based on live business signals. Activate intelligence at the moment relevance is highest with context-aware event detection.",
    keywords: "event triggers, reactive processing, business signals, event-driven, real-time response, operational intelligence, event detection",
    canonical: "https://pddt.in/capabilities/event-triggers",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website"
  },
  "/capabilities/deep-observability": {
    ...baseMetadata,
    title: "Deep Observability | Trace Visibility into AI Reasoning & Decisions | Phenomeny",
    description: "Deep Observability provides trace visibility into AI reasoning and decisions. Ensure transparency, accountability, and trust in AI-native systems with end-to-end traceability.",
    keywords: "deep observability, AI transparency, decision traceability, AI reasoning, observability, AI governance, audit trail",
    canonical: "https://pddt.in/capabilities/deep-observability",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Deep Observability | Trace Visibility into AI Reasoning & Decisions",
      description: "Deep Observability provides trace visibility into AI reasoning and decisions. Ensure transparency, accountability, and trust in AI-native systems with end-to-end traceability.",
      image: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/8e6f0071331a545487812f0f9746db45.png",
      datePublished: new Date().toISOString()
    })
  },
  "/capabilities/collaboration": {
    ...baseMetadata,
    title: "Collaboration | Human-in-the-Loop Interfaces for Seamless Handoffs | Phenomeny",
    description: "Collaboration provides human-in-the-loop interfaces for seamless handoffs. Ensure AI-native systems work with people, not around them, with structured coordination.",
    keywords: "collaboration, human-in-the-loop, AI collaboration, team coordination, handoff management, workflow coordination, human-AI collaboration",
    canonical: "https://pddt.in/capabilities/collaboration",
    ogType: "website"
  },
  "/capabilities/trust-and-safety": {
    ...baseMetadata,
    title: "Trust & Safety | Enterprise Guardrails for AI Compliance & Quality | Phenomeny",
    description: "Trust & Safety provides enterprise guardrails for AI compliance and output quality. Ensure AI systems behave predictably, responsibly, and within defined boundaries.",
    keywords: "trust and safety, AI guardrails, compliance, output quality, AI governance, risk management, AI safety",
    canonical: "https://pddt.in/capabilities/trust-and-safety",
    ogType: "website"
  },
  "/ai-assistants": {
    ...baseMetadata,
    title: "AI Assistants™ | Enterprise Autonomous Agents | Phenomeny",
    description: "Deploy autonomous AI Assistants™ for enterprise work. Governed, context-aware agents that coordinate work safely across complex systems.",
    keywords: "AI assistants, autonomous agents, enterprise AI, AI governance, workflow automation, intelligent agents, operational AI",
    canonical: "https://pddt.in/ai-assistants",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants")
    ]
  },
  "/ai-assistants/overview": {
    ...baseMetadata,
    title: "AI Assistants Overview | Autonomous Operational Agents | Phenomeny",
    description: "AI Assistants™ are purpose-built operational agents designed for enterprise scale. Deploy autonomous agents with governance, context, and accountability.",
    keywords: "AI assistants, autonomous agents, operational AI, enterprise AI, AI governance, workflow automation, intelligent agents",
    canonical: "https://pddt.in/ai-assistants/overview",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/overview")
    ]
  },
  "/ai-assistants/how-they-work": {
    ...baseMetadata,
    title: "How AI Assistants™ Work | From Intent to Execution | Phenomeny",
    description: "Understand how AI Assistants™ translate human intent into governed, observable action. Seven-step flow from natural language to autonomous execution.",
    keywords: "AI assistants workflow, autonomous execution, AI governance, intent to action, enterprise AI, workflow automation, AI decision-making",
    canonical: "https://pddt.in/ai-assistants/how-they-work",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/how-they-work")
    ]
  },
  "/ai-assistants/where-they-fit": {
    ...baseMetadata,
    title: "Where They Fit | AI Assistants™ Integration Points | Phenomeny",
    description: "Discover how AI Assistants™ integrate seamlessly across your tech stack. Fit at decision points, workflows, and handoffs without disrupting existing systems.",
    keywords: "AI integration, enterprise systems integration, workflow automation, AI governance, system integration, enterprise AI",
    canonical: "https://pddt.in/ai-assistants/where-they-fit",
    ogImage: "https://images.unsplash.com/photo-1698461979080-fd82567cb379",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/where-they-fit")
    ]
  },
  "/ai-assistants/human-ai-collaboration": {
    ...baseMetadata,
    title: "Human + AI Collaboration | Designing Reliable Handoffs | Phenomeny",
    description: "Design clear, reliable handoffs between human judgment and AI execution. Build trust, maintain control, and scale collaboration safely.",
    keywords: "human-AI collaboration, AI governance, human oversight, AI decision-making, enterprise AI, workflow collaboration",
    canonical: "https://pddt.in/ai-assistants/human-ai-collaboration",
    ogImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/human-ai-collaboration")
    ]
  },
  "/ai-assistants/governance-control": {
    ...baseMetadata,
    title: "Agent Governance & Control | AI Safety & Permissions | Phenomeny",
    description: "Establish boundaries, permissions, and safety protocols for AI Assistants™. Ensure autonomous capabilities operate safely within enterprise governance frameworks.",
    keywords: "AI governance, agent governance, AI safety, permissions, compliance, enterprise AI, AI control, risk management",
    canonical: "https://pddt.in/ai-assistants/governance-control",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/governance-control")
    ]
  },
  "/ai-assistants/audit-trails": {
    ...baseMetadata,
    title: "Audit Trails & Oversight | AI Transparency | Phenomeny",
    description: "Complete visibility into every agent action and decision for compliance.",
    canonical: "https://pddt.in/ai-assistants/audit-trails",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/audit-trails")
    ]
  },
  "/ai-assistants/coming-next": {
    ...baseMetadata,
    title: "Coming Next | AI Assistants™ Roadmap | Phenomeny",
    description: "Preview upcoming capabilities for Phenomeny AI Assistants™. Explore our roadmap for autonomous agent evolution.",
    keywords: "AI roadmap, future AI capabilities, autonomous agents roadmap, enterprise AI evolution",
    canonical: "https://pddt.in/ai-assistants/coming-next",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/coming-next")
    ]
  },
  "/ai-assistants/custom-agents": {
    ...baseMetadata,
    title: "Custom Agent Design | Build Specialized AI | Phenomeny",
    description: "Design custom AI agents tailored to your unique enterprise workflows, terminology, and compliance needs.",
    keywords: "custom AI agents, specialized AI, enterprise agent design, bespoke AI solutions",
    canonical: "https://pddt.in/ai-assistants/custom-agents",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/custom-agents")
    ]
  },
  "/ai-assistants/integration-horizon": {
    ...baseMetadata,
    title: "Integration Horizon | Ecosystem Expansion | Phenomeny",
    description: "Explore the expanding ecosystem of tools and platforms supported by Phenomeny AI Assistants™.",
    keywords: "AI integrations, enterprise ecosystem, system connectors, API integration, supported platforms",
    canonical: "https://pddt.in/ai-assistants/integration-horizon",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/integration-horizon")
    ]
  },
  "/ai-assistants/roadmap": {
    ...baseMetadata,
    title: "AI Assistants™ Roadmap | Coming Next | Phenomeny",
    description: "Preview upcoming agent capabilities, features, and advancements.",
    canonical: "https://pddt.in/ai-assistants/roadmap",
    ogType: "website",
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      generateBreadcrumbSchema("/ai-assistants/roadmap")
    ]
  },
  "/transformations/healthcare-transformation": {
    ...baseMetadata,
    title: "Healthcare Transformation | Patient Data Flow & Clinical Decision Support | Phenomeny",
    description: "Healthcare Transformation optimizes patient data flow and clinical decision support. Modernize healthcare operations with AI-native systems designed for regulated environments.",
    keywords: "healthcare transformation, patient data flow, clinical decision support, healthcare AI, EHR integration, care coordination, healthcare operations",
    canonical: "https://pddt.in/transformations/healthcare-transformation",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Healthcare Transformation | Patient Data Flow & Clinical Decision Support",
      description: "Modernize healthcare operations with AI-native systems designed for regulated environments.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/transformations/professional-services-transformation": {
    ...baseMetadata,
    title: "Professional Services Transformation | Billable Workflows & Knowledge Retrieval | Phenomeny",
    description: "Professional Services Transformation automates billable workflows and enables client knowledge retrieval. Scale expertise without diluting quality with AI-native systems.",
    keywords: "professional services transformation, billable workflows, client knowledge management, professional services AI, consulting automation, knowledge retrieval, engagement management",
    canonical: "https://pddt.in/transformations/professional-services-transformation",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Professional Services Transformation | Billable Workflows & Knowledge Retrieval",
      description: "Scale expertise without diluting quality. Automate billable workflows and enable instant client knowledge retrieval.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/transformations/multi-location-services-transformation": {
    ...baseMetadata,
    title: "Multi-Location Services Transformation | Distributed Operations Standardization | Phenomeny",
    description: "Multi-Location Services Transformation standardizes operations across distributed service centers. Achieve consistent service delivery with shared operational intelligence.",
    keywords: "multi-location services, distributed operations, service standardization, operational consistency, multi-site management, service quality, distributed intelligence",
    canonical: "https://pddt.in/transformations/multi-location-services-transformation",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Multi-Location Services Transformation | Distributed Operations Standardization",
      description: "Standardize operations across distributed service centers. Achieve consistent service delivery with shared operational intelligence.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/transformations/enterprise-operations-transformation": {
    ...baseMetadata,
    title: "Enterprise Operations Transformation | Back-Office System Integration | Phenomeny",
    description: "Enterprise Operations Transformation connects siloed back-office systems into a unified operating fabric. Improve cross-functional efficiency and enterprise-wide visibility.",
    keywords: "enterprise operations, back-office integration, cross-functional workflow, operational efficiency, enterprise systems, business process automation, operational coordination",
    canonical: "https://pddt.in/transformations/enterprise-operations-transformation",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Enterprise Operations Transformation | Back-Office System Integration",
      description: "Connect siloed back-office systems into a unified operating fabric. Improve cross-functional efficiency and enterprise-wide visibility.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/transformations/sales-revenue-systems-transformation": {
    ...baseMetadata,
    title: "Sales & Revenue Systems Transformation | Pipeline Intelligence & CRM Automation | Phenomeny",
    description: "Sales & Revenue Systems Transformation delivers predictive pipeline intelligence and automated CRM hygiene. Improve forecast confidence and sales operational efficiency.",
    keywords: "sales transformation, pipeline intelligence, CRM automation, revenue operations, sales forecasting, deal management, sales intelligence",
    canonical: "https://pddt.in/transformations/sales-revenue-systems-transformation",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Sales & Revenue Systems Transformation | Pipeline Intelligence & CRM Automation",
      description: "Delivers predictive pipeline intelligence and automated CRM hygiene. Improve forecast confidence and sales operational efficiency.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/transformations/product-rd-acceleration": {
    ...baseMetadata,
    title: "Product & R&D Acceleration | AI-Assisted Research & Innovation | Phenomeny",
    description: "Product & R&D Acceleration speeds up innovation cycles with AI-assisted research. Preserve institutional knowledge and accelerate product development.",
    keywords: "product acceleration, R&D acceleration, innovation cycles, research management, product development, AI research, innovation intelligence",
    canonical: "https://pddt.in/transformations/product-rd-acceleration",
    ogType: "website",
    jsonLd: articleSchema({
      headline: "Product & R&D Acceleration | AI-Assisted Research & Innovation",
      description: "Speeds up innovation cycles with AI-assisted research. Preserve institutional knowledge and accelerate product development.",
      image: siteConfig.openGraph.defaultImage,
      datePublished: new Date().toISOString()
    })
  },
  "/ai-resources/pddt-whitepaper": {
    ...baseMetadata,
    title: "PDDT Whitepaper: The Operating Blueprint for AI-Native Enterprises",
    description: "Download the PDDT whitepaper on building AI-native operating layers. Learn how to design intelligence as infrastructure for enterprise transformation.",
    keywords: "AI whitepaper, AI-native enterprises, operating layer, enterprise AI, AI governance, AI infrastructure",
    canonical: "https://pddt.in/ai-resources/pddt-whitepaper",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/5373c09a5473d421ae9a3825c917e3bd.png",
    ogType: "website"
  },
  "/ai-resources/ai-transformation-playbook": {
    ...baseMetadata,
    title: "AI Transformation Playbook: Step-by-Step Guide to Modernize Operations",
    description: "Download the AI Transformation Playbook. A step-by-step guide to modernize operations with confidence, prioritizing continuity, safety, and long-term capability.",
    keywords: "AI transformation, AI playbook, digital transformation, AI implementation, enterprise AI, operational modernization",
    canonical: "https://pddt.in/ai-resources/ai-transformation-playbook",
    ogType: "website"
  },
  "/ai-resources/security-compliance": {
    ...baseMetadata,
    title: "Security & Compliance | Enterprise-Grade Safeguards | Phenomeny",
    description: "Enterprise-grade security and compliance for AI operations. GDPR, ISO 27001, HIPAA, SOC 2, and ABHA compliant. Your data stays yours.",
    keywords: "security compliance, GDPR compliant, ISO 27001, HIPAA compliant, SOC 2, data privacy, enterprise security, AI governance",
    canonical: "https://pddt.in/ai-resources/security-compliance",
    ogImage: "https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/88702a35effd69bac93b812425b9a8ce.png",
    ogType: "website"
  },
  "/transformations/before-after": {
    ...baseMetadata,
    title: "Operational Change Made Visible | Phenomeny",
    description: "Visualize the shift from fragmented systems to connected, AI-native operations. See the before and after of operational transformation.",
    keywords: "operational transformation, digital transformation before after, AI impact, operational efficiency, connected systems",
    canonical: "https://pddt.in/transformations/before-after",
    ogType: "website"
  },
  "/transformations/case-studies": {
    ...baseMetadata,
    title: "Operational Case Studies | Phenomeny",
    description: "Explore how enterprises achieve continuity and reduced friction through AI-native operating layers. Real-world transformation patterns.",
    keywords: "AI case studies, enterprise transformation examples, operational case studies, AI implementation stories",
    canonical: "https://pddt.in/transformations/case-studies",
    ogType: "website"
  },
  "/transformations/measured-impact": {
    ...baseMetadata,
    title: "Measured Impact Without Exaggeration | Phenomeny",
    description: "We focus on tangible operational improvements. Discover how we measure impact through reliability, speed, and decision confidence.",
    keywords: "AI ROI, measuring AI impact, operational metrics, business value of AI, transformation impact",
    canonical: "https://pddt.in/transformations/measured-impact",
    ogType: "website"
  },
  "/platform/capabilities": {
    ...baseMetadata,
    title: "Platform Capabilities — AI-Native Workflow Orchestration",
    description: "Explore our core capabilities: intelligent routing, automated compliance, predictive resource allocation, and real-time operational visibility."
  },
  "/platform/transformations": {
    ...baseMetadata,
    title: "Transformations — Modernize Your Business Logic",
    description: "Learn how Phenomeny transforms legacy processes into agile, AI-driven workflows that adapt to market changes instantly."
  },
  "/platform/ai-assistants": {
    ...baseMetadata,
    title: "AI Assistants — Autonomous Agents for Every Team",
    description: "Deploy specialized AI Assistants that work alongside your team to handle routine tasks, data analysis, and complex coordination."
  },
  "/transformations": {
    ...baseMetadata,
    title: "Industry Transformations — Tailored Solutions for You",
    description: "See how we transform industries including Healthcare, Finance, Manufacturing, and Professional Services with bespoke AI integration."
  },
  "/resources/blog": {
    ...baseMetadata,
    title: "Phenomeny Blog — The Future of Enterprise AI",
    description: "Read the latest thoughts on operational efficiency, AI governance, and the future of work from Phenomeny experts.",
    ogType: 'blog'
  },
  "/resources/whitepapers": {
    ...baseMetadata,
    title: "Whitepapers — Deep Dives into Enterprise Technology",
    description: "Technical and strategic whitepapers covering system architecture, security compliance, and ROI modeling for AI adoption."
  },
  "/resources/guides": {
    ...baseMetadata,
    title: "Implementation Guides — Practical Steps for Success",
    description: "Step-by-step guides for implementing Phenomeny, optimizing workflows, and training your team on new AI tools."
  },
  "/pricing": {
    ...baseMetadata,
    title: "Pricing — Flexible Plans for Every Scale",
    description: "Transparent pricing for businesses of all sizes. From startup packages to enterprise licensing with full support."
  },
  "/404": {
    ...baseMetadata,
    title: "Page Not Found — Phenomeny",
    description: "The page you are looking for does not exist. Please return to the homepage or contact support."
  },
  "/security": {
    ...baseMetadata,
    title: "Legal Center | Trust & Transparency | Phenomeny",
    description: "Central repository for Phenomeny's legal, security, and compliance documentation. Trust, transparency, and responsibility by design.",
    keywords: "Phenomeny legal, terms of service, privacy policy, security compliance, trust center",
    canonical: "https://pddt.in/security",
    ogType: "website"
  },
  "/security/security": {
    ...baseMetadata,
    title: "Security Architecture | Enterprise Safeguards | Phenomeny",
    description: "Detailed overview of Phenomeny's defense-in-depth security architecture, encryption standards, and zero-trust protocols.",
    keywords: "AI security, enterprise security, zero trust, encryption, SOC 2, ISO 27001, data protection",
    canonical: "https://pddt.in/security/security",
    ogType: "website"
  },
  "/security/privacy": {
    ...baseMetadata,
    title: "Privacy Policy | Data Protection & Rights | Phenomeny",
    description: "How Phenomeny respects, protects, and processes your data. Transparency on data collection, usage, and your rights.",
    keywords: "privacy policy, data protection, GDPR, CCPA, data rights, data privacy",
    canonical: "https://pddt.in/security/privacy",
    ogType: "website"
  },
  "/security/terms": {
    ...baseMetadata,
    title: "Terms of Service | Engagement Rules | Phenomeny",
    description: "Terms and conditions governing the use of Phenomeny's platform and services. Clear rules for responsible engagement.",
    keywords: "terms of service, user agreement, legal terms, acceptable use policy",
    canonical: "https://pddt.in/security/terms",
    ogType: "website"
  },
  "/security/compliance": {
    ...baseMetadata,
    title: "Compliance & Certifications | Regulatory Alignment | Phenomeny",
    description: "Phenomeny's alignment with global regulatory frameworks including SOC 2, ISO 27001, HIPAA, and GDPR.",
    keywords: "compliance, regulatory compliance, SOC 2, ISO 27001, HIPAA, GDPR, audit ready",
    canonical: "https://pddt.in/security/compliance",
    ogType: "website"
  }
};