import { PermissionName } from "./perms";

export type Role = {
    id: number;
    name: string;
    desc: string;
    perms: PermissionName[];
};
