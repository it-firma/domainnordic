export type ServiceDetail = {
  slug: string
  category: string
  categoryNum: string
  name: string
  tagline: string
  intro: string[]
  whatItIs: string[]
  whoItIsFor: string[]
  howWeDeliver: string[]
  outcomes: string[]
  whenItMatters: { situation: string; detail: string }[]
  process: { step: string; title: string; detail: string }[]
  glossary: { term: string; definition: string }[]
  faq: { q: string; a: string }[]
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    "slug": "domain-acquisition",
    "category": "Acquire",
    "categoryNum": "I",
    "name": "Domain Acquisition",
    "tagline": "Premium and off market opportunities, sourced and secured.",
    "intro": [
      "Acquiring the right domain is rarely as simple as a public listing. The most strategically valuable domains are held privately, often by long term owners who never advertise availability. Some have held a single domain for fifteen or twenty years. Some never respond to inbound enquiries. Others respond only when the approach is professional, credible, and properly structured.",
      "We bridge that gap. Through trusted relationships built across the international domain community, we source acquisition opportunities that are not visible to public search. We approach owners with discretion, valuation rationale, and the credibility of an established advisory practice. The result is access to inventory most companies never see, on terms most companies cannot negotiate alone.",
      "The work is end to end. Identification, valuation, outreach, negotiation, escrow, transfer, and post acquisition handover. Every step handled by a senior advisor, every conversation kept confidential, every transaction documented to a standard suitable for accounting and audit."
    ],
    "whatItIs": [
      "A managed acquisition process for premium domains, including those not currently for sale.",
      "Confidential outreach to current owners, with valuation rationale and clean negotiation framework.",
      "Buyer representation in market and off market transactions across all major TLDs.",
      "Full lifecycle handling from initial brief to post transfer operational handover.",
      "Documentation suitable for corporate accounting, tax treatment, and future due diligence."
    ],
    "whoItIsFor": [
      "Companies preparing to launch new ventures, products, or geographic expansions.",
      "Established brands seeking to upgrade an existing domain to a category defining one.",
      "Founders and executives building long term digital infrastructure for their business.",
      "Investors and operators acquiring domains as strategic assets within a larger portfolio.",
      "International acquirers needing local representation in restricted country code TLDs."
    ],
    "howWeDeliver": [
      "We start with a private brief covering your business, target domains, acquisition budget, and timeline.",
      "Our team identifies current owners, assesses likely valuation, and approaches discreetly on your behalf.",
      "We negotiate terms, structure escrow, and manage the full transfer process to operational handover.",
      "We provide valuation rationale and transaction documentation suitable for board, audit, and tax purposes.",
      "We remain available post transaction for related operational, security, and renewal questions."
    ],
    "outcomes": [
      "Securing the strategically right domain at a fair, defensible price supported by valuation rationale.",
      "A confidential acquisition process that does not signal intent to competitors or the broader market.",
      "A clean transfer with full documentation, ready for immediate operational use.",
      "Reduced risk of overpayment, transaction failure, or post transfer technical complications.",
      "A documented basis for capitalising the domain on the balance sheet at correct value."
    ],
    "whenItMatters": [
      {
        "situation": "Pre launch acquisition",
        "detail": "You are preparing to launch a new product, service, or company and need the right domain in place before public announcement."
      },
      {
        "situation": "Post product market fit upgrade",
        "detail": "You are operating successfully on a compromise domain and want to upgrade to the category defining version before competitors notice."
      },
      {
        "situation": "Geographic expansion",
        "detail": "You are entering a new market and need premium country code domains aligned with your global brand."
      },
      {
        "situation": "Defensive consolidation",
        "detail": "You want to acquire variants and adjacencies that could be exploited by lookalikes, fraudsters, or competitors."
      },
      {
        "situation": "Investment thesis",
        "detail": "You are building a portfolio of strategic domain assets and want professional sourcing rather than retail listings."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Brief",
        "detail": "A confidential conversation establishes the target, the underlying business reason, your budget envelope, and any timeline constraints. We sign mutual non disclosure where appropriate before substantive discussion."
      },
      {
        "step": "02",
        "title": "Identify",
        "detail": "We trace current ownership, assess holding history, and gather signals that inform likely receptiveness to an approach. Where multiple candidates exist, we rank them by suitability and acquisition probability."
      },
      {
        "step": "03",
        "title": "Value",
        "detail": "We produce a written valuation range based on comparable transactions, traffic and search data, brand fit, and replacement cost. The valuation gives you a defensible negotiation framework before any offer is made."
      },
      {
        "step": "04",
        "title": "Approach",
        "detail": "We make first contact under our advisory identity, never disclosing the buyer unless agreed. The approach is professional, brief, and structured to elicit response without signalling urgency."
      },
      {
        "step": "05",
        "title": "Negotiate",
        "detail": "We handle counter offers, structure proposals, and navigate the conversation to a workable price. Most negotiations close within three to six exchanges over two to six weeks."
      },
      {
        "step": "06",
        "title": "Close",
        "detail": "We coordinate escrow, transfer, and registry verification. You take operational control with confirmed ownership, clean documentation, and no loose ends."
      }
    ],
    "glossary": [
      {
        "term": "Off market",
        "definition": "A domain that is not publicly listed for sale. Most premium domains fall into this category."
      },
      {
        "term": "Buyer representation",
        "definition": "An advisory engagement where the advisor acts solely for the buyer with no compensation from the seller side."
      },
      {
        "term": "Escrow",
        "definition": "A neutral third party that holds funds and the domain during transfer, releasing each only when both sides have performed."
      },
      {
        "term": "Post transfer handover",
        "definition": "The technical and administrative steps after legal transfer to ensure the buyer has full operational control."
      }
    ],
    "faq": [
      {
        "q": "Can you acquire domains that are not listed for sale?",
        "a": "Yes. The majority of premium domains we acquire are sourced from owners who never publicly advertised availability. Discreet outreach to current owners is a core part of what we do, and most of the inventory worth pursuing falls into this category."
      },
      {
        "q": "How long does an acquisition typically take?",
        "a": "Timelines vary from days to several months depending on owner responsiveness, valuation alignment, and negotiation complexity. Most engagements close within four to ten weeks from initial brief to operational handover."
      },
      {
        "q": "Are fees disclosed upfront?",
        "a": "Yes. Our advisory fee is agreed in writing before we begin outreach. There are no hidden costs, and you see the full economic picture before committing."
      },
      {
        "q": "How is the price negotiated?",
        "a": "We start from a written valuation rationale, make a credible opening offer, and negotiate to a price supported by comparables, traffic data, and replacement cost analysis. We do not chase deals at any price."
      },
      {
        "q": "What if the owner refuses to sell?",
        "a": "A clear no is information. We document it, debrief on alternatives, and either revisit later under different circumstances or pivot to a comparable target. Persistence without progress wastes time on both sides."
      },
      {
        "q": "Will the seller know who the buyer is?",
        "a": "Not unless you choose to disclose. Our default is to act under our advisory identity, with the buyer named only if and when both parties prefer transparency."
      },
      {
        "q": "Do you handle international transactions?",
        "a": "Yes. We have transacted across multiple jurisdictions and currencies, with appropriate escrow and legal coordination throughout. Cross border acquisitions are common in our practice."
      },
      {
        "q": "Can you also help after the acquisition?",
        "a": "Yes. Many clients continue with us for portfolio management, brand protection, or related advisory work. We are also happy to step away once the acquisition is complete if that suits you better."
      }
    ]
  },
  {
    "slug": "stealth-acquisition",
    "category": "Acquire",
    "categoryNum": "I",
    "name": "Stealth Acquisition",
    "tagline": "Confidential, privacy first acquisitions for sensitive situations.",
    "intro": [
      "When the identity of the buyer must remain private, a standard acquisition will not do. Some negotiations would unravel the moment the seller realises who is on the other side. Others would attract competitors, journalists, or speculators in ways that destroy strategic value. A few would simply violate the discretion that serious investors and acquirers expect from their advisors.",
      "Stealth acquisition is built for these situations. We act as the formal counterparty, with you as undisclosed beneficial owner. Outreach happens under our advisory identity. Negotiations are conducted by our team. Transfer and registration can be structured so that even WHOIS records do not reveal the ultimate buyer. The protection is real, the legal basis is sound, and the practice is well established in domain, real estate, and corporate transactions.",
      "When and how to disclose, if ever, is your decision. Some clients prefer to take public ownership at a chosen moment, often coinciding with a launch or announcement. Others retain the trustee structure indefinitely. Either path is straightforward, and the structure is designed to preserve full optionality."
    ],
    "whatItIs": [
      "A fully anonymised acquisition process where the buyer is never disclosed without explicit instruction.",
      "Trustee structures, intermediary entities, and privacy compliant negotiation channels.",
      "Communication, contracting, and transfer all handled under our advisory identity.",
      "Optional ongoing nominee arrangements that keep ownership private after closing.",
      "Documentation that establishes beneficial ownership while preserving public anonymity."
    ],
    "whoItIsFor": [
      "Brands preparing for confidential rebrands, product launches, or market entries.",
      "Investors, family offices, and acquirers who need to avoid signalling.",
      "Executives acquiring domains where seller awareness of the buyer would inflate price.",
      "Public figures and high net worth individuals seeking privacy in personal acquisitions.",
      "Strategic buyers in adjacent markets where competitive intelligence value is high."
    ],
    "howWeDeliver": [
      "We act as principal in the negotiation, with you as undisclosed counterparty.",
      "Where appropriate, we use trustee structures so even WHOIS records do not reveal final ownership.",
      "Communication channels are kept clean of identifying information, including domain history searches.",
      "After closing, ownership can be transferred privately to you or held under continued nominee arrangement.",
      "Disclosure timing, if disclosure is desired at all, is entirely under your control."
    ],
    "outcomes": [
      "Acquisition without market signalling or premium pricing driven by buyer identity.",
      "Continued strategic optionality, including the ability to delay public disclosure indefinitely.",
      "Full legal title and control, on terms that protect your competitive position.",
      "Documentation suitable for due diligence and audit, while preserving public anonymity.",
      "Protection against the cascade of inferences competitors can draw from a known acquirer."
    ],
    "whenItMatters": [
      {
        "situation": "Confidential rebrand or relaunch",
        "detail": "You are preparing a major rebrand and need the new domain in hand before any external party can connect the dots."
      },
      {
        "situation": "Strategic acquisition adjacent to a target",
        "detail": "You are evaluating an acquisition or investment and want to secure related domains without alerting the target to your interest."
      },
      {
        "situation": "Pricing protection",
        "detail": "You believe the seller would significantly raise the price if they knew your identity, your industry, or the strategic value to you."
      },
      {
        "situation": "High profile principals",
        "detail": "The ultimate buyer is a public figure, executive, or high profile family office for whom anonymity is a default operating requirement."
      },
      {
        "situation": "Competitor adjacency",
        "detail": "You are a known competitor of likely sellers and any direct approach would face hostile pricing or refusal."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Confidentiality framework",
        "detail": "We establish the confidentiality framework before any substantive work, including mutual non disclosure, communication channels, and disclosure protocols. The framework is specific to your situation, not boilerplate."
      },
      {
        "step": "02",
        "title": "Structure design",
        "detail": "We design the appropriate ownership structure, ranging from a simple trustee arrangement to a layered intermediary entity. The choice depends on your goals, jurisdiction, and post acquisition plans."
      },
      {
        "step": "03",
        "title": "Outreach",
        "detail": "Approach to the seller happens entirely under our advisory identity. We never reference your business, sector, or identifying details unless and until you authorise disclosure."
      },
      {
        "step": "04",
        "title": "Negotiation",
        "detail": "Counter offers, due diligence requests, and reference checks are handled by our team. Where the seller asks who is behind the offer, we respond consistently under our advisory framework."
      },
      {
        "step": "05",
        "title": "Closing",
        "detail": "Funds flow through escrow under our identity. The domain transfers to a structure of your choosing. WHOIS, DNS, and registrar account records are configured to match your ongoing privacy requirements."
      },
      {
        "step": "06",
        "title": "Hold or disclose",
        "detail": "You decide whether to retain the trustee structure indefinitely, transfer ownership privately to a known entity, or make a coordinated public announcement. We support whichever path you choose."
      }
    ],
    "glossary": [
      {
        "term": "Trustee",
        "definition": "A third party that holds legal title to the domain on behalf of a beneficial owner under a written trust agreement."
      },
      {
        "term": "Beneficial owner",
        "definition": "The party that economically owns the domain, regardless of whose name appears on the registration."
      },
      {
        "term": "Nominee arrangement",
        "definition": "An ongoing structure where a nominee holds the domain in their name on behalf of the true owner."
      },
      {
        "term": "Disclosure",
        "definition": "The act of revealing the beneficial owner publicly, in WHOIS records, or to specific counterparties."
      }
    ],
    "faq": [
      {
        "q": "Will the seller ever know who the real buyer is?",
        "a": "Not unless you choose to disclose. We act as the formal counterparty, and ownership can be held under trustee arrangements indefinitely. Many clients never disclose; others choose to disclose at a specific moment of their choosing."
      },
      {
        "q": "Is stealth acquisition legal?",
        "a": "Yes. Acting through advisors, intermediaries, or trustees is a long established practice in domain, real estate, and corporate transactions. The structures we use are documented, transparent to relevant authorities where required, and fully compliant with applicable law."
      },
      {
        "q": "Can the domain be transferred to my name later?",
        "a": "Yes, at any time. The transfer can also be timed to coincide with a public announcement or product launch, or done quietly without any public notice. This is a decision you control entirely."
      },
      {
        "q": "What about WHOIS records?",
        "a": "WHOIS records can be configured to show the trustee, a privacy service, or an intermediary entity rather than your personal or corporate details. We coordinate this with the registrar at the point of transfer."
      },
      {
        "q": "How is this different from a normal privacy service?",
        "a": "Privacy services hide WHOIS contact details but do not change ownership structure. Stealth acquisition uses ownership structuring so that even forensic investigation does not reveal the underlying buyer through registrar relationships or payment trails."
      },
      {
        "q": "Does the seller suspect a stealth structure?",
        "a": "Sophisticated sellers know that advisory firms often act on behalf of undisclosed buyers. The fact of intermediation is not unusual. What is preserved is the specific identity of who is behind it, which is the part that affects pricing and strategy."
      },
      {
        "q": "How are funds handled?",
        "a": "Funds typically flow from you to us, then from us to escrow, then from escrow to the seller. At no point does the seller see your identity, banking details, or any information that would enable identification."
      },
      {
        "q": "What documentation do I receive?",
        "a": "You receive a written trust or nominee agreement establishing your beneficial ownership, a transaction file documenting the acquisition, and ongoing administration records. The documentation satisfies audit, tax, and due diligence requirements while preserving public anonymity."
      }
    ]
  },
  {
    "slug": "domain-brokerage",
    "category": "Acquire",
    "categoryNum": "I",
    "name": "Domain Brokerage",
    "tagline": "Buyer and seller representation, negotiated to outcomes.",
    "intro": [
      "Brokerage is about results. Whether you are looking to acquire a specific domain or release one from your portfolio at the right valuation, the difference between a good outcome and a mediocre one is rarely the domain itself. It is the process, the relationships, and the patience to walk away when the terms are wrong.",
      "We represent buyers and sellers across the full spectrum of domain transactions. Premium country code domains, generic single word domains, multi domain portfolios, and category defining brand names. The mechanics differ by category but the principles remain the same: confidentiality protects value, valuation rationale grounds negotiation, and a clean process produces clean outcomes.",
      "No public listings unless you specifically want them. No fixed commissions until value is delivered. No pressure to close at any price. The success based structure of most brokerage engagements aligns our interests with yours, but the deeper alignment is professional: we close transactions that should close, and we walk away from those that should not."
    ],
    "whatItIs": [
      "Sell side and buy side representation for individual domains and portfolios.",
      "Confidential outreach, qualification, and negotiation with serious counterparties only.",
      "Structured transactions including escrow, lease to own, and instalment plans.",
      "Documentation, due diligence support, and post transaction operational handover.",
      "Optional public listing strategies for sellers who want broader market exposure."
    ],
    "whoItIsFor": [
      "Owners of premium domains who want to monetise without listing publicly.",
      "Buyers seeking a specific domain currently held by a private owner.",
      "Companies divesting non core digital assets as part of strategic restructuring.",
      "Investors selling individual domains or rationalising larger portfolios.",
      "Founders and operators acquiring upgrade domains for established businesses."
    ],
    "howWeDeliver": [
      "A defined engagement letter with clear scope, timelines, and success metrics.",
      "A targeted outreach process to qualified buyers or sellers, never broad market exposure.",
      "Negotiation, due diligence support, and transaction closing under our supervision.",
      "Structured payment arrangements where appropriate, including instalment and lease to own.",
      "Post closing operational handover ensuring buyer takes clean control with no loose ends."
    ],
    "outcomes": [
      "Transactions closed at fair market value, with both parties protected throughout.",
      "No premature disclosure, no public bidding wars, no value erosion.",
      "A documented closing record suitable for accounting, tax, and audit purposes.",
      "Continued buyer and seller relationships protected through professional negotiation.",
      "Optional follow on advisory work informed by deep knowledge of your portfolio and goals."
    ],
    "whenItMatters": [
      {
        "situation": "Strategic exit",
        "detail": "You hold a premium domain and want to monetise without flooding the market or signalling distress."
      },
      {
        "situation": "Targeted acquisition",
        "detail": "You want a specific domain held by a private owner and need a credible advisor to make the approach."
      },
      {
        "situation": "Portfolio rationalisation",
        "detail": "You are reducing a domain portfolio and want professional handling of dozens or hundreds of individual transactions."
      },
      {
        "situation": "Estate or company sale",
        "detail": "A domain forms part of a larger estate or company sale and requires separate valuation and transaction handling."
      },
      {
        "situation": "Flexible payment structuring",
        "detail": "The economics work but the upfront capital does not, and a structured payment arrangement makes the transaction viable."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Engagement letter",
        "detail": "A written engagement defines the scope, timeline, success criteria, and compensation structure. Both parties have clarity on what will happen, what will not, and what success looks like."
      },
      {
        "step": "02",
        "title": "Qualification",
        "detail": "For sell side engagements, we qualify potential buyers by capacity, fit, and seriousness. For buy side, we qualify the target, the owner, and the realistic price range."
      },
      {
        "step": "03",
        "title": "Outreach",
        "detail": "We make targeted, professional contact with qualified parties only. Public listings are used only when explicitly requested and only where they add value to the situation."
      },
      {
        "step": "04",
        "title": "Valuation framework",
        "detail": "We provide written valuation rationale to ground the negotiation. The framework is shared with the counterparty when helpful, retained internally when not."
      },
      {
        "step": "05",
        "title": "Negotiation",
        "detail": "We handle the back and forth, structure proposals, and navigate to terms both parties can accept. We will tell you when we believe the price has gone too high or too low."
      },
      {
        "step": "06",
        "title": "Closing",
        "detail": "Escrow, transfer, and operational handover are coordinated end to end. Documentation supports accounting, tax, and audit needs for both parties."
      }
    ],
    "glossary": [
      {
        "term": "Sell side",
        "definition": "A brokerage engagement representing the seller of a domain."
      },
      {
        "term": "Buy side",
        "definition": "A brokerage engagement representing the buyer of a domain."
      },
      {
        "term": "Lease to own",
        "definition": "A structured arrangement where the buyer leases the domain with a defined path to ownership."
      },
      {
        "term": "Instalment plan",
        "definition": "A payment structure spreading the purchase price over a defined period, typically secured against the domain."
      }
    ],
    "faq": [
      {
        "q": "Do you charge upfront fees?",
        "a": "For most brokerage engagements, our compensation is success based and agreed in writing before we begin. No success means no fee. Some specialised engagements involve a modest retainer that is credited against the success fee on closing."
      },
      {
        "q": "Will my domain be publicly listed for sale?",
        "a": "Only if you explicitly request it. Our default approach is private outreach to qualified buyers we identify and vet on your behalf, which preserves both confidentiality and pricing leverage."
      },
      {
        "q": "Can you handle international transactions?",
        "a": "Yes. We have transacted across multiple jurisdictions and currencies, with appropriate escrow and legal coordination throughout. Cross border deals are routine in our practice."
      },
      {
        "q": "How do you set a target price?",
        "a": "A target price emerges from comparable transactions, traffic and search data, brand fit, replacement cost, and the negotiation room each side typically expects. We share the rationale with you and revise it as the engagement progresses."
      },
      {
        "q": "What if no qualified buyer emerges?",
        "a": "On sell side engagements, we report back honestly. Sometimes the right answer is to wait, sometimes to revise the price expectation, and sometimes to retire the engagement. We do not pad activity to justify continuing fees."
      },
      {
        "q": "Can you broker portfolios as well as single domains?",
        "a": "Yes. Portfolio brokerage requires different mechanics, including bulk valuation, qualification of acquirers with capital and operational capacity, and structured transfer planning. We are experienced with both."
      },
      {
        "q": "What about lease to own deals?",
        "a": "Lease to own is a useful structure when the buyer cannot or prefers not to commit full capital upfront. We handle the structuring, escrow of the registry record, and conversion to ownership at the agreed point."
      },
      {
        "q": "How long do brokerage engagements typically last?",
        "a": "Single domain engagements typically run six weeks to four months from kickoff to closing. Portfolio engagements run longer, often six to twelve months for significant rationalisation work."
      }
    ]
  },
  {
    "slug": "local-presence-service",
    "category": "Acquire",
    "categoryNum": "I",
    "name": "Local Presence Service",
    "tagline": "Trustee solutions for international clients.",
    "intro": [
      "Some country code domains require a registered local presence to hold ownership. Without a local entity or natural person resident, the registration is not possible, regardless of strategic value or commercial fit. This is a structural barrier that affects international companies expanding into new markets, investors building cross border portfolios, and brands preparing market entries ahead of formal entity registration.",
      "A trustee arrangement solves the problem cleanly. We act as your authorised local representative, holding the domain registration on your behalf under a written trust agreement. You retain beneficial ownership, full operational control, and the right to migrate the registration to your own local entity at any time. Registry compliance, contact details, and renewal administration are handled by our team.",
      "The structure is well established, fully compliant with the registries we work with, and used by serious international acquirers who need to act before local incorporation is complete or who prefer not to register a local entity at all. The arrangement preserves all the optionality you need while satisfying the local presence requirement that would otherwise prevent registration entirely."
    ],
    "whatItIs": [
      "A formal trustee arrangement that satisfies local registry requirements for restricted TLDs.",
      "Continuous administration of WHOIS, contact, and registry compliance on your behalf.",
      "Annual confirmation of standing, with the option to migrate at any time.",
      "A clear written agreement establishing your beneficial ownership and our administrative role.",
      "Coordination with registrars, registries, and your own legal team where needed."
    ],
    "whoItIsFor": [
      "International companies wanting to secure premium country code domains.",
      "Investors holding domain assets in jurisdictions with local registration requirements.",
      "Brands expanding into new markets ahead of formal entity registration.",
      "Family offices and individuals acquiring country code domains as personal or investment assets.",
      "Acquirers in M&A situations who need to hold domains before the receiving entity is incorporated."
    ],
    "howWeDeliver": [
      "A signed trustee agreement defining your beneficial ownership and our administrative role.",
      "Registration, renewal, and ongoing compliance handled by our local presence partners.",
      "Annual confirmation of standing, with the option to migrate at any time.",
      "Direct coordination with your legal advisors when migration to your own entity is appropriate.",
      "Clear escalation paths if registry policy changes affect the trustee arrangement."
    ],
    "outcomes": [
      "Access to country code domains that would otherwise be unavailable.",
      "Compliant, professional administration with full beneficial ownership preserved.",
      "A documented arrangement suitable for due diligence and corporate audit purposes.",
      "Optionality to migrate to your own local entity once one is established.",
      "Protection against forfeiture risk that arises when local presence requirements are not properly satisfied."
    ],
    "whenItMatters": [
      {
        "situation": "Pre incorporation acquisition",
        "detail": "You want to secure a domain before your local entity is registered, often to lock in inventory ahead of a market entry."
      },
      {
        "situation": "Personal or family office holding",
        "detail": "You are holding a country code domain personally or through a family office and have no plans to register a local entity."
      },
      {
        "situation": "Geographic portfolio strategy",
        "detail": "You operate a multi market domain portfolio and need consistent administration across jurisdictions with varying local presence rules."
      },
      {
        "situation": "Acquisition through a holding entity",
        "detail": "You are acquiring a domain through a holding structure that does not satisfy local presence requirements directly."
      },
      {
        "situation": "Temporary arrangements during entity changes",
        "detail": "You are restructuring corporate entities and need stable domain administration through the transition period."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Eligibility review",
        "detail": "We confirm that the target TLD permits trustee arrangements and that our partners can satisfy the specific local presence requirements applicable to your situation."
      },
      {
        "step": "02",
        "title": "Trust agreement",
        "detail": "A written trust agreement establishes your beneficial ownership, our administrative duties, fees, and termination rights. The agreement is yours to share with auditors, advisors, or future acquirers."
      },
      {
        "step": "03",
        "title": "Registration or transfer in",
        "detail": "We register the domain on your behalf or coordinate transfer in from your existing holding. Registry contact details reflect the trustee arrangement in compliance with local rules."
      },
      {
        "step": "04",
        "title": "Operational handover",
        "detail": "You receive full DNS, registrar account, and administrative access necessary to operate the domain. Beneficial ownership is yours from day one."
      },
      {
        "step": "05",
        "title": "Ongoing administration",
        "detail": "We handle renewal, registry communication, and any contact updates. You receive annual confirmation of standing and any flagged registry policy changes that could affect the arrangement."
      },
      {
        "step": "06",
        "title": "Migration when ready",
        "detail": "When you have a qualifying local entity, we coordinate migration to your direct ownership. The transition is straightforward and preserves operational continuity."
      }
    ],
    "glossary": [
      {
        "term": "Local presence",
        "definition": "A registry requirement that the registrant be a local resident or registered local entity."
      },
      {
        "term": "Trustee",
        "definition": "A party that holds legal title on behalf of a beneficial owner under a written agreement."
      },
      {
        "term": "Country code TLD",
        "definition": "A top level domain assigned to a specific country or territory, often with national restrictions on registration."
      },
      {
        "term": "Migration",
        "definition": "The process of moving a registration from a trustee to the beneficial owner once eligibility is established."
      }
    ],
    "faq": [
      {
        "q": "Do I retain ownership of the domain?",
        "a": "Yes. Beneficial ownership remains with you at all times, formalised in our trustee agreement. The trustee holds legal title only for the purpose of satisfying local presence requirements."
      },
      {
        "q": "Can I move the registration later?",
        "a": "Yes. Once you have a qualifying local entity, transfer is straightforward and we coordinate it directly. The trust agreement specifies how and when this transition can occur."
      },
      {
        "q": "Is this arrangement compliant with registry rules?",
        "a": "Yes. Trustee arrangements with authorised local representatives are explicitly permitted by the registries we work with. Where rules change, we monitor and adapt the arrangement to maintain compliance."
      },
      {
        "q": "What happens if I want to terminate the arrangement?",
        "a": "You can terminate at any time, subject to appropriate notice. We coordinate transfer to a new registrant of your choosing, including your own local entity, another trustee, or an acquirer in a sale transaction."
      },
      {
        "q": "Are the fees competitive?",
        "a": "Annual administration fees are clear, predictable, and aligned with the work involved. We do not charge transaction fees on top, beyond the standard registry transfer costs that apply to any registration change."
      },
      {
        "q": "Can I use this for multiple country code TLDs?",
        "a": "Yes. We coordinate trustee arrangements across the Nordic region and several other jurisdictions where local presence is required and where our partners are authorised to act."
      },
      {
        "q": "What about WHOIS visibility?",
        "a": "WHOIS records will reflect the trustee arrangement consistent with registry rules. Some registries publish administrative contact details; others permit privacy services. We will explain what is visible before you proceed."
      },
      {
        "q": "Is this used by serious companies?",
        "a": "Yes. Trustee arrangements are routine in international domain holdings, similar to how nominee structures are used in corporate or real estate ownership. The arrangement is recognised, documented, and standard practice."
      }
    ]
  },
  {
    "slug": "portfolio-strategy",
    "category": "Manage",
    "categoryNum": "II",
    "name": "Portfolio Strategy",
    "tagline": "Structure, optimise, and grow your domain portfolio.",
    "intro": [
      "A domain portfolio without a strategy is a collection of expenses. With one, it becomes a long term competitive moat, a defensive shield, and a strategic asset class. The difference shows up over years rather than quarters, but it shows up reliably: lower total cost, fewer surprises, stronger defensive coverage, and a portfolio aligned with where the business is going rather than where it has been.",
      "Most companies arrive at portfolio strategy by way of accident. A domain audit reveals more registrations than anyone remembered. A renewal cycle produces an unexpected invoice. An incident exposes a gap that should have been covered years earlier. Each is a prompt to step back and ask whether the portfolio is supporting the business or simply growing alongside it.",
      "Portfolio strategy is the answer to that question. We help you decide what to keep, what to release, what to acquire, and how to structure ownership for maximum optionality and minimum risk. The deliverable is a written strategy with prioritised actions. The outcome is a portfolio you understand, control, and can defend."
    ],
    "whatItIs": [
      "A complete strategic review of your existing domains against your business priorities.",
      "A structured plan covering acquisitions, divestitures, defensive registrations, and consolidation.",
      "Ownership and registrar architecture designed for security, control, and tax efficiency.",
      "Governance recommendations covering renewal review, registration approval, and incident response.",
      "A documented baseline against which future decisions can be evaluated and tracked."
    ],
    "whoItIsFor": [
      "Companies with portfolios of twenty or more domains seeking professional governance.",
      "Brands expanding internationally and needing a coherent multi market domain strategy.",
      "Investors and family offices treating domains as a long term asset class.",
      "Organisations integrating domain portfolios from acquisitions, mergers, or organisational change.",
      "Boards and executives who want clarity on what their digital infrastructure is and what it costs."
    ],
    "howWeDeliver": [
      "A diagnostic review covering current ownership, costs, exposures, and strategic alignment.",
      "A written strategy document with prioritised actions, costs, and expected outcomes.",
      "Ongoing advisory support as the strategy is implemented over six to eighteen months.",
      "Quarterly check ins to track progress, surface new questions, and adjust priorities.",
      "Direct coordination with your legal, finance, and IT teams as needed for implementation."
    ],
    "outcomes": [
      "A portfolio aligned with business strategy, not historical accident.",
      "Reduced annual costs through consolidation, retirement, and registrar optimisation.",
      "Stronger defensive position through coordinated brand protection and ownership security.",
      "Clear ownership and accountability across the portfolio, eliminating orphan registrations.",
      "A documented baseline ready for board, audit, or M&A diligence purposes."
    ],
    "whenItMatters": [
      {
        "situation": "Post acquisition integration",
        "detail": "You have inherited a domain portfolio through M&A and need to rationalise it into your existing infrastructure."
      },
      {
        "situation": "International expansion",
        "detail": "You are entering new markets and need a coherent strategy for country code domains, defensive coverage, and local language considerations."
      },
      {
        "situation": "Cost reduction mandate",
        "detail": "Finance is asking why domain spend has grown, and the answer requires more than a renewal report."
      },
      {
        "situation": "Governance overhaul",
        "detail": "You are formalising digital asset management and need policies, controls, and documentation that did not previously exist."
      },
      {
        "situation": "Investment thesis development",
        "detail": "You are building a domain investment portfolio and need a strategy that goes beyond opportunistic registrations."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Discovery",
        "detail": "We start with a private conversation covering business priorities, existing portfolio, known issues, and stakeholder expectations. The goal is alignment on what success looks like before any analysis begins."
      },
      {
        "step": "02",
        "title": "Diagnostic review",
        "detail": "We compile a complete inventory of your portfolio, including ownership, costs, exposures, and gaps. The diagnostic produces a baseline that informs every subsequent decision."
      },
      {
        "step": "03",
        "title": "Strategy formulation",
        "detail": "We translate the diagnostic into a written strategy with prioritised actions, expected costs, and target outcomes. Each action carries a clear rationale and success metric."
      },
      {
        "step": "04",
        "title": "Stakeholder review",
        "detail": "We present the strategy to your stakeholders, address questions, and incorporate feedback. The final strategy is one you have signed off on and can defend internally."
      },
      {
        "step": "05",
        "title": "Implementation support",
        "detail": "Most clients engage us to coordinate implementation over six to eighteen months. We handle execution, surface new questions as they arise, and report back on progress."
      },
      {
        "step": "06",
        "title": "Ongoing governance",
        "detail": "After implementation, many clients move to a lighter ongoing engagement covering renewal review, new registration approvals, and quarterly portfolio assessments."
      }
    ],
    "glossary": [
      {
        "term": "Defensive registration",
        "definition": "A domain registered to prevent its use by adversaries, even when there is no intent to use it operationally."
      },
      {
        "term": "Concentration risk",
        "definition": "The risk that arises from holding all or most of a portfolio with a single registrar, single account, or single point of contact."
      },
      {
        "term": "Strategic alignment",
        "definition": "The degree to which a portfolio reflects current business priorities rather than historical accident."
      },
      {
        "term": "Governance",
        "definition": "The policies and processes that determine how a portfolio is managed, including registration approval, renewal review, and incident response."
      }
    ],
    "faq": [
      {
        "q": "How long does a portfolio strategy engagement take?",
        "a": "A typical engagement runs four to eight weeks for diagnostic and strategy, with optional ongoing implementation support thereafter. Larger portfolios with significant complexity can run twelve weeks or longer."
      },
      {
        "q": "What size portfolios do you advise on?",
        "a": "We work with portfolios ranging from twenty to several thousand domains. Smaller portfolios benefit from focused audits rather than full strategy engagements, and we will say so during the initial conversation."
      },
      {
        "q": "Will you implement the strategy or just deliver it?",
        "a": "Both. Many clients prefer ongoing implementation support; others take the strategy and execute internally. Both approaches work, and we adapt to whichever fits your team and capacity."
      },
      {
        "q": "How do you measure success?",
        "a": "Each strategy includes target outcomes such as cost reduction percentages, defensive coverage milestones, or governance maturity stages. Progress is reviewed quarterly, with course correction where outcomes diverge from targets."
      },
      {
        "q": "Do you need access to our registrar accounts?",
        "a": "For diagnostic work, registrar exports are usually sufficient. For implementation, controlled access is helpful but not always required. We design the engagement around your access policies rather than imposing ours."
      },
      {
        "q": "How does this differ from a domain audit?",
        "a": "An audit produces an inventory and risk assessment. A strategy uses that diagnostic as input but extends to long term planning, action prioritisation, and governance design. Many engagements include both phases."
      },
      {
        "q": "Can you coordinate with our legal team?",
        "a": "Yes. Strategy work often touches on trademark coordination, contractual structures, and regulatory compliance. We work alongside your legal team rather than around them."
      },
      {
        "q": "What happens after the strategy is delivered?",
        "a": "You decide. Some clients move directly into implementation with us. Others take the strategy and execute internally. Some return for specific phases of implementation as priorities and capacity allow."
      }
    ]
  },
  {
    "slug": "cost-optimization",
    "category": "Manage",
    "categoryNum": "II",
    "name": "Cost Optimization",
    "tagline": "Eliminate hidden renewal costs across your portfolio.",
    "intro": [
      "Domain registration is a market built on opacity. First year promotional pricing masks renewal rates that can be three to five times higher. Bulk discounts are inconsistently applied. Premium TLD pricing varies wildly between registrars. ICANN fees, restoration charges, and add on services compound the picture. The result is a category where finance teams routinely overpay without knowing why.",
      "Cost optimisation produces clarity. We audit your renewal costs line by line, identify savings, and negotiate enterprise terms where they apply. The work is technical but the outcome is simple: lower total spend, predictable renewal pricing, and elimination of the surprise increases that mid sized portfolios accumulate over time.",
      "Typical clients see twenty to forty percent reduction in annual domain operating costs after consolidation, contract renegotiation, and rationalisation of unused registrations. Larger portfolios with significant fragmentation can see considerably more. The savings compound year over year, and the optimised baseline supports better financial governance going forward."
    ],
    "whatItIs": [
      "A line by line audit of your current registrar invoices and renewal schedules.",
      "A consolidation plan that captures bulk pricing, multi year discounts, and enterprise terms.",
      "Ongoing monitoring to flag rate changes, hidden fees, and renewal price increases.",
      "Negotiation support for direct enterprise contracts with registrars and registries.",
      "Documentation of the optimised baseline for finance team reporting and budget planning."
    ],
    "whoItIsFor": [
      "Companies with portfolios of fifty or more domains exposed to inconsistent registrar pricing.",
      "Finance teams seeking transparent, predictable domain operating costs.",
      "Organisations consolidating after acquisitions, mergers, or registrar fragmentation.",
      "Procurement teams negotiating enterprise registrar contracts for the first time.",
      "CFOs and controllers seeking better governance over recurring digital infrastructure costs."
    ],
    "howWeDeliver": [
      "A privacy preserving audit using your existing registrar exports and invoice records.",
      "A cost reduction plan with documented savings, prioritised by impact and effort.",
      "Coordinated migration to consolidated registrars under negotiated enterprise terms.",
      "Optional ongoing monitoring with alerts on renewal rate changes and budget variances.",
      "Direct support for finance team reporting, including projected versus actual savings tracking."
    ],
    "outcomes": [
      "Typical clients reduce annual domain operating costs by twenty to forty percent.",
      "Predictable, transparent renewal pricing across the entire portfolio.",
      "Eliminated exposure to surprise renewal increases and lapsed registrations.",
      "Improved budget accuracy and reduced variance between forecasted and actual domain spend.",
      "A documented baseline that supports better financial governance and audit readiness."
    ],
    "whenItMatters": [
      {
        "situation": "Renewal sticker shock",
        "detail": "A renewal cycle produced unexpectedly large invoices, and you want to understand why and prevent recurrence."
      },
      {
        "situation": "Post merger integration",
        "detail": "Multiple acquired entities each came with their own registrar arrangements, producing fragmented and inefficient cost structure."
      },
      {
        "situation": "Procurement modernisation",
        "detail": "Your procurement function is professionalising recurring contracts and domain registration is on the list."
      },
      {
        "situation": "CFO mandate",
        "detail": "Finance is asking for cost reduction across recurring infrastructure spend, and domain operations are an obvious candidate."
      },
      {
        "situation": "Pre IPO or due diligence",
        "detail": "You are preparing for a transaction or audit and want recurring costs cleanly documented and optimised."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Data collection",
        "detail": "We compile registrar exports, recent invoices, and renewal schedules. Where data is fragmented across registrars or contacts, we consolidate it into a unified picture."
      },
      {
        "step": "02",
        "title": "Audit and analysis",
        "detail": "We review every line of cost against current market pricing, contract terms, and alternative arrangements. The output is a prioritised list of opportunities by savings potential and implementation effort."
      },
      {
        "step": "03",
        "title": "Recommendation report",
        "detail": "A written report quantifies projected savings, recommends specific actions, and lays out the implementation path. You can implement internally or engage us to coordinate."
      },
      {
        "step": "04",
        "title": "Negotiation support",
        "detail": "For larger portfolios, we negotiate enterprise terms directly with registrars and registries. The savings often exceed the implementation cost by a multiple in the first year alone."
      },
      {
        "step": "05",
        "title": "Migration coordination",
        "detail": "Where consolidation requires migration, we coordinate the technical work to ensure zero downtime, complete record continuity, and full audit trail."
      },
      {
        "step": "06",
        "title": "Ongoing monitoring",
        "detail": "Optional ongoing monitoring tracks renewal rates, flags changes that could affect budget, and surfaces new optimisation opportunities as the portfolio evolves."
      }
    ],
    "glossary": [
      {
        "term": "Loss leader pricing",
        "definition": "A first year promotional rate set well below the renewal rate to attract registrations."
      },
      {
        "term": "Premium TLD",
        "definition": "A TLD with elevated registration and renewal pricing set by the registry rather than the registrar."
      },
      {
        "term": "Enterprise terms",
        "definition": "A negotiated registrar contract with bulk pricing, predictable renewal rates, and dedicated support."
      },
      {
        "term": "ICANN fee",
        "definition": "A small per registration fee collected by registrars on behalf of ICANN, applicable to most generic TLDs."
      }
    ],
    "faq": [
      {
        "q": "How much can I realistically save?",
        "a": "Savings depend on portfolio size and current registrar mix. We typically deliver twenty to forty percent reductions, sometimes considerably more for portfolios with significant fragmentation. Smaller portfolios with one registrar may see less but still benefit from negotiated terms."
      },
      {
        "q": "Will I have to change registrars?",
        "a": "Often yes, but only after a clear cost benefit case. We never recommend migration without documented value, and we coordinate the technical work to ensure zero operational impact."
      },
      {
        "q": "What about premium TLDs with very high renewal fees?",
        "a": "These are reviewed individually. Some can be optimised through registrar choice; others are fixed by registry policy and addressed through portfolio rationalisation. Either way, you understand what you are paying for and why."
      },
      {
        "q": "How long does the audit take?",
        "a": "A complete audit typically runs two to four weeks depending on portfolio size and data availability. Larger portfolios with fragmented records take longer to compile but the analytical work itself moves quickly."
      },
      {
        "q": "How is your fee structured?",
        "a": "Audit and recommendation work is fixed fee based on portfolio scope. Implementation and migration is hourly or project based. For larger portfolios, we sometimes structure compensation against documented savings, aligning incentives directly."
      },
      {
        "q": "Can you handle our finance team reporting needs?",
        "a": "Yes. We produce documentation suitable for finance team reporting, including projected versus actual savings, budget variance analysis, and audit ready cost summaries. We work directly with finance teams when requested."
      },
      {
        "q": "What if our registrar offers to match better pricing?",
        "a": "A common outcome of the audit is an improved offer from the existing registrar. We are happy with that result if it captures the savings without requiring migration. The audit pays for itself either way."
      },
      {
        "q": "Do you have preferred registrars?",
        "a": "We maintain working relationships with multiple registrars but our recommendations are independent and based on your specific needs. We disclose any conflict that could affect our advice and adjust accordingly."
      }
    ]
  },
  {
    "slug": "domain-leasing",
    "category": "Manage",
    "categoryNum": "II",
    "name": "Domain Leasing",
    "tagline": "Flexible alternatives to outright ownership.",
    "intro": [
      "Not every premium domain needs to be purchased. For ventures where capital is constrained or commitment is uncertain, leasing offers full operational use of the domain with significantly lower upfront cost and contractual optionality. The arrangement is well established, increasingly common for early stage companies, and useful in situations where outright acquisition would tie up capital better deployed elsewhere.",
      "A lease typically grants you operational rights for a defined term, often three to five years, with renewal and purchase options at predetermined or formula based pricing. During the lease, the domain operates as your own. DNS, email, hosting, and operational control transfer fully. The registry record reverts only if the lease is not renewed or converted, and the conversion path is contractual rather than negotiated.",
      "For sellers, leasing creates yield from domain assets without disposal. For buyers, it preserves capital for the activities that move the business forward, while securing premium branding and a path to eventual ownership. We structure leases that protect both parties, document the operational and financial terms clearly, and manage conversion or termination cleanly when the time comes."
    ],
    "whatItIs": [
      "Multi year lease agreements for premium domains, with full operational rights.",
      "Lease to own structures with predetermined purchase pricing.",
      "Short term branding leases for product launches and seasonal campaigns.",
      "Legal documentation establishing operational rights, payment terms, and exit conditions.",
      "Optional escrow arrangements securing the path to eventual ownership."
    ],
    "whoItIsFor": [
      "Early stage companies needing premium branding without upfront capital outlay.",
      "Established brands testing new product lines, geographies, or sub brands.",
      "Investors holding domain assets seeking yield without disposal.",
      "Marketing teams running campaigns that benefit from premium domains for a defined period.",
      "Acquirers who want to secure a domain now but defer the capital commitment to a later phase."
    ],
    "howWeDeliver": [
      "A formal lease agreement defining term, payment, operational rights, and renewal or purchase options.",
      "Technical configuration to ensure full operational control during the lease period.",
      "Optional escrow arrangements securing the path to eventual ownership.",
      "Documentation supporting the lease as a legitimate corporate expense or asset for both sides.",
      "End of term coordination, whether that means renewal, purchase, or clean termination."
    ],
    "outcomes": [
      "Access to premium domains without the capital commitment of acquisition.",
      "Contractual optionality to convert to ownership at known terms.",
      "Documented arrangements suitable for finance, audit, and corporate governance.",
      "Yield generation for domain holders without permanent disposal.",
      "A fallback exit path for both parties, with clean termination provisions if the arrangement does not work."
    ],
    "whenItMatters": [
      {
        "situation": "Capital constrained launch",
        "detail": "You are launching a venture and capital is better deployed in product, hiring, and marketing than in a one time domain purchase."
      },
      {
        "situation": "Strategic option preservation",
        "detail": "You want a domain in case the venture succeeds, but you do not want to commit acquisition capital before product market fit."
      },
      {
        "situation": "Campaign or seasonal use",
        "detail": "You need a premium domain for a defined period, such as a campaign, product launch, or seasonal initiative, and outright purchase is not justified."
      },
      {
        "situation": "Yield generation",
        "detail": "You hold premium domains and want to generate income without disposing of strategic assets."
      },
      {
        "situation": "Test before commit",
        "detail": "You want to operate on the domain for a period before committing to permanent acquisition, validating that it delivers the value the price reflects."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Term sheet",
        "detail": "A short term sheet captures the proposed term, monthly or annual payment, renewal mechanics, and purchase option pricing. Both parties review before any binding agreement is drafted."
      },
      {
        "step": "02",
        "title": "Lease agreement",
        "detail": "A full agreement codifies operational rights, payment schedule, default and cure provisions, and termination conditions. The agreement is enforceable across the relevant jurisdictions."
      },
      {
        "step": "03",
        "title": "Technical handover",
        "detail": "DNS, email, and operational access transfer to the lessee. Registry records remain in the lessor name but operational control rests fully with the lessee for the lease term."
      },
      {
        "step": "04",
        "title": "Ongoing operation",
        "detail": "You operate the domain as if you owned it. Payments are made on schedule, and any technical questions or registry communications are routed through us as needed."
      },
      {
        "step": "05",
        "title": "Conversion or renewal",
        "detail": "At a defined point, often the second or third year, the conversion option becomes exercisable. Conversion to full ownership uses the predetermined pricing and follows a clean transfer protocol."
      },
      {
        "step": "06",
        "title": "Termination if applicable",
        "detail": "If the lease is not renewed or converted, operational control reverts to the lessor at end of term. The transition is coordinated to avoid operational disruption to the lessee business."
      }
    ],
    "glossary": [
      {
        "term": "Lessor",
        "definition": "The party that owns the domain and grants the lease."
      },
      {
        "term": "Lessee",
        "definition": "The party that operates the domain under the lease agreement."
      },
      {
        "term": "Conversion option",
        "definition": "A contractual right for the lessee to purchase the domain at predetermined or formula based pricing."
      },
      {
        "term": "Operational control",
        "definition": "Full ability to configure DNS, email, hosting, and other technical aspects of the domain during the lease."
      }
    ],
    "faq": [
      {
        "q": "Can I cancel the lease early?",
        "a": "Yes, subject to the cancellation terms agreed in the lease. Most leases include defined exit provisions, often including a partial term penalty that is materially less than the full remaining lease cost."
      },
      {
        "q": "What if I want to buy the domain during the lease?",
        "a": "Most lease structures include a predetermined or formula based purchase option. Triggering this is straightforward and typically credits some portion of paid lease fees against the purchase price."
      },
      {
        "q": "Who controls DNS, email, and hosting during the lease?",
        "a": "You do. Operational control transfers fully for the lease term, with the registry record reverting at term end if the lease is not converted. From your operational perspective, the domain works exactly as if you owned it."
      },
      {
        "q": "How are the payments structured?",
        "a": "Most leases use monthly or annual payments. Annual payments often carry a discount. Some leases include an upfront payment that secures favourable conversion pricing if the option is exercised."
      },
      {
        "q": "What about SEO and brand equity built during the lease?",
        "a": "Both stay with the domain, which means they accrue to the lessor if the lease ends without conversion. This dynamic typically motivates conversion when the brand has invested meaningfully in the domain."
      },
      {
        "q": "Are leases tax deductible?",
        "a": "In most jurisdictions, lease payments are deductible as operating expense. Specific treatment depends on your jurisdiction and accounting framework, and we coordinate with your finance team or external advisors as needed."
      },
      {
        "q": "What if the lessor goes out of business or sells the domain?",
        "a": "Standard lease agreements include succession provisions ensuring the lease survives the lessor exit. The agreement binds successors, and we structure escrow or registry safeguards to protect lessees against operational disruption."
      },
      {
        "q": "How long can a lease run?",
        "a": "Most leases run three to five years initially, with renewal options. Some run longer for premium category defining domains where the lessee commitment justifies extended terms."
      }
    ]
  },
  {
    "slug": "registrar-advisory",
    "category": "Manage",
    "categoryNum": "II",
    "name": "Registrar Advisory",
    "tagline": "The right registrar setup for security and control.",
    "intro": [
      "Your choice of registrar affects security, cost, support quality, and operational flexibility, often more than executives realise until something goes wrong. A compromised registrar account can take down a business in hours. An overly fragmented setup creates concentration risk in unexpected places. A poorly chosen registrar can lock you into pricing structures that produce surprise increases for years.",
      "Registrar advisory is the structural work that prevents these outcomes. We assess your current setup against your actual operational and risk profile, recommend an architecture matched to your needs, and coordinate migration where appropriate. The work is unglamorous but the impact compounds: every year you operate on a sound registrar architecture is a year you have not spent recovering from one that failed.",
      "The recommendations are independent. We maintain working relationships with multiple registrars but earn no commission on registry fees and have no inventory to clear. The right registrar for your situation might be one we have never recommended before. The wrong registrar, even if convenient, gets called out in writing."
    ],
    "whatItIs": [
      "A current state assessment covering registrar, account structure, security controls, and support quality.",
      "Recommendations for primary, secondary, and specialised registrar usage based on your profile.",
      "Migration planning and execution coordination, with zero downtime and full audit trail.",
      "Security architecture covering account access, DNS controls, transfer locks, and recovery procedures.",
      "Documentation of the recommended setup for governance, audit, and operational continuity."
    ],
    "whoItIsFor": [
      "Companies whose domain operations are concentrated with one registrar, creating concentration risk.",
      "Organisations operating high value domains where registrar security gaps could be catastrophic.",
      "Teams inheriting fragmented registrar setups through acquisitions or organisational change.",
      "IT and security leaders who want registrar architecture aligned with their broader security posture.",
      "CFOs and procurement teams seeking better leverage and predictability with registrar contracts."
    ],
    "howWeDeliver": [
      "A two week assessment producing a written architecture recommendation.",
      "Coordinated migrations executed during low impact windows with rollback procedures.",
      "Ongoing monitoring of registrar performance, security advisories, and pricing changes.",
      "Direct coordination with your IT, security, and finance teams as needed for implementation.",
      "Documentation suitable for board, audit, and operational continuity planning purposes."
    ],
    "outcomes": [
      "A registrar setup matched to actual business risk and operational requirements.",
      "Reduced concentration risk and improved resilience against registrar issues.",
      "Stronger security posture across the entire domain portfolio.",
      "Predictable pricing and improved leverage in registrar contract negotiations.",
      "Clear documentation supporting governance and operational continuity standards."
    ],
    "whenItMatters": [
      {
        "situation": "Single registrar concentration",
        "detail": "Your entire portfolio sits with one registrar, creating a single point of failure for your digital presence."
      },
      {
        "situation": "Security incident or near miss",
        "detail": "A registrar account compromise, social engineering attempt, or transfer hijack has highlighted gaps in your current setup."
      },
      {
        "situation": "Inherited complexity",
        "detail": "Acquisitions, departures, or organisational change have left you with fragmented registrar relationships you do not fully understand."
      },
      {
        "situation": "Regulatory or audit pressure",
        "detail": "External audit, regulatory expectations, or board scrutiny is asking for documented domain governance you do not currently have."
      },
      {
        "situation": "Pricing unpredictability",
        "detail": "Registrar invoices have grown unpredictably and you want to understand both cause and remediation."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Current state mapping",
        "detail": "We document your existing registrar setup, account structure, security configuration, and operational patterns. Some of what surfaces is usually a surprise even to the team that owns it."
      },
      {
        "step": "02",
        "title": "Risk assessment",
        "detail": "We rate the current setup against operational, security, financial, and continuity criteria. The output is a clear picture of where you stand and which gaps deserve immediate attention."
      },
      {
        "step": "03",
        "title": "Architecture recommendation",
        "detail": "We propose a target architecture covering primary, secondary, and specialised registrars; account structure; security controls; and renewal management. The recommendation is justified, costed, and actionable."
      },
      {
        "step": "04",
        "title": "Stakeholder alignment",
        "detail": "We present to your IT, security, and finance teams, address questions, and adjust the recommendation as needed. Implementation works only when stakeholders are aligned."
      },
      {
        "step": "05",
        "title": "Migration execution",
        "detail": "For changes that require migration, we coordinate timing, technical execution, and rollback procedures. Zero downtime is the standard, not the aspiration."
      },
      {
        "step": "06",
        "title": "Operational handover",
        "detail": "After migration, we hand over operational documentation, run a post implementation review, and remain available for follow up questions and adjustments."
      }
    ],
    "glossary": [
      {
        "term": "Transfer lock",
        "definition": "A registrar setting that prevents unauthorised transfer of a domain to another registrar."
      },
      {
        "term": "EPP code",
        "definition": "An authorisation code required to transfer a domain between registrars; effectively a password for the transfer."
      },
      {
        "term": "Concentration risk",
        "definition": "The risk that arises from concentrating critical assets with a single provider, account, or contact."
      },
      {
        "term": "Registry lock",
        "definition": "A registry level lock applied to high value domains, preventing changes without out of band authentication."
      }
    ],
    "faq": [
      {
        "q": "Do you have preferred registrar partners?",
        "a": "We maintain working relationships with multiple registrars, but our recommendations are independent and based on your specific needs, not commercial preferences. We disclose any conflict that could affect our advice."
      },
      {
        "q": "What is the risk of consolidating with a single registrar?",
        "a": "Concentration risk: a single point of failure for your entire digital presence. For critical domains, we typically recommend at least two registrars, with the most valuable assets held at the registrar with the strongest security posture."
      },
      {
        "q": "How long does migration take?",
        "a": "Typical portfolios migrate over four to twelve weeks, with no operational impact when properly planned. Larger portfolios can run six months or longer for full consolidation, executed in phases."
      },
      {
        "q": "What about registry lock for high value domains?",
        "a": "Registry lock is a strong control for category defining domains. It adds friction to the transfer process, which is the point. We help you identify which domains warrant the lock and coordinate with the registrar to implement it."
      },
      {
        "q": "How does this affect our DNS?",
        "a": "DNS configuration is independent of registrar choice in most setups. Migration of the registrar record does not change DNS resolution, provided the new registrar honours the existing nameserver configuration. We verify this explicitly in every migration plan."
      },
      {
        "q": "Can you negotiate enterprise terms?",
        "a": "Yes. For larger portfolios, we negotiate directly with registrars on pricing, renewal predictability, dedicated support, and security features. The leverage of a portfolio commitment often produces meaningfully better terms than retail pricing."
      },
      {
        "q": "What about backup and recovery?",
        "a": "Recovery procedures are part of the architecture. We design for the case where a registrar account is compromised or the registrar itself becomes unavailable. The procedures are documented and rehearsed where appropriate."
      },
      {
        "q": "Does this overlap with cost optimisation?",
        "a": "Yes, registrar advisory and cost optimisation are closely related. Many engagements combine both, since registrar choice drives both security posture and cost structure. We are happy to scope either alone or both together."
      }
    ]
  },
  {
    "slug": "domain-audit",
    "category": "Manage",
    "categoryNum": "II",
    "name": "Domain Audit",
    "tagline": "Portfolio health check across security, costs, and exposure.",
    "intro": [
      "Most companies do not know exactly what domains they own, what they cost, who controls them, or what risks they carry. The portfolio grew organically, registrations were made by departing staff, acquisitions came with their own inventory, and renewals happened automatically until they did not. The result is a category of digital infrastructure where the actual state is rarely the assumed state.",
      "A domain audit produces clarity. We review every domain in your portfolio against operational, security, financial, and strategic criteria, and deliver a prioritised action list covering what needs to happen first, what can wait, and what does not need attention at all. The work is methodical, the output is actionable, and the engagement is bounded by scope rather than open ended.",
      "For most clients, the audit is a one time engagement that produces a baseline. From that baseline, ongoing governance becomes possible. Renewal cycles can be reviewed against documented inventory rather than estimated from invoices. New registrations can be approved against documented criteria. Risks can be tracked rather than discovered. The audit pays for itself by preventing one or two of the incidents most portfolios eventually experience."
    ],
    "whatItIs": [
      "A complete inventory and assessment of all domains held by your organisation.",
      "Analysis covering ownership, registrar, security, cost, expiry exposure, and strategic alignment.",
      "A prioritised action list addressing highest risk and highest value items first.",
      "Documentation suitable for governance, audit, and future strategic planning.",
      "Optional remediation support to implement the highest priority actions."
    ],
    "whoItIsFor": [
      "Companies that have not formally reviewed their domain portfolio in over twelve months.",
      "Organisations preparing for audit, due diligence, or M&A activity.",
      "Teams inheriting domain operations from departing staff or acquired entities.",
      "IT and security leaders who suspect undocumented exposure across digital assets.",
      "CFOs and controllers who want a documented baseline for recurring infrastructure cost."
    ],
    "howWeDeliver": [
      "Privacy preserving review using your registrar exports and a structured questionnaire.",
      "A written audit report with findings, risk ratings, and prioritised recommendations.",
      "Optional remediation support to implement the highest priority actions.",
      "Direct coordination with your IT, security, finance, and legal teams as needed.",
      "A documented baseline ready for handoff to internal governance or external audit."
    ],
    "outcomes": [
      "Complete visibility into your domain assets, costs, and risks.",
      "Identified and remediated security gaps, expiring registrations, and orphaned assets.",
      "A documented baseline suitable for governance, audit, and strategic planning.",
      "Quantified savings opportunities and risk reduction priorities.",
      "A foundation for ongoing portfolio governance, replacing reactive renewal management."
    ],
    "whenItMatters": [
      {
        "situation": "Pre transaction diligence",
        "detail": "You are preparing for a transaction and need a clean inventory of digital assets that will withstand acquirer scrutiny."
      },
      {
        "situation": "Inherited portfolio",
        "detail": "You have just inherited responsibility for a portfolio you did not build and need to understand what you are dealing with."
      },
      {
        "situation": "Post incident response",
        "detail": "A registrar incident, expired registration, or brand abuse case has prompted a broader review."
      },
      {
        "situation": "Governance maturity push",
        "detail": "You are formalising governance across recurring digital infrastructure and the domain portfolio is one of the categories."
      },
      {
        "situation": "Cost reduction mandate",
        "detail": "Finance is asking why domain spend has grown, and the answer requires more than registrar invoices."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Scoping",
        "detail": "We define the scope, including which entities, registrars, and domain categories are in or out. Scoping protects against drift and ensures the engagement delivers the agreed output."
      },
      {
        "step": "02",
        "title": "Data collection",
        "detail": "You provide registrar exports, recent invoices, and answers to a structured questionnaire. Where data is missing or fragmented, we flag it and use the audit to fill the gaps."
      },
      {
        "step": "03",
        "title": "Inventory consolidation",
        "detail": "We build a unified inventory across registrars, with ownership, cost, expiry, and configuration data normalised into one view. This single source of truth is one of the audit most valuable outputs."
      },
      {
        "step": "04",
        "title": "Risk and opportunity analysis",
        "detail": "We rate each domain on security, cost, expiry, and strategic alignment. The analysis produces both a risk register and an opportunity list, prioritised by impact and effort."
      },
      {
        "step": "05",
        "title": "Findings report",
        "detail": "A written report consolidates the inventory, ratings, findings, and recommendations. The report is structured for both technical reviewers and executive stakeholders."
      },
      {
        "step": "06",
        "title": "Remediation roadmap",
        "detail": "For clients who want to act on the findings, we provide a remediation roadmap with sequencing, effort estimates, and expected outcomes. Implementation can be done internally or with our coordination."
      }
    ],
    "glossary": [
      {
        "term": "Inventory",
        "definition": "A complete list of domains held by an organisation, with ownership, registrar, cost, and configuration details."
      },
      {
        "term": "Risk register",
        "definition": "A documented list of identified risks with severity ratings and recommended mitigations."
      },
      {
        "term": "Orphan domain",
        "definition": "A domain that is registered but has no documented owner, purpose, or operational use within the organisation."
      },
      {
        "term": "Expiry exposure",
        "definition": "The risk of accidentally letting a domain lapse, often through outdated contact details or unmanaged renewal settings."
      }
    ],
    "faq": [
      {
        "q": "How long does an audit take?",
        "a": "Typically two to four weeks depending on portfolio size and information availability. Larger portfolios with fragmented records take longer to compile but the analytical work moves quickly once data is consolidated."
      },
      {
        "q": "Is the audit confidential?",
        "a": "Absolutely. All work is performed under formal confidentiality, with controls on data access and retention. Findings are shared only with the client team you nominate, and source data is destroyed at engagement close unless you request retention."
      },
      {
        "q": "Will you find domains we did not know we had?",
        "a": "Frequently yes. Many audits uncover orphaned domains registered by former staff, acquired entities, or external agencies. Recovering control of these is often one of the audit highest value outcomes."
      },
      {
        "q": "What does the audit report include?",
        "a": "A unified inventory, risk and opportunity ratings, prioritised findings, and a recommended action roadmap. The report is suitable for both technical reviewers and executive stakeholders, with appropriate detail at each level."
      },
      {
        "q": "How is your fee structured?",
        "a": "Audit work is fixed fee based on portfolio scope. We provide a written fee proposal after initial scoping, before the engagement begins. There are no hidden costs or scope creep."
      },
      {
        "q": "Can you help with remediation as well?",
        "a": "Yes. Most clients engage us for some level of remediation support after the audit, ranging from coordination of the highest priority actions to full implementation of the roadmap. Both are scoped separately."
      },
      {
        "q": "What if our portfolio is small?",
        "a": "For portfolios under twenty domains, a focused review is usually more appropriate than a full audit. We will say so during scoping and propose an alternative engagement structure if appropriate."
      },
      {
        "q": "How does an audit differ from portfolio strategy?",
        "a": "An audit produces an inventory and risk assessment. A strategy uses that diagnostic as input but extends to long term planning, action prioritisation, and governance design. Many engagements combine both phases sequentially."
      }
    ]
  },
  {
    "slug": "brand-protection",
    "category": "Protect",
    "categoryNum": "III",
    "name": "Brand Protection",
    "tagline": "Defensive registrations and active monitoring.",
    "intro": [
      "Brand protection is not about registering every possible variant. The maximalist approach, popular in the early 2010s, produces inflated registration costs and false confidence. It does not stop a determined adversary, who simply registers something not on the defensive list, and it does not address the active threats that emerge after registration. What works instead is a risk based defensive footprint combined with continuous monitoring and structured response.",
      "We help you decide what to register defensively, what to monitor actively, and what to do when threats are found. The defensive footprint is sized to your actual risk profile rather than a maximum coverage checklist. Monitoring catches new threats as they emerge rather than relying on point in time registration. Response procedures move from notification through formal demand to dispute escalation in proportion to severity.",
      "The work is ongoing. New TLDs launch, adversary tactics evolve, and brand exposure changes as your business grows or shifts. A brand protection programme that was right two years ago will not be right today, and the discipline is in keeping it current rather than registering and forgetting. We design the programme, run the monitoring, and coordinate response, leaving you with brand protection that actually protects."
    ],
    "whatItIs": [
      "A risk based defensive registration strategy covering typo squats, alternate TLDs, and brand abuse vectors.",
      "Continuous monitoring for new registrations matching your brand, products, or executives.",
      "Coordinated response to identified threats, from monitoring to dispute escalation.",
      "Structured response procedures sized to threat severity and business impact.",
      "Ongoing review and adjustment as new TLDs, adversary tactics, and business priorities evolve."
    ],
    "whoItIsFor": [
      "Brands that have experienced phishing, fraud, or impersonation incidents.",
      "Companies operating in high trust industries such as finance, health, and professional services.",
      "Organisations expanding internationally and needing proactive defensive coverage.",
      "Public facing brands with significant search visibility and adversary attention.",
      "Trademark owners coordinating digital protection with broader IP enforcement programmes."
    ],
    "howWeDeliver": [
      "A scoping engagement defining brands, variants, and TLDs warranting defensive coverage.",
      "Registration of priority defensive domains under appropriate ownership structures.",
      "Continuous monitoring with alerting on new registrations, content changes, and threats.",
      "Tiered response procedures from monitoring to formal demand to dispute escalation.",
      "Periodic programme review to adjust scope as threats and business priorities evolve."
    ],
    "outcomes": [
      "A defensive footprint sized to your actual risk, not maximalist registration.",
      "Early detection of impersonation, phishing, and brand abuse.",
      "A documented response framework when threats are identified.",
      "Reduced exposure to phishing fraud, customer confusion, and brand reputation damage.",
      "A defensible programme record for legal, regulatory, and audit purposes."
    ],
    "whenItMatters": [
      {
        "situation": "Recent incident",
        "detail": "You have experienced phishing, customer fraud, or brand impersonation and need to prevent recurrence and address ongoing exposure."
      },
      {
        "situation": "High trust industry",
        "detail": "You operate in finance, health, professional services, or another category where customer trust is core to the business."
      },
      {
        "situation": "International expansion",
        "detail": "You are entering new markets and need defensive coverage in country code TLDs and language variants."
      },
      {
        "situation": "New product launch",
        "detail": "You are launching a product or sub brand that will attract attention from typo squatters and impersonators."
      },
      {
        "situation": "M&A integration",
        "detail": "You have acquired a brand and need to assess and rationalise the inherited defensive registrations."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Threat modelling",
        "detail": "We map the actual threats your brand faces: phishing of customers, impersonation of executives, typo squatting on key terms, brand abuse in adversarial markets. The model is specific to your business rather than generic."
      },
      {
        "step": "02",
        "title": "Defensive footprint design",
        "detail": "We design a defensive registration footprint sized to the threats identified. Most footprints are twenty to fifty domains, focused rather than maximalist. Each registration carries a documented rationale."
      },
      {
        "step": "03",
        "title": "Registration execution",
        "detail": "We register the defensive footprint under appropriate ownership structures. Where possible, defensive registrations are held under structures that simplify ongoing administration without compromising visibility."
      },
      {
        "step": "04",
        "title": "Monitoring setup",
        "detail": "We configure monitoring across new registrations, content changes on existing lookalikes, and adversarial signals such as MX record activation. Alerts are tuned to your tolerance for false positives."
      },
      {
        "step": "05",
        "title": "Response procedures",
        "detail": "We document response procedures by threat type and severity. Routine impersonation gets formal demand. Phishing setup gets escalated takedown. Persistent abuse gets dispute proceedings. Procedures are rehearsed before they are needed."
      },
      {
        "step": "06",
        "title": "Programme review",
        "detail": "Quarterly or annual programme review updates the footprint and procedures based on observed threats, new TLDs, and business changes. The programme stays current rather than going stale."
      }
    ],
    "glossary": [
      {
        "term": "Typo squat",
        "definition": "A domain registered with a misspelling of a target brand, often used for phishing or traffic interception."
      },
      {
        "term": "UDRP",
        "definition": "Uniform Domain Name Dispute Resolution Policy, an administrative process for resolving cybersquatting disputes."
      },
      {
        "term": "Defensive footprint",
        "definition": "The set of defensive registrations held to prevent specific threats to a brand."
      },
      {
        "term": "Brand abuse",
        "definition": "Use of a brand in a domain or website in ways that mislead customers, damage reputation, or facilitate fraud."
      }
    ],
    "faq": [
      {
        "q": "Do I need to register hundreds of defensive domains?",
        "a": "Almost never. A focused defensive registration strategy of twenty to fifty domains is usually more effective than maximalist coverage of hundreds. The point is to address actual threats, not to check a coverage box."
      },
      {
        "q": "What does monitoring detect?",
        "a": "New registrations matching your brand, content changes on lookalike domains, MX record activations suggesting phishing setup, and similar adversarial signals. Alerts are calibrated to your tolerance for false positives versus missed threats."
      },
      {
        "q": "What happens when a threat is found?",
        "a": "We escalate from notification, to formal demand, to UDRP or court action depending on severity and your preferences. Routine cases follow standard procedures; severe cases are flagged for executive review before action."
      },
      {
        "q": "How much does it cost?",
        "a": "Cost has two components: registration fees for the defensive footprint and advisory fees for monitoring and response. Both are scoped before engagement, with predictable annual costs and clear escalation pricing for severe cases."
      },
      {
        "q": "How do you decide what to register defensively?",
        "a": "Through threat modelling. We assess what adversaries are likely to do, what would actually harm your business, and which defensive registrations would frustrate that. The list is short, focused, and updated as threats evolve."
      },
      {
        "q": "Should we register every new gTLD?",
        "a": "No. Most new gTLDs do not attract adversarial attention against most brands. The threshold is whether adversaries are likely to use the TLD against you, not whether the TLD exists. We track new TLDs and add to the footprint when justified."
      },
      {
        "q": "How does this work with our trademark portfolio?",
        "a": "Brand protection coordinates with trademark enforcement rather than duplicating it. UDRP and similar procedures rely on trademark rights, so the trademark portfolio is the foundation. We work with your trademark counsel to ensure alignment."
      },
      {
        "q": "Can you handle takedowns of phishing sites?",
        "a": "Yes. Takedown coordination with hosts, registrars, and registry operators is a standard part of the response framework. For phishing in particular, speed matters and we maintain procedures for rapid escalation."
      }
    ]
  },
  {
    "slug": "domain-recovery",
    "category": "Protect",
    "categoryNum": "III",
    "name": "Domain Recovery",
    "tagline": "UDRP and dispute resolution for stolen or contested domains.",
    "intro": [
      "Domains can be lost in many ways. Hijacking through registrar account compromise. Fraud through social engineering of registrar support. Expired registration with adversarial pickup at the moment of release. Trademark disputes where the domain was registered in bad faith years ago. Each path to loss has different recovery options, different costs, and different probabilities of success.",
      "Recovery is rarely straightforward. UDRP works for cybersquatting where the registrant has no legitimate claim, but it does not work for contested cases where both parties have arguable rights. Court action works for clear theft but is expensive and slow. Negotiation works in surprising number of cases but only when the position is correctly framed and the counterparty is engageable. Knowing which path applies, and pursuing it correctly, is most of the work.",
      "We assess the situation honestly before committing significant cost. If the case is strong, we file. If the case is weak, we say so and look for alternative paths or recommend walking away. The goal is the right outcome at the right cost, not maximum activity. Most cases that should succeed do succeed; the cases that should not, we identify before fees compound."
    ],
    "whatItIs": [
      "Initial case assessment covering legal merit, likely outcomes, and recommended approach.",
      "Preparation and filing of UDRP, URS, or local administrative dispute proceedings.",
      "Coordination with legal counsel for litigation when administrative processes are insufficient.",
      "Negotiated settlement support where the case favours direct resolution over formal proceedings.",
      "Post recovery domain transfer coordination and operational handover."
    ],
    "whoItIsFor": [
      "Brand owners facing cybersquatting or bad faith registration of domains containing their marks.",
      "Companies whose domains have been hijacked through registrar fraud or social engineering.",
      "Owners attempting to recover domains lost through expiration and adversarial pickup.",
      "Trademark holders coordinating digital enforcement with broader IP protection programmes.",
      "Individuals and family offices recovering personal or estate held domains lost to fraud."
    ],
    "howWeDeliver": [
      "A two week initial assessment covering merit, likely cost, and probability of success.",
      "Full preparation of dispute filings, evidence packages, and procedural management.",
      "Representation through to decision, with coordinated post resolution domain transfer.",
      "Coordination with external legal counsel for litigation paths where administrative processes are insufficient.",
      "Post recovery handover including DNS, registrar, and operational continuity planning."
    ],
    "outcomes": [
      "Clear understanding of the legal position before committing significant cost.",
      "Professional representation through complex administrative or legal processes.",
      "Successful recovery in cases of clear cybersquatting and trademark abuse.",
      "Realistic expectation setting for cases where recovery is uncertain or unlikely.",
      "Documented case file suitable for related legal, regulatory, or insurance proceedings."
    ],
    "whenItMatters": [
      {
        "situation": "Domain hijacking",
        "detail": "A registrar account compromise or social engineering attack has resulted in unauthorised transfer of your domain."
      },
      {
        "situation": "Expired and reclaimed",
        "detail": "Your domain expired due to administrative oversight and was picked up by an adversarial third party at the moment of release."
      },
      {
        "situation": "Bad faith registration",
        "detail": "Someone has registered a domain containing your trademark with no legitimate use, and is using it for adversarial purposes or attempting to extract payment."
      },
      {
        "situation": "Inherited dispute",
        "detail": "You have acquired a brand or company and inherited an active domain dispute or pending UDRP filing."
      },
      {
        "situation": "Sophisticated cybersquatting",
        "detail": "A persistent cybersquatter has registered multiple variants of your brand and is operating a coordinated infringement programme."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Case intake",
        "detail": "A confidential initial conversation gathers the facts: what happened, when, what evidence exists, what has already been tried. The intake is structured to surface the information that determines the right path forward."
      },
      {
        "step": "02",
        "title": "Legal assessment",
        "detail": "We assess legal merit against the relevant standard, whether UDRP, URS, local administrative procedure, or court litigation. The output is a written assessment with merit rating, likely cost, and probability of success."
      },
      {
        "step": "03",
        "title": "Strategy decision",
        "detail": "You decide whether to proceed and on what path. Some cases warrant immediate filing; others are better served by negotiation; a few should be dropped. We will tell you which is which."
      },
      {
        "step": "04",
        "title": "Preparation and filing",
        "detail": "For administrative procedures, we prepare the filing, assemble evidence, and submit through the appropriate dispute provider. For litigation, we coordinate with external counsel and support their preparation."
      },
      {
        "step": "05",
        "title": "Procedural management",
        "detail": "We manage the procedural calendar, response to objections, and any supplementary evidence requests. Most administrative procedures resolve within six to ten weeks of filing."
      },
      {
        "step": "06",
        "title": "Recovery and handover",
        "detail": "On a successful decision, we coordinate transfer of the domain back to you, update registrar and DNS configuration, and document the case file for any related proceedings."
      }
    ],
    "glossary": [
      {
        "term": "UDRP",
        "definition": "Uniform Domain Name Dispute Resolution Policy, an administrative process for resolving cybersquatting disputes for most generic TLDs."
      },
      {
        "term": "URS",
        "definition": "Uniform Rapid Suspension, a faster but more limited administrative procedure for clear cut cybersquatting cases."
      },
      {
        "term": "Cybersquatting",
        "definition": "Registration of a domain containing a trademark with bad faith intent, typically to extract payment from the trademark owner."
      },
      {
        "term": "Hijacking",
        "definition": "Unauthorised transfer or control of a domain, often through registrar account compromise or social engineering."
      }
    ],
    "faq": [
      {
        "q": "How long does UDRP take?",
        "a": "Typical UDRP proceedings resolve within six to ten weeks from filing, faster than most court alternatives. Complex cases or those with extended response periods can run twelve to sixteen weeks but rarely longer."
      },
      {
        "q": "What does it cost?",
        "a": "UDRP filing fees are fixed by the dispute provider, typically a few thousand dollars for single domain disputes. Our advisory fees are quoted before filing based on case complexity. Total cost for a clear cut case is usually well under ten thousand dollars including filing fees."
      },
      {
        "q": "What if my case is not strong enough for UDRP?",
        "a": "We will tell you that during the assessment phase. Negotiation, court action, or simply walking away may be the right choice. We do not file weak cases to generate fees."
      },
      {
        "q": "Can you handle hijacking cases?",
        "a": "Yes. Hijacking through registrar fraud is treated differently from cybersquatting and often resolves through registrar dispute procedures and law enforcement coordination rather than UDRP. We handle both pathways."
      },
      {
        "q": "What evidence do you need?",
        "a": "For trademark cases, registered trademark certificates and evidence of use. For hijacking cases, contemporaneous documentation of the unauthorised change. For all cases, factual chronology of events, communications, and any internal investigation results."
      },
      {
        "q": "What if the respondent does not respond to UDRP?",
        "a": "Default decisions are common in clear cybersquatting cases. The complainant still needs to prove the case, but the absence of a response often simplifies the procedure and accelerates the timeline."
      },
      {
        "q": "Can you handle international cases?",
        "a": "Yes. UDRP applies to most generic TLDs regardless of jurisdiction. For country code TLDs, local procedures apply, and we coordinate with appropriate local counsel where needed."
      },
      {
        "q": "What about appeals or losses?",
        "a": "UDRP decisions are not appealed in the traditional sense, but losing parties can file court litigation within ten days to overturn the decision. We assess the risk of court challenge during the initial case assessment."
      }
    ]
  },
  {
    "slug": "privacy-whois",
    "category": "Protect",
    "categoryNum": "III",
    "name": "Privacy and WHOIS Management",
    "tagline": "GDPR compliant data protection for domain ownership.",
    "intro": [
      "WHOIS records can expose home addresses, personal phone numbers, and identifying information to anyone with a browser. For executives, public figures, and privacy conscious owners, this is unacceptable exposure. The exposure feeds spam, unsolicited contact, and in serious cases targeted harassment, social engineering, and physical security risk. The default WHOIS settings on most registrars do not address any of this adequately.",
      "Privacy and WHOIS management implements compliant privacy services, ownership structures, and data minimisation that protect personal information while preserving full control. The work is technical and varies by TLD: some allow comprehensive privacy services, others have public WHOIS by registry policy, and a few have transitioned to limited disclosure under GDPR. The right setup depends on the TLD mix in your portfolio and the level of privacy you actually need.",
      "For most clients, the work is one time setup followed by light ongoing maintenance. The exposure that existed for years is closed in a few weeks. The privacy posture is documented and defensible. Future registrations are made under the right settings from day one. The data that should not be public stops being public, and stays that way."
    ],
    "whatItIs": [
      "WHOIS privacy services that mask personal contact details from public records.",
      "Ownership structuring through corporate entities or trustee arrangements where appropriate.",
      "Data minimisation review of registrar account information, billing details, and DNS records.",
      "Coordination with registrars to apply consistent privacy settings across the portfolio.",
      "Documentation of the privacy posture suitable for governance and regulatory review."
    ],
    "whoItIsFor": [
      "Executives and public figures whose personal information should not appear in WHOIS records.",
      "Owners of domains receiving threats, harassment, or unwanted contact through public records.",
      "Privacy conscious investors, founders, and operators wanting baseline data protection.",
      "High net worth individuals whose home addresses or personal details have appeared in registrations.",
      "Compliance officers responsible for personal data protection across corporate digital infrastructure."
    ],
    "howWeDeliver": [
      "A two week privacy assessment covering current exposure across your portfolio.",
      "Implementation of privacy services, restructured ownership, and minimised data exposure.",
      "Ongoing monitoring for data leaks, registry policy changes, and new exposure points.",
      "Coordination with registrars to apply privacy settings consistently across the portfolio.",
      "Documentation of the privacy posture for governance, regulatory, and audit purposes."
    ],
    "outcomes": [
      "Personal contact details removed from public WHOIS records across all jurisdictions.",
      "Ownership structures that preserve control while limiting public attribution.",
      "A documented privacy posture that meets GDPR and regional data protection requirements.",
      "Reduced exposure to spam, unsolicited contact, and targeted harassment.",
      "Defensible audit trail demonstrating active privacy management."
    ],
    "whenItMatters": [
      {
        "situation": "Public figure exposure",
        "detail": "Your home address or personal phone number appears in WHOIS records and you have begun receiving unwanted contact."
      },
      {
        "situation": "Executive registration",
        "detail": "Domains were registered under personal names and details years ago, and the historical exposure has accumulated through WHOIS history archives."
      },
      {
        "situation": "Targeted harassment",
        "detail": "You have received threats or harassment that appears to leverage WHOIS information, and you need to close the exposure quickly."
      },
      {
        "situation": "Compliance review",
        "detail": "Internal or external compliance review has flagged WHOIS exposure as a personal data protection concern."
      },
      {
        "situation": "New venture launch",
        "detail": "You are launching a venture and want to start with the right privacy settings from day one rather than retrofitting later."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Exposure assessment",
        "detail": "We map the current WHOIS exposure across your portfolio. The assessment covers active records, historical records visible through archives, and any related data leak through registrar accounts or DNS configuration."
      },
      {
        "step": "02",
        "title": "Architecture design",
        "detail": "We design the privacy architecture appropriate to your TLD mix and privacy goals. Some TLDs accept simple privacy services; others require corporate or trustee structures to achieve the same result."
      },
      {
        "step": "03",
        "title": "Implementation",
        "detail": "We coordinate with registrars to apply privacy settings, restructure ownership where needed, and update administrative and billing details to remove personal exposure. Most portfolios complete implementation within four weeks."
      },
      {
        "step": "04",
        "title": "Verification",
        "detail": "We verify the privacy posture across all relevant data sources, including registrar WHOIS, registry WHOIS, and known archive services. Any remaining exposure is documented and addressed."
      },
      {
        "step": "05",
        "title": "Documentation",
        "detail": "We document the privacy posture, including which TLDs have which protections and any residual exposure that cannot be eliminated. The documentation is suitable for governance and regulatory review."
      },
      {
        "step": "06",
        "title": "Ongoing monitoring",
        "detail": "Optional ongoing monitoring tracks registry policy changes, new exposure points, and any deterioration in the privacy posture. Most clients adopt at least light ongoing monitoring after initial implementation."
      }
    ],
    "glossary": [
      {
        "term": "WHOIS",
        "definition": "A public database that lists registration details for domain names, including registrant contact information."
      },
      {
        "term": "Privacy service",
        "definition": "A registrar feature that replaces personal contact details in WHOIS with proxy information."
      },
      {
        "term": "GDPR",
        "definition": "General Data Protection Regulation, the EU framework for personal data protection that has reshaped WHOIS disclosure standards."
      },
      {
        "term": "Data minimisation",
        "definition": "The principle of collecting and retaining only the personal data necessary for the stated purpose."
      }
    ],
    "faq": [
      {
        "q": "Will my domains still be in my name?",
        "a": "Yes. Privacy services do not change beneficial ownership; they limit what is publicly displayed. Where stronger privacy is required, ownership can be restructured through corporate or trustee arrangements without changing economic ownership."
      },
      {
        "q": "Are privacy services available for all TLDs?",
        "a": "Most major TLDs support privacy services. Some country code TLDs have restrictions which we manage through compliant alternatives such as corporate ownership or local presence services with appropriate privacy posture."
      },
      {
        "q": "What about legal disclosure requirements?",
        "a": "Privacy services do not impair legitimate legal process. Disclosure can be compelled by appropriate authorities through proper channels, but ordinary public visibility is removed."
      },
      {
        "q": "How does GDPR affect WHOIS?",
        "a": "GDPR has driven major TLDs and registrars to limit public WHOIS disclosure for natural persons. The result is generally improved privacy by default, but the protections vary by TLD and registrar, and are not always applied consistently."
      },
      {
        "q": "What about historical WHOIS records in archives?",
        "a": "Archive services have copied historical WHOIS data and may continue to display it. Active engagement with archive operators can sometimes secure removal, but the exposure cannot always be fully closed. We assess and address this explicitly."
      },
      {
        "q": "Does privacy affect my ability to recover the domain if it is lost?",
        "a": "No. Beneficial ownership is preserved through documentation regardless of public WHOIS settings. Recovery procedures rely on registrar records and our documentation, not public WHOIS."
      },
      {
        "q": "How is this different from corporate ownership?",
        "a": "Privacy services hide contact details. Corporate ownership changes who is named as registrant. Both can be combined for stronger privacy, and we recommend the right combination based on your specific situation."
      },
      {
        "q": "What about email exposure?",
        "a": "Privacy services typically replace your personal email with a forwarding address. The exposure of your underlying email is removed, while legitimate communications can still reach you through the proxy."
      }
    ]
  },
  {
    "slug": "domain-valuation",
    "category": "Advise",
    "categoryNum": "IV",
    "name": "Domain Valuation",
    "tagline": "Data driven valuations for investment, accounting, and strategy.",
    "intro": [
      "A defensible domain valuation depends on more than search volume estimates and comparable sales tables. It requires market data, business specific demand signals, comparable transactions adjusted for context, and industry expertise that distinguishes between recent prices and durable value. Most automated valuation tools fail this standard. Most informal valuations from registrars or brokers fail it too.",
      "We produce valuations that hold up to scrutiny in financial reporting, litigation, M&A, and acquisition negotiations. The methodology combines market comparables, income approach, and replacement cost analysis. The output is a written report with clear assumptions, documented comparables, and a defensible conclusion. The audience is anyone who needs to rely on the number, including auditors, courts, regulators, and counterparties.",
      "The work is bespoke. Each valuation reflects the specific domain, the purpose for which the valuation is needed, and the documentation standard required. A valuation for board reporting differs from one for tax authorities, which differs from one for litigation. We tailor the depth, methodology, and presentation accordingly, while maintaining the analytical standard across all engagements."
    ],
    "whatItIs": [
      "Independent written valuations of individual domains and complete portfolios.",
      "Methodology covering market comparables, income approach, and replacement cost analysis.",
      "Documentation suitable for financial reporting, litigation, due diligence, and negotiation.",
      "Periodic revaluation services for clients with significant domain assets requiring annual marks.",
      "Expert testimony or representation in disputes where the valuation is challenged."
    ],
    "whoItIsFor": [
      "Companies recording domains as intangible assets for financial reporting purposes.",
      "Parties to litigation, acquisition, or settlement negotiations involving domain assets.",
      "Investors, lenders, and acquirers requiring third party valuations for diligence purposes.",
      "Tax advisors and counsel needing supporting valuations for cross border transactions or estate matters.",
      "Insurers and brokers underwriting policies that include digital intangible assets."
    ],
    "howWeDeliver": [
      "A scoping conversation defining purpose, methodology, and required documentation standard.",
      "A written valuation report with methodology, assumptions, comparables, and conclusions.",
      "Optional expert testimony or representation in disputes where the valuation is challenged.",
      "Periodic revaluations for ongoing engagements requiring annual or semi annual updates.",
      "Direct coordination with auditors, counsel, and counterparties as the valuation is used."
    ],
    "outcomes": [
      "A defensible valuation that withstands accounting, tax, and legal scrutiny.",
      "A documented basis for negotiation, transaction, or financial reporting.",
      "Clear understanding of underlying value drivers, risks, and sensitivities.",
      "Reduced risk of valuation challenge in due diligence, audit, or court proceedings.",
      "Documentation that supports related professional advice from accounting, tax, or legal advisors."
    ],
    "whenItMatters": [
      {
        "situation": "Financial reporting",
        "detail": "You need to record acquired domains at appropriate carrying value, with annual impairment review supported by independent valuation."
      },
      {
        "situation": "M&A diligence",
        "detail": "A transaction includes domain assets and the acquirer or seller needs an independent valuation to support negotiation or post closing accounting."
      },
      {
        "situation": "Litigation or dispute",
        "detail": "A domain is the subject of trademark, contract, or estate dispute and the proceedings require an independent valuation."
      },
      {
        "situation": "Tax planning or audit",
        "detail": "Cross border transactions, estate planning, or tax audit requires defensible valuations of domain assets."
      },
      {
        "situation": "Insurance and risk",
        "detail": "You are underwriting or claiming on policies that include digital intangible assets and require independent valuation support."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Purpose definition",
        "detail": "We start by understanding why the valuation is needed: financial reporting, litigation, M&A, tax, insurance, or strategy. The purpose drives methodology choice, depth, and documentation standard."
      },
      {
        "step": "02",
        "title": "Data gathering",
        "detail": "We compile data on the subject domain including registration history, traffic, search positioning, and historical use. We also assemble comparable transactions, market trends, and any contextual factors that affect value."
      },
      {
        "step": "03",
        "title": "Methodology selection",
        "detail": "We select the methodology mix appropriate to the situation. Most valuations combine market comparables, income approach, and replacement cost analysis, weighted according to the strength of supporting data."
      },
      {
        "step": "04",
        "title": "Analysis",
        "detail": "We perform the analysis, document assumptions, and reach a valuation conclusion supported by the underlying data. The analysis is structured to be reviewable and defensible against challenge."
      },
      {
        "step": "05",
        "title": "Report production",
        "detail": "A written report consolidates methodology, assumptions, comparables, analysis, and conclusion. The report is structured to professional standards and tailored to the documentation requirements of the intended audience."
      },
      {
        "step": "06",
        "title": "Defence and revision",
        "detail": "For valuations subject to challenge, we are available to defend the methodology, respond to questions, and revise the conclusion if new evidence justifies revision. Our reports are prepared with this scrutiny in mind from the start."
      }
    ],
    "glossary": [
      {
        "term": "Market comparables",
        "definition": "Sales of similar domains used to establish benchmark valuations for the subject domain."
      },
      {
        "term": "Income approach",
        "definition": "A valuation method that estimates value based on expected income generation, often used for revenue producing domains."
      },
      {
        "term": "Replacement cost",
        "definition": "A valuation method that estimates what it would cost to replace the subject domain with a comparable alternative."
      },
      {
        "term": "Carrying value",
        "definition": "The value at which an asset is recorded on a balance sheet, typically lower of cost or market."
      }
    ],
    "faq": [
      {
        "q": "How long does a valuation take?",
        "a": "Single domain valuations take one to three weeks. Portfolio valuations scale with complexity, typically four to eight weeks. Expedited timelines are possible where required and appropriate scope adjustments are made."
      },
      {
        "q": "Will the valuation hold up in court?",
        "a": "Our valuations are prepared to professional standards and are regularly used in litigation, M&A diligence, and tax matters. We are available to defend the methodology and conclusions where the valuation is challenged."
      },
      {
        "q": "Do you provide ongoing valuation updates?",
        "a": "Yes. Many clients with significant domain assets engage us for annual or semi annual updates as part of asset management. Updates use the original methodology with refreshed market data, ensuring consistent comparability over time."
      },
      {
        "q": "What methodologies do you use?",
        "a": "Most valuations combine market comparables, income approach, and replacement cost analysis. The weighting depends on the subject domain and available data. The methodology is documented in the report so that auditors and other reviewers can assess it."
      },
      {
        "q": "Are your valuations independent?",
        "a": "Yes. We are not the buyer, seller, broker, or counterparty. Our compensation is fixed for the engagement, not contingent on the conclusion. The independence is structural and documented in every report."
      },
      {
        "q": "How precise are the valuations?",
        "a": "Valuations are conclusions supported by methodology, not exact prices. Reports typically include a single best estimate accompanied by sensitivity analysis showing how the conclusion varies under different assumptions."
      },
      {
        "q": "Can you value generic domains, brand domains, and country code domains?",
        "a": "Yes. The methodology applies across categories with appropriate adjustment for the value drivers specific to each. We have valued generic single word domains, premium brand domains, and category defining country code domains across multiple jurisdictions."
      },
      {
        "q": "What about portfolio level valuations?",
        "a": "Portfolio valuations require additional methodology to account for diversification, correlation, and concentration. We perform individual valuations for material domains and apply portfolio level analysis for the aggregate. The result is suitable for both balance sheet and strategic decision making."
      }
    ]
  },
  {
    "slug": "naming-advisory",
    "category": "Advise",
    "categoryNum": "IV",
    "name": "Naming Advisory",
    "tagline": "Naming strategy for new ventures, products, and brands.",
    "intro": [
      "A great name is short, memorable, ownable, and aligned with strategy. Most names that meet the first three criteria fail the fourth. Many names that meet all four cannot be secured, because the domain or trademark is held by someone else, or because the name reads differently in another language, or because regulatory considerations narrow the field. The result is that naming projects often produce shortlists where no candidate is fully workable.",
      "Naming advisory is the discipline that prevents this. We work with founders, marketing leaders, and strategy teams to develop name candidates with explicit attention to availability and trademark from the start. The output is a shortlist where each candidate is genuinely viable, supported by domain availability research, basic trademark screening, and linguistic review.",
      "The engagement is collaborative. We bring market knowledge, naming methodology, and digital and trademark availability research. You bring strategic context, brand voice, and the judgement that ultimately decides which name fits. Together the work produces names you can stand behind for years rather than names you regret six months after launch."
    ],
    "whatItIs": [
      "Structured naming workshops to define naming strategy, voice, and selection criteria.",
      "Generation of candidate names with linguistic and trademark screening.",
      "Domain availability research, acquisition support, and trademark filing coordination.",
      "Cross language review for international launches and multi market rollouts.",
      "Final selection support with hands on assistance securing the chosen assets."
    ],
    "whoItIsFor": [
      "Founders launching new ventures who want to start with the right name and domain.",
      "Companies launching new products, sub brands, or geographic expansions.",
      "Marketing and brand teams undertaking rebrand or repositioning projects.",
      "Strategy teams evaluating multiple naming options against business priorities.",
      "Investors and operators acquiring shells or assets where rebranding is part of the plan."
    ],
    "howWeDeliver": [
      "An initial workshop to define strategy, criteria, and constraints.",
      "A structured shortlist of candidate names with availability, trademark, and acquisition assessment.",
      "Hands on support securing the chosen name across domains, trademarks, and social handles.",
      "Coordination with specialist trademark counsel for filing of priority applications.",
      "Optional follow on support for related digital identity work after the name is selected."
    ],
    "outcomes": [
      "A name that meets strategic, linguistic, and operational criteria from day one.",
      "Secured digital and trademark assets aligned with the chosen name.",
      "Avoided the costly rework that comes from naming decisions made in isolation from availability.",
      "Documented naming rationale suitable for board, investor, and team alignment.",
      "A foundation for related brand, product, and digital identity work that follows naming."
    ],
    "whenItMatters": [
      {
        "situation": "New venture launch",
        "detail": "You are starting a company and want a name that supports the long term strategy rather than constraining it."
      },
      {
        "situation": "Major rebrand",
        "detail": "You are repositioning a company or product and need a new name that reflects the strategic direction."
      },
      {
        "situation": "New product or sub brand",
        "detail": "You are launching a product line or sub brand and need a name that fits the master brand while standing alone effectively."
      },
      {
        "situation": "International expansion",
        "detail": "You are entering new markets and need to verify the existing name works internationally or develop a market specific alternative."
      },
      {
        "situation": "Spin off or carve out",
        "detail": "You are spinning off a business unit and need a new name and digital identity disconnected from the parent."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Strategy workshop",
        "detail": "A working session covers business strategy, brand voice, target audience, competitive positioning, and naming criteria. The output is a written brief that anchors the rest of the engagement."
      },
      {
        "step": "02",
        "title": "Candidate generation",
        "detail": "We develop name candidates using structured methodology, including invented words, real words, abstract names, and descriptive options. The longlist runs to dozens of candidates before filtering."
      },
      {
        "step": "03",
        "title": "Initial screening",
        "detail": "We screen candidates for linguistic problems, obvious trademark conflicts, and clear domain unavailability. Most candidates fall away at this stage, leaving a workable shortlist."
      },
      {
        "step": "04",
        "title": "Detailed availability research",
        "detail": "For shortlist candidates, we conduct detailed domain availability research, basic trademark screening across target jurisdictions, and acquisition feasibility assessment for premium domains."
      },
      {
        "step": "05",
        "title": "Selection support",
        "detail": "We present the shortlist with availability and acquisition data, support the selection decision, and document the rationale. The selection is yours; we provide the analysis to support it."
      },
      {
        "step": "06",
        "title": "Asset securing",
        "detail": "For the selected name, we coordinate domain acquisition, trademark filing, and social handle registration. The result is a coherent set of digital and IP assets ready for launch."
      }
    ],
    "glossary": [
      {
        "term": "Naming brief",
        "definition": "A written document capturing strategy, voice, and criteria that informs the naming process."
      },
      {
        "term": "Linguistic screening",
        "definition": "Review of candidate names for unintended meanings, pronunciation issues, or cultural problems across target markets."
      },
      {
        "term": "Trademark screening",
        "definition": "Initial review of trademark databases for conflicts that could prevent registration or use."
      },
      {
        "term": "Premium domain",
        "definition": "A domain with established value or specific characteristics that justify pricing above standard registration costs."
      }
    ],
    "faq": [
      {
        "q": "How long does a naming engagement take?",
        "a": "Typical engagements run six to ten weeks from kickoff to selected, secured name. Faster timelines are possible for narrower scopes; slower timelines apply for engagements involving extensive cross language or multi market work."
      },
      {
        "q": "Do you handle trademark filing?",
        "a": "We coordinate with specialist trademark counsel. Our role is to ensure the chosen name is filable, not to file applications ourselves. We can recommend trademark counsel familiar with your jurisdictions and budget."
      },
      {
        "q": "What if no domain is available for the name we want?",
        "a": "That is exactly the kind of constraint we identify early. Most engagements iterate between naming and availability research, so by the time you select a name, you know what it will cost to secure the domain or how to adjust the name to fit available domains."
      },
      {
        "q": "How do you handle international considerations?",
        "a": "For multi market launches, we conduct linguistic review across target languages and screen for trademark conflicts in priority jurisdictions. The depth varies with budget and timeline, but the basics are included in every international engagement."
      },
      {
        "q": "What about premium domain costs?",
        "a": "Premium domains can range from low thousands to seven figures depending on the name. We identify the realistic cost during shortlist screening so the selection decision can factor cost alongside other criteria."
      },
      {
        "q": "Can you generate names internally or do we need external creatives?",
        "a": "We can do either. Some clients prefer to generate names internally and engage us for screening and securing. Others prefer full service generation. Both work, and the engagement structure is scoped accordingly."
      },
      {
        "q": "Do you work with branding agencies?",
        "a": "Yes. We often partner with branding agencies who handle creative development while we handle availability and acquisition. The combination produces stronger outcomes than either discipline alone, and the boundaries are clear."
      },
      {
        "q": "What about social media handle availability?",
        "a": "Social handle screening is part of the standard engagement. The handles are rarely the deciding factor, but they are factored in alongside domain and trademark availability for shortlist candidates."
      }
    ]
  },
  {
    "slug": "market-intelligence",
    "category": "Advise",
    "categoryNum": "IV",
    "name": "Market Intelligence",
    "tagline": "Trends, pricing movements, and opportunities.",
    "intro": [
      "The domain market does not have a Bloomberg terminal. Pricing is opaque, transactions are often confidential, and trends are scattered across hundreds of registrars, marketplaces, and private venues. Most public reporting reflects retail listings rather than serious transactions, and the data that does emerge typically lags the moves it describes by months or years.",
      "Market intelligence aggregates, analyses, and distils what is happening into briefings that inform investment, acquisition, and strategy decisions. The work draws on transaction data, registry statistics, observable market signals, and direct relationships across the international domain community. The output is structured, timely, and explicitly framed for operators rather than enthusiasts.",
      "For investors and operators with significant domain holdings, the intelligence supports portfolio decisions: when to acquire, when to divest, when to wait, and where the next opportunities are emerging. For executives whose strategic position depends on category specific trends, the intelligence provides the context that internal teams cannot easily build. For boards and finance teams, it provides credible third party input into how the digital asset class is evolving."
    ],
    "whatItIs": [
      "Quarterly briefings covering pricing trends, notable transactions, and category specific developments.",
      "Bespoke research on specific TLDs, keyword categories, or competitor portfolios.",
      "Alerting on transactions and registrations relevant to your sector or strategy.",
      "Direct access to market signals through our network of advisors, brokers, and industry contacts.",
      "Strategic briefings for boards, leadership teams, and investment committees."
    ],
    "whoItIsFor": [
      "Investors, family offices, and operators with significant domain holdings.",
      "Companies whose strategic position depends on category specific domain trends.",
      "Boards and executives wanting periodic intelligence on the digital asset class.",
      "Acquirers evaluating the domain dimension of M&A targets and integration plans.",
      "Strategy teams modelling future digital infrastructure costs and asset positioning."
    ],
    "howWeDeliver": [
      "Subscription based quarterly briefings covering market wide and category specific developments.",
      "Bespoke research projects on defined topics, with written reports and optional briefing.",
      "Real time alerts on specific transactions, registrations, or category movements.",
      "Confidential access to market signals not available through public sources.",
      "Direct briefings to leadership teams and investment committees as appropriate."
    ],
    "outcomes": [
      "A clearer view of market dynamics affecting your portfolio and strategy.",
      "Earlier awareness of emerging opportunities and threats in your sector.",
      "Decision support based on data rather than rumour or anecdote.",
      "Board level intelligence on the digital asset class, distilled to actionable signals.",
      "Documented market context supporting acquisition, divestment, and strategy decisions."
    ],
    "whenItMatters": [
      {
        "situation": "Active portfolio management",
        "detail": "You hold a significant domain portfolio and need ongoing intelligence to inform acquisition, hold, and divestment decisions."
      },
      {
        "situation": "Sector specific exposure",
        "detail": "Your business or investment thesis is concentrated in a specific category, and you need deep intelligence on that category rather than general market overview."
      },
      {
        "situation": "Pre transaction context",
        "detail": "You are evaluating a transaction and need market context to support pricing, structuring, and integration decisions."
      },
      {
        "situation": "Board reporting",
        "detail": "Your board has asked for periodic intelligence on the digital asset class, and internal teams cannot easily produce credible third party perspective."
      },
      {
        "situation": "New market entry",
        "detail": "You are entering a market or category where you lack established intelligence, and you need to build context quickly through credible third party sources."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Scope definition",
        "detail": "For subscription engagements, we agree the categories, geographies, and depth of regular briefings. For bespoke research, we agree the specific question, the deliverable format, and the timeline."
      },
      {
        "step": "02",
        "title": "Source aggregation",
        "detail": "We aggregate data from transaction records, registry statistics, market signals, and direct relationships across the international community. The aggregation is the foundation that distinguishes our briefings from public reporting."
      },
      {
        "step": "03",
        "title": "Analysis",
        "detail": "We analyse the aggregated data to identify trends, anomalies, and signals that warrant attention. The analysis prioritises actionable insight over comprehensive coverage."
      },
      {
        "step": "04",
        "title": "Briefing production",
        "detail": "Quarterly briefings are produced on a scheduled cadence and distributed to subscribers. Bespoke research is delivered in the agreed format, typically a written report with optional in person or video briefing."
      },
      {
        "step": "05",
        "title": "Alerting and follow up",
        "detail": "For subscribers receiving real time alerts, signals are pushed as they emerge, with appropriate context. We follow up on significant developments with deeper analysis where warranted."
      },
      {
        "step": "06",
        "title": "Strategic dialogue",
        "detail": "Subscribers can raise specific questions through the engagement, and we incorporate them into upcoming briefings or address them directly. The engagement is a dialogue, not a one way feed."
      }
    ],
    "glossary": [
      {
        "term": "Briefing",
        "definition": "A structured intelligence report covering market trends, transactions, and developments relevant to a defined audience."
      },
      {
        "term": "Market signal",
        "definition": "An observable event or pattern that suggests a meaningful trend or opportunity in the broader market."
      },
      {
        "term": "Transaction data",
        "definition": "Records of completed domain transactions, including price, parties where disclosed, and structural details."
      },
      {
        "term": "Bespoke research",
        "definition": "Custom research conducted to answer a specific client question, distinct from regular subscription briefings."
      }
    ],
    "faq": [
      {
        "q": "What categories do you cover?",
        "a": "Briefings cover broad market dynamics across major TLD categories and Nordic markets specifically. Bespoke research can be commissioned for any category, TLD, or geography where credible analysis is feasible."
      },
      {
        "q": "How often are briefings published?",
        "a": "Standard briefings are quarterly. Real time alerts on specific topics can be configured separately for subscribers who need faster signal on defined categories or transaction types."
      },
      {
        "q": "Are briefings available outside of subscriptions?",
        "a": "Selected past briefings are available individually. Active subscribers receive all briefings, supporting data, and the ability to commission bespoke follow up. Non subscribers can purchase individual reports where they are available."
      },
      {
        "q": "How is your data different from public market reporting?",
        "a": "Most public reporting reflects retail listings rather than serious transactions, and lags the underlying moves by months or years. Our data combines transaction records, registry signals, and direct relationships, producing more timely and accurate intelligence."
      },
      {
        "q": "What about confidentiality of source data?",
        "a": "Our briefings respect the confidentiality of underlying transactions. Specific deals are referenced only where parties have permitted disclosure or where the transaction is already public. Aggregated trends are derived without compromising any individual source."
      },
      {
        "q": "Can you brief our board or investment committee?",
        "a": "Yes. Strategic briefings to boards, leadership teams, and investment committees are part of our practice. The format adapts to the audience, with the analytical depth tuned to the time and context available."
      },
      {
        "q": "What does a bespoke research engagement involve?",
        "a": "A bespoke engagement is scoped around a specific question. We agree the question, deliverable format, timeline, and fee before starting. Most bespoke engagements run two to six weeks depending on scope."
      },
      {
        "q": "How is your fee structured?",
        "a": "Subscription fees are fixed annual, with tiers reflecting briefing depth and access to bespoke research. Standalone bespoke engagements are quoted before work begins. Fees and scope are transparent throughout the engagement."
      }
    ]
  }
]
