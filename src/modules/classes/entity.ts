import SchoolEntity from '@modules/school/entity';
import moment from 'moment';

class ClassEntity {
  //copy props from backend:
  classCode = 0;

  className = '';

  numberOfChildren = 0;

  year = 0;

  dateOfMizuikuClass = '';

  students = '';

  schoolId = '';

  school?:SchoolEntity;

  //sử dụng data lồng ghép SchoolEntity bằng school
  id = '';

  createdAt = '';

  constructor(listoffield:any) {
    if (!listoffield) return ;
    Object.assign(this, listoffield);
    //khai báo school tại đây
    this.school = new SchoolEntity(listoffield.school);
    // convert entity type here
    this.createdAt = listoffield.createdAt ? moment(listoffield.createdAt).format('DD/MM/YYYY') : '';
    this.dateOfMizuikuClass = listoffield.dateOfMizuikuClass ? moment(listoffield.dateOfMizuikuClass).format('DD/MM/YYYY') : '';
  }

  static createListClass(listListoffield:Array<any>){
    if (!Array.isArray(listListoffield)) return [];
    return listListoffield.map((listoffield:ClassEntity) => {
      return new ClassEntity(listoffield);
    });
  }
}
export default ClassEntity;
