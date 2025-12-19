// simple rule-based "AI" using user skills
export function getAiJobSuggestions(skills = []) {
  const db = [
    { title: "Frontend Developer", tags: ["react", "javascript", "css"] },
    { title: "React Developer", tags: ["react", "redux"] },
    { title: "UI Engineer", tags: ["design", "css", "ux"] },
    { title: "Fullstack Developer", tags: ["node", "react", "sql"] },
  ];

  const lowered = skills.map(s => s.toLowerCase());
  const scored = db.map(job => {
    const score = job.tags.reduce((acc, t) => acc + (lowered.includes(t) ? 1 : 0), 0);
    return { ...job, score };
  }).filter(j => j.score > 0).sort((a,b) => b.score - a.score);

  if (scored.length === 0) {
    // fallback suggestions
    return db.slice(0,3);
  }
  return scored;
}
