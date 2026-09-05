import type { ReactNode } from 'react';
import Link from 'next/link';

export type LegalSection = { id: string; title: string; body: ReactNode };
export type LegalDocument = {
  slug: 'terms' | 'privacy' | 'dpa' | 'acceptable-use';
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const lastUpdated = '4 September 2026';
const legalEmail = 'help@antbuildz.ai';
const ContactLink = () => <a href={`mailto:${legalEmail}`}>{legalEmail}</a>;

const terms: LegalDocument = {
  slug: 'terms',
  title: 'Antbuildz AI Terms of Service',
  description: 'Terms governing the use of Antbuildz AI services, including the AI Sales Agent and AI Webstore Suite.',
  lastUpdated,
  sections: [
    {
      id: 'about-these-terms', title: '1. About These Terms', body: <>
        <p>These Terms of Service (the <strong>Terms</strong>) form an agreement between Antbuildz Pte. Ltd., UEN 202007699D (<strong>Antbuildz</strong>, <strong>we</strong>, <strong>us</strong> or <strong>our</strong>) and the person or entity accepting them (<strong>Customer</strong> or <strong>you</strong>). They govern Antbuildz AI services made available through antbuildz.ai, related applications and ordering processes.</p>
        <p>By creating an account, accepting an Order Form, subscribing, or using the Services, you agree to these Terms. If an individual accepts for a business, that individual represents that they have authority to bind it. An <strong>Order Form</strong> means an ordering document, online checkout or written proposal that identifies the Services, subscription period, fees or other commercial terms.</p>
        <p>These Terms govern Antbuildz AI software and SaaS services. Transactions conducted through the Antbuildz.com marketplace may be subject to separate marketplace agreements, rental terms, sales terms or other applicable policies. These Terms do not replace those marketplace documents.</p>
      </>,
    },
    {
      id: 'services', title: '2. Antbuildz AI Services', body: <>
        <p>The <strong>Services</strong> are AI-powered software services that may include AI agents, webstores, sales and rental functionality, inventory, knowledge bases, lead capture, quotation and enquiry workflows, bookings and reservations, marketplace synchronisation, APIs and integrations. Available features depend on the plan, configuration and Order Form; examples are not a commitment to provide every feature in every plan or to maintain a particular integration permanently.</p>
        <p>Antbuildz may provide implementation, configuration or support services where stated in an Order Form. Any timetable is an estimate unless expressly agreed otherwise in writing.</p>
      </>,
    },
    {
      id: 'eligibility', title: '3. Eligibility and Business Use', body: <>
        <p>The Services are designed primarily for business and professional use. Any person legally capable of entering a contract may subscribe, subject to payment requirements and applicable law; a registered company is not required. Subscriptions may be purchased worldwide where provision and use are lawful and supported. Mandatory consumer or local-law protections remain unaffected.</p>
      </>,
    },
    {
      id: 'accounts', title: '4. Accounts and Authorised Users', body: <>
        <p>You are responsible for the accuracy of account information, for maintaining the confidentiality of credentials, and for all activity by your authorised users. You must assign access appropriate to each user, promptly remove access that is no longer required, and notify Antbuildz without undue delay if you suspect unauthorised access.</p>
        <p>You may not share individual credentials except through functionality expressly designed for shared or team access. Antbuildz may rely on instructions submitted through your account by an authorised user.</p>
      </>,
    },
    {
      id: 'subscriptions', title: '5. Subscription Plans, Fees and Payment', body: <>
        <p>Monthly and annual recurring subscriptions are offered. Features, allowances, credit packages, fees and billing frequency are shown on the <Link href="/pricing">Pricing Page</Link>, at checkout, in the applicable Order Form or otherwise at purchase. Website prices are primarily in USD; the currency displayed at purchase controls. Future pricing may change with reasonable advance notice for renewals, but existing paid periods will not be retrospectively repriced.</p>
        <p>Fees are payable through the authorised payment method. Taxes are additional unless stated otherwise. Corporate customers may pay by invoice, bank transfer or another method agreed in writing. You remain responsible for applicable taxes other than taxes on Antbuildz’s net income.</p>
        <h3>14-day free trial</h3>
        <p>The current trial offer is 14 days and requires a credit card. Eligibility, trial limits and future promotional offers may change as disclosed before enrolment; the offer accepted for your trial controls. A paid subscription begins automatically only where checkout clearly discloses the conversion date, plan, price and renewal terms and obtains your payment authorisation. Providing account details alone does not authorise a subscription charge. Otherwise, a separate purchase is required to continue paid access.</p>
        <h3>Refunds and billing errors</h3>
        <p>Payments are generally non-refundable. Refunds are available for verified duplicate charges, incorrect Antbuildz billing, Antbuildz system or payment errors causing an incorrect charge, and where required by law. Unused subscription time, unused allowances, unused purchased credits or inactivity do not themselves entitle you to a refund. Report a suspected error to <ContactLink /> with enough information to investigate; this does not restrict statutory remedies.</p>
      </>,
    },
    {
      id: 'renewal', title: '6. Subscription Renewal and Cancellation', body: <>
        <p>Unless an Order Form or checkout states otherwise, a paid subscription renews for successive periods equal to the initial subscription period until cancelled. You may cancel through available account controls or by giving written notice before the next renewal date. Cancellation normally takes effect at the end of the then-current paid period.</p>
        <p>Ending a subscription does not relieve either party of obligations accrued before the effective end date. Antbuildz may provide information about export or retrieval of Customer Content before access ends, subject to the applicable plan and technical availability.</p>
      </>,
    },
    {
      id: 'usage', title: '7. Upgrades, Downgrades and Additional Usage', body: <>
        <p>Plan changes may take effect immediately or at the next billing period as shown during the change or agreed in writing. A downgrade may reduce features, capacity or access after it takes effect. Usage above an included allowance may require an upgrade, purchased credits or additional charges at the rate shown at purchase or in the Order Form.</p>
        <h3>Conversations and usage measurement</h3>
        <p>A <strong>Conversation</strong> is a meaningful AI interaction concerning a relevant product, service, sales, rental, support or business enquiry, covering up to five back-and-forth message exchanges. One user message and its corresponding AI reply generally constitute one exchange. Continued meaningful interaction after five exchanges may consume another Conversation. Test prompts, spam, obvious system traffic and non-meaningful or unrelated interactions may be excluded. Antbuildz’s metering system determines usage consistently and in good faith; contact us if you dispute a measurement.</p>
        <p>Included monthly Conversations are consumed first, expire at the end of each applicable monthly allowance period and do not roll over, including on annual subscriptions. Purchased or extra Conversation Credits are consumed afterwards. Purchased Credits currently do not expire, have no cash value and are non-transferable unless expressly permitted. They remain subject to the refund rules above and lawful account suspension or termination; non-expiry is not a promise of perpetual service availability.</p>
        <h3>Auto Top-Up</h3>
        <p>Auto Top-Up is optional and requires your express authorisation. <strong>Total Available Conversations</strong> means remaining included monthly Conversations plus remaining purchased or extra Credits. The current default threshold is five Total Available Conversations, unless a different threshold is displayed and accepted in your account.</p>
        <p>When the total reaches or falls below the configured threshold, enabled Auto Top-Up authorises purchase of your selected credit package using your authorised payment method at the price disclosed to you. Top-ups may recur repeatedly as usage continues, not just once per billing cycle. No spending cap is promised. Use available account controls to change or disable Auto Top-Up; if a control is unavailable, contact <ContactLink />. Disabling stops future top-ups once effective, not purchases already initiated. Antbuildz must obtain any further authorisation required for a changed package or price.</p>
      </>,
    },
    {
      id: 'ai-sales-agent', title: '8. AI Sales Agent', body: <>
        <p>The AI Sales Agent may interact with end users, answer questions, retrieve approved information, recommend products, reference catalogue or inventory information, capture leads, assist with enquiries and perform configured workflows. Its behaviour depends on Customer Content, instructions, integrations, model behaviour and configuration.</p>
        <p>You are responsible for defining the Agent’s purpose, permissions, commercial boundaries, escalation points and human-review process, and for testing it before and during customer-facing use.</p>
      </>,
    },
    {
      id: 'webstore-suite', title: '9. AI Webstore Suite', body: <>
        <p>The AI Webstore Suite provides technology for publishing and operating a Customer-branded product, sales, rental or enquiry experience. Unless Antbuildz expressly agrees otherwise, Antbuildz is not the seller, buyer, lessor, lessee, manufacturer, distributor or end customer in transactions between you and your customers.</p>
        <p>You remain responsible for prices, taxes, product legality, fulfilment, delivery, warranties, refunds, returns, rental conditions, customer agreements, product specifications and all other commercial obligations arising from your webstore activity.</p>
        <p>This includes quotations, availability, deposits, equipment suitability, quality, safety and regulatory compliance. A reservation or booking generated through the Services does not make Antbuildz the seller, supplier, equipment lessor, rental operator, dealer or contracting party between you and your customer, unless separately agreed.</p>
      </>,
    },
    {
      id: 'customer-content', title: '10. Customer Content and Inventory Data', body: <>
        <p><strong>Customer Content</strong> means content, data and materials submitted to or connected with the Services by or for Customer, including catalogues, inventory, price lists, product information, manuals, documents, uploaded knowledge, images, specifications, availability and business information. Customer retains ownership of Customer Content.</p>
        <p>You are responsible for the accuracy, quality, legality and currency of Customer Content and for obtaining all rights and notices necessary for Antbuildz to process it. Inventory and availability information may be delayed, incomplete or dependent on third-party systems; your final confirmation process should account for this.</p>
        <p>Where marketplace synchronisation is enabled or agreed, you authorise publication of eligible product and equipment information designated for public webstore or marketplace listings. Private knowledge-base documents, conversations and confidential Customer Content are not authorised for publication merely because public listings are synchronised. Separate marketplace transaction terms may apply; they do not replace these Antbuildz AI Terms.</p>
      </>,
    },
    {
      id: 'ai-output', title: '11. AI-Generated Responses and Recommendations', body: <>
        <p>AI-generated output is produced automatically and may be inaccurate, incomplete, inconsistent or outdated. Antbuildz does not warrant that every response, recommendation, summary or generated item will be correct or suitable for a particular purpose. You and your users should verify important information before relying on it.</p>
        <p>For industrial products, equipment and machinery, AI output does not replace required professional, engineering, safety, regulatory, manufacturer or technical verification. You must maintain appropriate human review for safety-critical, regulated, high-value or technically complex decisions.</p>
        <p>AI is decision-support software, not a substitute for engineers, competent persons, lifting plans, load calculations, manufacturer instructions, safety procedures or statutory requirements. Reconfirm equipment capacities, specifications and operating requirements before use. You and end users are responsible for determining suitability. To the extent permitted by law, Antbuildz is not responsible for an incorrect response caused by inaccurate, outdated, conflicting or incomplete Customer Content, without excluding responsibility for its own breach or non-excludable duties.</p>
      </>,
    },
    {
      id: 'commercial-authority', title: '12. Commercial Authority and Customer Responsibility', body: <>
        <p>Unless you deliberately configure an authorised workflow with clear approval rules, AI-generated quotations, recommendations, price indications, availability information, product suggestions and rental or sales recommendations do not independently create a legally binding contract on your behalf. Final commitments remain subject to your configured approval or confirmation process.</p>
        <p>You are responsible for supervising use of the Services, responding to escalations, correcting known errors and ensuring that customer-facing statements comply with applicable law and your own commercial policies.</p>
      </>,
    },
    {
      id: 'third-parties', title: '13. Third-Party Services and Integrations', body: <>
        <p>The Services may interoperate with third-party AI, cloud, infrastructure, analytics, payment, communication, scheduling, inventory or other services. Your use of a third-party service may be subject to that provider’s terms and privacy practices. Antbuildz is not responsible for third-party services outside its control, but remains responsible for its own obligations under these Terms and the DPA.</p>
        <p>Integrations may change, become unavailable or require additional terms or fees. You authorise Antbuildz to exchange Customer Content with integrations you enable to the extent needed to provide the requested functionality.</p>
      </>,
    },
    {
      id: 'acceptable-use', title: '14. Acceptable Use', body: <>
        <p>The <Link href="/agreements/acceptable-use">Acceptable Use Policy</Link> is incorporated into these Terms and applies to you and your users.</p>
        <p>You and your users must not:</p>
        <ul>
          <li>use the Services unlawfully, fraudulently or to infringe another person’s rights;</li>
          <li>upload malware or content that is illegal or that you have no right to process;</li>
          <li>attack, overload, disrupt, probe or attempt unauthorised access to the Services or another customer’s environment;</li>
          <li>circumvent usage controls, security restrictions or access permissions;</li>
          <li>reverse engineer or attempt to derive non-public source code, except to the limited extent such restriction is prohibited by law;</li>
          <li>misrepresent AI output as independently verified professional advice, or use the Services to deceive end users unlawfully; or</li>
          <li>use the Services for prohibited activities or in a manner likely to cause material harm to Antbuildz, the Services or third parties.</li>
        </ul>
      </>,
    },
    {
      id: 'intellectual-property', title: '15. Intellectual Property and Licence', body: <>
        <p>Antbuildz and its licensors retain all rights in the Services, software, interfaces, workflows, system architecture, APIs, technology, templates, AI orchestration, product design, documentation and improvements. Subject to these Terms and payment of applicable fees, Antbuildz grants Customer a limited, non-exclusive, non-transferable and non-sublicensable right during the subscription period to permit authorised users to access and use the Services for Customer’s internal business operations and authorised customer-facing workflows.</p>
        <p>Customer grants Antbuildz and its service providers only the non-exclusive rights reasonably necessary to host, retrieve, process, transform, transmit, store, secure and use Customer Content to provide the Services under these Terms, the DPA and Customer’s instructions, including permitted retention after termination. Antbuildz does not acquire ownership of Customer Content.</p>
        <p>You may use output generated for you subject to applicable law and third-party rights. Antbuildz does not guarantee output is unique, copyright-protectable or free of third-party rights.</p>
        <p>If you provide feedback, Antbuildz may use it without restriction or payment, provided it does not identify you or disclose your Confidential Information.</p>
      </>,
    },
    {
      id: 'confidentiality', title: '16. Confidentiality', body: <>
        <p><strong>Confidential Information</strong> is non-public information disclosed by one party that is marked confidential or should reasonably be understood as confidential. It excludes information lawfully known without restriction, independently developed, publicly available through no breach, or lawfully received from a third party.</p>
        <p>Each recipient will use Confidential Information only to perform or exercise rights under the agreement, protect it using reasonable care, and disclose it only to personnel and providers who need to know and are bound by confidentiality duties. A recipient may disclose information when legally required after giving notice where permitted.</p>
        <p>Antbuildz will not intentionally expose private Customer knowledge to unrelated Customers, use it to train another Customer’s AI Agent, or use private knowledge-base content to train shared Antbuildz models for unrelated Customers. This does not prevent necessary processing for inference by contracted AI and infrastructure providers under applicable data-protection obligations.</p>
        <p>Access to Customer conversations by Antbuildz personnel must be authorised and limited to relevant content reasonably needed for customer-requested support or troubleshooting, security or abuse investigations, legal obligations, protecting the platform or exceptional operational requirements. Routine unrestricted employee review is not authorised by these Terms; they do not represent that technical access is impossible.</p>
      </>,
    },
    {
      id: 'data-protection', title: '17. Data Protection', body: <>
        <p>Each party will comply with applicable data protection law. The <Link href="/agreements/privacy">Antbuildz AI Privacy Policy</Link> explains how Antbuildz handles personal data for its own purposes. The <Link href="/agreements/dpa">Antbuildz AI Data Processing Addendum</Link> applies where Antbuildz processes personal data on Customer’s behalf and is incorporated into these Terms.</p>
      </>,
    },
    {
      id: 'availability', title: '18. Service Availability and Changes', body: <>
        <p>Antbuildz will use commercially reasonable efforts to provide the Services, but uninterrupted or error-free operation is not guaranteed. Maintenance, security events, third-party outages, changes in law, internet conditions and events outside reasonable control may affect availability.</p>
        <p>No specific uptime percentage, service-level agreement or service credit is promised unless separately agreed in writing.</p>
        <p>Antbuildz may update the Services to improve functionality, security or legal compliance. If a change materially reduces core paid functionality during a committed period, Antbuildz will use reasonable efforts to provide notice and a commercially reasonable alternative or remedy.</p>
      </>,
    },
    {
      id: 'suspension-termination', title: '19. Suspension and Termination', body: <>
        <p>Antbuildz may suspend access where reasonably necessary to address a security risk, unlawful use, material breach, non-payment, harm to the Services or a third-party requirement. Where practicable, Antbuildz will give notice and an opportunity to remedy before suspension.</p>
        <p>This includes fraud, abuse and circumvention of usage controls. For agreed manual-invoice arrangements, if payment remains unpaid for more than 14 days after its due date, Antbuildz may suspend access until payment is received. That suspension does not automatically terminate the account. Access will be restored when the cause is resolved, subject to other lawful restrictions.</p>
        <p>Either party may terminate for a material breach not cured within 30 days after written notice, or immediately if the other party becomes insolvent or ceases business, subject to applicable law. Antbuildz may terminate a free service on reasonable notice. Provisions that by nature should survive—including payment, ownership, confidentiality, disclaimers, liability and dispute terms—survive termination.</p>
      </>,
    },
    {
      id: 'disclaimers', title: '20. Disclaimers', body: <>
        <p>To the maximum extent permitted by law, the Services are provided on an “as available” basis. Antbuildz disclaims implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, non-infringement and any warranty arising from course of dealing, except to the extent such a warranty cannot lawfully be excluded.</p>
        <p>Antbuildz does not warrant commercial outcomes, conversion rates, product suitability, the accuracy of Customer Content or third-party services, or that AI output will meet every Customer requirement.</p>
      </>,
    },
    {
      id: 'liability', title: '21. Limitation of Liability', body: <>
        <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for fraud or fraudulent misrepresentation, or death or personal injury caused by negligence.</p>
        <p>To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, exemplary or consequential loss, or for loss of profit, revenue, anticipated savings, goodwill, business opportunity or data, arising from or relating to the agreement, even if advised of the possibility.</p>
        <p>Subject to the preceding paragraphs, Antbuildz’s aggregate liability arising from or relating to the agreement will not exceed the greater of (a) fees paid or payable by the affected Customer during the 12 months immediately preceding the event giving rise to the claim, or (b) USD 100. Related claims are treated as arising from the first related event. The limit applies across legal theories, only to the extent lawful and reasonable, and does not restrict mandatory remedies.</p>
      </>,
    },
    {
      id: 'indemnities', title: '22. Indemnification', body: <>
        <p>Customer will defend Antbuildz against third-party claims arising from Customer Content, Customer’s webstore transactions, or Customer’s unlawful or unauthorised use of the Services, and will pay finally awarded damages and reasonable settlement amounts, except to the extent caused by Antbuildz’s breach.</p>
        <p>This obligation applies only to the extent permitted by law and reasonable in the circumstances, and does not require a consumer to indemnify Antbuildz for Antbuildz’s own negligence or breach where that would be unlawful.</p>
        <p>The indemnified party must promptly notify the indemnifying party, allow it to control the defence and settlement, and provide reasonable cooperation. No settlement may admit fault or impose non-monetary obligations on the indemnified party without consent.</p>
      </>,
    },
    {
      id: 'law-disputes', title: '23. Governing Law and Disputes', body: <>
        <p>These Terms and any non-contractual obligations arising from them are governed by the laws of Singapore, without regard to conflict-of-law rules. Before commencing proceedings, the parties will attempt in good faith for at least 30 days to resolve a dispute through business representatives, unless urgent injunctive relief is reasonably required.</p>
        <p>The courts of Singapore have exclusive jurisdiction, subject to mandatory consumer and local-law rights that cannot be excluded. Nothing prevents an individual from seeking remedies or using a competent court where applicable law gives that right, or prevents timely statutory claims or urgent relief.</p>
      </>,
    },
    {
      id: 'changes', title: '24. Changes to These Terms', body: <>
        <p>Antbuildz may update these Terms for legal, security, operational or product reasons. Material changes will apply prospectively and will be notified by reasonable means. If a material change adversely affects a current paid subscription, it will normally take effect at renewal unless earlier application is required by law or necessary to address a security or misuse risk.</p>
      </>,
    },
    {
      id: 'general', title: '25. General Provisions', body: <>
        <p>The Order Form, these Terms, the DPA and documents expressly incorporated by reference form the entire agreement for the Services. An Order Form prevails over these Terms for an express conflict, and the DPA prevails for processing of personal data on Customer’s behalf.</p>
        <p>Neither party may assign the agreement without the other’s consent, not to be unreasonably withheld, except to an affiliate or in connection with a merger, reorganisation or sale of substantially all relevant assets, provided the assignee assumes the obligations. Customer may not resell the Services unless expressly authorised.</p>
        <p>Neither party is liable for delay caused by events beyond reasonable control, except payment obligations. Failure to enforce a right is not a waiver. Invalid provisions will be modified to the minimum extent necessary and the rest remains effective. The parties are independent contractors; no agency, partnership or joint venture is created. Notices may be delivered electronically to the account or business contact details supplied by the receiving party.</p>
      </>,
    },
    {
      id: 'contact', title: '26. Contact', body: <>
        <p>Antbuildz Pte. Ltd. is the contracting party for Antbuildz.ai subscriptions unless an executed enterprise Order Form expressly states otherwise. Questions about these Terms may be sent to <ContactLink />.</p>
      </>,
    },
  ],
};

const privacy: LegalDocument = {
  slug: 'privacy',
  title: 'Antbuildz AI Privacy Policy',
  description: 'How Antbuildz Pte. Ltd. collects, uses, discloses and protects personal data in connection with Antbuildz.ai.',
  lastUpdated,
  sections: [
    { id: 'introduction', title: '1. Introduction and Scope', body: <><p>This Privacy Policy explains how Antbuildz Pte. Ltd. (<strong>Antbuildz</strong>, <strong>we</strong>, <strong>us</strong> or <strong>our</strong>) handles personal data in connection with Antbuildz.ai, our AI Sales Agent, AI Webstore Suite, AI Agent Console, websites, applications and related business activities.</p><p>This Policy applies to Antbuildz AI services and does not govern transactions on the separate Antbuildz.com marketplace, which may have its own privacy notices.</p></> },
    { id: 'roles', title: '2. Our Data Protection Roles', body: <><p>For account administration, sales, billing, website operations, support and our own business purposes, Antbuildz determines why and how personal data is handled and acts as the responsible organisation under applicable law.</p><p>Where a subscriber uploads or connects personal data and instructs Antbuildz to process it through the Services, the subscriber generally determines the purposes and means of that processing. In that context, the subscriber is the responsible organisation or controller and Antbuildz acts as its data intermediary or processor. The <Link href="/agreements/dpa">Data Processing Addendum</Link> governs that processing.</p></> },
    { id: 'information', title: '3. Information We Collect', body: <><p>Depending on your use of the Services, we collect account and company details, names, email addresses, telephone numbers, authentication identifiers, preferences, support correspondence, subscription and payment-related records, IP addresses, device information, usage events and security logs. Card details may be handled directly by a payment provider.</p><p>For Customers, we also process information they provide or connect: documents, catalogues, knowledge, inventory, conversation and enquiry content, product requirements, lead details, quotations, reservations, bookings and integration data. Customers are responsible for their notices and lawful collection of this information.</p></> },
    { id: 'sources', title: '4. Sources of Information', body: <><p>We receive information directly from individuals and subscribers, from authorised users and integrations, automatically from use of the Services, and from service providers or business partners where permitted. A subscriber may provide personal data about its personnel, prospects, customers or website visitors; the subscriber is responsible for providing required notices and establishing a lawful basis for that data.</p></> },
    { id: 'uses', title: '5. How We Use Information', body: <><p>We use personal data as reasonably necessary to:</p><ul><li>provide, configure, host and operate the Services;</li><li>authenticate users and administer accounts, subscriptions and payments;</li><li>process conversations, retrieve approved knowledge, generate responses, capture enquiries and perform configured workflows;</li><li>provide support, communicate about the Services and respond to requests;</li><li>secure the Services, prevent fraud and misuse, troubleshoot and monitor reliability;</li><li>analyse and improve functionality, usability and performance using information we are entitled to use;</li><li>send service communications and, where permitted, relevant business marketing with an opt-out;</li><li>comply with law, enforce agreements and protect rights, safety and property; and</li><li>carry out a corporate transaction such as a merger, financing or sale, subject to appropriate safeguards.</li></ul><p>When Antbuildz processes Customer Data as a data intermediary or processor, it does so on the subscriber’s documented instructions, including instructions inherent in use of configured Service features.</p></> },
    { id: 'ai', title: '6. AI Processing and Private Knowledge', body: <><p>AI features may send relevant prompts, conversation content, retrieved knowledge and technical metadata to contracted AI and infrastructure providers for processing. Providers may change; this Policy does not promise that data stays within Antbuildz infrastructure.</p><p>Antbuildz does not intentionally expose private Customer knowledge to unrelated Customers, use it to train another Customer’s Agent, or use private knowledge-base content to train shared Antbuildz models for unrelated Customers. Necessary provider processing remains subject to the applicable agreements and instructions. This is not a representation about every provider’s independent training settings; Customers may request information about material providers and safeguards at <ContactLink />.</p><p>Authorised personnel access must be limited to relevant content reasonably needed for customer-requested support, security or abuse investigations, legal duties, platform protection or exceptional operations. We may use aggregated or effectively anonymised information to understand and improve the Services.</p></> },
    { id: 'sharing', title: '7. How We Share Information', body: <><p>Antbuildz does not sell Customer Personal Data. We may disclose personal data to:</p><ul><li>cloud, hosting, AI, infrastructure, security, communications, support and analytics providers that help operate the Services;</li><li>payment providers for subscription and billing transactions;</li><li>integrations enabled or requested by a subscriber;</li><li>professional advisers, auditors, insurers and transaction counterparties under confidentiality duties;</li><li>government authorities, courts or other parties where disclosure is legally required or reasonably necessary to protect rights and safety; and</li><li>a successor in connection with a merger, restructuring, financing or sale.</li></ul><p>We do not disclose Customer Data to a third party for that third party’s independent purposes unless instructed by the Customer, permitted by the agreement, or required by law.</p></> },
    { id: 'international', title: '8. International Data Transfers', body: <><p>The Services may involve processing in countries other than the country where data was collected. Where Singapore’s Personal Data Protection Act 2012 applies, Antbuildz uses legally recognised measures intended to ensure transferred personal data receives a standard of protection comparable to the protection under the PDPA. Other transfer mechanisms may apply for customers in other jurisdictions as agreed in the DPA.</p></> },
    { id: 'retention', title: '9. Data Retention', body: <><p>We retain personal data for as long as reasonably necessary to provide the Services, maintain relevant account history, fulfil the collection purpose, meet legal, accounting or security requirements, resolve disputes and protect the Services. Conversation history and Customer Content may remain during an active account where needed to provide the Service. Account closure does not mean every record is immediately erased.</p><p>When no longer reasonably required for a business or legal purpose, data will be deleted, anonymised or otherwise cease to be retained as personal data. Backups may retain data temporarily after active deletion under protected lifecycle processes. Customer-directed processing and return or deletion are governed by the DPA.</p></> },
    { id: 'security', title: '10. Security', body: <><p>Antbuildz uses commercially reasonable administrative, organisational and technical measures designed to protect personal data against unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks. No system is completely secure, and we cannot guarantee absolute security. Subscribers are responsible for access controls, user permissions, endpoint security and the security of systems they connect.</p></> },
    { id: 'rights', title: '11. Your Rights and Choices', body: <><p>Depending on applicable law, an individual may request access to or correction of personal data, withdraw consent, object to or restrict certain processing, request deletion, or exercise portability or complaint rights. These rights may be subject to exceptions.</p><p>If Antbuildz processes your data for a subscriber, contact that subscriber first because it controls the processing. Antbuildz will assist the subscriber as required by the DPA. For data Antbuildz handles for its own purposes, send a request to <ContactLink />. We may verify identity and authority before acting.</p><p>You may opt out of marketing emails through the unsubscribe method provided or by contacting us. Service and transactional communications may still be sent where necessary.</p></> },
    { id: 'children', title: '12. Children’s Privacy', body: <><p>The Services are business services and are not directed to children. We do not knowingly solicit personal data from children for their own use of the Services. Subscribers must not configure the Services to collect children’s personal data without appropriate legal authority, notices and safeguards.</p></> },
    { id: 'third-party', title: '13. Third-Party Services and Links', body: <><p>Third-party websites and integrations have their own privacy practices. This Policy does not govern processing independently controlled by those third parties. Review their notices before providing personal data.</p></> },
    { id: 'changes', title: '14. Changes to This Policy', body: <><p>We may update this Policy to reflect legal, operational or Service changes. We will publish the revised date and provide additional notice where a change is material or required by law.</p></> },
    { id: 'cookies', title: '15. Cookies and Analytics', body: <><p>Cookies, local storage and similar technologies can support authentication, security, preferences and requested features. Antbuildz uses Google Analytics where enabled to understand website visits and usage; it may process device identifiers, page interactions and technical information through Google infrastructure.</p><p>Non-essential analytics that require consent must not load before consent is obtained. Where offered, use the consent controls to accept, reject or withdraw consent; browser settings can also delete or block stored data. Blocking essential storage may affect account access. Our website should remain usable without non-essential analytics. Third-party services opened or embedded at your request may use their own technologies and notices.</p></> },
    { id: 'marketing', title: '16. Communications', body: <><p>Where permitted by applicable law, we may send product updates, offers, feature information and information about related Antbuildz services. Use the unsubscribe link in marketing emails or contact us to opt out. Necessary account, payment, security and service messages are transactional and do not depend on marketing consent.</p></> },
    { id: 'contact', title: '17. Contact Us', body: <><p>For privacy questions, requests or complaints, contact Antbuildz Pte. Ltd., UEN 202007699D, at <ContactLink />. We will direct requests to the responsible privacy contact. You may also complain to the competent data-protection authority, including Singapore’s Personal Data Protection Commission where applicable.</p></> },
  ],
};

const dpa: LegalDocument = {
  slug: 'dpa',
  title: 'Antbuildz AI Data Processing Addendum',
  description: 'Terms governing Antbuildz’s processing of personal data on behalf of Antbuildz AI customers.',
  lastUpdated,
  sections: [
    { id: 'scope', title: '1. Scope and Incorporation', body: <><p>This Data Processing Addendum (<strong>DPA</strong>) forms part of the Antbuildz AI Terms of Service or other agreement between Antbuildz Pte. Ltd. (<strong>Antbuildz</strong>) and Customer for the Services (the <strong>Agreement</strong>). It applies when Antbuildz processes Customer Personal Data on Customer’s behalf.</p><p>Capitalised terms not defined here have the meanings in the Agreement. <strong>Applicable Data Protection Law</strong> means laws applicable to the processing, including the Singapore Personal Data Protection Act 2012 where relevant.</p></> },
    { id: 'definitions', title: '2. Definitions and Roles', body: <><p><strong>Customer Personal Data</strong> means personal data contained in Customer Content that Antbuildz processes on Customer’s behalf. <strong>Controller</strong> includes an organisation that determines purposes and means; <strong>Processor</strong> includes a data intermediary that processes for another organisation. <strong>Subprocessor</strong> means a third party appointed by Antbuildz to process Customer Personal Data.</p><p>Customer acts as controller or responsible organisation and Antbuildz acts as processor or data intermediary, except where either party processes personal data for its own independent purposes. Customer is responsible for lawful instructions, notices, consents and legal bases.</p></> },
    { id: 'instructions', title: '3. Customer Instructions and Processing', body: <><p>Antbuildz will process Customer Personal Data only on documented instructions from Customer, including the Agreement, configured features, authorised user actions and written instructions consistent with the Services, unless law requires otherwise. Antbuildz will notify Customer if it believes an instruction infringes Applicable Data Protection Law and may suspend the affected processing while the parties address it.</p><p>Antbuildz will process Customer Personal Data for the nature, purposes, duration and categories described in Schedule 1 and as otherwise documented in an Order Form.</p></> },
    { id: 'confidentiality', title: '4. Confidentiality and Customer Separation', body: <><p>Antbuildz will ensure authorised personnel are bound by confidentiality duties and receive access only where reasonably required. Conversation access must be limited to customer-requested support or troubleshooting, security and abuse investigations, legal duties, platform protection or exceptional operational requirements.</p><p>Antbuildz will maintain appropriate logical separation and access controls for private Customer knowledge. It will not intentionally disclose it to unrelated Customers, train another Customer’s Agent with it, or use it to train shared Antbuildz models for unrelated Customers. These obligations permit necessary processing by contracted providers under this DPA; they do not assert that technical administrator access is impossible.</p></> },
    { id: 'security', title: '5. Security', body: <><p>Taking into account the nature of processing and reasonably available measures, Antbuildz will maintain commercially reasonable administrative, organisational and technical measures designed to protect Customer Personal Data. The current high-level measures are described in Schedule 2. Customer acknowledges that security responsibilities are shared and will secure its accounts, users, endpoints, integrations and instructions.</p></> },
    { id: 'subprocessors', title: '6. Subprocessors', body: <><p>Customer generally authorises necessary Subprocessors, including AI, cloud, database, hosting, communication, payment infrastructure, analytics, security and integration providers when processing Customer Personal Data. Antbuildz will impose written data-protection obligations materially consistent with this DPA and remains responsible for their performance as required by law and the Agreement.</p><p>A current description of material Subprocessors is available on reasonable written request to <ContactLink />. Antbuildz will inform Customer of intended material additions or replacements in advance, allowing a reasonable opportunity to object on data-protection grounds. The parties will seek a reasonable alternative; if none is available, either may end the affected processing without restricting mandatory remedies. Where applicable law requires specific transfer terms or further authorisation, those must be put in place before the affected processing.</p></> },
    { id: 'requests', title: '7. Data Subject Requests', body: <><p>Taking into account the nature of processing, Antbuildz will provide reasonable assistance for Customer to respond to requests by individuals to exercise applicable rights. If Antbuildz receives a request relating to Customer Personal Data, it will refer the requester to Customer and will not respond substantively unless authorised or legally required.</p></> },
    { id: 'breach', title: '8. Personal Data Breaches', body: <><p>Antbuildz will notify Customer without undue delay after becoming aware of a personal data breach affecting Customer Personal Data, including where it has credible grounds to believe a breach has occurred. It will not delay notice solely to complete its investigation. Notice will describe reasonably available information about the nature, likely effects and response, with further updates as information becomes available.</p><p>Antbuildz will take reasonable containment and remediation steps and assist Customer with required notifications. Customer determines its own regulator and individual notification duties; Antbuildz remains responsible for duties independently applicable to it. Notice is not an admission of liability.</p></> },
    { id: 'assistance', title: '9. Compliance Assistance', body: <><p>Taking into account the nature of processing and information available, Antbuildz will provide reasonable assistance with Customer’s security, breach, consultation and data-protection impact assessment obligations. Additional assistance beyond standard Service functionality may be subject to reasonable fees.</p></> },
    { id: 'transfers', title: '10. International Transfers', body: <><p>Antbuildz may process Customer Personal Data in countries where it or its Subprocessors operate. Antbuildz will use contractual or other legally recognised safeguards required by Applicable Data Protection Law. For transfers governed by the Singapore PDPA, Antbuildz will use measures intended to provide a standard of protection comparable to that under the PDPA.</p></> },
    { id: 'return-deletion', title: '11. Return and Deletion', body: <><p>At the end of processing, Antbuildz will, at Customer’s choice, return or delete Customer Personal Data within a reasonable period, except where law requires retention. Customer should request export before access ends; contact <ContactLink /> to arrange supported formats and timing. Backup copies may remain temporarily until deleted through protected lifecycle processes and must not be used for unrelated purposes.</p><p>Records Antbuildz lawfully keeps for its own billing, legal, security or dispute purposes are governed by the Privacy Policy, not an indefinite right to retain all Customer Content.</p></> },
    { id: 'audit', title: '12. Compliance Information and Audit', body: <><p>Antbuildz will provide information reasonably needed to demonstrate compliance. Begin with available documentation, questionnaires or independent reports. If insufficient, Customer may request a proportionate audit on reasonable notice, during business hours, under confidentiality and safeguards for other Customers’ data. Ordinarily audits are limited to once annually, but that limit does not restrict mandatory rights, regulator requests or justified follow-up to a material breach. Reasonable costs may be agreed, except where law requires otherwise or an audit identifies Antbuildz’s material non-compliance.</p></> },
    { id: 'liability', title: '13. Liability and Order of Precedence', body: <><p>Liability under this DPA is subject to the exclusions and limitations in the Agreement to the maximum extent permitted by law. If this DPA conflicts with the Agreement on processing Customer Personal Data, this DPA prevails. An Order Form may add processing details but does not reduce mandatory protections without express lawful agreement.</p></> },
    { id: 'termination', title: '14. Duration and Termination', body: <><p>This DPA starts when Antbuildz first processes Customer Personal Data and continues until that processing ends. Confidentiality, security and deletion obligations continue for Customer Personal Data retained after termination.</p></> },
    { id: 'schedule-1', title: 'Schedule 1 — Processing Details', body: <div className="legal-schedule-content"><h3>Subject matter and duration</h3><p>Provision of the subscribed Antbuildz AI services for the Agreement term and any limited period required for return, deletion, legal compliance or backup lifecycle processes.</p><h3>Nature of processing</h3><p>Collection, hosting, storage, organisation, retrieval, analysis, generation, transmission, display, support, deletion and other processing required to operate Antbuildz AI.</p><h3>Purpose</h3><p>Providing, securing, supporting and maintaining the subscribed AI Sales Agent, AI Webstore Suite, AI Agent Console, hosted webstore, integrations and related configured workflows.</p><h3>Categories of data subjects</h3><ul><li>Customer employees, representatives and authorised users;</li><li>Customer prospects, customers, buyers, renters, suppliers and end users;</li><li>website or webstore visitors; and</li><li>business contacts and individuals whose data Customer lawfully provides.</li></ul><h3>Types of personal data</h3><ul><li>names, emails, telephone numbers and company information;</li><li>account, role and authentication-related information;</li><li>conversation content, enquiry information and product interests;</li><li>lead details, product requirements, quotations and bookings supplied by Customer;</li><li>IP addresses, technical, device and usage information; and</li><li>other personal data included in Customer Content at Customer’s direction.</li></ul><p>The Services are not designed to require sensitive personal data. Customer must not submit such data unless necessary, lawful and expressly supported.</p></div> },
    { id: 'schedule-2', title: 'Schedule 2 — High-Level Security Measures', body: <div className="legal-schedule-content"><p>Measures maintained as appropriate to the Services may include:</p><ul><li>identity, authentication and access-control processes;</li><li>role-based or need-to-know restrictions on data access;</li><li>infrastructure and application security controls;</li><li>logging and monitoring where appropriate;</li><li>backup and recovery measures where applicable;</li><li>vulnerability, change and incident-response processes;</li><li>vendor and Subprocessor review;</li><li>confidentiality requirements and personnel awareness; and</li><li>processes for secure deletion or de-identification when no longer required.</li></ul><p>These descriptions state control objectives and do not promise a particular certification, encryption standard, data location, backup frequency or service level unless separately confirmed in writing.</p></div> },
    { id: 'schedule-3', title: 'Schedule 3 — Subprocessor Information', body: <div className="legal-schedule-content"><p>Antbuildz may use providers in the following categories where required for the configured Services: cloud and hosting infrastructure; AI model and orchestration services; authentication and security; communications and support; payment processing; scheduling; and monitoring or analytics where enabled.</p><p>Antbuildz will make current provider-specific Subprocessor information and the applicable change-notification method available through this page, an account notice or on request. Customers may request current information through <ContactLink />.</p></div> },
  ],
};

const acceptableUse: LegalDocument = {
  slug: 'acceptable-use',
  title: 'Antbuildz AI Acceptable Use Policy',
  description: 'Responsible use of Antbuildz AI, including industrial and safety-critical boundaries.',
  lastUpdated,
  sections: [
    { id: 'scope', title: '1. Scope', body: <><p>This Policy forms part of the <Link href="/agreements/terms">Terms of Service</Link> with Antbuildz Pte. Ltd., UEN 202007699D. It applies to Customers, authorised users, connected systems and use of customer-facing AI and webstores. Customers must take reasonable steps to ensure their users follow it.</p></> },
    { id: 'prohibited', title: '2. Prohibited Activities', body: <><p>You must not use the Services to:</p><ul>
      <li>break applicable law, facilitate fraud, scams, phishing or deliberate deceptive impersonation;</li>
      <li>distribute malware, attack systems, gain unauthorised access, disrupt availability or attempt to extract another Customer’s private knowledge or conversations;</li>
      <li>circumvent security, payment requirements, usage limits or metering, including disguising chargeable activity as test or system traffic;</li>
      <li>collect or disclose personal data unlawfully, infringe intellectual property or confidentiality, or submit content you have no right to process;</li>
      <li>send unlawful spam or unsolicited communications, manipulate users deceptively or publish unlawful content;</li>
      <li>misuse Antbuildz’s identity, imply an unapproved endorsement, or represent yourself as Antbuildz; or</li>
      <li>abuse the platform through automated overload, abusive account creation or other activity likely to cause material harm.</li>
    </ul><p>Security testing requires prior written authorisation unless applicable law provides otherwise. Report suspected vulnerabilities privately to <ContactLink />; do not access or disclose other users’ data.</p></> },
    { id: 'safety-critical', title: '3. Safety-Critical Use', body: <><p>AI output must not be the sole basis for lifting decisions, equipment-capacity decisions, structural safety, hazardous operations, regulated engineering decisions or other situations where an incorrect recommendation could cause serious injury or material property damage.</p><p>Follow manufacturer documentation, legal requirements, competent-person assessments, lifting plans, load calculations and professional engineering advice where required. Independently verify safety-critical specifications and equipment suitability before use. Do not describe AI output as a certified inspection, approved lifting plan or verified professional judgement when it is not.</p></> },
    { id: 'customer-controls', title: '4. Customer Controls', body: <><p>Keep knowledge, product data, pricing, availability and instructions accurate and current. Set appropriate permissions, test customer-facing workflows, provide relevant notices and maintain human review and escalation. Do not submit unnecessary sensitive or special-category personal data. Private knowledge and conversations must not be published as marketplace listings without the necessary authority and lawful basis.</p></> },
    { id: 'enforcement', title: '5. Reporting and Enforcement', body: <><p>Report misuse to <ContactLink />. Antbuildz may investigate and restrict affected content, integrations or access where reasonably necessary, subject to the Terms and applicable law. We will give notice and an opportunity to address an issue where practicable, but may act immediately for serious security, safety, fraud or legal risks. Contact us if you believe a restriction is mistaken.</p></> },
    { id: 'changes', title: '6. Changes and Contact', body: <><p>Material changes are notified and take effect under the change provisions in the Terms. Questions about this Policy should be sent to <ContactLink />.</p></> },
  ],
};

export const legalDocuments = { terms, privacy, dpa, 'acceptable-use': acceptableUse } as const;
export const legalDocumentList = [terms, privacy, dpa, acceptableUse] as const;

export function getLegalDocument(slug: string) {
  return legalDocumentList.find(document => document.slug === slug);
}
