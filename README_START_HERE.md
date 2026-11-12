# Retail Bank Cloud Container Lab — Browser-first guide

This is an **educational demonstration**, not actual banking software. It does NOT check real credentials, verify KYC, execute payments or implement compliance. Never upload credentials or personal banking data.

## Files
- `auth-service/Dockerfile`, `auth-server.js`, `package.json`: health + `/demo-login` on port 3000.
- `loan-service/Dockerfile`, `loan-server.js`, `package.json`: health + `/loan-summary` on port 3001.
- `onboarding-service/Dockerfile`, `onboarding-server.js`, `package.json`: health + `/kyc-status` on port 3002.
- `security_practices.md`: Task 4.

## Do everything from a browser
1. On GitHub.com create a new repository, e.g. `retail-bank-cloud-lab`. For the easiest IBM Code Engine tutorial make it **Public** (source is fictional demo code; not sensitive).
2. Use GitHub **Add file → Upload files**. Upload the files **inside** the lab root, preserving `auth-service/`, `loan-service/`, `onboarding-service/` paths. A whole ZIP uploaded as one file will NOT work for builds. Or create the directories and files through GitHub web UI.
3. On IBM Cloud Code Engine open a project. Select **Start creating → Application → Build container image from source code → Specify build details**. Enter the GitHub repository URL and select public repo / no Git repo secret.
4. In build details choose **Dockerfile** strategy; set **Context directory** to `auth-service` (or `/auth-service`, depending on current UI); `Dockerfile` filename `Dockerfile`; output image e.g. `auth-service:lab1` in your IBM Cloud Container Registry namespace. Set application port `3000`.
5. Create the application and inspect build logs; a successful build will push an image to IBM Container Registry, then deploy the app. Check `GET /health` in the test app UI.
6. Repeat for loan-service (context `loan-service`, app port `3001`) and onboarding-service (context `onboarding-service`, app port `3002`). Choose private endpoint visibility for non-public services if available. For production, enforce gateway/network policies; the demo does not implement them.
7. In IBM Cloud Container Registry console check that all three tagged images are present and review available vulnerability findings.
8. Validate and document: build success, three images stored, endpoint status, privacy configuration, available scans. Do not claim security signing was done unless verified.

## Important caveats
- IBM Cloud may require Pay-as-you-Go account and billing information even with free allowances; inspect pricing first.
- Some application exposure defaults differ; check visibility and disable/delete services after completing the lab to avoid costs.
- Deployment is not demonstrated by this ZIP alone. It is verified only by successful cloud builds and tests.

IBM source-build console instructions: https://cloud.ibm.com/docs/codeengine?topic=codeengine-app-source-code
