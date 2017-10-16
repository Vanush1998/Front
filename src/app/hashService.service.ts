import {Md5} from 'ts-md5/dist/md5';

export class HashService {
  public hash(input: string) {
    return Md5.hashStr((input)).toString();
  }

  constructor() {

  }
}
