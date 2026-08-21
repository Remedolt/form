export type AppRole = "MASTER_ADMIN" | "ADMIN" | "USER";

export const ADMIN_ROLES: AppRole[] = ["MASTER_ADMIN", "ADMIN"];

export function isAdminRole(role: AppRole): boolean {
  return role === "MASTER_ADMIN" || role === "ADMIN";
}

export function isMasterAdmin(role: AppRole): boolean {
  return role === "MASTER_ADMIN";
}
