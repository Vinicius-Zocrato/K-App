const ALLPermissions = [
    "VIEW_CALENDAR",
    "MANAGE_OWN_SLOTS",
    "MANAGE_SERVICE_CAPACITY",
    "MANAGE_CLOSED_DAYS",
    "MANAGE_PUBLIC_EVENTS",
    "MANAGE_PRIVATE_EVENTS",
    "MANAGE_USER_STATUS",
    "MANAGE_MENU",
    "MANAGE_USERS",
    "MANAGE_ROLES",
] as const;

type PermissionName = (typeof ALLPermissions)[number];

const Permissions = Object.fromEntries(ALLPermissions.map((p) => [p, p])) as {
    [K in PermissionName]: K;
};

const PermissionsDesc: Record<PermissionName, string> = {
    VIEW_CALENDAR: `Voir calendrier, avec semaines passées et la semaine suivante`,
    MANAGE_OWN_SLOTS: `Peut poser un crénaux, retirer un des siens`,
    MANAGE_SERVICE_CAPACITY: `Peut définir le nombre de barman par services`,
    MANAGE_CLOSED_DAYS: `Définir les jours de fermeture`,
    MANAGE_PUBLIC_EVENTS: `Modifier le calendrier pour ajouter des event publiques`,
    MANAGE_PRIVATE_EVENTS: `Modifier le calendrier pour ajouter des event privés`,
    MANAGE_USER_STATUS: `Donner le status d'actif`,
    MANAGE_MENU: `Modifier la carte des boissons`,
    MANAGE_USERS: `Créer des comptes et associer des rôles aux comptes`,
    MANAGE_ROLES: `Ajouter et modifier les rôles`,
};

export { Permissions, PermissionName, PermissionsDesc };
