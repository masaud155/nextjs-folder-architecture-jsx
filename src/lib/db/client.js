const tables = {
  events: [
    { id: "evt_1", type: "signup", createdAt: "2026-05-01T12:00:00.000Z" },
    { id: "evt_2", type: "upgrade", createdAt: "2026-05-03T12:00:00.000Z" }
  ]
};

export const db = {
  async findMany(table) {
    return tables[table] || [];
  },
  async insert(table, record) {
    const nextRecord = { id: `${table}_${Date.now()}`, ...record };
    tables[table] = [...(tables[table] || []), nextRecord];
    return nextRecord;
  }
};
