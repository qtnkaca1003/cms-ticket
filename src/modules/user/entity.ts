import moment from 'moment';

export class AccountPermissionEntity {
  accountPermissionId = '';

  permissionCode = '';

  accountId = '';

  accountPermissionCreateAt = '';

  constructor(permission: Partial<AccountPermissionEntity>) {
    if (!permission) return;
    Object.assign(this, permission);
  }

  static createlistPermisison(list: Array<Partial<AccountPermissionEntity>>) {
    if (list == undefined) {
      return undefined;
    }
    return list.map(ll => {
      return new AccountPermissionEntity(ll);
    });
  }
}
class UserEntity {
  accountFullName = '';

  accountEmail = '';

  accountPermissions: AccountPermissionEntity[] = [];

  id = '';

  createAt = '';

  updateAt = '';

  accountId = '';

  accountAvatar = '';

  role?: any;

  constructor(user) {
    if (!user) return;
    Object.assign(this, user);
    this.accountPermissions = AccountPermissionEntity.createlistPermisison(user?.accountPermissions) || [];
    this.createAt = user?.createAt
      ? moment(user?.createAt).format('DD/MM/YYYY HH:mm:ss')
      : '';
    this.updateAt = user?.updateAt
      ? moment(user?.createAt).format('DD/MM/YYYY HH:mm:ss')
      : '';
  }

  static createArrayUser(arrUser: Array<any>): Array<UserEntity> {
    const list = arrUser.map((x) => new UserEntity(x));
    return list;
  }
}



export default UserEntity;
