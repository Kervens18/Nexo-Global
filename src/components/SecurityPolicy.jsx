import React from "react";

export default function SecurityPolicy({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{
      background: "radial-gradient(circle at 70% 10%, #ff6600 0%, #d10a8a 60%, #2e08cf 100%)"
    }}>
      <div className="w-full max-w-3xl bg-black/40 rounded-2xl p-8 shadow-xl text-white overflow-y-auto" style={{maxHeight: '90vh'}}>
        <h1 className="text-3xl font-bold mb-6 text-center">Security Policy</h1>
        <div className="text-sm space-y-4" style={{whiteSpace: 'pre-line'}}>
{`
Effective Date: 20/04/2018
Company: Nexo Global

1. SECURITY PHILOSOPHY & GOVERNANCE

Security at Nexo Global is embedded at the architectural, organizational, and operational levels. Our approach is based on:

Defense-in-depth architecture
Zero Trust security model
Least privilege access
Continuous monitoring
Risk-based governance
Regulatory alignment

Security oversight is managed by an internal governance structure including:
Chief Information Security Officer (CISO)
Security Engineering Team
Compliance & Risk Committee
Data Protection Officer (where required)

Policies are reviewed annually and updated in response to regulatory, technological, or threat landscape changes.

2. INFRASTRUCTURE SECURITY
2.1 Cloud Architecture
Our infrastructure is deployed within enterprise-grade cloud environments featuring:
Multi-region redundancy
High-availability zones
Automated failover
Network isolation
Private subnet architecture
Infrastructure as Code (IaC) governance
Production, staging, and development environments are strictly segregated.

2.2 Physical Security
Data centers provide:
24/7 surveillance
Multi-factor biometric access
Guarded facilities
Environmental monitoring
Fire detection and suppression systems
Seismic and climate resilience

2.3 Network Segmentation
We implement layered network controls including:
Virtual Private Clouds (VPCs)
Segmented subnets
Bastion host access
VPN-restricted administrative entry
IP allowlisting

3. DATA SECURITY CONTROLS
3.1 Encryption in Transit
All data is encrypted in transit using:
TLS 1.2 or higher
Strong cipher suites
HSTS enforcement
Secure API gateways

3.2 Encryption at Rest
Sensitive data stored in:
Databases
Backups
Logs
File storage
is encrypted using AES-256 or equivalent industry standards.

3.3 Key Management
Encryption keys are:
Stored separately from encrypted data
Rotated periodically
Restricted via role-based controls
Logged for access auditing

4. IDENTITY & ACCESS MANAGEMENT (IAM)
4.1 User Authentication
We support:
Encrypted password hashing
Multi-Factor Authentication (MFA)
Single Sign-On (SSO)
OAuth-based authentication
Session expiration controls

4.2 Internal Access Control
Employee access is governed by:
Role-Based Access Control (RBAC)
Principle of least privilege
Access approval workflows
Quarterly access reviews
Immediate revocation upon termination

4.3 Privileged Access
Administrative access requires:
MFA enforcement
VPN restrictions
Logged sessions
Approval-based escalation

5. APPLICATION SECURITY
5.1 Secure Development Lifecycle (SDLC)
Security is integrated into all development phases:
Threat modeling
Secure architecture design
Code reviews
Static application security testing (SAST)
Dynamic application security testing (DAST)
Dependency vulnerability scanning
Pre-deployment security validation

5.2 Code Security
Peer-reviewed pull requests
Automated CI/CD security scanning
Third-party library monitoring
Secure secret management

5.3 AI System Safeguards
AI infrastructure includes:
Prompt filtering systems
Abuse detection algorithms
Rate limiting
Sandboxed execution
Output moderation
Model access control tiers
AI processing environments are isolated from core financial systems.

6. MONITORING & THREAT DETECTION
6.1 Continuous Monitoring
24/7 monitoring covers:
Network activity
API traffic
Authentication events
Infrastructure metrics
Log anomaly detection

6.2 SIEM Integration
Security Information and Event Management (SIEM) systems aggregate:
System logs
Access logs
Error logs
API usage patterns
Automated alerts are triggered for suspicious activity.

7. VULNERABILITY MANAGEMENT
7.1 Continuous Scanning
We perform:
Automated vulnerability scans
Container scanning
Infrastructure audits
Configuration reviews

7.2 Penetration Testing
Independent third-party penetration tests are conducted periodically to identify:
Application-level vulnerabilities
API weaknesses
Authentication flaws
Privilege escalation risks
Remediation actions are tracked and documented.

8. INCIDENT RESPONSE
8.1 Incident Lifecycle
Our incident response framework includes:
Detection
Containment
Investigation
Root cause analysis
Remediation
Documentation
Post-incident review

8.2 Notification Protocol
Where legally required, affected users and relevant authorities are notified in accordance with applicable regulations.

9. DATA BACKUP & DISASTER RECOVERY
9.1 Backup Strategy
Automated daily backups
Encrypted backup storage
Geographically distributed redundancy

9.2 Disaster Recovery
We maintain:
Documented recovery procedures
Recovery Time Objectives (RTO)
Recovery Point Objectives (RPO)
Periodic disaster simulations

10. BUSINESS CONTINUITY
Business continuity planning includes:
Redundant infrastructure
Incident escalation plans
Executive crisis response
Communication protocols
Supply chain resilience

11. COMPLIANCE & REGULATORY ALIGNMENT
Our controls are aligned with:
GDPR (General Data Protection Regulation)
CCPA (California Consumer Privacy Act)
International data protection frameworks
Industry best practices
Where required, Data Processing Agreements (DPAs) are executed with customers.

12. THIRD-PARTY RISK MANAGEMENT
Vendors undergo evaluation including:
Security questionnaires
Contractual safeguards
Data protection commitments
Ongoing monitoring
Third-party access is limited and logged.

13. EMPLOYEE SECURITY
13.1 Background Checks
Where legally permissible, background verification may be conducted.

13.2 Security Training
All employees receive:
Annual security awareness training
Phishing simulation exercises
Data handling protocols
Incident reporting education

14. DATA RETENTION & DELETION
We maintain:
Documented retention schedules
Automated deletion workflows
Secure data destruction procedures
Upon customer request, data deletion is processed in accordance with contractual obligations.

15. SECURITY TESTING & AUDITS
Internal audits
External assessments
Policy compliance reviews
Infrastructure stress testing

16. ZERO TRUST ARCHITECTURE
We apply Zero Trust principles:
Verify every access request
Continuous authentication
Micro-segmentation
Context-based authorization

17. SECURITY METRICS & REPORTING
Security performance indicators include:
Mean Time to Detect (MTTD)
Mean Time to Respond (MTTR)
Patch cycle times
Vulnerability remediation rates
Reports are reviewed at executive level.

18. RESPONSIBLE DISCLOSURE
Security researchers may report vulnerabilities to:
security@nexoglobal.com
All reports are reviewed confidentially and handled under responsible disclosure standards.

19. CUSTOMER SECURITY CONTROLS
Customers may:
Enable MFA
Manage user roles
Restrict IP access
Monitor API usage
Configure session policies

20. CONTINUOUS IMPROVEMENT
Security posture is continuously enhanced through:
Threat intelligence integration
Infrastructure upgrades
AI abuse mitigation systems
Compliance updates

21. CONTACT INFORMATION
Nexo Global – Security & Compliance
Email: security@nexoglobal.com
`}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="btn glass" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}
