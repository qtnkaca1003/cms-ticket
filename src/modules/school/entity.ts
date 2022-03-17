import moment from 'moment';

class SchoolEntity {
  //copy props from backend:
  createdAt = '';

  prefecture = '';

  city = '';

  schoolCode = '';

  schoolName = '';

  id = '';

  constructor(school:any) {
    if (!school) return ;
    Object.assign(this, school);
    // convert entity type here
    this.createdAt = school.createdAt ? moment(school.createdAt).format('DD/MM/YYYY') : '';
  }

  static createListSchool(listSchool:Array<any>){
    if (!Array.isArray(listSchool)) return [];
    return listSchool.map((school:SchoolEntity) => {
      return new SchoolEntity(school);
    });
  }
}
export default SchoolEntity;
