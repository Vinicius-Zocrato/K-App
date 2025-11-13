import { Role } from "./role";

export type User = {
    id: number;
    roleId: Role["id"];
    pseudo: string;
    active: boolean;
    parrain: User["pseudo"];
    team: string;
    entryDate: Date;
    mandate: Date;
};
