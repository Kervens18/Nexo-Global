import React from "react";

export default function TermsOfService({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{
      background: "radial-gradient(circle at 70% 10%, #ff6600 0%, #d10a8a 60%, #2e08cf 100%)"
    }}>
      <div className="w-full max-w-3xl bg-black/40 rounded-2xl p-8 shadow-xl text-white overflow-y-auto" style={{maxHeight: '90vh'}}>
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
        <div className="text-sm space-y-4" style={{whiteSpace: 'pre-line'}}>
{`
Effective Date: 20/04/2018
Company: Nexo Global

1. INTRODUCTION AND SCOPE

These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User,” “Client,” “you,” or “your”) and Nexo Global (“Company,” “we,” “us,” or “our”).

These Terms govern your access to and use of:

Our website(s)
Software applications
SaaS platforms
APIs
AI-powered tools
Digital infrastructure services
Consulting services
Any related products or services (collectively, the “Services”)

By accessing, browsing, registering for, or using the Services in any manner, you acknowledge that you have read, understood, and agreed to be bound by these Terms.

If you do not agree, you must immediately discontinue use of the Services.

2. ELIGIBILITY

You represent and warrant that:
You are at least 18 years of age.
You possess the legal capacity to enter into binding agreements.
If acting on behalf of a business entity, you have authority to bind that entity.
Your use of the Services does not violate any applicable law or regulation.
We reserve the right to refuse access to any user at our sole discretion.

3. MODIFICATIONS TO SERVICES

Nexo Global may:
Add or remove features
Modify technical specifications
Upgrade AI systems
Discontinue certain functionalities
Implement security updates
Such modifications may occur without prior notice. Continued use constitutes acceptance of changes.

4. ACCOUNT REGISTRATION AND SECURITY
4.1 Account Creation
Certain Services require account registration. You agree to provide accurate, complete, and current information.
4.2 Account Responsibility
You are fully responsible for:
Maintaining confidentiality of login credentials
All activity conducted under your account
Ensuring authorized access only
You must immediately notify us of any suspected unauthorized access.
Nexo Global is not liable for losses resulting from compromised credentials due to your negligence.

5. SUBSCRIPTIONS, BILLING AND PAYMENTS
5.1 Fees
Certain Services are subscription-based or fee-based.
All fees are:
Stated in the applicable currency
Exclusive of applicable taxes
Non-refundable unless otherwise agreed in writing
5.2 Recurring Billing
By subscribing, you authorize recurring charges until cancellation.
5.3 Late Payments
Failure to pay may result in:
Suspension
Restricted access
Termination
Collection proceedings
Interest may accrue on overdue amounts at the maximum rate permitted by law.

6. ACCEPTABLE USE POLICY
You agree not to use the Services to:
Engage in illegal, fraudulent, or deceptive practices
Violate intellectual property rights
Distribute malware or harmful code
Transmit unlawful, defamatory, or abusive content
Conduct unauthorized financial activities
Process prohibited goods or services
We reserve the right to monitor usage for compliance and take enforcement action.

7. INTELLECTUAL PROPERTY RIGHTS
7.1 Company Ownership
All intellectual property associated with the Services, including:
Software code
Algorithms
AI models
Branding
Documentation
Design systems
remain the exclusive property of Nexo Global.
7.2 User Content
You retain ownership of your uploaded content.
However, you grant Nexo Global a worldwide, non-exclusive, royalty-free license to:
Host
Store
Process
Display
Analyze
your content solely for the purpose of operating and improving the Services.

8. ARTIFICIAL INTELLIGENCE DISCLAIMER
Nexo Global integrates artificial intelligence and automated decision systems.
You acknowledge that:
AI outputs may contain errors
Results may vary based on data input
Automated outputs do not constitute professional advice
You remain solely responsible for business decisions based on AI outputs.
We disclaim liability for damages resulting from reliance on AI-generated results.

9. DATA PROTECTION AND PRIVACY
We implement commercially reasonable security measures to protect data.
However:
No system is 100% secure
Transmission of data is at your own risk
Data handling practices are further detailed in our Privacy Policy.
We may use anonymized, aggregated data for analytics and system improvement.

10. THIRD-PARTY SERVICES
Our Services may integrate with:
Payment gateways
E-commerce platforms
Marketing automation tools
Cloud providers
External APIs
We are not responsible for:
Third-party service interruptions
External data breaches
Policy changes by integrated platforms
Use of third-party services is governed by their respective terms.

11. SERVICE AVAILABILITY
We strive for high uptime but do not guarantee uninterrupted access.
We are not liable for:
Downtime
System failures
Cyberattacks
Force majeure events
Maintenance windows may occur without prior notice.

12. LIMITATION OF LIABILITY
To the maximum extent permitted by law:
Nexo Global shall not be liable for:
Indirect damages
Incidental damages
Loss of profits
Loss of business opportunity
Data loss
Reputation damage
Total cumulative liability shall not exceed the amount paid by you in the preceding twelve (12) months.

13. INDEMNIFICATION
You agree to defend, indemnify, and hold harmless Nexo Global from claims arising from:
Violation of these Terms
Illegal use of Services
Intellectual property infringement
Regulatory violations related to your business

14. TERMINATION
We may suspend or terminate your account immediately if:
You breach these Terms
You engage in high-risk or unlawful activities
You fail to pay required fees
Upon termination:
Access to Services ceases
Outstanding balances remain payable
Certain legal obligations survive termination

15. CONFIDENTIALITY
Both parties agree to maintain confidentiality of non-public business information exchanged during the provision of Services.
Confidential information shall not be disclosed except:
With prior written consent
When required by law

16. GOVERNING LAW AND DISPUTE RESOLUTION
These Terms shall be governed by the laws applicable to the jurisdiction in which Nexo Global is legally registered.
Disputes shall be resolved through:
Good faith negotiation
Arbitration
Competent courts within the governing jurisdiction

17. FORCE MAJEURE
We are not liable for failure or delay caused by events beyond reasonable control, including:
Natural disasters
Government actions
War
Cyber warfare
Infrastructure failure

18. SEVERABILITY
If any provision is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.

19. ENTIRE AGREEMENT
These Terms constitute the entire agreement between the parties regarding use of the Services and supersede all prior agreements or understandings.

20. CONTACT INFORMATION
Legal Department
Nexo Global
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
