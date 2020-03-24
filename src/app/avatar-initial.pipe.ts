import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'avatarInitial'
})
export class AvatarInitialPipe implements PipeTransform {
    transform(value: string, length: number = 1): string {
        if (value.length == 0) {
            return value;
        }

        if (length <= 1) {
            return value[0];
        } else {
            var split = value.split(' ');

            let initialis = '';
            for (let i = 0; i < split.length; i++) {
                initialis += split[i][0];
            }

            return initialis;
        }
        return value;
    }
}
