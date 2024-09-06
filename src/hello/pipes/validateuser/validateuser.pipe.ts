import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value:', value);
    const ageNumber = parseInt(value.age);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    value = { ...value, age: ageNumber };
    return value;
  }
}
