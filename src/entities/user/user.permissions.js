export function canManageTeam(user) {
  return ["owner", "admin"].includes(user?.role);
}

export function canAccessBilling(user) {
  return user?.role === "owner";
}
