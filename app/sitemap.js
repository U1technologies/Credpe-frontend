export default function sitemap() {
  const domain = "https://www.credpe.in";

  // 1️⃣ STATIC PAGES
  const staticPages = [
    "",
    "about",
    "check-eligibility",
    "calculators",
    "contact",
    "credit-score",
    "disclaimer",
    "privacy",
    "resources",
    "terms",
  ].map((page) => ({
    url: `${domain}/${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // 2️⃣ LOAN CATEGORY PAGES
  const loanTypes = [
    "business",
    "car",
    "education",
    "gold",
    "home",
    "medical",
    "personal",
    "property",
    "transfer-home",
    "vehicle",
  ];

  const loanPages = loanTypes.map((type) => ({
    url: `${domain}/loans/${type}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  // 3️⃣ APPLY PAGES
  const applyPages = loanTypes.map((type) => ({
    url: `${domain}/apply/${type}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 4️⃣ RETURN MERGED LIST
  return [...staticPages, ...loanPages, ...applyPages];
}
