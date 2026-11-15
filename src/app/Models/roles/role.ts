export interface Role {
  id: number | null;
  name?: string;
  displayName: string;
  system: boolean;
  permissions: string[];
  userCount: number;
}

export interface RoleRequest {
  displayName: string;
  permissions: string[];
}

/** One row of the permissions grid: an app area and its Arabic label. */
export interface CatalogEntry {
  area: string;
  label: string;
}
