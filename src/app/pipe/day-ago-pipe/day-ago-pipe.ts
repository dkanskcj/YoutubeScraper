import { ChangeDetectorRef, NgZone, OnDestroy, Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
    private timer: number;

    private removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    private getSecondsUntilUpdate(seconds: number) {
        let min = 60;
        let hour = min * 60;
        let day = hour * 24;
        if (seconds < min) {
            return 2;
        }
        else if (seconds < hour) {
            return 30;
        }
        else if (seconds < day) {
            return 300;
        }
        else {
            return 3600;
        }
    }

    constructor(
        private changeDetectorRed: ChangeDetectorRef,
        private ngZone: NgZone
    ) { }


    transform(value: any) {
        this.removeTimer();
        let d = new Date(value);
        let now = new Date();
        let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let timeToUpdate = Number.isNaN(seconds) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRed.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });

        let minutes = Math.round(Math.abs(seconds / 60));
        let hours = Math.round(Math.abs(minutes / 60));
        let days = Math.round(Math.abs(hours / 24));
        let months = Math.round(Math.abs(days / 30.416));
        let years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        } else if (seconds <= 60) {
            return '방금 전';
        } else if (seconds <= 90) {
            return '1분 전';
        } else if (minutes <= 60) {
            return minutes + '분 전';
        } else if (minutes <= 90) {
            return '1시간 전';
        } else if (hours <= 24) {
            return hours + '시간 전';
        } else if (hours <= 36) {
            return '1일 전';
        } else if (days <= 25) {
            return days + '일 전';
        } else if (days <= 45) {
            return '한 달 전';
        } else if (days <= 345) {
            return months + '달 전';
        } else if (days <= 545) {
            return '1년 전';
        } else {
            // (days > 545)
            value = new Date(value).toLocaleString()
            console.log(value)
            return value;
        }
    }
    ngOnDestroy(): void {
        this.removeTimer();
    }


}