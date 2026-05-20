export function canInviteMembers(user, organization) {
  return ["owner", "admin"].includes(user?.role) && organization?.seats < organization?.seatLimit;
}

export function canRenameOrganization(user) {
  return user?.role === "owner";
}
