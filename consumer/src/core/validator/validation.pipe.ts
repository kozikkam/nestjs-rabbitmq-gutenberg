import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { ValidateError } from './validate.error';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {

    public async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!value) {
            throw new BadRequestException('No data received');
        }

        if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
            return value;
        }

        const object: any = plainToClass(metadata.metatype, value);

        const errors: ValidationError[] = await validate(
            object,
            {
                skipMissingProperties: false,
                whitelist: false,
                forbidNonWhitelisted: true,
                groups: [],
                dismissDefaultMessages: false,
                validationError: {
                    target: true,
                    value: true
                },
                forbidUnknownValues: false,
            });
        if (errors.length > 0) {
            throw new ValidateError(this.buildStringError(errors));
        }
        return value;
    }

    private buildStringError(errors: ValidationError[]): string {
        let result: string = '';
        function buildNested(err: ValidationError): string {
            let resultNested: string = '';
            if (!err) {
                return resultNested;
            }
            if (err.children && err.children.length) {
                resultNested += err.children.map((errChild: ValidationError) => buildNested(errChild));
                return resultNested;
            }
            Object.entries(err.constraints).forEach((constraint: string[]) => {
                resultNested += `${err.property + ' ' + constraint[0]} ${constraint[1]}, `;
            });
            return resultNested;
        }
        errors.forEach((err: ValidationError) => {
            result += buildNested(err);
        });
        return result.substring(0, result.length - 2);
    }

    private toValidate(metatype: any): boolean {
        const types: any[] = [String, Boolean, Number, Array, Object];
        return !types.find((type: any) => metatype === type);
    }
}
