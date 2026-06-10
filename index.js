const http = require('http');

const PORT = process.env.PORT || 3000;
const SERVICE = process.env.SERVICE_NAME || 'catalog-api-local-4';
const ENV = process.env.ENVIRONMENT || 'dev';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${SERVICE}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0f1117;
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: #1a1d27;
      border: 1px solid #2d3148;
      border-radius: 12px;
      padding: 40px;
      max-width: 520px;
      width: 90%;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #0d2b1a;
      color: #4ade80;
      border: 1px solid #166534;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 13px;
      margin-bottom: 20px;
    }
    .dot {
      width: 8px; height: 8px;
      background: #4ade80;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    h1 { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
    .subtitle { color: #64748b; font-size: 14px; margin-bottom: 32px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 32px; }
    .stat {
      background: #0f1117;
      border: 1px solid #2d3148;
      border-radius: 8px;
      padding: 16px;
    }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .stat-value { font-size: 15px; font-weight: 500; }
    .stack { border-top: 1px solid #2d3148; padding-top: 24px; }
    .stack-title { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }
    .pills { display: flex; flex-wrap: wrap; gap: 8px; }
    .pill {
      background: #1e2235;
      border: 1px solid #2d3148;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge"><div class="dot"></div> Healthy</div>
    <h1>${SERVICE}</h1>
    <p class="subtitle">DevPath Internal Developer Platform</p>
    <div class="grid">
      <div class="stat">
        <div class="stat-label">Status</div>
        <div class="stat-value" style="color:#4ade80">Running</div>
      </div>
      <div class="stat">
        <div class="stat-label">Environment</div>
        <div class="stat-value">${ENV}</div>
      </div>
      <div class="stat">
        <div class="stat-label">Runtime</div>
        <div class="stat-value">Node.js</div>
      </div>
      <div class="stat">
        <div class="stat-label">Platform</div>
        <div class="stat-value">AWS EKS</div>
      </div>
    </div>
    <div class="stack">
      <div class="stack-title">Platform Stack</div>
      <div class="pills">
        <span class="pill">Kubernetes</span>
        <span class="pill">ArgoCD</span>
        <span class="pill">Terraform</span>
        <span class="pill">GitHub Actions</span>
        <span class="pill">Trivy</span>
        <span class="pill">Cosign</span>
        <span class="pill">Kyverno</span>
        <span class="pill">ECR</span>
      </div>
    </div>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'healthy' }));
  }

  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      service: SERVICE,
      status: 'ok',
      environment: ENV,
      message: 'Real app is running on DevPath IDP'
    }));
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`${SERVICE} listening on port ${PORT}`);
});
