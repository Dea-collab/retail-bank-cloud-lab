# Container Security Practices — Retail Banking DEMO

**Scope:** educational demonstration only; not a PCI-DSS, GDPR, KYC, AML or RBI compliant production implementation.

## Image integrity and provenance
- Use trusted, regularly maintained base images and pin versions/digests for controlled releases.
- Prefer signed images and verify signatures before deployment (for example Sigstore Cosign with organization-managed keys/policy).
- Keep a software bill of materials (SBOM) and record build provenance.

## Identity and access management
- Use least-privilege IBM Cloud IAM roles, separate dev/staging/prod projects and registry namespaces.
- Use managed registry access secrets; never commit registry passwords, API keys or customer data.
- Assign deployment credentials only to trusted automation and authorized operators.

## Vulnerability management
- Scan all images with IBM Cloud Container Registry Vulnerability Advisor or Trivy.
- Review findings, remediate high/critical vulnerabilities and scan again after base image updates.
- Make release gates risk-based and documented rather than claiming every scan is automatically enforced.

## Runtime and network security
- Run as a non-root user, minimize image content and expose only the required internal port.
- Configure public/private endpoint access explicitly; do not publish loan or onboarding APIs publicly for a real bank.
- Apply TLS, authentication and authorization at a properly configured API gateway (not implemented in demo).
- Encrypt sensitive information, enforce retention rules and secure monitoring/audit logs.

## Verification status
- Dockerfile and design review: available offline.
- Image signing, scan, IAM access, runtime connectivity and registry push: NOT VERIFIED until executed in a cloud account.
