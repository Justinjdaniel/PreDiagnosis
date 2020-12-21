export class DoctorModel{
    constructor(
        public docName: string,
        public docDeg: string,
        public clinicName: string,
        public phone: number,
        public website: string,
        public starRating: number,
        public imageUrl: string
    ){}
}