import { Observable } from 'rxjs';

export const getNumbers = new Observable(subscriber => {
    //we emit values:
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout( () => {
        subscriber.next(4);
        subscriber.complete();
    },1000);
});