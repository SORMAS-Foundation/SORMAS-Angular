import { RouteItem } from './route-item.model';

export const routesConfig: RouteItem[] = [
  { link: '', label: $localize`Dashboard` },
  { link: 'about', label: $localize`About` },
  { link: 'tasks', label: $localize`Tasks` },
  { link: 'forms', label: $localize`Forms` },
  { link: 'cases_old', label: $localize`Cases_old` },
  { link: 'cases/list', label: $localize`Cases` },
  { link: 'user-profile', label: $localize`My profile` },
];
