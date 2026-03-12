const SITES = {
  // c4 family
  "c4architect.com":        { name: "c4architect", tagline: "Architecture diagramming tools for modern software teams.", coming: true },
  "c4architect.net":        { name: "c4architect", tagline: "Architecture diagramming tools for modern software teams.", coming: true },
  "c4architect.org":        { name: "c4architect", tagline: "Architecture diagramming tools for modern software teams.", coming: true },
  "c4hero.io":              { name: "c4hero", tagline: "Visual architecture diagramming. Built for engineers.", coming: true },
  "c4hero.net":             { name: "c4hero", tagline: "Visual architecture diagramming. Built for engineers.", coming: true },
  "c4hero.org":             { name: "c4hero", tagline: "Visual architecture diagramming. Built for engineers.", coming: true },
  // MyResto family
  "classiccarhelp.com":     { name: "classiccarhelp", tagline: "Classic car advice, resources, and community. Coming soon.", coming: true },
  "myrestobuild.com":       { name: "myrestobuild", tagline: "Document your build. Share your story.", coming: true },
  "myrestogear.com":        { name: "myrestogear", tagline: "The gear behind great restorations.", coming: true },
  "myrestomug.com":         { name: "myrestomug", tagline: "Custom mugs for classic car enthusiasts.", coming: true },
  "myrestonetwork.com":     { name: "myrestonetwork", tagline: "Connecting classic car builders and enthusiasts.", coming: true },
  "myrestoparts.com":       { name: "myrestoparts", tagline: "Parts for your classic restoration.", coming: true },
  "myrestoshow.com":        { name: "myrestoshow", tagline: "Classic car shows, events, and meetups.", coming: true },
  "radrestos.com":          { name: "radrestos", tagline: "Rad restomods and classic builds.", coming: true },
  "restomug.com":           { name: "restomug", tagline: "Custom mugs for classic car enthusiasts.", coming: true },
  // Personal / other
  "georgenord.com":         { name: "georgenord", tagline: "Personal site.", coming: true },
  "kevinstacos.com":        { name: "kevinstacos", tagline: "The best tacos. Period.", coming: true },
  "lasvegasathletics.fans": { name: "lasvegasathletics", tagline: "Las Vegas athletics fans. More coming soon.", coming: true },
  "mrsuncadia.com":         { name: "mrsuncadia", tagline: "Suncadia vacation rentals and resort living.", coming: true },
  "totemfallspto.com":      { name: "totemfallspto", tagline: "Totem Falls Elementary PTO — community, events, and more.", coming: true },
  "waikoloabeach.net":      { name: "waikoloabeach", tagline: "Waikoloa Beach resort information and vacation planning.", coming: true },
  "waikoloabeachresort.net":{ name: "waikoloabeachresort", tagline: "Waikoloa Beach resort information and vacation planning.", coming: true },
};

function buildPage(host, site) {
  const email = `contact@${host}`;
  const [domainName, ...tldParts] = host.split('.');
  const tld = '.' + tldParts.join('.');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${host}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{height:100%}
  body{
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;
    background:#0a0a0a;color:#f0f0f0;
    min-height:100vh;display:flex;flex-direction:column;
    align-items:center;justify-content:center;padding:2rem;
  }
  .container{max-width:560px;text-align:center}
  .badge{
    display:inline-block;font-size:11px;font-weight:600;
    letter-spacing:.15em;text-transform:uppercase;color:#888;
    border:1px solid #333;padding:4px 12px;border-radius:999px;margin-bottom:2rem
  }
  h1{
    font-size:clamp(1.8rem,5vw,3rem);font-weight:700;
    letter-spacing:-.03em;line-height:1.1;color:#fff;margin-bottom:1.25rem
  }
  h1 .tld{color:#444;font-weight:300}
  p{font-size:1rem;color:#777;line-height:1.7;margin-bottom:2.5rem;font-weight:300}
  .cta{
    display:inline-block;background:#fff;color:#0a0a0a;
    font-size:.875rem;font-weight:600;padding:14px 28px;
    border-radius:6px;text-decoration:none;letter-spacing:.01em;
    transition:background .2s
  }
  .cta:hover{background:#e5e5e5}
  footer{position:fixed;bottom:1.5rem;font-size:.7rem;color:#333;letter-spacing:.05em}
</style>
</head>
<body>
  <div class="container">
    <div class="badge">Coming Soon</div>
    <h1>${domainName}<span class="tld">${tld}</span></h1>
    <p>${site.tagline}</p>
    <a href="mailto:${email}" class="cta">${email}</a>
  </div>
  <footer>${host}</footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const host = new URL(request.url).hostname.replace(/^www\./, '');
    const site = SITES[host];
    if (!site) return new Response('Not found', { status: 404 });
    return new Response(buildPage(host, site), {
      headers: { 'Content-Type': 'text/html;charset=UTF-8',
                 'Cache-Control': 'public,max-age=3600' }
    });
  }
};
