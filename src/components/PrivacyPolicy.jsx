import React from "react";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{
      background: "radial-gradient(circle at 70% 10%, #ff6600 0%, #d10a8a 60%, #2e08cf 100%)"
    }}>
      <div className="w-full max-w-3xl bg-black/40 rounded-2xl p-8 shadow-xl text-white overflow-y-auto" style={{maxHeight: '90vh'}}>
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="text-sm space-y-4" style={{whiteSpace: 'pre-line'}}>
{`
Effective Date: 20/04/2018
Company: Nexo Global

1. OVERVIEW

This Privacy Policy describes in comprehensive detail how Nexo Global (“Company,” “we,” “us,” or “our”) collects, processes, stores, transfers, protects, and discloses Personal Data in connection with the use of our:

Websites
Web applications
SaaS platforms
APIs
AI-powered tools
Automation infrastructure
Digital consulting services
Enterprise software solutions
Related services (collectively, the “Services”)

This Policy applies globally to all users, clients, visitors, partners, and business representatives interacting with our Services.

By accessing or using the Services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.

2. DEFINITIONS

For clarity and legal precision:
Personal Data: Any information relating to an identified or identifiable natural person.
Processing: Any operation performed on Personal Data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, alignment, restriction, erasure, or destruction.
Controller: The entity that determines the purposes and means of processing Personal Data.
Processor: An entity that processes Personal Data on behalf of a Controller.
Data Subject: The individual to whom Personal Data relates.
User Content: Any data uploaded, submitted, generated, or processed through the Services.
Anonymized Data: Data that cannot reasonably be used to identify an individual.

3. SCOPE OF APPLICATION

This Policy applies to:
Registered users
Free trial users
Enterprise clients
Website visitors
API consumers
Business partners
Customer support communications
This Policy does not apply to third-party services integrated into the platform.

4. CATEGORIES OF PERSONAL DATA COLLECTED
4.1 Identification Data
Full legal name
Business name
Job title
Government-issued ID (where required for compliance)
4.2 Contact Information
Email address
Phone number
Mailing address
Billing address
4.3 Account Credentials
Username
Encrypted passwords
Multi-factor authentication tokens
4.4 Financial and Transaction Data
Payment method information
Transaction history
Billing records
Subscription details
Full credit card numbers are processed by third-party providers and not stored by us.
4.5 Technical and Usage Data
IP address
Device type
Browser version
Operating system
Session timestamps
Clickstream data
API logs
4.6 AI-Related Data
Prompts submitted to AI tools
Generated outputs
Model interaction logs
AI processing may include automated analysis of user inputs.
4.7 Communication Data
Emails
Support tickets
Chat conversations
Feedback submissions

5. METHODS OF COLLECTION

We collect Personal Data through:
Direct user input
Automated tracking technologies
Cookies and session tokens
Third-party integrations
Publicly available business information
Contractual onboarding processes

6. PURPOSES OF PROCESSING

Personal Data is processed for the following lawful purposes:
6.1 Service Provision
Account creation
Platform access
Feature enablement
API integration
6.2 Contract Performance
Subscription management
Billing and invoicing
Customer support
6.3 Security and Risk Management
Fraud detection
Threat monitoring
Access control
Abuse prevention
6.4 Business Optimization
Analytics
Service improvement
Performance monitoring
Infrastructure scaling
6.5 AI System Enhancement
We may use anonymized or aggregated datasets to:
Improve AI model accuracy
Enhance automation performance
Develop new features
Personal Data is not used to train public AI models without proper safeguards.
6.6 Legal Compliance
Regulatory obligations
Financial reporting
Law enforcement requests

7. LEGAL BASIS FOR PROCESSING (WHERE APPLICABLE)

Where required under applicable laws (e.g., GDPR), processing is based on:
Contract necessity
Legitimate interests
Legal obligation
Explicit consent
Users may withdraw consent where applicable, without affecting prior lawful processing.

8. COOKIES AND TRACKING TECHNOLOGIES

We use:
Essential cookies
Performance cookies
Security cookies
Analytics cookies
Cookies are used to:
Maintain sessions
Improve performance
Monitor uptime
Prevent fraud
Users may disable cookies via browser settings; however, certain features may not function properly.

9. DATA SHARING AND DISCLOSURE

We may share Personal Data with:
9.1 Service Providers
Cloud hosting providers
Payment processors
Security vendors
Email delivery services
Analytics providers
9.2 Corporate Transactions
In case of merger, acquisition, or asset sale.
9.3 Legal and Regulatory Authorities
Where required by subpoena, court order, or regulatory demand.
We do not sell Personal Data.

10. INTERNATIONAL DATA TRANSFERS

Data may be transferred outside the country of origin.
We implement safeguards such as:
Standard Contractual Clauses (SCCs)
Data Processing Agreements (DPAs)
Adequacy decisions where applicable

11. DATA RETENTION POLICY

We retain data only as long as necessary to:
Fulfill contractual obligations
Comply with legal requirements
Resolve disputes
Enforce agreements
Retention periods may vary depending on:
Type of data
Jurisdiction
Regulatory requirements
After retention expires, data is deleted or anonymized.

12. DATA SECURITY MEASURES

We implement layered security measures including:
End-to-end encryption
SSL/TLS protocols
Encrypted databases
Role-based access control
Multi-factor authentication
Firewall systems
Intrusion detection systems
Continuous monitoring
Despite safeguards, no system is immune from risk.

13. USER RIGHTS (JURISDICTION DEPENDENT)

Users may have rights including:
Right of access
Right to rectification
Right to erasure
Right to restrict processing
Right to object
Right to data portability
Right to withdraw consent
Right to lodge complaint with supervisory authority
Requests may require identity verification.

14. AUTOMATED DECISION-MAKING

Certain processes may involve automated decision-making.
Users may request:
Human intervention
Explanation of decision logic
Review of automated decisions

15. CHILDREN’S PRIVACY

Our Services are not directed to individuals under 18.
We do not knowingly collect data from minors.
If discovered, data will be deleted promptly.

16. CONFIDENTIALITY

All employees and contractors are subject to confidentiality obligations.
Access to Personal Data is restricted to authorized personnel.

17. DATA BREACH RESPONSE

In case of a data breach:
Immediate internal investigation
Containment procedures
Notification to authorities (if required)
Notification to affected users (if legally required)

18. THIRD-PARTY LINKS

We are not responsible for external websites’ privacy practices.
Users must review third-party policies independently.

19. BUSINESS TRANSFERS

In the event of restructuring, merger, or acquisition, Personal Data may be transferred as a business asset.

20. POLICY UPDATES

We may update this Policy periodically.
Material changes will be communicated via:
Website notice
Email notification
Account dashboard alert
Continued use of Services indicates acceptance of changes.

21. CONTACT INFORMATION

Nexo Global
Legal & Compliance Department
Email: legal@nexoglobal.com
`}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="btn glass" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}
