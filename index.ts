document?.getElementById("button")?.addEventListener("click", () => {
  (async () => {
    const algNameInput = document?.getElementById("algName") as HTMLInputElement;
    const raw = algNameInput?.value;
    const algName = String(raw || "").trim().replace(/^\/+|\/+$/g, "");

    if (!algName) {
      alert("Please enter an algorithm path, e.g. memoization/basic-memoization");
      return;
    }

    // Build base from algorithms/ unless user already prefixed with it
    const base = algName.startsWith("algorithms/")
      ? `./${algName}`
      : `./algorithms/${algName}`;

    // Candidate paths to try (exact order matters)
    const candidates = [
      base, // if user already typed extension
      `${base}.ts`,
      `${base}.js`,
      `${base}/index.ts`,
      `${base}/index.js`,
    ];

    // Probe function: fetch transformed module source without executing it
    const probe = async (spec: any) => {
      try {
        const url = new URL(spec, import.meta.url).href;
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        return res.ok;
      } catch (_) {
        return false;
      }
    };

    let chosen = null;
    for (const spec of candidates) {
      // eslint-disable-next-line no-await-in-loop
      if (await probe(spec)) {
        chosen = spec;
        break;
      }
    }

    if (!chosen) {
      alert(`Could not find module for "${algName}" under algorithms/`);
      return;
    }

    try {
      // Let Vite keep this fully dynamic at runtime
      // eslint-disable-next-line import/no-dynamic-require
      const mod = await import(/* @vite-ignore */ new URL(chosen, import.meta.url).href);
      if (mod && typeof mod.default === "function") {
        mod.default();
      } else {
        console.log("Module loaded:", chosen, mod);
      }
    } catch (err) {
      console.error("Failed to load module:", chosen, err);
      alert(`Failed to load ${chosen}: ${err}`);
    }
  })();
});
 