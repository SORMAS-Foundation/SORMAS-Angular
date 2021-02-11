import { AuthLegacyGuard } from './app-legacy.guard';

describe('AuthLegacyGuard', () => {
  const setup = (requiredRoles: string[], activeRoles: string[], isLoggedIn: boolean) => {
    // eslint-disable-next-line jasmine/no-unsafe-spy
    const authService = jasmine.createSpyObj('authService', ['getUserRoles', 'isLoggedIn']);
    authService.getUserRoles.and.callFake(() => activeRoles);
    authService.isLoggedIn.and.callFake(() => isLoggedIn);

    // eslint-disable-next-line jasmine/no-unsafe-spy
    const routerSnapshot = jasmine.createSpyObj('ActivatedRouteSnapshot', [], {
      data: {
        roles: requiredRoles,
      },
    });

    const guard = new AuthLegacyGuard(authService);

    return {
      guard,
      routerSnapshot,
    };
  };

  it('Correctly checks for same role but not logged in', async () => {
    const { guard, routerSnapshot } = setup(['admin'], ['admin'], false);

    expect(await guard.canActivate(routerSnapshot)).toBe(false);
  });

  it('Correctly checks for no roles but not logged in', async () => {
    const { guard, routerSnapshot } = setup([], [], false);

    expect(await guard.canActivate(routerSnapshot)).toBe(false);
  });

  it('Correctly checks for no roles when logged in', async () => {
    const { guard, routerSnapshot } = setup([], [], true);

    expect(await guard.canActivate(routerSnapshot)).toBe(true);
  });

  it('Correctly checks for roles when logged in', async () => {
    const { guard, routerSnapshot } = setup(['admin'], ['admin'], true);

    expect(await guard.canActivate(routerSnapshot)).toBe(true);
  });

  it('Correctly checks for different roles when logged in', async () => {
    const { guard, routerSnapshot } = setup(['admin'], ['user-type-A'], true);

    expect(await guard.canActivate(routerSnapshot)).toBe(false);
  });

  it('Correctly checks for different roles when logged in and contains all required roles', async () => {
    const { guard, routerSnapshot } = setup(
      ['admin', 'user-type-A'],
      ['user-type-A', 'admin', 'user-type-B'],
      true
    );

    expect(await guard.canActivate(routerSnapshot)).toBe(true);
  });
});
